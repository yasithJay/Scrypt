import { Component } from '@angular/core';
import materialComponents from '../../shared/material-imports';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  imports: [
    FormsModule,
     ReactiveFormsModule,
    ...materialComponents
  ],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent {

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
  })


  onSave() {

  }
}
