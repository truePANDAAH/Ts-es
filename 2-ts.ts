import {Obj,Gender,AddressLocation,Companies,Role, obj1}
 from '/Users/admin/Desktop/Angular/angular-es/1-ts'

class User implements Obj{
    id:number;
    name:string;
    surname:string;
    age:number;
    dateOfBirth:string;
    address: AddressLocation;
    role:Role;
    username:string;
    profilePhotoUrl:string;
    companies: Companies[];
    gender:Gender;
    
    constructor (obj1:Obj){
        this.name = obj1.name;
        this.surname = obj1.surname;
     }
     fullName(){
         console.log(`${this.name}${this.surname}`)
     };
};

const foo = new User(obj1);
foo.fullName();
