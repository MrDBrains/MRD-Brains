import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ChatComponent }
];

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes) // Import the routes for lazy loading
  ]
})
export class ChatModule { }
