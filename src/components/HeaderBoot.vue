<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
              <a class="navbar-brand" href="#">Ashkan Yaghobi</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/users" class="nav-link ">Users</router-link>

                  </li>
                  <li class="nav-item">
                    <router-link to="/posts" class="nav-link ">Posts</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>


<script>
export default {
    name: 'HeaderBoot'
}
</script>

<style scoped>
.router-link-active {
    font-weight: bold !important;
    color: darkslategrey !important;
    border-bottom: 1px solid darkslategrey !important;
}

</style>