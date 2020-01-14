import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title :string;
  @Input() content :string;
  @Input() loveIts: number=0;
  @Input() id:number;
  @Input() created_at: Date = new Date();

  constructor(private postsService: PostService) { }


  
  ngOnInit() {
  
    
  }
  getColor(){
    if(this.loveIts>0){
      return 'green';
    }else if(this.loveIts<0){
      return 'red';
    }
  }
  getDate(){
    return this.created_at;
  }
  onLove(love:number){
    this.loveIts+=love;

  }
  deletePost(id:number){
    //console.log("this is the id: "+id);
    this.postsService.deletePost(id);

  }

}
