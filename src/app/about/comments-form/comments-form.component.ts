import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import {CommentService} from '../comment.service';
import {Comment} from '../comment';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss']
})

export class CommentsFormComponent implements OnInit {
  
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  commentForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),]),
    mail: new FormControl('',[
      Validators.email,
      Validators.required,
    ]),
    description: new FormControl('',[
      Validators.minLength(3),
      Validators.maxLength(150),
      Validators.required,
    ]),
  });
  data: Comment;
  

  onSubmit () {
    this.data={
      name:this.commentForm.value.name,
      mail:this.commentForm.value.mail,
      description:this.commentForm.value.description,
    }

    this.commentService.setData (this.data);
    this.commentService.setTrue();
  }
  onSubmit2() {
    // TODO: Use EventEmitter with form value
    console.warn(this.commentForm.value);
    console.log(this.commentForm.value.description);
  }

  
}
