import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize} from 'rxjs/operators'
import {SpineerService} from '../Spineer/spineer.service'
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private SpineerService :SpineerService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.SpineerService.requestStarted();
    return next.handle(request).pipe(
      finalize(
() =>{
  this.SpineerService.requestEnded();
}

      )

    )
  }
}
