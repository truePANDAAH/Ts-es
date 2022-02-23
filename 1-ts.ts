export interface AddressLocation {
    citiy:string;
    street:string;
    postalCode:number
}
export enum Gender {male , female , other}

export enum Role {staff , student , manager , admin}

export interface Companies{
    id:number,
    name:string,
    descriprion:string, 
    location:AddressLocation
}
export interface Obj {
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
    gender:Gender
}

export const obj1:Obj = {
	id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: 'staff', // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
		{
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
	],
    gender: 'male' // Generi possibili: 'male', 'female', 'other'
}

