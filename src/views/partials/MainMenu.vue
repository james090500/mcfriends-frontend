<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand d-none d-xl-block z-1">
                <img width="250" src="/images/logo.png" />
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNav"
            >
                <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav mx-xl-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            Home
                        </router-link>
                    </li>
                </ul>
            </div>
            <router-link
                v-if="!user"
                class="btn btn-success z-1"
                to="/account/login"
            >
                <font-awesome-icon icon="shield-halved" />
                Log in
            </router-link>
            <div v-else class="btn-group">
                <router-link to="/account/profile" class="btn btn-option">
                    <img
                        :src="`https://api.minecraftapi.net/api/v2/profile/${user.uuid}/avatar?size=24&overlay=true`"
                        class="border rounded me-2"
                    />
                    {{ user.username }}
                </router-link>
                <button
                    class="btn btn-option dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                ></button>
                <ul class="dropdown-menu w-100">
                    <div v-if="user.group && user.group.admin">
                        <router-link class="dropdown-item" to="/admin">
                            {{ user.group.emoji }} Admin
                        </router-link>
                        <div class="dropdown-divider" />
                    </div>
                    <router-link class="dropdown-item" to="/account/profile">
                        My Profile
                    </router-link>
                    <div class="dropdown-divider" />
                    <a
                        href="#"
                        class="dropdown-item"
                        @click="$store.dispatch('logout')"
                        >Log out</a
                    >
                </ul>
            </div>
        </div>
    </nav>
</template>

<style style="scss" scoped>
.navbar {
    .nav-item {
        cursor: pointer;
        padding: 0 1rem;
        margin: 0rem 0.25rem;
        border-radius: 1rem;
        transition: 0.25s;

        &:hover {
            background: rgba(255, 255, 255, 0.15);
        }
    }
}

@media (min-width: 992px) {
    .navbar-collapse {
        position: absolute;
        width: 100%;
    }
}
</style>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState(['user']),
}
</script>
