<input [(ngModel)]="hero.name" placeholder="name"/>


<li *ngFor="let hero of heroes" (click)="onSelect(hero)">

###########################################
