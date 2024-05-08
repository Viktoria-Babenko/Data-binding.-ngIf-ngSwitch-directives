import {Input, Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'links-comp',
    template: `<ng-content></ng-content>
               <h3> Ссылки на ресурсы с информацией </h3>
               <ul>
                   <li *ngFor="let link of links; let i = index"> 
                   <a href="{{link}}">{{link}}</a>
                   </li>
               </ul>`,
    styleUrls: ['./app.component.css']
    })
    export class LinksComponent { 
        @Input() links;
    }