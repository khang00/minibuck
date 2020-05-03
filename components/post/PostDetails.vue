<template>
  <v-card class="rounded-border" :height="height" :width="width" :tile="borderless">
    <v-card-actions>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="post.postOwnerAvatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ post.postOwnerName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.subTitle }}</v-card-subtitle>
    <v-card-text>{{ post.text }}</v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostDetails',
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

<style scoped>
  .rounded-border {
    border-radius: 15px !important;
  }
</style>
