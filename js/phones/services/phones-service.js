const API_URL = 'https://mate-academy.github.io/phone-catalogue-static/api';

const PhonesService = {
     getAll({query = '', order = ''} = {}) {
        return fetch(API_URL+'/phones.json').then((response) => response.json())    
    },
/*
        const filteredPhones = phonesFromServer.filter((phone) => {
           return phone.name.toLowerCase().includes(query.toLowerCase()) 
        })
        const sortedPhones = filteredPhones.sort();
        return sortedPhones;
    */  
    getById(id) {
        return fetch(API_URL + '/phones/' + id + '.json').then((response) => response.json());
    }
}
export default PhonesService;