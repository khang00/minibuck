<template>
  <v-card class="rounded-border" :height="height" :width="width" :tile="borderless">
    <v-img max-height="90vh" :height="height" :width="width" :src="post.image" contain />
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
  .rounded-border {
    border-radius: 15px !important;
  }
</style>
