import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  
  display = true;

  user={
    name:"housiin",
    age:30,
    img:"https://e7.pngegg.com/pngimages/801/141/png-clipart-naruto-illustration-naruto-standing-comics-and-fantasy-naruto.png"
  }
  myName = ''
  Change(){
    this.display = !this.display
  }

  cars =[
    "bmw",
    "toyota",
    "pyjo"
  ]
  student = [
    {
      name:"houssin",
      age:20
    },
    {
      name:"ahmed",
      age:25
    },
    {
      name:"hamdi",
      age:30
    },
  ]

  constructor(){}

  ngOnInit(): void {
   
  }

}
