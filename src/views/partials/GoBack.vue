<template>
    <nav class="position-absolute">
        <ul class="breadcrumb">
            <li class="breadcrumb-item">
                <button class="btn btn-link" @click="goBack">Back</button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            default: null,
        },
    },
    methods: {
        goBack() {
            if (this.to != null) {
                this.$router.push(`/${this.to}`)
            } else {
                this.$router.go(-1)
            }
        },
    },
}
</script>
