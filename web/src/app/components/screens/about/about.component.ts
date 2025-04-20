import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { About } from '../../../services/ModelsInterface';
import { SourceList } from '../../../services/SourceList';
import { CommonModule } from '@angular/common';
import { ObserverService } from '../../../services/ObserverService';

@Component({
  selector: 'app-about',
  imports: [MatIcon, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true
})
export class AboutComponent {

  about: About[] = [];
  constructor(private dataList: SourceList, private observer: ObserverService) { }

  @ViewChildren("article") articles !: QueryList<ElementRef>;

  ngOnInit() {
    this.about = this.dataList.getEducationList();
  }

  ngAfterViewInit() {
    this.articles.forEach((article) => {
      this.observer.observe(article.nativeElement);

      article.nativeElement.addEventListener("intersect", () => {
        const content = article.nativeElement.querySelector(".content") as HTMLElement;
        const icon = article.nativeElement.querySelector("mat-icon") as HTMLElement;
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
        icon.style.transform = "scale(100%)";
        icon.style.opacity = "1";
        icon.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
        content.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";

        document.getElementById("/about")?.classList.add("active");
      });

      article.nativeElement.addEventListener("notintersect", () => {
        const content = article.nativeElement.querySelector(".content") as HTMLElement;
        const icon = article.nativeElement.querySelector("mat-icon") as HTMLElement;
        content.style.opacity = "0";
        content.style.transform = "translateY(50px)";
        icon.style.transform = "scale(200%)";
        icon.style.opacity = "0";
        icon.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
        content.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";

        document.getElementById("/about")?.classList.remove("active");
      });
    });
  }

}
