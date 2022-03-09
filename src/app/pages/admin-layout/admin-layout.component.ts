import { Post } from './../../interfaces/post-list';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-service.service';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  postList:Post[]=[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostUser().subscribe(posts => {this.postList = posts.content});
  }


}
