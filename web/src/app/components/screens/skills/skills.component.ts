import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Professional, ResponseRest, Technical } from '../../../services/ModelsInterface';
import { ObserverService } from '../../../services/ObserverService';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
})

export class SkillsComponent {

  private technicalsResponse: ResponseRest<Technical[]> = { result: [], message: "", state: false };
  private professionalResponse: ResponseRest<Professional[]> = { result: [], message: "", state: false };
  private technicalList: Technical[] = [];

  filter: string = "backend";
  @Input() maxTechnicalsToShow: number | null = null;

  @ViewChild('skills') skills!: ElementRef;
  @ViewChildren('articleTechnical') articlesTechnicals!: QueryList<ElementRef>;
  @ViewChildren('articleProfessional') articleProfessional!: QueryList<ElementRef>;

  constructor(
    private api: ApiService,
    private observerService: ObserverService,
    private router: Router) { }

  ngOnInit(): void {
    this.api.getTechnicalSkills().subscribe((response: ResponseRest<Technical[]>) => {
      this.technicalsResponse = response;
      this.technicalList = response.result || [];
    });
    this.api.getProfessionalSkills().subscribe((response: ResponseRest<Professional[]>) => {
      this.professionalResponse = response;
    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filter']) {
      this.getTechnicalList();
      this.initObserberSkills();
    }
  }

  initObserberSkills() {
    this.articlesTechnicals.forEach(article => { this.observerService.observe(article.nativeElement) });

    this.articlesTechnicals.forEach(
      item => {
        item.nativeElement.addEventListener('intersect', () => {
          item.nativeElement.style = "opacity: 1; transform: translateY(0);";

          let bar = item.nativeElement.querySelector(".bar") as HTMLElement
          bar.style.width = `${bar.dataset["percentage"]}%`;
          document.getElementById('/skills')?.classList.add('active');
        });

        item.nativeElement.addEventListener('notintersect', () => {
          item.nativeElement.style = "opacity: 0; transform: translateY(50px);";

          let bar = item.nativeElement.querySelector(".bar") as HTMLElement
          bar.style.width = "0%"
          document.getElementById('/skills')?.classList.remove('active');
        });
      }
    )

    //professionalSkills
    this.articleProfessional.forEach(item => { this.observerService.observe(item.nativeElement) })

    this.articleProfessional.forEach(item => {
      item.nativeElement.addEventListener('intersect', () => {
        item.nativeElement.style.opacity = 1;
        item.nativeElement.style.transform = "translateY(0px)"
        let circle = item.nativeElement.querySelector(".circle") as HTMLElement
        circle.style.strokeDashoffset = "calc(360 + (360 * (var(--percentage) / 100)))"
        circle.style.animation = "dibujarCirculo 1s linear forwards"
        document.getElementById('/skills')?.classList.add('active');
      })

      item.nativeElement.addEventListener('notintersect', () => {
        item.nativeElement.style.opacity = 0;
        item.nativeElement.style.transform = "translateY(20px)"
        let circle = item.nativeElement.querySelector(".circle") as HTMLElement
        circle.style.strokeDashoffset = "360"
        circle.style.animation = "none"
        document.getElementById('/skills')?.classList.remove('active');
      })
    })

  }

  ngAfterViewInit(): void {
    this.observerService.observe(this.skills.nativeElement);

    this.skills.nativeElement.addEventListener('intersect', () => {
      this.router.navigateByUrl('/skills');
    })

    this.initObserberSkills()
  }

  ngOnDestroy(): void {
    this.observerService.unobserve(this.skills.nativeElement);

    //technicalSkills
    this.articlesTechnicals.forEach(article => { this.observerService.unobserve(article.nativeElement) });

    //professionalSkills
    this.articleProfessional.forEach(article => { this.observerService.unobserve(article.nativeElement) });
  }

  getTechnicalList(): Technical[] {
    return this.technicalList = (this.technicalsResponse.result || []).filter(item => item.type === this.filter);
  }

  getProfessionalList(): ResponseRest<Professional[]> {
    return this.professionalResponse;
  }

}
