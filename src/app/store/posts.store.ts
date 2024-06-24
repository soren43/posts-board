import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { Post } from '../post/post.component.model';
import { PostsService } from '../services';

type PostsState = {
  posts: Post[];
  selectedPostID: number;
  isLoading: boolean;
};

const initialState: PostsState = {
  posts: [],
  selectedPostID: -1,
  isLoading: false,
};

export const PostsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, postsService = inject(PostsService)) => ({
    async loadPosts() {
      patchState(store, { isLoading: true });
      postsService.getPosts().subscribe((posts) => {
        patchState(store, { posts: posts, isLoading: false });
      });
    },
    updateSelectedPostID(id: number): void {
      patchState(store, { selectedPostID: id });
    },
  }))
);
