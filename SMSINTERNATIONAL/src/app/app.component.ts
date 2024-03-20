import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smsInternational';
  islogedin:boolean=false;
  constructor(private fb: FormBuilder) { }
 

  form = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]{3,20}$')]],
    pwd: ['', [Validators.required, Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})')]]

  })
  Submit() {
    console.log(this.form.value);
  }
}
