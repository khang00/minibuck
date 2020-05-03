<template>
  <v-row justify="center" align="start">
    <v-col cols="5">
      <post-card height="80%" :post="post" />
    </v-col>
    <v-col cols="3">
      <v-row>
        <post-details height="50%" :post="post" />
      </v-row>
      <v-row>
        <post-comment class="mt-3" />
        <post-comment class="mt-3" />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import PostDetails from '../../components/post/PostDetails'
import PostCard from '../../components/post/PostCard'
import PostComment from '../../components/post/PostComment'
export default {
  name: 'Index',
  components: {
    'post-card': PostCard,
    'post-details': PostDetails,
    'post-comment': PostComment
  },
  computed: {
    post () {
      return this.$store.getters['post/getPosts'][3]
    }
  },
  mounted () {
    this.$store.dispatch('post/retrievePosts')
  }
}
</script>

<style scoped>

</style>
