import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {NgIcon} from "@ng-icons/core";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-about',
    imports: [
        MenuComponent,
        NgIcon,
        RouterOutlet
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
