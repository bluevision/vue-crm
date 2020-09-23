<template>
  <div>
    <v-card class="mx-auto" max-width="500">
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item v-for="contact in contacts" :key="contact.id">
            <v-list-item-content>
              <v-list-item-title>{{
                contact.firstName + " " + contact.lastName
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import contacts from "./contacts.json";
export default {
  data() {
    return {
      contacts: contacts,
    };
  },
};
</script>
