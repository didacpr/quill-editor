import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quill-editor';

  public editorOptions: any = {
	modules: {
	  toolbar: {
		container: [
		  ['undo', 'redo'],									// Undo and Redo options.
		  ['bold', 'italic', 'underline', 'strike'],        	// toggled buttons
		  ['blockquote', 'code-block'],

		  [{ 'header': 1 }, { 'header': 2 }],               	// custom button values
		  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
		  [{ 'script': 'sub'}, { 'script': 'super' }],      	// superscript/subscript
		  [{ 'indent': '-1'}, { 'indent': '+1' }],          	// outdent/indent
		  [{ 'direction': 'rtl' }],                         	// text direction

		  [{ 'size': ['small', false, 'large', 'huge'] }],  	// custom dropdown
		  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

		  [{ 'color': [] }, { 'background': [] }],          	// dropdown with defaults from theme
		  [{ 'font': [] }],
		  [{ 'align': [] }],

		  ['clean']                                         	// remove formatting button
		]/*,
		handlers: {
		  "undo": function (value) {
			console.log("UNDO 1: ", value);
			if (value) {
			  this.editorPrompt_1.history.undo();
			}
		  },
		  "redo": function (value) {
		    console.log("REDO 1: ", value);
			if (value) {
			  this.editorPrompt_1.history.redo();
			}
		  }
		}*/
	  }/*,
	  history: {
		delay: 2000,
		maxStack: 500,
		userOnly: true
	  }*/
	}
  };

  onContentChanged({ quill, html, text }, type: string) {
	console.log("TYPE: ", type);
	console.log('quill content is changed!', quill, html, text);
  }
}