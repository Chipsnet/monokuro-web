<template>
    <div id="body">
        <b-container id="header" class="text-center py-5">
            <Logo class="header-logo" />
        </b-container>
        <div id="content">
            <div class="box">
                <b-nav tabs justified class="nav">
                    <b-nav-item link-classes="text-white" to="/diary"
                        >Diary</b-nav-item
                    >
                    <b-nav-item link-classes="text-white" @click="menu"
                        >MONO's House</b-nav-item
                    >
                    <b-nav-item link-classes="text-white" to="/"
                        >Town MAP</b-nav-item
                    >
                    <b-nav-item link-classes="text-white" @click="menu"
                        >Doll's room</b-nav-item
                    >
                    <b-nav-item link-classes="text-white" @click="menu"
                        >Flag</b-nav-item
                    >
                </b-nav>
                <nuxt />
            </div>
        </div>
    </div>
</template>

<script>
    const menuClicked = () => {
        alert("現在開発中です...");
    };

    import Logo from "@/assets/header.svg";

    export default {
        components: {
            Logo,
        },

        methods: {
            menu() {
                menuClicked();
            },
        },

        mounted() {
            Typekit.load({ async: true });
        },

        head() {
            return {
                script: [
                    {
                        src:
                            "https://identity.netlify.com/v1/netlify-identity-widget.js",
                    },
                ],
            };
        },
    };
</script>

<style>
    html {
        height: 100%;
    }

    body {
        height: 100%;
        margin: 0;
        font-family: ta-hougan-k500, sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    #body {
        height: 100%;
        margin: 0;
    }

    .header-logo {
        filter: drop-shadow(3px 3px 3px #000);
        width: 500px;
    }

    @media screen and (max-width: 480px) {
        .header-logo {
            width: 300px;
        }
    }

    #content {
        background-image: url("~assets/background.png");
        height: 100vh;
        width: auto;
        padding: 4% 20%;
    }

    @media screen and (max-width: 480px) {
        #content {
            padding: 4% 10%;
        }
    }

    @media screen and (max-width: 1024px) {
        #content {
            padding: 4% 10%;
        }
    }

    .box {
        display: block;
        background-color: rgba(255, 255, 255, 0.9);
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .nav {
        background-color: #292929;
    }

    .maincontent {
        padding: 30px;
        font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
        font-weight: 600;
        font-style: normal;
    }

    h1 {
        position: relative;
        padding: 0.25em 1em;
        border: solid 2px black;
        border-radius: 3px 0 3px 0;
    }

    h1:before,
    h1:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        border: solid 2px black;
        border-radius: 50%;
    }

    h1:after {
        top: -12px;
        left: -12px;
    }
    h1:before {
        bottom: -12px;
        right: -12px;
    }

    p {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        p,
        h1 {
            font-size: 1.1rem;
        }

        a {
            font-size: 0.9rem;
        }
    }

    /*スクロールバー全体*/
    ::-webkit-scrollbar {
        width: 10px;
    }

    /*スクロールバーの軌道*/
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    }

    /*スクロールバーの動く部分*/
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 50, 0.5);
        border-radius: 10px;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
    }
</style>
