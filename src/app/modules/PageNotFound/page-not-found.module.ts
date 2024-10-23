// page-not-found.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './PageNotFound.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [PageNotFoundComponent] // Ensure it's exported
})
export class PageNotFoundModule { }
