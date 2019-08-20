for (let i = 0; i < 10 ; i++) {

  
  // for..of statement
// iterate over the list of values on the object being iterated
let arrayOfAnyType = [1, "string", false];
for (const val of arrayOfAnyType) {
    console.log(val); // 1, "string", false
}

let list = [4, 5, 6];
for (const i of list) {
   console.log(i); // "4", "5", "6"
}

<tr *ngFor="let item of getTodoItems(); let i = index">

// for..in statement
// iterate over the list of keys on the object being iterated
for (const i in list) {
   console.log(i); // "0", "1", "2",
}
-----------------------------------------
The difference between for…of and for…in
for..in returns a list of keys on the object being iterated, 
whereas for..of returns a list of values of the numeric properties of the object being iterated.
https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
https://imasters.com/development/the-difference-between-for-of-and-for-in/?trace=1519021197&source=single
  
const numbers = [1,2,3,4,5];
 for(let number of numbers) {
  console.log(number);
 }

// result: 1, 2, 3, 4, 5

const numbers = [1,2,3,4,5];
for(let number in numbers) {
 console.log(number);
}

// result: 0, 1, 2, 3, 4
  
  const House = {
 area: 1000,
 height: 7,
 floors: 2
}

for(let prop in House) {
 console.log(prop);
}

// Result
// area
// height
// floors

#############################################################
<ul> ①
<li *ngFor="let person of people; let i = index"> ①
{{ i + 1 }} - {{ person.name }} ②
</li>
</ul>
############################################################
@Component({
selector: 'ngfor-grouped-example',
template: `
<h4>NgFor (grouped)</h4>
<ul *ngFor="let group of peopleByCountry"> ①
<li>{{ group.country }}</li>
<ul>
<li *ngFor="let person of group.people"> ②
{{ person.name }}
</li>
</ul>
</ul>
`
})
class NgForGroupedExampleComponent {
peopleByCountry: any[] = [
{
'country': 'UK',
'people': [
{
"name": "Douglas Pace"
},
{
"name": "Mcleod Mueller"
},
]
},
{
'country': 'US',
'people': [
{
"name": "Day Meyers"
},
{
"name": "Aguirre Ellis"
},
{
"name": "Cook Tyson"
}]}];}
###################################################
