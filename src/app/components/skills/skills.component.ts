import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, IterableDiffers, Output, output, Query, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { DataList } from '../../services/DataList';
import { IntersectionObserverService } from '../../services/IntersectionObserverService';

interface Technical {
  name: string,
  type: string,
  percentage: number,
  url: string
}

interface Professional {
  name: String,
  percentage: number
}

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

          let bar = item.nativeElement.querySelector(".bar")
          bar.style.width = `${bar.dataset.percentage}%`;
        });

        item.nativeElement.addEventListener('notintersect', () => {
          item.nativeElement.style = "opacity: 0; transform: translateY(50px);";

          let percentage = item.nativeElement.querySelector(".percentage");
          percentage.value = "0%"

          let bar = item.nativeElement.querySelector(".bar")
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
        let circle = item.nativeElement.querySelector(".circle")
        const percentage = circle.dataset.percentage;
        circle.style.opacity = 1;
        circle.style.backgroundColor = `conic-gradient(rgb(153, 255, 0) ${percentage}%, rgb(20, 20, 20) 0%);`
        circle.style.transform = "scale(100%)"
        circle.style.animationName = "circle-animated"
        console.log(circle.style)
      })

      item.nativeElement.addEventListener('notintersect', () => {
        let circle = item.nativeElement.querySelector(".circle")
        circle.style.opacity = 0;
        circle.style.backgroundColor = "conic-gradient(rgb(153, 255, 0) 0%, rgb(20, 20, 20) 0%);"
        circle.style.transform = "scale(0%)"
        circle.style.animationName = "none"
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

  //professionalSkills

}
