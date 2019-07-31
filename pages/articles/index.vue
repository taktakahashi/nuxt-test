<template>
  <ul>
    <li v-for="article in articles" :key="`article-${article.id}`">
      <nuxt-link :to="articleLink(article.id)">
        {{ article }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      articles: []
    }
  },
  asyncData() {
    return axios.get(`http://lvh.me:8080/articles`).then((response) => {
      return { articles: response.data }
    })
  },
  methods: {
    articleLink(id) {
      return `/articles/${id}`
    }
  }
}
</script>
