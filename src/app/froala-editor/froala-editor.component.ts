import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IMailTemplate } from '../models/mail-template';
import { FroalaEditor } from 'froala-editor';
import { ToolbarButtons } from '../models/froala';

@Component({
  selector: 'app-froala-editor',
  templateUrl: './froala-editor.component.html',
  styleUrls: ['./froala-editor.component.css']
})
export class FroalaEditorComponent implements OnInit {

  @Input() formData: IMailTemplate;
  @Input() submitText = 'Save';
  @Input() heading = 'New Template';
  @Input() operation: 'create' | 'update' = 'create';

  form: FormGroup;
  submitted = false;
  showMessages: any = {};
  errors: string[] = [];
  messages: string[] = [];
  editorInstance: any;
  // tslint:disable-next-line: ban-types
  froalaOptions: Object;
  constructor(
    private fb: FormBuilder,
    // private mailTemplateService: MailTemplateService,
    // private froalaUploadService: FroalaUploadService,
    // private router: Router,
    // private toasterService: ToasterService,
) {}

  ngOnInit() {
    this.initForm();
    this.createCustomBttm();
    this.setFroalaOptions(this);

  }

  initForm() {
    this.form = new FormGroup({
      title: new FormControl(),
      goal: new FormControl(''),
      subject: new FormControl(''),
      message_body: new FormControl('This is a test'),
      signature: new FormControl(true)   });
    }



  private setFroalaOptions(componentInstance) {
  this.froalaOptions = {
      // key: environment.froala.license.version3,
      charCounter: true,
      charCounterCount: true,
      toolbarSticky: false,
      attribution: false,
      imageOutputSize: true,
      // zIndex: 2501,
      // zIndex: 10,
      height: 300,
      // ...this.froalaUploadService.initUploadOptions(),
      // ...this.froalaUploadService.initImageManagerOptions(),
      events : {
          focus : function(e, editor) {
              // componentInstance.editorInstance = editor;
          },
          blur : function() {
              // save selection so we can restore just before inserting any element
              this.selection.save();
          },
          initialized : function() {
             console.log(this);
             componentInstance.editorInstance = this;
          },
          // ...this.froalaUploadService.initImageManagerEvents(),
          // ...this.froalaUploadService.initUploadEvents(),
      },
toolbarButtons: ToolbarButtons,
  };
}

createCustomBttm() {
  FroalaEditor.DefineIcon('my_dropdown', {NAME: 'cog', SVG_KEY: 'cogs'});
  FroalaEditor.RegisterCommand('my_dropdown', {
  title: 'Advanced options',
  type: 'dropdown',
  focus: false,
  undo: false,
  refreshAfterCallback: true,
  options: {
      '{{ Hello: Test| "" }}': 'Option 1',
      v2: 'Option 2'
  },
  callback (cmd, val) {
      console.log (val);
  },
  // Callback on refresh.
  refresh ($btn) {
      console.log ('do refresh');
  },
  // Callback on dropdown show.
  refreshOnShow ($btn, $dropdown) {
      console.log ('do refresh when show');
  }
  });
}

}
