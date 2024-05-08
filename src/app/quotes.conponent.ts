import {Input, Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'quotes-comp',
    template: `<ng-content></ng-content>
               <h3> Цитаты Билла Гейтса </h3>
               <ul>
                  <li *ngFor="let quote of quotes; let i = index">{{quote}}</li>
               </ul>`,
    styleUrls: ['./app.component.css']
    })
    export class QuotesComponent {
        @Input() quotes;
    }