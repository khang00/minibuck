<template>
  <v-row justify="space-between">
    <v-card v-for="i in totalCards" :key="i" class="ma-3" width="23%">
      <v-container>
        <v-row justify="space-around">
          <v-col cols="auto">
            <v-img
              height="230"
              width="230"
              :src="card.image"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title>
                {{ card.title }}
              </v-card-title>
            </v-img>
          </v-col>
          <v-col cols="auto" class="text-center pl-0">
            <v-row class="flex-column fill-height" justify="center">
              <v-col v-for="(action, index) in card.actions" :key="index" class="px-0">
                <v-btn icon>
                  <v-icon>{{ action.icon }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      totalCards: 8,
      card: {
        image: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
        title: 'The title',
        subTitle: 'some thing longer than the title',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.`,
        actions: [
          { icon: 'mdi-heart' },
          { icon: 'mdi-bookmark' },
          { icon: 'mdi-share-variant' }
        ]
      }
    }
  }
}
</script>
