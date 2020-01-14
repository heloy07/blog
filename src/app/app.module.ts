import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostService } from './services/post.service';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { PostViewComponent } from './post-view/post-view.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostViewComponent },
  { path: 'add', component: AddPostComponent },
  { path: '', component: PostViewComponent }
]; 

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddPostComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
