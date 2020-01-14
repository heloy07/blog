import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private postsService:PostService) { }
  posts: any[];
  postSubscription: Subscription;

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts= posts;
      }
    );
    
    this.postsService.emitPostSubject();
  }

}
