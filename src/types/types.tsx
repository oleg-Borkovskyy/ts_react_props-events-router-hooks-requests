
export interface iAddress {
    street:string;
    city:string;
    zipcode:string;
}


export interface iUser{
    name: string;
    email:string;
    id:number;
    address:iAddress;
}
export interface ITodo {
    id:number;
    title:string;
    completed:boolean;
}