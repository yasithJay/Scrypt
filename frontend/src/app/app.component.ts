import { Component, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, MatSlideToggleModule, MatIconModule, ReactiveFormsModule, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  darkMode = signal(false)
  checked= false;

  form: FormGroup = new FormGroup({
    toggle: new FormControl(false)
  })

  toggleMode() {
    if(this.form.get('toggle')?.value) {
      document.body.classList.toggle('darkMode', true)
    } else {
      document.body.classList.toggle('darkMode', false)

    }
  }
}
