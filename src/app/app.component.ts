import { Component } from '@angular/core';
import {initializeApp, database} from 'firebase';
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Works with GitHub!';

  courses$: FirebaseListObservable<any>;
  lessons$: FirebaseObjectObservable<any>;
  firstCourse: any;

  constructor(private af: AngularFire){
    this.courses$ = af.database.list('courses');

    this.courses$.subscribe(console.log);
    
    this.lessons$ = af.database.object('lessons/-KZSccjnA0Sbd2o-Gz-5');
    this.lessons$.subscribe(console.log);

    this.courses$.map(courses => courses[0]).subscribe(course => this.firstCourse = course);

  
    
  }

  listPush(){
    this.courses$.push({description: 'TEST NEW COURSE'})
      .then(
        () => console.log('List Push Done'),
        console.error
      );
  }

  listRemove(){
    this.courses$.remove(this.firstCourse);
  }

  listUpdate(){
    this.courses$.update(this.firstCourse, {description: 'Angular 2 HTTP Modified!'})
  }
  objUpdate(){

    this.lessons$.update({description: 'NEW DESCRIPTION'});
  }

  objSet(){
    this.lessons$.set({description: 'NEW DESCRIPTION SET'});
  }

  objRemove(){
    this.lessons$.remove();
  }
    
}
