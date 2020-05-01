<template>
  <v-app dark>
    <v-app-bar hide-on-scroll fixed app>
      <v-app-bar-nav-icon />
      <v-toolbar-title>KhangDang01</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center" no-gutters>
          <v-col cols="12">
            <nuxt />
          </v-col>
        </v-row>
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
