<template>
  <v-card :height="height" :width="width" :tile="borderless">
    <v-img :src="post.image" />
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    borderless: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    },
    post: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
