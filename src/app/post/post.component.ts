import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title :string;
  @Input() content :string;
  @Input() loveIts: number=0;
  @Input() created_at: Date = new Date();

  constructor() { }

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
    console.log('hey there');

  }

}
