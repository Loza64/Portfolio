import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {
        path:'/', 
        component: HomeComponent
    },
    {
        path:'/skills', 
        component: SkillsComponent
    }
];
