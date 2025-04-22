import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { About, ResponseRest } from '../../../services/ModelsInterface';
import { ApiService } from '../../../services/api/api.service';
import { CommonModule } from '@angular/common';
import { ObserverService } from '../../../services/ObserverService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [MatIcon, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true
})
export class AboutComponent {

  about: ResponseRest<About[]> = { state: false, message: "", result: [] };
  constructor(
    private api: ApiService,
    private observer: ObserverService,
    private router: Router
  ) { }

  @ViewChildren("article") articles !: QueryList<ElementRef>;
  @ViewChild("section") section !: ElementRef

  ngOnInit() {
    this.api.getAboutInfo().subscribe((data) => {
      this.about = data
    })
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
      });
    });

    this.observer.observe(this.section.nativeElement)

    const sectionObserver = this.section.nativeElement as HTMLElement

    sectionObserver.addEventListener("intersect", () => {
      this.router.navigateByUrl("/about")
      document.getElementById("/about")?.classList.add("active");
    })

    sectionObserver.addEventListener("notintersect", () => {
      document.getElementById("/about")?.classList.remove("active");
    })

  }

}
