import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { INote } from '../../../shared/note.interface';
import materialComponents from '../../../shared/material-imports';

@Component({
  selector: 'app-dialog-view-note',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ...materialComponents
  ],
  templateUrl: './dialog-view-note.component.html',
  styleUrl: './dialog-view-note.component.scss'
})
export class DialogViewNoteComponent {
  readonly dialogRef = inject(MatDialogRef<DialogViewNoteComponent>);
  readonly data = inject<INote>(MAT_DIALOG_DATA);
}
