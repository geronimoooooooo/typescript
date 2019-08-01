
<joke *ngFor="let j of jokes" [joke]="j"></joke>

// tell html that we can bind to this property
class JokeComponent {
  @Input('joke') data: Joke;
}

