import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [{
    component: LoginComponent,
    path: 'login'
},{
    component: WelcomeComponent,
    path: 'welcome'
},
    {
    path:'**',
    redirectTo:'login'
}];
