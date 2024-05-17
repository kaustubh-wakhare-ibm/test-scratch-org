import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {
    carList = ['Maruti', 'Audi', 'BMW', 'Ford'];
    clothBrand = [
        {
            id:1,
            name:'Wrangler',
            price:2999
        },
        {
            id:2,
            name:'Wrong',
            price:2599
        },
        {
            id:2,
            name:'Levis',
            price:2399
        },
        {
            id:2,
            name:'Denim',
            price:2299
        }
    ]

}