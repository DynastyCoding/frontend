import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../@service/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  //setTimeout(() => loadingService.show());
  loadingService.show();

  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
};
