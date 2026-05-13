<template>
    <div v-if="!errors" class="skin-container">
        <button
            v-if="!hideElytra"
            id="toggleElytra"
            class="btn btn-link"
            @click="toggleElytra"
        >
            <font-awesome-icon :icon="buttonClass" /> Elytra
        </button>
        <canvas class="minecraft-skin-viewer" :id="elementId" />
    </div>
    <div v-else class="alert alert-danger me-10">
        <strong>The module failed to load!</strong>
        <p>
            Either Your browser doesn't support WebGL or the skin viewer crashed
        </p>
    </div>
</template>

<script>
import MinecraftSkinViewer from 'minecraft-skin-viewer'
import { mapState } from 'vuex'

export default {
    props: {
        profile: {
            type: Object,
            default: null,
        },
        uuid: {
            type: String,
            default: null,
        },
        cape: {
            type: String,
            default: null,
        },
        ears: {
            type: String,
            default: null,
        },
        hideElytra: Boolean,
    },
    data() {
        return {
            elementId: null,
            errors: false,
            minecraftSkinViewer: null,
            currentUuid: null,
            currentCape: null,
            currentEars: null,
            buttonClass: 'toggle-off',
            showElytra: false,
        }
    },
    computed: mapState(['user']),
    watch: {
        uuid: {
            handler: function (newValue, _oldValue) {
                this.currentUuid = newValue
            },
            immediate: true,
        },
        cape: {
            handler: function (newValue, _oldValue) {
                this.loadCape(newValue)
            },
            immediate: true,
        },
        ears: {
            handler: function (newValue, _oldValue) {
                this.loadEars(newValue)
            },
            immediate: true,
        },
        user: function () {
            this.currentCape = this.user.profile.cape_url
            this.currentEars = this.user.profile.ear_url
            this.dinnerbone = this.user.profile.upsideDown
            this.glint = this.user.profile.capeGlint
            this.loadTextures()
        },
    },
    created() {
        //For multiple elements
        this.elementId =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)

        //Load the textures depending on some variables
        if (this.profile != null) {
            this.currentUuid = this.profile.uuid
            this.currentCape = this.profile.profile.cape_url
            this.currentEars = this.profile.profile.ear_url
            this.dinnerbone = this.profile.profile.upsideDown
            this.glint = this.profile.profile.capeGlint
        } else if (this.user != null) {
            this.currentUuid = this.user.uuid
            this.currentCape = this.user.profile.cape_url
            this.currentEars = this.user.profile.ear_url
            this.dinnerbone = this.user.profile.upsideDown
            this.glint = this.user.profile.capeGlint
        }

        //Lets load the custom data
        this.currentUuid = this.uuid ?? this.currentUuid
        this.currentSkin = `https://api.minecraftapi.net/v3/profile/${this.currentUuid}/skin`
        this.currentCape = this.cape ?? this.currentCape
        this.currentEars = this.ears ?? this.currentEars
    },
    mounted() {
        try {
            //Create the object
            this.createObject()
        } catch (error) {
            console.log(error)
            this.errors = true
        }
    },
    unmounted() {
        this.minecraftSkinViewer.dispose()
    },
    methods: {
        createObject() {
            this.minecraftSkinViewer = new MinecraftSkinViewer({
                skin: this.currentSkin,
                cape: this.currentCape,
                ears: this.currentEars,
                dinnerbone: this.dinnerbone,
                glint: this.glint,
                canvas: document.getElementById(this.elementId),
            })

            console.log(2)
            //Set rotation
            this.minecraftSkinViewer.playerObject.group.rotation.y = Math.PI
            if (this.dinnerbone) {
                this.minecraftSkinViewer.playerObject.group.rotation.y = 0
            }
        },
        loadTextures() {
            console.log(1)
            this.minecraftSkinViewer.loadCape(this.currentCape)
            this.minecraftSkinViewer.loadEars(this.currentEars)

            //Set Options
            this.minecraftSkinViewer.setGlint(this.glint)
            this.minecraftSkinViewer.setDinnerbone(this.dinnerbone)

            //Set rotation
            this.minecraftSkinViewer.playerObject.group.rotation.y = Math.PI
            if (this.dinnerbone) {
                this.minecraftSkinViewer.playerObject.group.rotation.y = 0
            }
        },
        loadSkin(url) {
            try {
                this.minecraftSkinViewer.loadSkin(url)
            } catch (error) {
                return
            }
        },
        loadCape(url) {
            try {
                this.currentCape = url
                this.minecraftSkinViewer.loadCape(url)
            } catch (error) {
                return
            }
        },
        loadEars(url) {
            try {
                this.currentEars = url
                this.minecraftSkinViewer.loadEars(url)
            } catch (error) {
                return
            }
        },
        toggleElytra() {
            this.showElytra = !this.showElytra
            this.minecraftSkinViewer.setElytra(this.showElytra)
            this.buttonClass = this.showElytra ? 'toggle-on' : 'toggle-off'
        },
    },
}
</script>

<style lang="scss">
.skin-container {
    position: relative;
}

#toggleElytra {
    right: 0;
    position: absolute;
    z-index: 100;
}

.minecraft-skin-viewer {
    filter: drop-shadow(-5px 5px 7px rgba(0, 0, 0, 0.4));
    cursor: move;
    width: 100%;
    height: 50vh;
    position: relative;
    display: block;
}
</style>
