import { data } from '../data/data'

const baseUrl = 'https://module-12-fb071-default-rtdb.firebaseio.com';

export const getAllContacts = () => {
    fetch(`${baseUrl}/vitaliiContacts.json`)
        .then(response => response.json())
        .then(response => {
            // console.log('response :>> ', response);
            const contactsArray = [];
            for (const key in response) {
                if (response.hasOwnProperty(key)) {
                    contactsArray.push({ id: key, ...response[key] })
                }
            }
            // console.log(contactsArray);
            data.contacts = [...contactsArray]
            console.log(data.contacts);
        })
};

export const postContact = (contact) => {
    return fetch(`${baseUrl}/vitaliiContacts.json`, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
        .then(response => {
            data.contacts = [...data.contacts, { ...contact, id: response.name }];

            console.log(data);
        })
}

