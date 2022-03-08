import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/app/interfaces/post-list';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() postInput !: Post;
  token: string = "";

  constructor(private postService : PostService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')!;
  }


}
