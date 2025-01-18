import { Component, inject, OnInit } from '@angular/core';
import { INote } from '../../shared/note.interface';
import { DatePipe } from '@angular/common';
import materialComponents from '../../shared/material-imports';
import { MatDialog } from '@angular/material/dialog';
import { DialogViewNoteComponent } from '../popup/dialog-view-note/dialog-view-note.component';
import notes from '../../shared/notes';
import { DialogEditNoteComponent } from '../popup/dialog-edit-note/dialog-edit-note.component';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {DragDropModule} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-home',
  imports: [
    DatePipe,
   ...materialComponents,
   DragDropModule
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  constructor (
  ) {}

  noteList:INote[] = [
    ...notes
  ]

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.noteList, event.previousIndex, event.currentIndex);
  }

  onViewNote(index: number) {
    this.dialog.open(DialogViewNoteComponent, {
      data: this.noteList[index], width: '50vw'
    })

  }

  onEditNote(index: number) {
    const editDialog = this.dialog.open(DialogEditNoteComponent, {
      data: this.noteList[index], width: '80vw'
    })


    editDialog.afterClosed().subscribe(data => {
      console.log(data)
    })

  }

  deleteNote(id: number) {}

}
