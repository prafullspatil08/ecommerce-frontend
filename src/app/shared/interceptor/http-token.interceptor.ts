import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const token = window.localStorage.getItem('token');
    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
    const hardCodedToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmFmdWxsIiwiaWF0IjoxNjU3OTc0MTI5LCJleHAiOjE2NTgwNjA1MjksInJvbGVzIjoiUk9MRV9BRE1JTiJ9.Sl_4MG2sZZu2lgwNaJ6T564ftn2XHq9yUrSI62QWo8cgrCl1hMIriIc-_h64Xb4-G-SV6M34pKjcQt6d7QX-tA';
    request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${hardCodedToken}`
        }
      });
    return next.handle(request).pipe(
      catchError((errorData:any) => {
        if(errorData.status===404){

          alert("Something went wrong ERROR 404")
          
        }
        if(errorData.status===502){
          
          alert("Something went wrong ERROR 502")

        }
        if(errorData.status===403){

          alert("Something went wrong ERROR 403")

        }
        if(errorData.status===401){

          alert("Something went wrong ERROR 401")
        }
        return throwError(errorData);
      })
    )
  }
   
  }



  

