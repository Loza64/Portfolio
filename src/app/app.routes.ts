import { Routes } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { ContactComponent } from './components/screens/contact/contact.component';
import { ServicesComponent } from './components/screens/services/services.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path:'contact', 
        component: ContactComponent
    },
    {
        path:'services', 
        component: ServicesComponent
    }
];
