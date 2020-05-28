import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {map} from 'rxjs/operators';
import {IServerDropdownOption, ServerDropdownOption} from '../app/models/server-dropdown';
import {IMailTemplate} from '../app/models/mail-template';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MailTemplateService {

  result: { [key: string]: string; };

    static adapt(fields): IMailTemplate {
        return {
            DocId: fields.DocId ? fields.DocId : `${fields._type}::${fields._id}`,
            title: fields.title,
            goal: fields.goal,
            subject: fields.subject,
            message_body: fields.message_body,
            signature: fields.signature,
            tags: fields.tags,
            library: fields.library,
            last_modified: fields.last_modified,
            last_modified_by: fields.last_modified_by,
        }
    }

    constructor(public api: ApiService) { }

    getAll(params?: {rowCount?: string | number, offset?: string | number}): Observable<IMailTemplate[]> {
        return this.api.get({endpoint: `/template/list?rowCount=${params.rowCount}&offset=${params.offset}`}).pipe(
            map((res: any) => res.Data.map(fields => {
                return MailTemplateService.adapt(fields);
            })),
        );
    }

    tagList(): Observable<IServerDropdownOption[]> {
        return this.api.get({endpoint: '/cblookup/template_category', useAuthUrl: true}).pipe(
            map((res: any) => {
                return res.Data.map(option => {
                    return new ServerDropdownOption({
                        value: option.id,
                        name: option.text,
                        selected: option.selected,
                    })
                })
            }),
        );
    }

    libraryList(): Observable<IServerDropdownOption[]> {
        return this.api.get({endpoint: '/cblookup/template_library', useAuthUrl: true}).pipe(
            map((res: any) => {
                return res.Data.map(option => {
                    return new ServerDropdownOption({
                        value: option.id,
                        name: option.text,
                        selected: option.selected,
                    })
                })
            }),
        );
    }

    templateLookup(guid: string) {
      return this.api.get({endpoint: `/template/lookup/${guid}`}).pipe(
          map((res: any) => {
              console.log(res.Data);

              this.result = new Object() as { [key: string]: string; };

              for (const each of res.Data) {
                  console.log('Looping');
                  this.result[each.name] = each.id;
                  console.log(this.result);
             }
              return this.result;

          }));
    }

    create(formData: IMailTemplate) {
        return this.api.post({endpoint: '/template/new', body: formData});
    }

    fetch(DocId) {
      return this.api.get({endpoint: `/template/detail/${DocId}`}).pipe(
          map((res: any) => MailTemplateService.adapt(res.Data)),
      );
    }

    update(param: { DocId: string; formData: IMailTemplate }) {
        return this.api.post({endpoint: `/template/update/${param.DocId}`, body: param.formData});
    }

    delete(DocId: string) {
        return this.api.delete({endpoint: `/template/${DocId}`});
    }

}
