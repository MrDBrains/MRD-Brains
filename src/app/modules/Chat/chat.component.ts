import { Component, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChatbotService } from 'src/app/Core/services/chatbot.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {
  sessions: { id: number; name: string; summaryFetched: boolean; messages: { sender: string; text: string | SafeHtml; time: string }[] }[] = [];
  currentSessionId = 0; // ID of the current chat session
  userInput = '';
  isTyping = false;

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef; // Non-null assertion

  constructor(private chatbotService: ChatbotService, private sanitizer: DomSanitizer) {
    this.createNewSession(); // Start with a default session
  }

  createNewSession() {
    const newSessionId = this.sessions.length;
    this.sessions.push({
      id: newSessionId,
      name: 'New Chat',
      summaryFetched: false,
      messages: [{ sender: 'Ally', text: 'Welcome to the chat!', time: this.getCurrentTime() }]
    });
    if (this.sessions.length > 6) {
      this.sessions.shift();
    }
    this.sessions.forEach((session, index) => {
      session.id = index;
    });

    this.currentSessionId = this.sessions.length - 1;
  }

  switchSession(sessionId: number) {
    if (sessionId >= 0 && sessionId < this.sessions.length) {
      this.currentSessionId = sessionId;
    }
  }

  get currentMessages() {
    return this.sessions[this.currentSessionId]?.messages || [];
  }

  sendMessage() {
    if (this.userInput.trim()) {
      const messageTime = this.getCurrentTime();
      this.currentMessages.push({ sender: 'user', text: this.userInput, time: messageTime });

      this.isTyping = true;

      // First call to get the bot's response
      this.chatbotService.getResponse(this.userInput).subscribe({
        next: (response) => {
          this.isTyping = false;
          console.log(response);

          let botReply = response.candidates[0].content.parts[0].text || 'Sorry, I did not understand that.';
          botReply = this.filterResponse(botReply);
          const { rawHtml } = this.processHtml(botReply);
          const safeRawHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
          this.currentMessages.push({ sender: 'Ally', text: safeRawHtml, time: messageTime });

          // Now call getResponse again to get the summary
          if (!this.sessions[this.currentSessionId].summaryFetched) {
            this.getSummaryForSessionName(botReply);
            this.sessions[this.currentSessionId].summaryFetched = true; // Set flag to true
          }
        },
        error: (error) => {
          this.isTyping = false;
          console.error('Error fetching AI response:', error);
          this.currentMessages.push({ sender: 'Ally', text: 'Sorry, I could not process your request.', time: messageTime });
        }
      });

      this.userInput = '';
    }
  }

  filterResponse(response: string): string {
    // Replace specific phrases in the response
    return response
      .replace(/by Google/g, 'by MrD Brains')
      .replace(/at Google/g, 'at MrD Brains')
      .replace(/product of Google's/g, 'product of MrD Brains')
      .replace(/Bard/g, 'Ally'); // Change 'Bard' to 'Ally'
  }
  

  getSummaryForSessionName(botReply: string) {
    const summaryInput = `${botReply} get summary in 3 words`;

    this.isTyping = false;
    this.chatbotService.getResponse(summaryInput).subscribe({
      next: (summaryResponse) => {
        console.log('summaryResponse', summaryResponse);

        this.isTyping = false;
        const summary = summaryResponse.candidates[0].content.parts[0].text || 'Default Name';

        // Set the session name with the summary
        this.sessions[this.currentSessionId].name = summary;
      },
      error: (error) => {
        this.isTyping = false;
        console.error('Error fetching summary:', error);
      }
    });
  }

  processHtml(text: string): { rawHtml: string; renderedHtml: string } {
    const codeMatch = text.match(/```html\n([\s\S]+?)```/);
    let rawHtml = '';
    let renderedHtml = '';

    if (codeMatch) {
      const rawCode = codeMatch[1];
      rawHtml = this.escapeHtml(rawCode).replace(/\n/g, '<br>');
      renderedHtml = rawCode;

      text = text.replace(/```html\n([\s\S]+?)```/, `<code>${rawHtml}</code>`);
    }

    text = text.replace(/\n/g, '<br>'); // Replace newlines with <br> for rendering
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>'); // Bold-italic
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italic

    return { rawHtml: text, renderedHtml };
  }

  escapeHtml(unsafe: string): string {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  ngAfterViewChecked() {
    if (this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    }
  }

  deleteSession(index: number) {
    this.sessions.splice(index, 1); // Remove the session at the specified index

    // Adjust session IDs after deletion
    this.sessions.forEach((session, newIndex) => {
      session.id = newIndex;
    });

    // If the deleted session was the current one, switch to the last session or the previous one
    if (this.currentSessionId === index) {
      this.currentSessionId = Math.max(0, index - 1); // Switch to the previous session or first session
    }
  }
}
