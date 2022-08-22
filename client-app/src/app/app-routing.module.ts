import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { ProfileComponent } from './account/profile/profile.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { StartComponent } from './start/start.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponentComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'profile/:id', component: ProfileComponent,
  },
  {
    path: 'start', component: StartComponent,
  },
  {
    path: 'users', component: UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
