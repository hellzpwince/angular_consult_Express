import { Component } from '@angular/core';
import {Router,} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  public languages = ['Angular', 'Javascript', 'PHP', 'NodeJS'];
  constructor(private router: Router) {}
  onClick(language){
    this.router.navigate(['/language', language]);
  }
}
