import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { SkillsComponent } from '../../skills/skills.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SkillsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
