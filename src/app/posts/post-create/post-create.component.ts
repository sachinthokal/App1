import { Post } from './post-list/Post.Model';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enterTitle = '';
  enterContent = '';

  @Output() postCreated = new EventEmitter();

  onAddPost(form : NgForm) {

    if(form.invalid){
      return;
    }
    const post : Post= {
      id: null,
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(post);
    form.resetForm();
  }
}
