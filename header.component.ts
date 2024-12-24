import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  title='DESPERATION VACATION';



}
