import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { PostListComponent } from './post-list.component';
import { PostsStore } from '../store/posts.store';
import { PostsService } from '../services';
import { Subject } from 'rxjs';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  // @ts-ignore
  let postsStore: PostsStore;
  const actions$ = new Subject();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PostListComponent, // Import standalone component
      ],
      providers: [
        provideMockStore({ initialState: {} }),
        provideMockActions(() => actions$),
        { provide: PostsService, useValue: { loadPosts: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    postsStore = TestBed.inject(PostsStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load posts on init', async () => {
    const loadPostsSpy = jest
      .spyOn(postsStore, 'loadPosts')
      .mockReturnValue(Promise.resolve());
    component.ngOnInit();
    expect(loadPostsSpy).toHaveBeenCalled();
  });

  it('should toggle grid mode', () => {
    component.isGridMode = false;
    component.toggleGridMode();
    expect(component.isGridMode).toBe(true);
    component.toggleGridMode();
    expect(component.isGridMode).toBe(false);
  });

  it('should update selected post ID', () => {
    const updateSelectedSpy = jest.spyOn(postsStore, 'updateSelectedPostID');
    component.updateSelected(1);
    expect(updateSelectedSpy).toHaveBeenCalledWith(1);
  });
});
