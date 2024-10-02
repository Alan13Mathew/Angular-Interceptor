import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ErroPageComponent } from './components/erro-page/erro-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dash',
        component: DashboardComponent
    },{
        path: '**',
        component: ErroPageComponent
    }
];
