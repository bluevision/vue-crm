<template>
<v-container>
  <v-row align="center" justify="center">
<div>
    <div v-if="modify">
    <h1>{{contact.firstName + ' ' + contact.lastName}}</h1>
      <div class="field">
        <h3>Email: {{contact.email}}</h3>
      </div>
      <div class="field">
        <h3>Company: {{contact.company}}</h3>
      </div>
      <v-btn @click="modify = false">Edit Contact</v-btn>
  </div>
      
  <div v-else>
    <h3>Modify Contact</h3>
    <form @submit.prevent="modifyContact">
    <h3 class="field">First name:
        <input type="text" v-model="contact.firstName" :placeholder="contact.firstName" required/>
     </h3>

      <h3 class="field">Last Name: 
        <input type="text" v-model="contact.lastName" :placeholder="contact.lastName" required/>
      </h3>


      <h3 class="field" > Email: 
        <input type="email" v-model="contact.email" :placeholder="contact.email"/>
      </h3>
        

      <h3 class="field">Company: <input type="text" v-model="contact.company" :placeholder="contact.company"/></h3>

      <v-btn class="no-decoration" type="submit" value="Submit">Save</v-btn>
      </form>

  </div>

     </div>
  </v-row>
</v-container>
</template>

<script>
import ContactService from '@/services/ContactService.js';

  export default {
    props: ['id'],
    data() {
      return {
        contact: {},
        modify: true
      
      }
    },
    methods: {
      modifyContact() {
        this.$store.dispatch('modifyContact', this.contact)
      },
    },
    created() {
      ContactService.getContact(this.id)
      .then(response => {
        this.contact = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    }
  
  
  

  }
</script>

<style lang="css" scoped>
.field {
  margin-bottom: 24px;
}

.no-decoration {
  text-decoration: none;
}

</style>