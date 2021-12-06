import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<any> {
    return this.http.get(`${environment.SERVER_URL}/stats/accounts`);
  }

  getAccountsTransaction(id: string): Observable<any> {
    return this.http.get(`${environment.SERVER_URL}/stats/txns/account/${id}`);
  }

  getTransaction(): Observable<any> {
    return this.http.get(`${environment.SERVER_URL}/stats/txns`);
  }
}
