import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, PostListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'posts-board';
}
