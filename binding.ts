<input [(ngModel)]="hero.name" placeholder="name"/>

<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
#######################################  
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
[hero]="selectedHero" is an Angular property binding.

It's a one way data binding from the selectedHero property of the HeroesComponent to the hero property of the target element, 
which maps to the hero property of the HeroDetailComponent.

Now when the user clicks a hero in the list, the selectedHero changes. When the selectedHero changes, the property binding updates hero 
and the HeroDetailComponent displays the new hero.
###########################################
