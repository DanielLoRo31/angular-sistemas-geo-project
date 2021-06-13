import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }


  setSession(id: string) {
    window.localStorage.setItem('cashcoin-session', id);
  }

  getSession() {
    return window.localStorage.getItem('cashcoin-session');
  }

  removeSession() {
    window.localStorage.removeItem('cashcoin-session')
  }
}
