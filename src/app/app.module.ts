import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfragisticsModule } from './modules/infragistics/infragistics.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FroalaEditorComponent } from './froala-editor/froala-editor.component';
import { DropdownSelectComponent } from './shared/dropdown-select/dropdown-select.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';

@NgModule({
  declarations: [
    AppComponent,
    FroalaEditorComponent,
    DropdownSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InfragisticsModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
