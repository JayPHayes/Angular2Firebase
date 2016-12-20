import { Component } from '@angular/core';
import {initializeApp, database} from 'firebase';
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Works!';

  constructor(private af: AngularFire){

    const courses$ : FirebaseListObservable<any> = af.database.list('courses');
    const course$ = af.database.object('courses/-KZSccjicfsL8RyBkzsq');

    course$.subscribe(console.log)

    // courses$.subscribe(console.log);
    // courses$.subscribe(
    //   val => console.log(val)
    // );

    
  }

}
