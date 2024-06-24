import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default data', () => {
    expect(component.data().id).toBe(0);
    expect(component.data().userId).toBe(0);
    expect(component.data().body).toBe('');
    expect(component.data().title).toBe('');
  });

  it('should initialize isSelected to false', () => {
    expect(component.isSelected()).toBeFalsy();
  });

  it('should reset displayIndex to 0 when isSelected is false', () => {
    fixture.componentRef.setInput('isSelected', true);
    component.displayIndex = 1;
    fixture.componentRef.setInput('isSelected', false);
    fixture.detectChanges();
    expect(component.displayIndex).toBe(0);
  });

  it('should update displayIndex on click', () => {
    fixture.componentRef.setInput('data', {
      id: 1,
      userId: 2,
      body: 'Test Body',
      title: 'Test Title',
    });
    fixture.detectChanges();

    const postElement = debugElement.query(By.css('.post-wrapper'));
    postElement.triggerEventHandler('click', null);

    expect(component.displayIndex).toBe(1);
    postElement.triggerEventHandler('click', null);
    expect(component.displayIndex).toBe(2);
    postElement.triggerEventHandler('click', null);
    expect(component.displayIndex).toBe(3);
    postElement.triggerEventHandler('click', null);
    expect(component.displayIndex).toBe(0);
  });

  it('should convert post data to array correctly', () => {
    fixture.componentRef.setInput('data', {
      id: 1,
      userId: 2,
      body: 'Test Body',
      title: 'Test Title',
    });
    fixture.detectChanges();

    const postDataArray = component.postDataAsArray$();
    expect(postDataArray).toEqual(['Test Title', 2, 1, 'Test Body']);
  });

  it('should apply is-selected class when isSelected is true', () => {
    fixture.componentRef.setInput('isSelected', true);
    fixture.detectChanges();

    const postElement = debugElement.query(By.css('.post-wrapper'));
    expect(postElement.classes['is-selected']).toBe(true);
  });

  it('should not apply is-selected class when isSelected is false', () => {
    fixture.componentRef.setInput('isSelected', false);
    fixture.detectChanges();

    const postElement = debugElement.query(By.css('.post-wrapper'));
    expect(postElement.classes['is-selected']).toBeFalsy();
  });
});
