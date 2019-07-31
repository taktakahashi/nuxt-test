<template>
  <div>
    {{ article }}
    <ul>
      <li v-for="unit in unitables" :key="`unit-${article.id}-${unit.id}`">
        {{ unit }}
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
