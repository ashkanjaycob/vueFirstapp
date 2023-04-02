<template>
    <div v-if="Loader" class="spinner-border  text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <CradView :user='user' />
    </div>
    <RouterView></RouterView>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
import CradView from '@/components/CradView.vue'

export default {
    name: 'UserIndex',
    components: {
        CradView
    },
    setup() {
        const Loader = ref(true);
        const users = ref([]);
        function getUsers() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    // handle success response data
                    users.value = response.data;
                    Loader.value = false;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
        getUsers()

        return { users, Loader }
    }

}
</script>
<style></style>