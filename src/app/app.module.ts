import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuillEditorModule } from 'ngx-quill-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuillEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
