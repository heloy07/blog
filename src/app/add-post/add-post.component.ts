import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private postsService:PostService,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    const name = form.value['title'];
    const status = form.value['content'];
    this.postsService.addPost(name,status);
    this.router.navigate(['/posts']);


  }

}
