import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  post:any
  id:any
  constructor(private act: ActivatedRoute,private shared:SharedService,private router:Router){}

  update(){
   this.shared.updatePost(this.id,this.post).subscribe(data =>{
    console.log(data); 
    this.post = data
    this.router.navigate(["/list"])
  }, err =>{
    console.log(err);
  })
  }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get("id")
   console.log(this.id)

   this.shared.findOne(this.id).subscribe(data =>{
    console.log(data); 
    this.post = data
  }, err =>{
    console.log(err);
  })
  }

}
