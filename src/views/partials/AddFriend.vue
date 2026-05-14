<template>
    <form @submit.prevent="doSearch">
        <div class="row">
            <div class="col-md">
                <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    v-model="search"
                    maxlength="16"
                />
            </div>
            <div class="col-md-4">
                <div class="d-grid mt-1 mt-md-0">
                    <button
                        type="submit"
                        class="btn btn-lg btn-primary"
                        :disabled="!search"
                    >
                        <font-awesome-icon icon="user-plus" /> Add Friend
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            search: null,
        }
    },
    methods: {
        doSearch() {
            this.$emit('addFriend', this.search)
        },
    },
    emits: ['addFriend'],
}
</script>
