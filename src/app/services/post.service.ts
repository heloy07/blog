import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PostService {
 
    constructor(
    ) { }
    posts = [
        {
          name: 'Mon premier post',
          content: 'contenu de mon premier post'
        },
        {
          name: 'Mon deuxième post',
          content: 'contenu de mon deuxième post'
        },
        {
          name: 'Mon troisième post',
          content: 'contenu de mon troisième post'
        },
        {
          name: 'Mon dernier post',
          content: 'contenu de mon dernier post'
        }
       ];
       postsSubject = new Subject<any[]>();
       
       emitPostSubject(){
        this.postsSubject.next(this.posts.slice());
      }
      getPost(){
        return this.posts;

      }
     addPost(title:string,content:string){
        let newPost={
          name:'',
          content:''
        };
        newPost.name = title;
        newPost.content = content;
        this.posts.push(newPost);
        this.emitPostSubject();
      }
      deletePost(id:number) {
        this.posts.splice(id,1);
        this.emitPostSubject();
        
      }

}


