import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthService);
  if(authService.isUserLogged)
    return true;
  else
  {
    alert('you must login first');
    return false;
  }
};

