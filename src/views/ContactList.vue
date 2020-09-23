<template>
  <v-card class="mx-auto" max-width="100%" tile>
    <v-list>
      <v-subheader>
        <v-text-field v-model="input">
          <router-link
            slot="prepend"
            :to="{ name: 'AddContact' }"
            class="no-decoration"
          >
            <v-btn icon>
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
          </router-link>
          <v-icon slot="append">mdi-magnify</v-icon>
        </v-text-field>
      </v-subheader>
      <v-list-item-group color="primary">
        <router-link
          v-for="item in filteredList"
          :key="item.id"
          class="contact-link"
          :to="{ name: 'Contact', params: { id: item.id } }"
        >
          <v-list-item>
            <div card="contact-card">
              <v-list-item-content
                v-text="
                  item.firstName + ' ' + item.lastName + ' - ' + item.company
                "
                dark
              ></v-list-item-content>
            </div>
          </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
    <div><router-view /></div>
  </v-card>
</template>

<script>
import ContactService from "@/services/ContactService.js";

export default {
  data() {
    return {
      contacts: [],
      input: "",
    };
  },
  created() {
    ContactService.getContacts()
      .then((response) => {
        this.contacts = response.data;
      })
      .catch((error) => {
        console.log("error" + error.response);
      });
  },
  computed: {
    filteredList() {
      return this.contacts.filter((contact) => {
        const value = contact.lastName + contact.firstName + contact.company;
        return value.toLowerCase().includes(this.input.toLowerCase());
      });
    },
  },
};
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
