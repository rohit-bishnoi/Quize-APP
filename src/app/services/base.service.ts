import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, EMPTY } from 'rxjs';


const  baseUrl:string = '/api/';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private readonly http:HttpClient) { }

  post(url:string,obj:any,headers?:any):Observable<any>{
    return this.http.post(baseUrl+url,obj,headers).pipe(
      catchError((_err, _caught) => {
        return EMPTY;
      }));
  }

  put(url:string,obj:any,headers?:any):Observable<any>{
    return this.http.put(baseUrl+url,obj,headers).pipe(
      catchError((_err, _caught) => {
        return EMPTY;
      }));
  }

  delete(url:string,headers?:any):Observable<any>{
    return this.http.delete(baseUrl+url,headers).pipe(
      catchError((_err, _caught) => {
        return EMPTY;
      }));
  }

  get(url:string,headers?:any):Observable<any>{
    
      return this.http.get(baseUrl+url,headers).pipe(
        catchError((_err, _caught) => {
          return EMPTY;
        }));
  }
  
}
