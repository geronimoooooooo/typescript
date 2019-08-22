add or remove an element from the DOM.
*ngIf="<condition>"

//The NgIf directive removes the li element from the DOM if person.age is less than 30.
<ul *ngFor="let person of people">
<li *ngIf="person.age < 30">
{{ person.name }} ({{ person.age }})
</li>
</ul>
######################################
<p *ngIf="product.description">
    Description: {{ product.description }}
  </p>
########################################

################################################

###################################

###############################################
