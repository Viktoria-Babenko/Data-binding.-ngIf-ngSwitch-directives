// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app', // Определяется селектор-css для HTML-элемента, который будет представлять компонент.
    template: `<h1>{{Name}}</h1>
               <div id="div-select">
                   <button button-enter class="but-select" (click)="onSelectBiography()">Биография</button>
                   <button button-enter class="but-select" (click)="onSelectQuotes()">Цитаты</button>
                   <button button-enter class="but-select" (click)="onSelectLinks()">Ссылки на ресурсы с информацией</button>
                   <button button-enter class="but-select" (click)="onChangeExit()">Выход</button>
               </div>

               <div [ngSwitch] = "select">
                    <ng-template ngSwitchCase="biogr">
                    <child-comp [name]="Name" 
							[img]="Img" 
							[placeo_Of_Birth]="Placeo_Of_Birth" 
							[education]="Education"
                            [capital]="Capital">
                    </child-comp>
                    </ng-template>
               
                    <ng-template ngSwitchCase="quotes">
                        <quotes-comp [quotes]="Quotes" ></quotes-comp>
                        <input type="text" [(ngModel)]="Quote" /><br />
                        <button (click)="changeQuote([Quote])" >Добавить цитату</button>
                    </ng-template>
               
                    <ng-template ngSwitchCase="links">
                        <links-comp [links]="Links" ></links-comp>
                        <input type="text" [(ngModel)]="Link" /><br />
                        <button (click)="changeLink([Link])" >Добавить ссылку на ресурс</button>
                    </ng-template>

                    <ng-template ngSwitchCase="">      
                    </ng-template>
               </div>`,
    styleUrls: ['./app.component.css']
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
    Name = "Билл Гейтс";
    Img = "../assets/bill.jpg";
	Placeo_Of_Birth = "Родился 28 октября 1955 года в Сиэтле, штат Вашингтон, США в семье корпоративного адвоката Уильяма Генри Гейтса II и члена совета директоров First Interstate Bank, Pacific Northwest Bell и национального совета United Way Мэри Максвелл Гейтс.";
    Education = "Билл Гейтс учился в муниципальной начальной школе, а затем - в частной школе Lakeside School. В 1973 году он поступил в Гарвардский университет на факультет права, но был отчислен в 1975 году за неуспеваемость и прогулы.";
    Capital = "В период с 1996 по 2007 год был самым богатым человеком планеты по версии журнала Forbes. В марте 2012 в журнале Forbes Билл занял второе место с состоянием в $61 млрд. долларов. 17 мая 2013 по рейтингу Bloomberg вернул себе звание самого богатого человека на Земле. На 30 сентября 2014 стал в 21 раз самым богатым землянином. Сумма состояния составила $81 млрд. долл. /nВ списке миллиардеров Forbes в 2018 году смещён на второе место владельцем Amazon Джеффом Безосом. Капитал Билла Гейтса составил $90 млрд, тогда как активы Безоса оценили в $112 млрд. В апреле 2019 года стало известно, что состояние Билла Гейтса превысило $100 млрд.";
    Quote:string = "";
    Quotes = ["«Patience is a key element of success» ",
        "«If you think your teacher isnpm install tough, wait till you get a boss»",
        "«Life is not fair — get used to it! »",
        "«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»",
        "«Be nice to nerds. Chances are you’ll end up working for one»"
        ]
    Link:string = "";
    Links = ["https://en.wikipedia.org/wiki/Bill_Gates",
        "https://www.gatesfoundation.org/",
        "https://www.gatesnotes.com/",
        "https://twitter.com/billgates"]


    changeQuote(model: string){
        if(model != null && model!=""){
            model as string;
            this.Quotes.push(model);
        }
    }
    changeLink(model: string){
        if(model != null && model!=""){
            model as string;
            this.Links.push(model);
        }
    }
    select = "";
    onSelectBiography()
    {
      this.select = "biogr";
    }
     onSelectQuotes()
    {
      this.select = "quotes";
    }
    onSelectLinks()
    {
      this.select = "links";
    }
    onChangeExit(){
      this.select = "";
    }
}