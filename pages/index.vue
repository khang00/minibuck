<template>
  <v-row justify="space-around">
    <v-col v-for="(postsInCol, i) in postsForCols" :key="i" :cols="12 / totalCols">
      <post-card v-for="(post, j) in postsInCol" :key="j" class="mt-5" :post="post" />
    </v-col>
  </v-row>
</template>

<script>
import PostCard from '../components/post/PostCard'
export default {
  name: 'Index',
  components: {
    'post-card': PostCard
  },
  data () {
    return {
      totalCols: 6
    }
  },
  computed: {
    postsForCols () {
      const colsMatrix = []
      for (let i = 0; i < this.totalCols; ++i) {
        colsMatrix.push([])
      }

      for (let i = 0; i < this.posts.length; ++i) {
        colsMatrix[i % this.totalCols].push(this.posts[i])
      }
      return colsMatrix
    },
    posts () {
      return this.$store.getters['post/getPosts']
    }
  },
  mounted () {
    this.$store.dispatch('post/retrievePosts')
  }
}
/**
 * 0 1 2
 * 0 4 8
 * 1 5 9
 * 2 6 10
 * 3 7
 * for( i = 0; i < totalCols; ++i )
 *  for ( j = 0; j < ceil(images.length / totalCols); ++j )
 *  {
 *      if(i * j == images.length)
 *        break
 *      else
 *        images[i * j]
 *  }
 */
</script>
