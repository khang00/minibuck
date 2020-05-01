<template>
  <v-card :height="height" :width="width">
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-actions>
      <v-col>
        <v-text-field
          v-for="(property, key) in content"
          :key="key"
          v-model="property.value"
          class="mt-3"
          :label="key"
          :type="property.type"
          :hint="'Type in your ' + key"
          outlined
          solo
        />
        <v-btn class="mt-3" color="primary" block @click="doAction">
          {{ title }}
        </v-btn>
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    model: {
      type: Object,
      default () {
        return {}
      }
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    action: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      content: { ...this.model }
    }
  },
  methods: {
    doAction () {
      this.$emit(this.action, this.content)
    }
  }
}
</script>

<style scoped>
</style>
