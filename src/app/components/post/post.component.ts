import { Post } from './../../interfaces/post-list';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postInput !: Post;

  postList !: Post[];

  constructor(private postService : PostService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }


}
