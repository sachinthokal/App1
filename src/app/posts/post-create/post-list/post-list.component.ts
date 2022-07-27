import { PostsServices } from './Post.service';
import { Post } from './Post.Model';
import { Component} from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  // posts=[
  //   {title : "First title", content : "First content"},
  //   {title : "Second title", content : "Second content"},
  //   {title : "Third title", content : "Third content"},
  // ];
 posts : Post []=[];
 private postsSub : Subscription;
 constructor(public PostsServices:PostsServices){}

 ngOnInit(){
 this.PostsServices.getPosts();
  this.postsSub =this.PostsServices.getPostUpdateListener()
  .subscribe((posts: Post[]) =>{
    this.posts=posts;

  });
 }

 ngOnDestroy(){
  this.postsSub.unsubscribe();
 }

}
