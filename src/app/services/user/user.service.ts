import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetSessionAction } from 'src/app/models/menu/menu.redux';
import { IUser } from 'src/app/models/user/user.interface';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersCollection: AngularFirestoreCollection;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private sessionService: SessionService,
    private store: Store
  ) {
    this.usersCollection = angularFirestore.collection<IUser>('users');
  }

  /**
   *
   * @param {string} email
   * @param {string} password
   * @returns {Promise<any>}
   */
  async login(email: string, password: string): Promise<any> {
    try {
      let auth = await this.angularFireAuth.signInWithEmailAndPassword(
        email,
        password
      );
      // let fire = await this.usersCollection.where().get()
      let fire = await this.angularFirestore.collection<IUser>('users', ref => ref.where('email','==', email)).get();
      let data = await fire.toPromise()
      // console.log(data.docs[0].id, data.docs[0].data());
      
      await this.store.dispatch(new SetSessionAction(true)).toPromise();
      this.sessionService.setSession(data.docs[0].id);
      return true;
    } catch (error) {
      return false
    }
  }

  getUser (id: string): Observable<any> {
      return this.usersCollection.doc(id).get()
  }

  /**
   *
   * @param {IUser} user
   * @returns {Promise<any>}
   */
  async register(user: IUser): Promise<any> {
    try {
      await this.angularFireAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      let data = await this.usersCollection.add(user);
      await this.store.dispatch(new SetSessionAction(true)).toPromise();
      this.sessionService.setSession(data.id);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
