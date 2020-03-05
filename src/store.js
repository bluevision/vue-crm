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
        }
    },
    actions: {
        addContact({commit }, contact) {
            ContactService.postContact(contact)
                commit('ADD_CONTACT', contact)
            }

        }
})