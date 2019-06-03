import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-way',
  templateUrl: './second-way.component.html',
  styleUrls: ['./second-way.component.css']
})
export class SecondWayComponent implements OnInit {
  user :{
    name: '',
    email:'',
    phone :number ,
    webSite:'',
    subj:'',
    message:'',
  };

  constructor() { }
  ngOnInit() {
  }
  sendForm(){
    console.log(this.user);
  }
}
