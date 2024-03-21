// 'npm install crypto-js'  run this command in the ternminal to install crypto-js 
import * as CryptoJS from 'crypto-js';
import { ApiServiceService } from './Services/api-service.service';
import { ILogin, ILoginResponce } from './Interfaces/Ilogin';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiServiceService]
})
export class AppComponent {
  title = 'smsInternational';
  islogedin: boolean = false;
  issignedup: boolean = false;
  constructor(private fb: FormBuilder, private service: ApiServiceService, private comp: Router) { }
  signup = this.fb.group({
    uname: ['', Validators.required],
    email: ['', [Validators.required , Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    password: ['', [Validators.required,Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})')]]
  })
  form = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]{3,20}$')]],
    pwd: ['', [Validators.required, Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})')]]
  })
  gotosignup() {
    this.issignedup = true;
  }
  backtologin() {
    this.issignedup = false;
  }
  login() {
    const hashedPwd = CryptoJS.MD5(String(this.form.value.pwd)).toString();
    const formData = {
      uname: String(this.form.value.uname),
      pwd: hashedPwd
    };
    // console.log(formData);
    this.service.login(formData).subscribe({
      next: (idata: ILoginResponce) => {
        console.log(idata);
        if (idata.status === 200) {
          // console.log(idata.data.token);
          localStorage.setItem("token", `${idata.data.token}`);
          localStorage.setItem("user", `${idata.data.UNAME}`);
          localStorage.setItem('islogedin', 'true')
          this.islogedin = true;
          this.comp.navigate(['/comp']);
        }
      },
      error: (error) => {
        // console.log(error.error);
        if (error.error.status === 400) {
          alert(JSON.stringify(error.error.error));
        }
      }
    })
  }
}

