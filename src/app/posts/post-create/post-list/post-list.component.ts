import { PostsServices } from './Post.service';
import { Post } from './Post.Model';
import { Component, Input } from "@angular/core";

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
 @Input() posts : Post []=[];

 constructor(public PostsServices:PostsServices){}
}
