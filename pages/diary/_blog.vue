<template>
    <div class="maincontent">
        <b-link to="/diary">＜一覧に戻る</b-link>
        <h1 class="title mt-2">{{ blogPost.title }}</h1>
        <p class="h6">最終更新: {{ blogDate }}</p>
        <p class="h6">書いた人: {{ blogPost.author }}</p>
        <div v-html="$md.render(blogPost.body)" class="my-4"></div>
    </div>
</template>

<script>
    let blogTitle;

    export default {
        methods: {
            menu() {
                menuClicked();
            },
        },

        mounted() {
            Typekit.load({ async: true });
        },

        async asyncData({ params, payload }) {
            if (payload) {
                return { blogPost: payload }
            } else {
                let blogPost = await require(`~/assets/content/blog/${params.blog}.json`)
                blogTitle = blogPost.title;

                let postDateToDate = new Date(blogPost.date)
                
                return {
                    blogPost, blogDate: postDateToDate.toLocaleString('ja')
                };
            }
        },

        head() {
            return {
                title: blogTitle,
            };
        },
    };
</script>
