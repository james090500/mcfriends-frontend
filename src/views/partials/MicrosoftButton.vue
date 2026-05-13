<template>
    <a
        :href="signInLink"
        class="btn btn-lg btn-primary"
        :class="{ disabled: loading }"
    >
        <font-awesome-icon v-if="loading" icon="circle-notch" spin />
        <font-awesome-icon v-else :icon="['fab', 'microsoft']" />
        Log in with Microsoft
    </a>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        signInLink: function () {
            let base = `${this.api_url}/api/account/oauth/redirect`
            if (this.$route.query.ref) {
                base += `?ref=${this.$route.query.ref}`
            }
            return base
        },
    },
}
</script>
