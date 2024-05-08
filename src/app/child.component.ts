import {Input, Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'child-comp',
    template: `<p><img class="img" src="{{img}}"> 
               <b>Место рождения</b> <br>{{placeo_Of_Birth}}<br>
               <b>Образование</b> <br>{{education}}<br>
               <b>Капитал</b> <br>{{capital}}</p>`,
    styleUrls: ['./app.component.css']
})
export class ChildComponent { 
    @Input() name = "";
	@Input() img = "";
    @Input() placeo_Of_Birth = "";
    @Input() education = "";
    @Input() capital = "";
   }