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
          <v-list-item-content>
            <v-list-item-title v-text="contact.firstName"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import contacts from './contacts.json'
export default {
data() {
      return {contacts: contacts}
  },
methods: {
  addContact() {
    alert('Hello')
  }
}
}
</script>
