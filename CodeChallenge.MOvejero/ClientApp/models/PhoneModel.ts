export default interface PhoneModel {
    IdPhone: string,
    NamePhone: string,
    Image: string,    
    Color: string,
    Price: number,
    Description: string, 
}

export const GeneratePhoneModel = (): PhoneModel => {
    let phone: PhoneModel = {
        IdPhone:'',
        NamePhone: '',
        Image: '',
        Color: '',
        Price: 0,
        Description: '',
    };
    return phone;
}