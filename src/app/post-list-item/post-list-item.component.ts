import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() created_at;
  @Input() loveIts: number;

  constructor() {
    this.title ="";
    this.content="";
    this.created_at=Date.now();
    this.loveIts = 0;
   }

  ngOnInit(): void {
  }

}
