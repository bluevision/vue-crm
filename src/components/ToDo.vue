<template>
<v-container>
  <v-row>
    <v-col v-for="item in list" :key="item.title">
      <h1>{{item.title}}</h1>
      <li v-for="todo in todos" :key="todo.item">
        {{todo.item}}
      </li>
    </v-col>
  </v-row>

</v-container>

  
</template>

<script>

</script>
