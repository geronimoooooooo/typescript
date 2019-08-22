# Array
let list: number[] = [1, 2, 3];
let cards: string[] = ['Visa', 'Maste­rCa­rd'];

`The second way uses a generic array type, Array<elemType>:`
let list: Array<number> = [1, 2, 3];

//If your array can hold two different types of objects you can do either of the following:
var customers: Array<Customer | ExtendedCustomer>;
var customers: (Customer | ExtendedCustomer)[];

// tuple -- similar to array, but you can specify the types of the contents
let tuple: [string, number] = ['hello', 23];

##################################################
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
//peopleByCountry = [
  peopleByCountry: any[] = [
{'country': 'UK',
'people': [
{"name": "Douglas Pace"
},
{"name": "Mcleod Mueller"},
]
},{
'country': 'US',
'people': [
{"name": "Day Meyers"
},
  {"name": "Aguirre Ellis"
},
{"name": "Cook Tyson"
}]}];}
#########################################################


-------------------------------------------------------

--------------------------------------------------------
