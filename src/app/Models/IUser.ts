export interface IUser{
    fullName:string,
    email: string,
    mobileNumber: string[],
    address: {
        city: string,
        postalCode: string,
        street: string,
    },
    password: string
}