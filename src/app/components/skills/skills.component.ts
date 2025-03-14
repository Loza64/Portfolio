import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { DataList } from '../../services/DataList';
import { IntersectionObserverService } from '../../services/IntersectionObserverService';
import { Professional, Technical } from '../../services/Models';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {

  private technicalsList: Technical[] = [];
  private professionalsList: Professional[] = [];

  filter: string = "backend";
  @Input() maxTechnicalsToShow: number | null = null;

  @ViewChildren('articleTechnical') articlesTechnicals!: QueryList<ElementRef>;
  @ViewChildren('articleProfessional') articleProfessional!: QueryList<ElementRef>;

  constructor(private list: DataList, private observerService: IntersectionObserverService) { }

  ngOnInit(): void {
    this.technicalsList = this.list.technicalsSkills();
    this.professionalsList = this.list.professionalSkills();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxTechnicalsToShow'] || changes['filter']) {
      this.getTechnicalList();
      this.initObserberSkills();
    }
  }

  initObserberSkills() {

    //technicalSkills
    this.articlesTechnicals.forEach(article => {
      this.observerService?.observe(article.nativeElement);
    });

    this.articlesTechnicals.forEach(
      item => {
        item.nativeElement.addEventListener('intersect', () => {
          item.nativeElement.style = "opacity: 1; transform: translateY(0);";

          let bar = item.nativeElement.querySelector(".bar") as HTMLElement
          bar.style.width = `${bar.dataset["percentage"]}%`;
        });

        item.nativeElement.addEventListener('notintersect', () => {
          item.nativeElement.style = "opacity: 0; transform: translateY(50px);";

          let bar = item.nativeElement.querySelector(".bar") as HTMLElement
          bar.style.width = "0%"
        });
      }
    )

    //professionalSkills
    this.articleProfessional.forEach(item => {
      this.observerService.observe(item.nativeElement);
    })

    this.articleProfessional.forEach(item => {
      item.nativeElement.addEventListener('intersect', () => {
        item.nativeElement.style.opacity = 1;
        item.nativeElement.style.transform = "translateY(0px)"
        let circle = item.nativeElement.querySelector(".circle") as HTMLElement
        circle.style.strokeDashoffset = "calc(360 + (360 * (var(--percentage) / 100)))"
        circle.style.animation = "dibujarCirculo 1s linear forwards"
      })

      item.nativeElement.addEventListener('notintersect', () => {
        item.nativeElement.style.opacity = 0;
        item.nativeElement.style.transform = "translateY(20px)"
        let circle = item.nativeElement.querySelector(".circle") as HTMLElement
        circle.style.strokeDashoffset = "360"
        circle.style.animation = "none"
      })
    })

  }

  ngAfterViewInit(): void {
    this.initObserberSkills()
  }

  ngOnDestroy(): void {
    //technicalSkills
    this.articlesTechnicals.forEach(article => {
      this.observerService.unobserve(article.nativeElement);
    });

    //professionalSkills
    this.articleProfessional.forEach(article => {
      this.observerService.unobserve(article.nativeElement);
    });
  }

  getTechnicalList(): Technical[] {
    return this.technicalsList.filter(skill => skill.type === this.filter).slice(0, this.maxTechnicalsToShow || this.technicalsList.length);
  }

  getProfessionalList(): Professional[] {
    return this.professionalsList;
  }

}
