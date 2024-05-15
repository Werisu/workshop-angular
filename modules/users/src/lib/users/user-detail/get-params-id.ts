import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

export function getParamsId(): Observable<string> {
  const activatedRoute = inject(ActivatedRoute);

  return activatedRoute.params.pipe(map((params) => params['id']));
}
