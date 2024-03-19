import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, ILoginResponce } from '../Interfaces/Ilogin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  BaseURL: string = 'http://192.168.29.40:3000/'

  constructor(private HTTP: HttpClient) { }

  login(LoginDetails: ILogin): Observable<ILoginResponce> {
    return this.HTTP.post<ILoginResponce>(`${this.BaseURL}login`, LoginDetails)
  }

}
