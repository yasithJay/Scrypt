import { Component } from '@angular/core';
// import { AddEditComponent } from '../add-edit/add-edit.component';
import { INote } from '../../shared/note.interface';
import { DatePipe, NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-home',
  imports: [NgFor, DatePipe, MatButtonModule, MatIconModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  noteList:INote[] = [
    {
      title: "Note 1",
      content: "example content",
      last_updated_date: new Date()
    },
    {
      title: "Note 1",
      content: "example content",
      last_updated_date: new Date()
    },
    {
      title: "Note 1",
      content: "example content",
      last_updated_date: new Date()
    }
  ]
}
