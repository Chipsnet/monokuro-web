<template>
    <div class="maincontent">
        <h1>TOWN MAP</h1>
        <p>モノクロの街へようこそ<br />ここはタウンマップ。</p>
        <p>この街の情報が収束する地図。</p>
        <p>君は新しい旅人かい？<br />それとも、隣人さんだったかな？</p>
        <p>
            どちらにせよ、ここでこの街を眺めることをおすすめするよ。
        </p>
        <h1 class="mt-5">Diary</h1>
        <p>
            モノクロくんや、モノぐるみのみんなの営みを観察できる観察日記のようなものさ。
        </p>
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
</template>

<script>
    export default {
        methods: {
            menu() {
                menuClicked();
            },
        },

        head() {
            return {
                title: "Town MAP",
            };
        },
    };
</script>
