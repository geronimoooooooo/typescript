The key difference between the ngIf solution is that by using NgSwitch we evaluate the expression
only once and then choose the element to display based on the result.

<ul *ngFor="let person of people"
[ngSwitch]="person.country">

<li *ngSwitchCase="'UK'"
class="text-success">
{{ person.name }} ({{ person.country }})
</li>
<li *ngSwitchCase="'USA'"
215
class="text-primary">
{{ person.name }} ({{ person.country }})
</li>
<li *ngSwitchCase="'HK'"
class="text-danger">
{{ person.name }} ({{ person.country }})
</li>
<li *ngSwitchDefault
class="text-warning">
{{ person.name }} ({{ person.country }})
</li>
</ul>`
