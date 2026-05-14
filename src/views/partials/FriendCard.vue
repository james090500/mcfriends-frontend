<template>
    <div class="card mb-2">
        <div class="row g-0">
            <div class="col-3 p-2">
                <img
                    :src="`https://api.minecraftapi.net/api/v2/profile/${friend.profileId}/avatar?overlay=true`"
                />
            </div>
            <div class="col-9 p-2">
                <h5>
                    {{ friend.name }}
                    <span v-if="!incoming && !outgoing" class="float-end">
                        <span
                            v-if="!presence"
                            class="badge rounded-pill text-bg-danger"
                            >Offline
                        </span>
                        <span v-else class="badge rounded-pill text-bg-success"
                            >{{ friendStatus(presence.status) }}
                        </span>
                        <button
                            class="btn btn-sm btn-danger ms-1"
                            @click="decline"
                        >
                            <font-awesome-icon icon="fa-user-minus" />
                        </button>
                    </span>
                    <span v-else-if="incoming && !outgoing" class="float-end">
                        <button
                            class="btn btn-sm btn-success me-1"
                            @click="accept"
                        >
                            <font-awesome-icon icon="fa-user-plus" />
                        </button>
                        <button class="btn btn-sm btn-danger" @click="decline">
                            <font-awesome-icon icon="fa-user-xmark" />
                        </button>
                    </span>
                    <span v-else-if="!incoming && outgoing" class="float-end">
                        <button class="btn btn-sm btn-danger" @click="decline">
                            <font-awesome-icon icon="fa-user-xmark" />
                        </button>
                    </span>
                </h5>
                <kbd>{{ friend.profileId }}</kbd>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        accept() {
            this.$emit('updateFriend', 'ADD', this.friend.profileId)
        },
        decline() {
            this.$emit('updateFriend', 'REMOVE', this.friend.profileId)
        },
        friendStatus(status) {
            console.log(status)
            switch (status) {
                case 'OFFLINE':
                    return 'Offline'
                case 'ONLINE':
                    return 'Online'
                case 'PLAYING_HOSTED_SERVER':
                    return 'In a joinable world'
                case 'PLAYING_OFFLINE':
                    return 'In a world'
                case 'PLAYING_REALMS':
                    return 'In a Realm'
                case 'PLAYING_SERVER':
                    return 'On a server'
                default:
                    return 'Unknown'
            }
        },
    },
    props: {
        friend: {
            type: Object,
            default: null,
        },
        presence: {
            type: Object,
            default: null,
        },
        incoming: {
            type: Boolean,
            default: false,
        },
        outgoing: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['updateFriend'],
}
</script>
