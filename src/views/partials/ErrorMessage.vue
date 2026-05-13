<template>
    <div v-if="error" class="text-start alert alert-danger">
        <strong>Error: </strong>{{ error }}
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: String,
            default: null,
        },
    },
}
</script>
