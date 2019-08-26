<div>
  <label>name:
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </label>
</div>
#####################################################
  <input #searchBox id="search-box" (input)="search(searchBox.value)" />
#####################################################
