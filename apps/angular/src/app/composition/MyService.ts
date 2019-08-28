import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MyService {
  constructor(private _httpClient: HttpClient) { }

  getMyData() {
    //this._httpClient.get('myUrl');
    return of([]);
  }
}
