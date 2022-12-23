<template>
    <v-flex sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Messages</v-toolbar-title>
            </v-toolbar>
            <v-list-item v-for="message in store.state.messages" @click="">
                <v-list-item-content>
                    <v-list-item-title v-text="message"></v-list-item-title>   
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-flex>
</template>
<script>
import axios from 'axios';
import store from '../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    async created() {
       store.state.messages =  (await axios.get('http://localhost:3000/messages')).data;
    }
}
</script>
