<template><v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-list-item-content dark v-on="on">{{firstName + ' ' + lastName}}</v-list-item-content>
      </template>
      <v-card> 
        <v-card-title class="headline">{{firstName + ' ' + lastName}}</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
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
