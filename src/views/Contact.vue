<template>
<div class="event-header">
  <h3>Full Name: {{contact.firstName + ' ' + contact.lastName}}</h3>
  <h5>Email: {{contact.email}}</h5>
  </div>
</template>

  <script>

  import ContactService from '@/services/ContactService.js'

  export default {
    props: ['id'],
    data () {
      return {
        contact: {}
      }
    },
    created() {
      ContactService.getContact(this.id)
        .then(response => {
          this.contact = response.data
      
        })
        .catch(error => {
          console.log('error' + error.response)
        })
    }
  }
</script>
