<template>
  <div>
    <nuxt-link to="/articles">back</nuxt-link>
    {{ article }}
    <ul>
      <li v-for="unit in unitables" :key="`unit-${article.id}-${unit.unitableType}-${unit.id}`">
        {{ unit }}
        {{ `unit-${article.id}-${unit.id}` }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      article: null,
      unitables: []
    }
  },
  asyncData({ params }) {
    return axios.get(`http://lvh.me:8080/articles/${params.id}`).then((response) => {
      return { article: response.data.Article, unitables: response.data.Unitables }
    })
  },
  methods: {
    articleLink(id) {
      return `/articles/${id}`
    }
  }
}
</script>
