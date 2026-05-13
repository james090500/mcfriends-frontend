<template>
    <section class="row justify-content-center">
        <div class="col-lg-10 col-xxl-7">
            <div class="card px-5 py-4">
                <h1 class="text-center">Log in</h1>
                <hr />
                <ErrorMessage v-if="error" :error="error" />
                <div class="text-center">
                    <p>Log in using your Microsoft account</p>
                    <div class="d-grid gap-2 mx-auto">
                        <MicrosoftButton :loading="loading" />
                    </div>
                    <small class="mx-auto">
                        By signing in you consent to our
                        <router-link to="/legal/terms">Terms</router-link> and
                        <router-link to="/legal/privacy"
                            >Privacy Policy</router-link
                        >
                    </small>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import MicrosoftButton from '@/views/partials/MicrosoftButton.vue'

export default {
    data() {
        return {
            error: null,
            loading: false,
        }
    },
    created() {
        const code = this.$route.query.code
        if (code) {
            this.loading = true
            this.axios
                .post('/api/account/oauth/callback', {
                    code: this.$route.query.code,
                })
                .then((response) => {
                    this.$store.dispatch('login', response.data.user)
                    this.$router.push(response.data.ref ?? '/')
                })
                .catch((error) => {
                    this.error = error.response.data.error
                    this.$router.replace({ code: null, state: null })
                    this.loading = false
                })
        }
    },
    computed: {
        ref() {
            return this.$route.query.ref ?? null
        },
    },
    components: { MicrosoftButton },
}
</script>
