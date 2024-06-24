import { Component, computed, effect, input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  isSelected = input(false);
  data = input({
    id: 0,
    userId: 0,
    body: '',
    title: '',
  });

  displayIndex = 0;
  private readonly properties = Object.keys(this.data());

  constructor() {
    effect(() => {
      if (!this.isSelected()) {
        this.displayIndex = 0;
      }
    });
  }

  postDataAsArray$: Signal<(string | number)[]> = computed(() => [
    this.data().title,
    this.data().userId,
    this.data().id,
    this.data().body,
  ]);

  updateDisplayIndex() {
    this.displayIndex = (this.displayIndex + 1) % this.properties.length;
  }
}
