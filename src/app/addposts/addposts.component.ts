import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent {
  post = {
    name:"",
    power:0,
    img:""
   }
  
   addPost(){
    this.shared.createPost(this.post).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    )
    this.post = {
      name:"",
      power:0,
      img:""
     }
     
   }
  
    constructor( private shared:SharedService){}
  
}
