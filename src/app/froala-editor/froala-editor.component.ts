import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToolbarButtons, insertHtmlField } from '../models/froala';
import FroalaEditor from 'froala-editor';
import { IMailTemplate } from '../models/mail-template';
import { Observable, BehaviorSubject } from 'rxjs';
import { IServerDropdownOption } from '../models/server-dropdown';
import { MailTemplateService } from '../../services/mail-template.service';
import { DropdownGuids } from '../models/dropdown-guid.enum';

@Component({
  selector: 'app-froala-editor',
  templateUrl: './froala-editor.component.html',
  styleUrls: [ './froala-editor.component.css' ]
})

export class FroalaEditorComponent implements OnInit {
  @Input() formData: IMailTemplate;
  @Input() submitText = 'Save';
  @Input() heading = 'New Template';
  @Input() operation: 'create' | 'update' = 'create';

  form: FormGroup;
  menuOption: Object;
  submitted = false;
  showMessages: any = {};
  errors: string[] = [];
  messages: string[] = [];
  guids = DropdownGuids;
  editorInstance: any;
  // tslint:disable-next-line: ban-types
  froalaOptions: Object;
  // tslint:disable-next-line: member-ordering
  result: { [key: string]: string; };



  contactFields$: Observable<{ [key: string]: string; }>;
  constructor(
    private fb: FormBuilder,
    private mailTemplateService: MailTemplateService,


) {

}
addField(value: string) {
  console.log('insert Field');

}
    initForm() {
    this.form = new FormGroup({
      title: new FormControl(),
      goal: new FormControl('My Goal'),
      subject: new FormControl(''),
      message_body: new FormControl('This is a test'),
      signature: new FormControl(true)   });
    }
  ngOnInit() {
    this.contactFields$ = this.mailTemplateService.templateLookup(this.guids.MAIL_TEMPLATE_CONTACT_FIELDS);
    this.contactFields$.subscribe(res => this.result = res);
    // this.transformArr();
    this.initForm();
    // Custom button
    FroalaEditor.DefineIcon('my_dropdown', {NAME: 'cog', SVG_KEY: 'cogs'});
    FroalaEditor.RegisterCommand('my_dropdown', {
    title: 'User Fields',
    type: 'dropdown',
    focus: false,
    undo: false,
    refreshAfterCallback: true,
    options: this.result
    ,

    callback(cmd, val) {
        console.log (val);
        this.selection.restore();
        this.html.insert(`${val}`);
    },
    // Callback on refresh.
    refresh($btn) {
        console.log ('do refresh');
    },
    // Callback on dropdown show.
    refreshOnShow($btn, $dropdown) {
        console.log (this.result);

    }
    });
    this.setFroalaOptions(this);

  }
  private setFroalaOptions(componentInstance) {
  this.froalaOptions = {

      // key: environment.froala.license.version3,
      iconsTemplate: 'font_awesome_5',
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
          focus(e, editor) {
              // componentInstance.editorInstance = editor;
          },
          blur() {
              // save selection so we can restore just before inserting any element
              this.selection.save();
          },
          initialized() {
             console.log('init Editor')
             console.log(this);
             componentInstance.editorInstance = this;
             console.log(this.editorInstance);
          },
          // ...this.froalaUploadService.initImageManagerEvents(),
          // ...this.froalaUploadService.initUploadEvents(),
      },
      toolbarButtons: ToolbarButtons,
  };
  }

  showResult() {
    console.log('We are logging')
  }




}
