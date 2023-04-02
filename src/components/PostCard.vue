<template>
    <div class="card border-info">
        <div class="card-header ">
            <router-link :to="{ name: 'PostShow', params: { id: post.id } }">{{ post.title }}</router-link>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ post.body }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'PostCard',
    props: {
        post: Object
    }
}
</script>
<style></style>