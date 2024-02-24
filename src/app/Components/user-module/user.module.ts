import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/Guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path: 'profile', component: UserProfileComponent, canActivate: [authGuard]},
  {path: 'profile/edit', component: EditUserProfileComponent, canActivate: [authGuard]}
]

@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
