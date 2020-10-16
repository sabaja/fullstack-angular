import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  readonly USER_ID: string = "Jacopo";
  readonly PASSWORD: string = "1234";
  readonly USER_ID_KEY = "UserId";

  constructor() {
  }

  manageAuth(userId: string, password: string) {
    if (this.nonNull(userId) && this.nonNull(password) && this.USER_ID === userId && this.PASSWORD == password) {
      sessionStorage.setItem(this.USER_ID_KEY, userId);
      return true;
    }
    return false;
  }

  loggedUser() {
    let user = sessionStorage.getItem(this.USER_ID_KEY);
    return this.nonNull(user) ? user : "";
  }

  isLogged() {
    return this.nonNull(sessionStorage.getItem(this.USER_ID_KEY));
  }

  private nonNull(x) {
    return x != null && typeof x !== 'undefined';
  }

  private isNull(x) {
    return !this.nonNull(x);
  }

  clearAll() {
    sessionStorage.clear();
  }

  logOut() {
    let user = sessionStorage.getItem(this.USER_ID_KEY);
    if (this.nonNull(user)) {
      sessionStorage.removeItem(user);
    }
  }
}
