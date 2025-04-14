import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { SkillsComponent } from '../../skills/skills.component';
import { ServicesComponent } from "../services/services.component";
import { ProjectsComponent } from "../projects/projects.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SkillsComponent, FooterComponent, ServicesComponent, ProjectsComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
