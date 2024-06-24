import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { PostsStore } from '../store/posts.store';
import { PostsService } from '../services';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostComponent],
  providers: [PostsService],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  readonly store = inject(PostsStore);
  isGridMode = false;

  updateSelected(id: number) {
    this.store.updateSelectedPostID(id);
  }

  ngOnInit(): void {
    this.loadPosts().then(() => console.log('posts loaded!'));
  }

  async loadPosts(): Promise<void> {
    await this.store.loadPosts();
  }

  toggleGridMode(): void {
    this.isGridMode = !this.isGridMode;
  }
}
