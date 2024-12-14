import { Component } from '@angular/core';
import { AddDataComponent } from './add-data/add-data.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { DataComponent } from '../data/data.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AddDataComponent, ButtonComponent, DataComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
