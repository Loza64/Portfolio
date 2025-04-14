import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { DataList } from './../../../services/DataList';
import { IntersectionObserverService } from '../../../services/IntersectionObserverService';
import { Project } from '../../../services/Models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  standalone: true,
})
export class ProjectsComponent {

  projects: Project[] = [];

  @ViewChildren("article") articles!: QueryList<ElementRef>;

  constructor(private dataList: DataList, private intersect: IntersectionObserverService) { }

  ngOnInit() {
    this.projects = this.dataList.getProjects();
  }
  ngAfterViewInit() {

    this.articles.forEach(element => {
      this.intersect.observe(element.nativeElement)
    });

    this.articles.forEach(element => {
      element.nativeElement.addEventListener("intersect", () => {
        const article = element.nativeElement as HTMLAreaElement
        article.style.opacity = "1";
        article.style.transform = "translateY(0)"
      })
      element.nativeElement.addEventListener("notintersect", () => {
        const article = element.nativeElement as HTMLAreaElement
        article.style.opacity = "0";
        article.style.transform = "translateY(-30px)"
      })
    })
  }
  ngOnDestroy() {
    this.articles.forEach(element => {
      this.intersect.unobserve(element.nativeElement)
    });
  }

}
