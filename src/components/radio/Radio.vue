<template>
  <div class="radio">
    <Tabs>
      <Tab v-for="(item, index) in list" :key="index"
          :href="href(item.name)" :name="item.name"
          :selected="id ? id === item.name : index === 0">
        <RadioList :list="item.radioList" />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import json from '../../json/radio'
import RadioList from './RadioList'

export default {
  name: 'radio',
  props: ['id'],
  data() {
    return {
      list: json
    }
  },
  methods: {
    href(name) {
      return `#/radio/${name}`
    }
  },
  components: { RadioList }
}

</script>

<style lang="scss" scoped>
  .radio {
    margin-top: 14px;
  }
</style>


