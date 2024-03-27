import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ILoginResponce } from '../Interfaces/Ilogin';
import { HttpClient } from '@angular/common/http';
import { IComposeResponse } from '../Interfaces/IComposeResponse';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiendpoint: string = 'http://192.168.29.40:3000/'

  constructor(private objhttp: HttpClient) { }

  postFunctionc<T,U>(url:string,data:U){
    return this.objhttp.post<T>(this.apiendpoint+url,data)
  }
  getFunction<T>(url:string){
    return this.objhttp.get<T>(this.apiendpoint+url)
  }
  
}
