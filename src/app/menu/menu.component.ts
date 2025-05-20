import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [RouterOutlet, RouterLink,RouterLinkActive,MatToolbarModule,MatButtonModule,MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true
})
export class MenuComponent {

}
