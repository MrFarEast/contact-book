
import { getContacts } from "./utils/api.js"
import { renderContact } from "./utils/creators.js"

const listElement = document.querySelector('ul.contacts')

getContacts()
    .then((contacts) => {
        contacts.forEach((contacts) => {
            renderContact(contacts, listElement)
        })
    })
    .catch(() => {

    })

    .finally(() => {
        
    })