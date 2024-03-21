import * as CryptoJS from 'crypto-js';
import { ApiServiceService } from './Services/api-service.service';
import { ILogin, ILoginResponce } from './Interfaces/Ilogin';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, CommonModule, FormsModule,HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiServiceService]
})
export class AppComponent {
  title = 'smsInternational';
  islogedin:boolean=false;

  constructor(private fb: FormBuilder, private service:ApiServiceService) { }
  signup = this.fb.group({
    UID: ['', Validators.required],
    UNAME: ['', Validators.required],
  })
  form = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]{3,20}$')]],
    pwd: ['', [Validators.required, Validators.pattern('^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})')]]

  })
  // Submit() {
  //   console.log(this.form.value);
  // }
  
  login() {
    // Encrypt (hash) the password

    // Hash the password
    const hashedPwd = CryptoJS.MD5(String(this.form.value.pwd)).toString();
    // You might want to create a new object if you need the username unaltered
    const formData = {
      uname: String(this.form.value.uname),
      pwd: hashedPwd
    };
    console.log(formData);

    this.service.login(formData).subscribe({
      next: (data: ILoginResponce) =>{
        console.log(data);
        if(data.status == 200){
          console.log(data.data.token);
          
          localStorage.setItem("token", `${data.data.token}`);
  
        }
      },
      error: (error)=>{
        console.log(error.error);
        if(error.error.status === 400){
          alert(JSON.stringify(error.error.error));
        }
        
      }
     
    // Use formData for further processing, like sending it to your server
    })
  }

}
