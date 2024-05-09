import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /* Simple Data Binding  */
    fullName = "Zero To Hero";
    title = 'aura';

    changeTitle(event){
        this.title = event.target.value;
    }

    /* Simple @track decorator */
    @track address={
        city:'Melbourne',
        code: 30008,
        country:'US'
    }

    changeCity(event){
        this.address.city = event.target.value;
    }

    /* Getter in LWC */

    userList = ['john', 'Tom', 'steve'];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.userList[0];
    }

    get numMuliplication(){
        return this.num1 * this.num2;
    }
}