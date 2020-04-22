<template>
  <div id="body">
    <b-container id="header" class="text-center py-5">
      <Logo class="header-logo" />
    </b-container>
    <div id="content">
      <div class="box">
          <b-nav tabs justified class="nav">
            <b-nav-item link-classes="text-white" href="./diary">Diary</b-nav-item>
            <b-nav-item link-classes="text-white" @click="menu">MONO's House</b-nav-item>
            <b-nav-item active>Town MAP</b-nav-item>
            <b-nav-item link-classes="text-white" @click="menu">Doll's room</b-nav-item>
            <b-nav-item link-classes="text-white" @click="menu">Flag</b-nav-item>
          </b-nav>
          <div class="maincontent">
            <h1>TOWN MAP</h1>
            <p>モノクロの街へようこそ<br>ここはタウンマップ。</p>
            <p>この街の情報が収束する地図。</p>
            <p>君は新しい旅人かい？<br>それとも、隣人さんだったかな？</p>
            <p>どちらにせよ、ここでこの街を眺めることをおすすめするよ。</p>
            <h1 class="mt-5">Diary</h1>
            <p>モノクロくんや、モノぐるみのみんなの営みを観察できる観察日記のようなものさ。</p>
            <p>現在はまだ歯車は回っていないようだ。</p>
            <h1 class="mt-5">MONO's House</h1>
            <p>この街の支配人、モノクロコードのお屋敷。</p>
            <p>庭園では、色彩豊かな創作物たちがいるそうな。</p>
            <p>現在はまだ歯車は回っていないようだ。</p>
            <h1 class="mt-5">Doll's room</h1>
            <p>この街の働き者、モノぐるみたちの部屋</p>
            <p>人形たちがこちらに向かって挨拶をしているようだ。</p>
            <p>現在はまだ歯車は回っていないようだ。</p>
            <h1 class="mt-5">Flag</h1>
            <p>旅人の皆さんたちにも街づくりを手伝ってもらおう。</p>
            <p>いろんな街のパーツを提供してくれないか？</p>
            <p>現在はまだ歯車は回っていないようだ。</p>
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

  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
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

  h1 {
    position: relative;
    padding: 0.25em 1em;
    border: solid 2px black;
    border-radius: 3px 0 3px 0;
  }

  h1:before, h1:after {
    content: '';
    position: absolute;
    width:10px;
    height: 10px;
    border: solid 2px black;
    border-radius: 50%;
  }

  h1:after {
    top:-12px;
    left:-12px;
  }
  h1:before {
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