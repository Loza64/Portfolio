import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Output, output, Query, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { DataList } from '../../services/DataList';
import { IntersectionObserverService } from '../../services/IntersectionObserverService';

interface Skill {
  name: string,
  type: string,
  percentage: number,
  url: string
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {

  skills: Skill[] = [];
  filter: string = "all";
  @Input() maxSkillsToShow: number | null = null;

  @ViewChildren('article') articles!: QueryList<ElementRef>;

  constructor(private list: DataList, private observerSkills: IntersectionObserverService) { }

  ngOnInit(): void {
    this.skills = this.list.getSkills();
    this.filteredSkills();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxSkillsToShow'] || changes['filter']) {
      this.filteredSkills();
      this.initIntersectionSkills();
    }
  }

  initIntersectionSkills() {
    this.articles.forEach(article => {
      this.observerSkills?.observe(article.nativeElement);
    });

    this.articles.forEach(
      item => {
        item.nativeElement.addEventListener('intersect', () => {
          console.log('Element is visible');
          item.nativeElement.style = "opacity: 1; transform: translateY(0);";

          let bar = item.nativeElement.querySelector(".bar")
          bar.style.width = `${bar.dataset.percentage}%`;
        });

        item.nativeElement.addEventListener('notintersect', () => {
          console.log('Element is not visible');
          item.nativeElement.style = "opacity: 0; transform: translateY(50px);";

          let bar = item.nativeElement.querySelector(".bar")
          bar.style.width = "0%"
        });
      }
    )
  }

  ngAfterViewInit(): void {
    this.initIntersectionSkills()
  }

  ngOnDestroy(): void {
    this.articles.forEach(article => {
      this.observerSkills.unobserve(article.nativeElement);
    });
  }

  filteredSkills(): Skill[] {
    if (this.filter === 'all') {
      return this.skills.slice(0, this.maxSkillsToShow || this.skills.length);
    }
    return this.skills.filter(skill => skill.type === this.filter).slice(0, this.maxSkillsToShow || this.skills.length);
  }

}
