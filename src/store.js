import Vue from 'vue'
import Vuex from 'vuex'
import ContactService from '@/services/ContactService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contacts: []
    },
    mutations: {
        ADD_CONTACT(state, contact) {
            state.contacts.push(contact)
        },
        MODIFY_CONTACT(state, contact) {

            state.contacts = state.contacts.map(oldContact => {
                if (contact.id == oldContact.id) {
                    return contact
                } else {
                    return oldContact
                }
            });


        
        }
    },
    actions: {
        addContact({commit }, contact) {
            ContactService.postContact(contact)
                commit('ADD_CONTACT', contact)
            },
            async modifyContact({commit}, contact) {
                console.log(contact)
                const updatedContact = await ContactService.modifyContact(contact)
                commit('MODIFY_CONTACT', updatedContact)
            }

        }

})