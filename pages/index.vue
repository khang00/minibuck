<template>
  <v-row justify="space-around">
    <v-col v-for="(imagesInCol, i) in imagesForCols" :key="i" cols="2">
      <v-card v-for="(image, j) in imagesInCol" :key="j" class="mt-5" width="100%" height="auto">
        <v-img
          height="auto"
          width="100%"
          :src="image"
          class="align-end"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      totalCards: 1,
      totalCols: 6,
      images: [
        'https://i.pinimg.com/564x/c0/e6/8f/c0e68fb0427194738cb3d0b47c93e678.jpg',
        'https://i.pinimg.com/originals/66/2a/30/662a30b2f33056eed6a716bbc175100d.jpg',
        'https://i.pinimg.com/564x/47/58/84/475884753c8bef2afd6dd48849e69af0.jpg',
        'https://i.pinimg.com/564x/e7/e9/2a/e7e92a0d78340b5a73dfac82a92c9f9b.jpg',
        'https://i.pinimg.com/originals/27/19/cf/2719cfb518e02c269316d7d5050c21ea.jpg',
        'https://i.pinimg.com/564x/5a/cd/73/5acd73f290123a47e10ef73624083701.jpg',
        'https://cdn.vuetifyjs.com/images/cards/store.jpg',
        'https://i.pinimg.com/564x/e7/d8/b0/e7d8b0c71dab26a1901d061bbe1728eb.jpg',
        'https://i.imgur.com/gxZU0eS.jpg',
        'https://i.pinimg.com/564x/3f/88/f5/3f88f5a12cedc5c26025053886f7b856.jpg',
        'https://i.pinimg.com/originals/90/7f/52/907f528cb5329c23547b8f6d2a277663.jpg',
        'https://i.pinimg.com/564x/cb/47/00/cb4700c38556f6e65d2400862b54db78.jpg',
        'https://i.pinimg.com/originals/9f/1d/d3/9f1dd328d0b820acffefafdfcc687e5e.jpg',
        'https://i.pinimg.com/originals/27/12/9f/27129f47dd0941f3ac44a2aa6d859ff0.jpg',
        'https://i.pinimg.com/originals/76/dd/f1/76ddf15c4dfafbf7ddbe6709f3c5042c.jpg',
        'https://i.pinimg.com/originals/bb/39/47/bb3947b75c946aec3ced1bf5c4ba077d.jpg'
      ],
      card: {
        image: 'https://i.pinimg.com/564x/c0/e6/8f/c0e68fb0427194738cb3d0b47c93e678.jpg',
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
  },
  computed: {
    imagesForCols () {
      const colsMatrix = []
      for (let i = 0; i < this.totalCols; ++i) {
        colsMatrix.push([])
      }

      for (let i = 0; i < this.images.length; ++i) {
        colsMatrix[i % 6].push(this.images[i])
      }
      return colsMatrix
    }
  }
}
</script>
