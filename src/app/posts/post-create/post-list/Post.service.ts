import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './Post.Model';

@Injectable({providedIn:'root'})
export class PostsServices{
  private posts: Post[] = [];
private postUpdated = new Subject<Post[]>();
  constructor(private http:HttpClient){}

  getPosts(){
this.http.get<{message:string,posts:Post[]}>('http://localhost:3000/api/posts').subscribe((postData)=>{
this.posts=postData.posts;
this.postUpdated.next([...this.posts]);
});
  }

  addPost(title:string , content: string){
     const post :Post={id: null,title:title,content:content}
     this.posts.push(post)
  }
  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }
}
