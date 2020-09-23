import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getContacts() {
        return apiClient.get('/contacts')
    },
    getContact(id) {
        return apiClient.get('/contacts/' + id)
    },
    modifyContact(id) {
        return apiClient.put('/contacts/' + id)
    },
    postContact(contact) {
        return apiClient.post('/contacts', contact)
    }
    //lookup json-server documentation on how to make an update
}