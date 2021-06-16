<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>
        <article-mata :article="article" />
      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <article-mata :article="article" />
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <article-comments :article="article" />
          
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { getArticle } from '@/api/article'
import MarkDownIt from 'markdown-it'
import ArticleMata from '../components/article-meta'
import ArticleComments from '../components/article-comments'

export default {
  name: 'Article',
  async asyncData({ params }) {
    const { data } = await getArticle(params.slug)
    const md = new MarkDownIt()
    const { article } = data
    article.body = md.render(article.body)
    article.favoriteDisabled= false
    article.followDisabled = false
    return { article }
  },
  data() {
    return {
    
    }
  },
  components: {
    ArticleMata,
    ArticleComments
  },
  methods: {},
}
</script>