import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ILoginResponce } from '../Interfaces/Ilogin';
import { HttpClient } from '@angular/common/http';
import { IComposeResponse } from '../Interfaces/IComposeResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  BaseURL: string = 'http://192.168.29.40:3000/'

  constructor(private objhttp: HttpClient) { }

  login(LoginDetails: ILogin): Observable<ILoginResponce> {
    return this.objhttp.post<ILoginResponce>(`${this.BaseURL}login`, LoginDetails)
  }
  get_compose_details():Observable<IComposeResponse>{
    return this.objhttp.get<IComposeResponse>(`${this.BaseURL}getcompose`);
  
  }
}
