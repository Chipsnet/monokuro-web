<template>
    <div class="maincontent">
        <b-card
            bg-variant="dark"
            text-variant="white"
            class="my-3"
            v-for="blog in blogPosts"
            :key="blog.title"
            v-bind:title="blog.title"
        >
            <b-card-text class="h6"
                ><b-icon-person></b-icon-person> {{ blog.author }}</b-card-text
            >
            <b-card-text>{{ blog.description }}</b-card-text>
            <b-button variant="outline-light" v-bind:to="'diary/' + blog.slug"
                >もっと見る</b-button
            >
        </b-card>
        <b-link href="/admin">管理画面</b-link>
    </div>
</template>

<script>
    export default {
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
                title: "Diary",
            };
        },

        computed: {
            blogPosts() {
                return this.$store.state.blogPosts.slice().reverse();
            },
        },
    };
</script>
