import { Component, OnInit, signal } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { Location, NgIf } from '@angular/common';
import materialComponents from '../shared/material-imports';

@Component({
  selector: 'app-root',
  imports: [
    MatSlideToggleModule,
    ReactiveFormsModule,
    ...materialComponents,
    RouterOutlet,
    NgIf
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  darkMode = signal(false)
  checked= false;
  currentRoute!: string
  isHomeView = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.currentRoute = route.snapshot.toString()
  }

  ngOnInit() {

    //url change listener
    this.location.onUrlChange((url) => {
      this.isHomeView = url === '/home'
    })
  }

  form: FormGroup = new FormGroup({
    toggle: new FormControl(false)
  })


  toggleMode() { // toggle dark light mode
    if(this.form.get('toggle')?.value) {
      document.body.classList.toggle('darkMode', true)
    } else {
      document.body.classList.toggle('darkMode', false)
    }
  }

  onAddNote() { // add Note
    this.router.navigate(['/add']);
    this.isHomeView = false;
  }

  onNavigateBack() { // navigate back to home
    this.location.back();
    this.isHomeView = true;
  }
}
