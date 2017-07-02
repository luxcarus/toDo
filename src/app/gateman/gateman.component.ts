import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {User} from './user';
import {GatemanService} from './gateman.service';


@Component({
  selector: 'app-root',
  templateUrl: './signin.html',
  styleUrls: ['./style.css'],
  providers: [GatemanService]
})
export class GatemanComponent {

  // newTodo: Todo = new Todo();
  // constructor(private gatemanService:GatemanService, private router:Router) {}
  // constructor(private router:Router) {}
  constructor(private gatemanService:GatemanService) {}

  signUp() {
  }
  signIn() {

    // this.gatemanService.signIn();
    // GatemanService
    console.log(GatemanService);
    console.log('into signIn');
    let result = true;
    if(result){
      // this.router.navigateByUrl(`/dashboard`);
    }
  }
  signOut() {

  }

}