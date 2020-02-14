<template>
<v-container>
  <v-row>
    <v-col v-for="category in categories" :key="category.title">
      <h1>{{category.title}}</h1>
    </v-col>
  </v-row>

</v-container>

  
</template>

<script>
import ToDo from '../components/ToDo'
import contacts from './contacts.json'
export default {
data() {
  return {
    computed: {
      categories() {
        return this.$store.state.categories
      }
    },
    contacts: contacts
  }
},
}
</script>
