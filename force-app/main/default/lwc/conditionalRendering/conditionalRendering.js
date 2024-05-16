import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible=false
    handleShow(){
        if(this.isVisible==true){
            this.isVisible = false
        }else{
            this.isVisible = true
        }   
    }
}