import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {NgOptimizedImage} from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {octMail, octMarkGithub} from '@ng-icons/octicons';
import {MatIcon} from '@angular/material/icon';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, NgOptimizedImage, NgIcon, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  viewProviders: [provideIcons({ octMarkGithub,octMail })]
})
export class AppComponent {
  title = 'CVnuevo';
}
