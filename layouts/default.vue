<template>
  <v-app dark>
    <v-app-bar hide-on-scroll fixed app>
      <v-app-bar-nav-icon />
      <v-toolbar-title>KhangDang01</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ]
    }
  }
}
</script>
