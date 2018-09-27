import PhoneModel from '../models/PhoneModel';



const GetDetailsPhones = (): Promise<PhoneModel[]> => {

    const getDetailsURL = 'https://codechallengemovejeroapi.azurewebsites.net/api/Phones';

    return fetch(getDetailsURL).then(response => (response.json())).then(mapPhoneModel);
};

const mapPhoneModel = (response: any): PhoneModel[] => {

    const result: PhoneModel[] = [];
    response.map((item: any) => {
        const phoneMap: PhoneModel = {
            IdPhone: item.idPhone,
            NamePhone: item.namePhone,
            Image: item.image,
            Color: item.color,
            Price: item.price,
            Description:item.description,
        };
        result.push(phoneMap);
    });
    return result;
};

export const phonesAPI = {
    GetDetailsPhones,
};