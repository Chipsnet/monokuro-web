<template>
    <div id="body">
        <b-container id="header" class="text-center py-5">
            <Logo class="header-logo" />
        </b-container>
        <div id="content">
        <div class="box">
            <b-nav tabs justified class="nav">
                <b-nav-item active>Diary</b-nav-item>
                <b-nav-item link-classes="text-white" @click="menu">MONO's House</b-nav-item>
                <b-nav-item link-classes="text-white" @click="menu">Town MAP</b-nav-item>
                <b-nav-item link-classes="text-white" @click="menu">Doll's room</b-nav-item>
                <b-nav-item link-classes="text-white" @click="menu">Flag</b-nav-item>
            </b-nav>
            <div class="maincontent">
                <b-link href="/diary">＜一覧に戻る</b-link>
                <h1 class="title mt-2">{{blogPost.title}}</h1>
                <p class="h6">最終更新: {{blogPost.date}}</p>
                <p class="h6">書いた人: {{blogPost.author}}</p>
                <div v-html="$md.render(blogPost.body)" class="my-4"></div>
            </div>
        </div>

        </div>
    </div>
</template>

<script>
const menuClicked = () => {
  alert("現在開発中です...")
}

import Logo from '@/assets/header.svg'

export default {
    components: {
        Logo
    },

    methods: {
        menu() {
        menuClicked()
        }
    },

    mounted() {
        Typekit.load({async: true})
    },

    async asyncData({ params, payload }) {
        if (payload) return { blogPost: payload };
        else
        return {
            blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
        };
    },
}
</script>


<style>
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: ta-hougan-k500,sans-serif;
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

  @media screen and (max-width:480px) { 
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

  @media screen and (max-width:480px) { 
    #content {
      padding: 4% 10%;
    }
  }

  @media screen and (max-width:1024px) { 
    #content {
      padding: 4% 10%;
    }
  }

  .box {
    display: block;
    background-color: rgba(255,255,255,0.9);
    width: 100%;
    height: 100%;
    overflow: scroll;
  }

  .nav {
    background-color: #292929;
  }

  .maincontent {
    padding: 30px;
    font-family: ta-candy,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .title {
    position: relative;
    padding: 0.25em 1em;
    border: solid 2px black;
    border-radius: 3px 0 3px 0;
  }

  .title:before, .title:after {
    content: '';
    position: absolute;
    width:10px;
    height: 10px;
    border: solid 2px black;
    border-radius: 50%;
  }

  .title:after {
    top:-12px;
    left:-12px;
  }
  .title:before {
    bottom:-12px;
    right:-12px;
  }

  p {
    font-size: 1.5rem;
  }

  @media screen and (max-width:480px) { 
    p, h1 {
      font-size: 1.1rem;
    }

    a {
      font-size: 0.9rem;
    }
  }
</style>