import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'user', component: UserComponent},
    {path: 'dashbboard', component: DashboardComponent},
];
