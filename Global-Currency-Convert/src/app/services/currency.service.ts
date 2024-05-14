import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // Example API endpoint

  constructor(private http: HttpClient) {}

  getRates(): Observable<any> {
    let result = this.http.get(this.apiUrl);
    console.log('####### get Rates', result);

    return result;
  }
}
