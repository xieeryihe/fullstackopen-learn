import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllContacts = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const addContact = newObject => { 
    return axios.post(baseUrl, newObject).then(response => response.data)
}

const updateContact = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}

const deleteContact = (id) => {
    axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

const phonebookService = {
    getAllContacts, addContact, updateContact, deleteContact
};

export default phonebookService;