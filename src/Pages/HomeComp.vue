<template>
    <div>
        <div class="container ">

            <div class="row">

                <div class="col-md-10 col-lg-8 p-2 mt-5 p-3">
                    <h3>Welcome to my first Vue js Project.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis excepturi accusantium ducimus sunt,
                        commodi iure odit perspiciatis temporibus consectetur dolorem fugiat blanditiis id dignissimos
                        veritatis necessitatibus architecto, nihil nostrum illum cupiditate quibusdam maiores in similique
                        assumenda numquam. Harum expedita voluptatem excepturi cupiditate quibusdam. Expedita aut
                        exercitationem corporis accusantium reiciendis ducimus?</p>

                </div>
            </div>
            <router-link class="btn btn-primary" to="users">Users</router-link>
            <router-link class="btn btn-secondary ms-3" to="posts">Posts</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeComp'
}
</script>
<style></style>