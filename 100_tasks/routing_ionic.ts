RouterModule.forRoot([
  { path: '', component: LoginComponent },
  { path: 'detail', component: DetailComponent }
]);

<ion-content padding>
  <ion-button [routerLink]="['/detail']">Go to detail</ion-button>
</ion-content>

