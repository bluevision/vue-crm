<template>
<v-container>
  <v-row align="center" justify="center">
    <div id="Modify">
        <h1>Add a Contact</h1>
         <form @submit.prevent="addContact">
        <h3>First Name</h3>
        <div class="field">
        <input v-model="contact.firstName" type="text" placeholder="Last name" required/>   
  </div>

          <h3>Last Name</h3>
        <div class="field">
        <input v-model="contact.lastName" type="text" placeholder="Last name" required/>   
  </div>

          <h3>Email</h3>
        <div class="field">
        <input v-model="contact.email" type="email" placeholder="Last name" required/>   
  </div>

  <h3>Company</h3>
        <div class="field">
        <input v-model="contact.company" type="text" placeholder="Company"/>   
  </div>
  <v-btn class="no-decoration" type="submit" value="Submit">Add Contact</v-btn>
  </form>
    </div>
    </v-row>
</v-container>
</template>

<script>

    export default {
        data() {
            return {
                contact: this.newContactObject()
            }
        },
        methods: {
          addContact() {
            this.$store.dispatch('addContact', this.contact)
          },
            newContactObject() {
                const id = Math.floor(Math.random() * 1000)
                return {
                    id: id,
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: ''
                }
            }
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