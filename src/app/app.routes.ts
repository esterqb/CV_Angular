import { Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {ProgrammingLanguagesComponent} from './programming-languages/programming-languages.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'programming_languages', component: ProgrammingLanguagesComponent}
];
