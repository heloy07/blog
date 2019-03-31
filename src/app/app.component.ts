import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
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
}
