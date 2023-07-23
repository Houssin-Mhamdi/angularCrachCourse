import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http:HttpClient) { }
  private url = "http://localhost:3008/api/"
  
  getAllPosts() {
  return  this.http.get(this.url + "posts/all")
  }
  createPost(post:any) {
   return this.http.post(this.url + "posts/create",post)
  }

  deletePost(id:number) {
    return this.http.delete(this.url + "posts/" + id)
  }
  findOne(id:number) {
    return this.http.get(this.url + "posts/" + id)
  }
  updatePost(id:number,post:any){
    return this.http.patch(this.url + "posts/" + id , post)
  }
}
