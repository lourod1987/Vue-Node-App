<template>
    <v-flex sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Messages</v-toolbar-title>
            </v-toolbar>
            <h4 class="display-1">Messages</h4>
            <v-list-item v-for="message in messages" @click="">
                <v-list-item-content>
                    <v-list-item-title v-text="message"></v-list-item-title>   
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-flex>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            messages: [],
        }
    },
    async created() {
        console.log('created');
        this.$root.$on('newMessage', message => {
            this.messages.push(message);
        });
       this.messages =  (await axios.get('http://localhost:3000/messages')).data;
    }
}
</script>
