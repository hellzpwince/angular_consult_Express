import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {ConsultFormModel} from './consult-form-model/consult-form-model.component';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsultServiceService {
      _url = 'http://localhost:3000/enroll';
  constructor(private _http: HttpClient) {}

  consult(user: ConsultFormModel) {
    return this._http.post<any>(this._url,user) .pipe(catchError(this.errorHandler));;
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
