import { Post } from './posts/post-create/post-list/Post.Model';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  storePost : Post[] = [];

  onPostAdded(post) {
    this.storePost.push(post);
  }
}
