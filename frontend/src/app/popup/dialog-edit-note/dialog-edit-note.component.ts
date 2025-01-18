import { Component, inject, OnInit } from '@angular/core';
import materialComponents from '../../../shared/material-imports';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { INote } from '../../../shared/note.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-edit-note',
  imports: [
    ...materialComponents,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './dialog-edit-note.component.html',
  styleUrl: './dialog-edit-note.component.scss'
})
export class DialogEditNoteComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<DialogEditNoteComponent>);
  readonly data = inject<INote>(MAT_DIALOG_DATA);

  noteForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
      this.noteForm.patchValue(this.data);
      this.noteForm.updateValueAndValidity();
  }
  onSave() {}

  onCancelClick() {}
}
