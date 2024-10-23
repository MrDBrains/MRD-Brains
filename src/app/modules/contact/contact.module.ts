import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes) 
  ]
})
export class ContactModule { }
