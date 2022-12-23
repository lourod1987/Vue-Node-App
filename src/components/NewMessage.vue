<template>
<v-flex sm8 offset-sm2>
    <v-card>
        <v-form>
            <v-container>
                <v-layout>
                    <v-flex xs12 md4>
                        <v-text-field
                            v-model="messageBody"
                            label="New Message"
                            required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-btn @click="submit">submit</v-btn>
        </v-form>
    </v-card>
</v-flex>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            messageBody: "",
        }
    },
    methods: {
        async submit() {
            try {
                const msg = await axios.post("http://localhost:3000/messages", { message: this.messageBody });
                console.log("This is the msg payload: " + msg.data.message);
                this.$root.$emit('newMessage', msg.data.message);  
                this.messageBody = '';
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
