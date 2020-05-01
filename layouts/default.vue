<template>
  <v-app dark>
    <v-app-bar hide-on-scroll dense fixed app />
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
