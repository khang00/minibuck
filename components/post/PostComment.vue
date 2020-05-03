<template>
  <v-row justify="space-around">
    <v-avatar>
      <v-img src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" />
    </v-avatar>
    <v-card class="rounded-border" :height="height" :width="width" :tile="borderless">
      <v-card-title>
        KhangDang
      </v-card-title>
      <v-card-text>
        What a beautyaaaaaaaaaaaaaaaaaaaaaaaa
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'PostComment',
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
    }
  }
}
</script>

<style scoped>
  .avatar-card {
    border-radius: 50% !important;
  }
  .rounded-border {
    border-radius: 15px !important;
  }
</style>
