import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {


  posts:any

constructor( private shared:SharedService){}
updateItem(){

}

deletItem(id:number){
return this.shared.deletePost(id).subscribe(data =>{
  console.log(data); 
  this.ngOnInit()
}, err =>{
  console.log(err);
})
}

ngOnInit(): void {
  this.shared.getAllPosts().subscribe(
    data => {
      console.log(data);
      this.posts = data
    },
    error => {
      console.error('Error fetching posts:', error);
    }
  );
}

   
  
  
}
