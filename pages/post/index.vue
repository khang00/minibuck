<template>
  <v-row justify="center" align="start">
    <v-col cols="8">
      <v-card width="100%">
        <v-row no-gutters>
          <v-col cols="6">
            <post-card height="100%" :borderless="true" :post="post" />
          </v-col>
          <v-col cols="6">
            <post-details height="100%" :borderless="true" :post="post" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import PostDetails from '../../components/post/PostDetails'
import PostCard from '../../components/post/PostCard'
export default {
  name: 'Index',
  components: {
    'post-card': PostCard,
    'post-details': PostDetails
  },
  computed: {
    post () {
      return this.$store.getters['post/getPosts'][10]
    }
  },
  mounted () {
    this.$store.dispatch('post/retrievePosts')
  }
}
</script>

<style scoped>

</style>
