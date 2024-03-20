import { HttpInterceptorFn } from '@angular/common/http';

export const checkTokenInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
