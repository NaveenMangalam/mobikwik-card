import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddCardService {

  constructor(private _http: HttpClient) { }

  getCardData(): Observable<any> {
    return this._http.get(`${environment.backEndUrl}/cards`);
  }

  removeCard(id: any): Observable<any> {
    return this._http.delete(`${environment.backEndUrl}/cards/${id}`);
  }

  createCard(payload: any): Observable<any> {
    return this._http.post(`${environment.backEndUrl}/cards`, payload);
  }

  cardType() {
    return this._http.get(`${environment.backEndUrl}/cardType`);
  }
}
