import {  HttpInterceptorFn} from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const loaderService = inject(LoadingService);
  const startTime = Date.now();

  loaderService.setLoader(true);

  const modifiedReq = req.clone({
    setHeaders: {
      'secretMessage' : 'I am an Interceptor'
    }
  });

  console.log('intercepting login api')


  
  return next(modifiedReq).pipe(
    catchError(error => {
      if(error.status === 401){
        console.log('unauthorized request. redirecting to login.')
        router.navigate(['ddd'])
      }
      return throwError(error);
    }),
    finalize(()=>{
      setTimeout(() => {
        loaderService.setLoader(false);
        const endTime = Date.now();
        const responseTime = endTime - startTime ;
        console.log('interceptor ended')
        console.log(`Request ccompletedd in ${responseTime} ms`)
      }, 500);

    })
  )
};

