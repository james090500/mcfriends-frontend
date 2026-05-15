<template>
    <section>
        <h1 class="text-center">Your Profile</h1>
        <hr />
        <ErrorMessage :error="error" />
        <AddFriend @add-friend="addFriend" />
        <hr />
        <div class="row" v-if="friends">
            <div class="col-md-8">
                <h4>Friends</h4>
                <div class="row">
                    <div
                        class="col-md-6"
                        v-for="friend in friends.friends"
                        :key="friend.profileId"
                    >
                        <FriendCard
                            :friend="friend"
                            :presence="presence[friend.profileId]"
                            @update-friend="updateFriend"
                        />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h4>Your Settings</h4>
                <div>
                    <div class="form-check form-switch">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="friendCheck"
                            disabled="true"
                            v-model="options.friends"
                        />
                        <label class="form-check-label" for="friendCheck"
                            >Friends</label
                        >
                    </div>
                    <div class="form-check form-switch">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="inviteCheck"
                            disabled="true"
                            v-model="options.invites"
                        />
                        <label class="form-check-label" for="inviteCheck"
                            >Accept Invites</label
                        >
                    </div>
                    <small
                        >Change these settings in Minecraft from the main menu.
                        Click Options then Online.</small
                    >
                </div>
                <hr />
                <h4>Incoming Requests</h4>
                <div
                    class="col-12"
                    v-for="friend in friends.incomingRequests"
                    :key="friend.profileId"
                >
                    <FriendCard
                        :friend="friend"
                        :incoming="true"
                        @update-friend="updateFriend"
                    />
                </div>
                <strong
                    v-if="
                        !friends.incomingRequests ||
                        friends.incomingRequests.length == 0
                    "
                    >You have no pending friend requests</strong
                >
                <hr />
                <h4>Outgoing Requests</h4>
                <div
                    class="col-12"
                    v-for="friend in friends.outgoingRequests"
                    :key="friend.profileId"
                >
                    <FriendCard
                        :friend="friend"
                        :outgoing="true"
                        @update-friend="updateFriend"
                    />
                </div>
                <strong
                    v-if="
                        !friends.outgoingRequests ||
                        friends.outgoingRequests.length == 0
                    "
                    >You have no pending friend requests</strong
                >
            </div>
        </div>
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
import AddFriend from '@/views/partials/AddFriend.vue'
import FriendCard from '@/views/partials/FriendCard.vue'

export default {
    data() {
        return {
            error: null,
            options: {
                friends: false,
                invites: false,
            },
            attributes: [],
            friends: [],
            presence: [],
        }
    },
    computed: {
        ...mapState(['user']),
    },
    created() {
        this.getAttributes()
        this.getFriends()
        this.getPresence()
    },
    methods: {
        getAttributes() {
            axios
                .get('/api/attributes')
                .then((response) => {
                    const attributes = response.data.options
                    this.options.friends = attributes.friends == 'ENABLED'
                    this.options.invites = attributes.acceptInvites == 'ENABLED'
                })
                .catch(this.handleError)
        },
        getFriends() {
            axios
                .get('/api/friends')
                .then((response) => {
                    this.friends = response.data.list
                })
                .catch(this.handleError)
        },
        getPresence() {
            axios
                .get('/api/presence')
                .then((response) => {
                    this.presence = Object.fromEntries(
                        response.data.presence.map((p) => [
                            p.profileId.replace(/-/g, ''),
                            p,
                        ])
                    )
                })
                .catch(this.handleError)
        },
        addFriend(name) {
            this.error = null
            axios
                .post('/api/friends/update', {
                    type: 'ADD',
                    name,
                })
                .then((response) => {
                    this.friends = response.data
                })
                .catch(this.handleError)
        },
        updateFriend(type, profileId) {
            this.error = null
            axios
                .post('/api/friends/update', {
                    type,
                    id: profileId,
                })
                .then((response) => {
                    this.friends = response.data
                })
                .catch(this.handleError)
        },
        handleError(error) {
            if (error.response.data.error) {
                this.error = error.response.data.error
            } else {
                this.error = 'Something went wrong'
            }
        },
    },
    components: {
        AddFriend,
        FriendCard,
    },
}
</script>
