import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Botnets} from '../../components/botnets-panel/botnets-panel.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BotnetFirestoreService {

  collectBotnets: AngularFirestoreCollection<Botnets>;
  NAME_COLLECTION = 'botnets';
  constructor(private afs: AngularFirestore) {
    this.collectBotnets = afs.collection(this.NAME_COLLECTION);
  }

  list(): Observable<Botnets[]> {
    return this.collectBotnets.valueChanges({idField: 'id'});
  }
}
