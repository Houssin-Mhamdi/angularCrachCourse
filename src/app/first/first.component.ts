import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  
  user={
    name:"housiin",
    age:30,
    img:"https://e7.pngegg.com/pngimages/801/141/png-clipart-naruto-illustration-naruto-standing-comics-and-fantasy-naruto.png"
  }
  myName = ''
  Change(){
    this.user.name = this.myName
  }



  constructor(){}

  ngOnInit(): void {
   
  }

}
