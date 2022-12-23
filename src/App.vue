<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
     
    </v-app-bar>

    <v-main>
      <br>
      <NewMessage/>
      <br>
      <UserMessages/>
    </v-main>
  </v-app>
</template>

<script>
import UserMessages from './components/UserMessages';
import NewMessage from './components/NewMessage';

export default {
  name: 'App',

  components: {
    UserMessages,
    NewMessage,
  },

  data: () => ({
    //
  }),
};
</script>
