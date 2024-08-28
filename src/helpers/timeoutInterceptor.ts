import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, TimeoutError, throwError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  constructor(private readonly timeoutValue: number = 5000) {} // Valor por defecto de 5 segundos

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(this.timeoutValue),
      catchError((err) =>
        err instanceof TimeoutError
          ? throwError(() => new Error('Request timed out'))
          : throwError(() => err),
      ),
    );
  }
}
