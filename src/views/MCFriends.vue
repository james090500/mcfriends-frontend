<template>
    <main v-if="!maintenance.enabled">
        <div id="content" class="container-fluid">
            <MainMenu />
            <div class="row justify-content-center g-0">
                <div class="col-md-8 py-5">
                    <router-view v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </div>
            </div>
        </div>
        <MainFooter />
    </main>
    <main v-else>
        <div class="text-center p-5 vh-100 align-content-center">
            <h1>We'll be back soon!</h1>
            <p>
                We're performing some crucial maintenance to make our site
                better!
            </p>
            <small
                >Wait here and we will redirect you as soon as we are
                done!</small
            >
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex'

import MainMenu from '@/views/partials/MainMenu.vue'
import MainFooter from '@/views/partials/MainFooter.vue'

export default {
    data() {
        return {
            apiOffline: false,
            maintenance: {
                enabled: false,
                timer: null,
            },
        }
    },
    watch: {
        $route: {
            handler: function (to, _from) {
                if (to.meta.title != undefined) {
                    document.title = `${to.meta.title}  | MCFriends.Net`
                    document
                        .querySelector('meta[name="title"]')
                        .setAttribute('content', document.title)
                    document
                        .querySelector('meta[property="og:title"]')
                        .setAttribute('content', document.title)
                    document
                        .querySelector('meta[property="twitter:title"]')
                        .setAttribute('content', document.title)
                }
            },
            immediate: true,
        },
    },
    beforeCreate() {
        this.axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response != undefined) {
                    if (error.response.status === 401) {
                        this.$store.dispatch('logout')
                    }

                    if (error.response.status === 503) {
                        this.maintenance.enabled = true
                        this.maintenance.timer = setInterval(() => {
                            location.reload()
                        }, 10000)
                    }

                    if (
                        error.response.status === 408 &&
                        error.config.url.startsWith('/api/')
                    ) {
                        this.apiOffline = true
                    }
                }

                if (
                    (error.message.includes('timeout') ||
                        error.message.includes('CORS') ||
                        error.message.includes('Network Error')) &&
                    error.config.url.startsWith('/api/')
                ) {
                    this.apiOffline = true
                }

                return Promise.reject(error)
            }
        )

        /**
         * Set the user data from storage then update it with a refresh
         */
        const userInfo = localStorage.getItem('user')
        if (userInfo) {
            try {
                const userData = JSON.parse(userInfo)
                this.$store.commit('setUserData', userData)
                this.$store.commit('updateUser')
            } catch (e) {
                this.$store.commit('clearUserData')
            }
        }
    },
    unmounted() {
        clearInterval(this.maintenance.timer)
    },
    computed: mapState(['user']),
    components: {
        MainMenu,
        MainFooter,
    },
}
</script>

<style>
main {
    background: #2a3142;
    background: radial-gradient(at center top, #2a3142, #00071c);
}

#content {
    min-height: 80vh;
}
</style>
