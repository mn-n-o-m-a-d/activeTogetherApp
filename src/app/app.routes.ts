import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

    {path: 'dashboard', component: DashboardComponent},
    {path: '', component: DashboardComponent},
    {path: 'about', component: AboutComponent}

];
