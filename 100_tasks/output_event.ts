<joke-form 
  (jokeCreated)="addJoke($event)">
</joke-form>

// output event property on the component.
class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();
  
  createJoke() {
    this.jokeCreated.emit(new Joke("A setup", "A punchline"));
  }
}
//The name between the <> on the EventEmitter is the type of thing that will be output by this property.

createJoke(setup: string, punchline: string) {
  this.jokeCreated.emit(new Joke(setup, punchline));
}
#################################################################
export class ProductAlertsComponent { //child
  @Input() product;
  @Output() notify = new EventEmitter();
}
<p *ngIf="product.price > 700">
  <button (click)="notify.emit()">Notify Me</button>
</p>


//following in parent comp
onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

<app-product-alerts
  [product]="product" 
  (notify)="onNotify()">
</app-product-alerts
###################################################################
