<template>
  <v-card
    class="mx-auto"
    max-width="100%"
    tile
  >
    <v-list>
      <v-subheader>
        <v-text-field>
              <router-link slot="prepend" :to="{name: 'AddContact'}" class="no-decoration"><v-btn icon>
        <v-icon>mdi-plus-circle-outline</v-icon>
      </v-btn>
       </router-link>
        <v-icon slot="append">mdi-magnify</v-icon>
            
     
      </v-text-field>
      </v-subheader>
    <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="contact in contacts" :key="contact.id" :contact="contact">
          
          <router-link class="contact-link" :to="{name: 'Contact', params: { id: contact.id}}">
           <div card="contact-card">
             
        <v-list-item-content dark>{{contact.firstName + ' ' + contact.lastName + ' - ' + contact.company}}</v-list-item-content>
 
          </div>
          </router-link>
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

<style scoped>
.contact-link {
  color: black;
  text-decoration: none;
}

.no-decoration {
  text-decoration: none;
}

.contact-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
</style>
