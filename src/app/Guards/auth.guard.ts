import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserAuthService);
  const router = inject(Router);
  
  if(authService.isUserLogged)
    return true;
  else
  {
    router.navigate(['/login']);
    return false;
  }
};

