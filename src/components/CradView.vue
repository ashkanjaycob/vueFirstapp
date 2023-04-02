<template>
    <div class="card">
        <div class="card-header">
            <router-link :to="{ name: 'userId', params: { id: user.id } }">{{ user.name }}</router-link>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email :{{ user.email }}</li>
            <li class="list-group-item">Phone : {{ user.phone }}</li>
            <li class="list-group-item">City : {{ user.address.city }}</li>
            <li class="list-group-item">Name : {{ user.name }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'CradView',
    props: {
        user: Object
    }
}
</script>
<style></style>