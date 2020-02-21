<template><v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-list-item-content dark v-on="on">{{firstName + ' ' + lastName}}</v-list-item-content>
      </template>
      <v-card> 
        <v-card-title class="headline">{{firstName + ' ' + lastName}}</v-card-title>
        <textarea :value="firstName" relative bg-transparent px-2 border mt-2 h-64 border-none leading-normal/>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </template>

  <script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
        props: {
          firstName: String,
          lastName: String
      }
  }
</script>
