<template>
    <section>
        <h1 class="text-center">Your Profile</h1>
        <hr />
        <ErrorMessage :error="error" />
        <pre>{{ attributes }}</pre>
        <pre>{{ friends }}</pre>
        <pre>{{ presence }}</pre>
        <pre>{{ signaling }}</pre>
    </section>
</template>

<style scoped>
.nav-item {
    cursor: pointer;
}
</style>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            attributes: null,
            friends: null,
            presence: null,
            signaling: null,
        }
    },
    computed: {
        ...mapState(['user']),
    },
    created() {
        // axios.get('/api/attributes').then((response) => {
        //     this.attributes = response.data
        // })
        // axios.get('/api/friends').then((response) => {
        //     this.friends = response.data
        // })
        // axios.get('/api/presence').then((response) => {
        //     this.presence = response.data
        // })
        // axios.get('/api/signaling').then((response) => {
        //     this.signaling = response.data
        // })
        axios.get('/api/socket').then((response) => {
            console.log(response.data)
        })
    },
}
</script>
