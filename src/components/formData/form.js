import { refs } from '../../refs/refs';
import { getAllContacts, postContact } from '../../api/api'

const contact = {
    name: '',
    number: '',
}
getAllContacts()

const onHandleInput = (e) => {
    const { name, value } = e.target;
    contact[name] = value;
}

const onHandleSubmit = (e) => {
    e.preventDefault();
    postContact(contact)
        .then(() => refs.contactForm.reset())
}



refs.contactForm.addEventListener('input', onHandleInput)
refs.contactForm.addEventListener('submit', onHandleSubmit)
