import { Component } from '@angular/core';
import { TodoContainerComponent } from "./components/todo-container/todo-container.component";
import { TodoContainerDoneComponent } from "./components/todo-container-done/todo-container-done.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";


@Component({
    selector: 'app-root',
    imports: [TodoContainerComponent, TodoContainerDoneComponent, FooterComponent, HeaderComponent],
    template: `
    <app-header/>
    <div class="todoContainer">  <app-todo-container class="flex-auto w-half card xs-w-full"/>
    <app-todo-container-done class="flex-auto w-half card xs-w-full"/></div> 
    <app-footer/>`,
    styles: `
    :host{
    display:flex;
    flex-direction:column;
     min-height : 100vh;
        
    
    }
    .todoContainer{
        display:flex;
        flex: 1 1 auto;
        flex-direction:row;
    }`
})
export class AppComponent {
 
}
