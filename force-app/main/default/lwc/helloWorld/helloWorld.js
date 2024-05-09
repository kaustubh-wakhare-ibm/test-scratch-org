import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Zero To Hero";
    title = 'aura';

    changeTitle(event){
        this.title = event.target.value;
    }
}