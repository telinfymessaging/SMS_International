
import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class checkTokenInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authToken = localStorage.getItem('tkn');

        const authReq = req.clone({ headers: req.headers.set('authorization', `${authToken}`) });
        return next.handle(authReq);
    }
}
import { HttpInterceptorFn } from '@angular/common/http';

export const checkTokenInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
