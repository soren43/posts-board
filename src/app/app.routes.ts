import { Route } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/posts-list',
        pathMatch: 'full',
      },
      {
        path: 'posts-list',
        component: PostListComponent,
      },
    ],
  },
];
