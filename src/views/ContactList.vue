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
      <v-icon slot="prepend" @click="addContact">mdi-plus-circle</v-icon>
      </v-text-field>
      </v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(contact, i) in contacts"
          :key="i"
        >
                <template v-slot:activator="{ on }">
        <v-list-item-content dark v-on="on">{{firstName + ' ' + lastName}}</v-list-item-content>
      </template>
          <Contact :firstName="contact.firstName" :lastName="contact.lastName" />
          
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div><router-view/></div>
  </v-card>
</template>

<script>
import Contact from './Contact.vue';
import axios from 'axios';

export default {
data() {
      return {contacts: contacts}
  },
methods: {
  addContact() {
    alert('Hello')
  },
},
  components: {
    Contact,
  },
  created() {
    axios
    .get('http://localhost:3000/contacts')
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log('error' + error.response)
    })
  }
}
</script>
