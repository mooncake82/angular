import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../data.service';


@Injectable()
export class InitDocsService extends DataService {

  constructor(http: Http) {
    super('http://172.18.205.181:8282/DocCRMH3G/searchDocs/init', http);
  }
}