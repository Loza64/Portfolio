import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class IntersectionObserverService {
    private observer: IntersectionObserver;

    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(
                    entry => {
                        if (entry.isIntersecting) {
                            const target = entry.target as HTMLElement;
                            target.dispatchEvent(new CustomEvent('intersect'));
                        } else {
                            const target = entry.target as HTMLElement;
                            target.dispatchEvent(new CustomEvent('notintersect'));
                        }
                    }
                );
            },
            {
                root: null,
                rootMargin: '40px',
                threshold: 1
            }
        )
    }

    observe(element: Element) {
        this.observer.observe(element);
    }

    unobserve(element: Element) {
        this.observer.unobserve(element);
    }
}