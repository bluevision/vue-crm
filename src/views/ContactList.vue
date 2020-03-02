<template>
  <v-card
    class="mx-auto"
    max-width="100%"
    tile
  >
    <v-list>
      <v-subheader>
        <v-text-field>
        <v-icon slot="append">mdi-magnify</v-icon>
      <v-icon slot="prepend">mdi-plus-circle</v-icon>
      </v-text-field>
      </v-subheader>
    <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="contact in contacts" :key="contact.id" :contact="contact">
           
        <router-link :to="{name: 'Contact', params: { id: contact.id}}"><v-list-item-content dark>{{contact.firstName + ' ' + contact.lastName}}</v-list-item-content></router-link>
 
          
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div><router-view/></div>
  </v-card>
</template>

<script>
import ContactService from '@/services/ContactService.js'

export default {
data() {
      return {contacts: []}
  },
methods: {
  addContact() {
    alert('Hello')
  },
},
  components: {
  },
  created() {
    ContactService.getContacts()
    .then(response => {
      this.contacts = response.data
    })
    .catch(error => {
      console.log('error' + error.response)
    })
  }
}
</script>
