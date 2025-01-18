import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewNoteComponent } from './dialog-view-note.component';

describe('DialogViewNoteComponent', () => {
  let component: DialogViewNoteComponent;
  let fixture: ComponentFixture<DialogViewNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogViewNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
