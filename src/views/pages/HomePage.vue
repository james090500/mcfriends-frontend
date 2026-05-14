<template>
    <section>
        <div id="header" class="d-grid">
            <div class="row justify-content-center g-0 align-items-center">
                <div class="text-center">
                    <div class="home-title">
                        <h1>Minecraft Friends.</h1>
                        <p>
                            Manage your friends online and outside of Minecraft
                        </p>
                        <div class="text-center">
                            <div class="d-inline-flex">
                                <router-link
                                    v-if="user"
                                    class="btn btn-success px-5"
                                    to="/account/profile"
                                >
                                    <font-awesome-icon icon="user" />
                                    Go to Your Profile
                                </router-link>
                                <router-link
                                    v-else
                                    class="btn btn-success px-5"
                                    to="/account/login"
                                >
                                    <font-awesome-icon icon="shield-halved" />
                                    Log in
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#header {
    min-height: 80vh;
}

.home-title > h1 {
    font-size: 4rem;
}

.home-title > li {
    font-size: 1.5rem;
}

.home-subtitle {
    font-size: 3.5rem;
    margin-bottom: 4rem;
}
</style>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState(['user']),
}
</script>
