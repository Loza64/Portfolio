import { Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'contact', 
        component: ContactComponent
    },
    {
        path:'skills', 
        component: SkillsComponent
    }
];
