<template>
    <footer class="container-fluid bg-very-dark">
        <div class="row justify-content-center p-3">
            <div class="col-lg-3">
                <img class="img-fluid" src="/images/logo.png" /><br />
                <a class="text-white" href="mailto:james@mcfriends.net"
                    >James@MCFriends.Net</a
                >
                <p>
                    Built by
                    <a target="_blank" href="https://github.com/james090500"
                        >james090500</a
                    >
                    with help from
                    <a target="_blank" href="https://github.com/Siriuo"
                        >Siriuo</a
                    >
                </p>
                <small>Like what I do? Feel free to support me!</small><br />
                <a
                    class="btn btn-warning btn-sm"
                    href="https://ko-fi.com/james090500"
                    target="_blank"
                    ><font-awesome-icon :icon="['fab', 'ko-fi']" /> Support me
                    on Ko-fi</a
                >
            </div>
            <div class="col-lg-2">
                <strong>Legal</strong>
                <ul>
                    <li>
                        <router-link to="/legal/terms"> Terms </router-link>
                    </li>
                    <li>
                        <router-link to="/legal/privacy"> Privacy </router-link>
                    </li>
                    <li>
                        <router-link to="/legal/rules"> Rules </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-lg-2"></div>
            <div class="col-lg-2">
                <strong>Interact</strong>
                <br />
                <a
                    class="btn btn-primary"
                    target="_blank"
                    href="https://capecraft.net"
                    ><font-awesome-icon icon="cube" /> Join our Minecraft
                    Server</a
                >
                <a
                    class="btn btn-discord mt-lg-2"
                    target="_blank"
                    href="/discord"
                    ><font-awesome-icon :icon="['fab', 'discord']" /> Join our
                    Discord</a
                >
                <a
                    class="btn btn-option mt-lg-2"
                    target="_blank"
                    href="https://github.com/mcfriends"
                    ><font-awesome-icon :icon="['fab', 'github']" /> Visit our
                    GitHub</a
                >
            </div>
        </div>
    </footer>
    <div class="text-center bg-super-dark">
        <strong
            >NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED
            WITH MOJANG.</strong
        >
    </div>
</template>

<script>
export default {}
</script>
