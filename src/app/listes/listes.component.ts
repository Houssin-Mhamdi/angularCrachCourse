import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {



constructor( public shared:SharedService){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
   
  
  
}
