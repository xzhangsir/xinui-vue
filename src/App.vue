<template>
  <!-- <x-button /> -->
  <x-magnifier :imgUrl="imgUrl"
               :imgWidth="imgWidth"
               :imgHeight="imgHeight"
               :magWidth="magWidth"
               :magHeight="magHeight" />
  <button @click="change">hhh</button>
  <!-- <div v-for="item in numLength">{{item}}</div> -->
  <x-digitalRoll :count="numVal" />
  <x-textOpenCutOut style="width:200px"
                    :content="content" />
</template>


<script>
import { ref, reactive, toRefs } from 'vue'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      imgUrl:
        'https://pics4.baidu.com/feed/f9198618367adab4d0cfd8d54eec0a148601e4cf.jpeg?token=bd97af6ecb62fffbf9f400ecec9b5c6f',
      imgWidth: 375,
      imgHeight: 250,
      magWidth: 100,
      magHeight: 100
    })
    const numVal = ref(567)
    const content = ref('jijijij')
    const change = () => {
      // numVal.value = (numVal.value * 1 + 0.5).toFixed(1)
      // console.log(numVal.value)
      numVal.value = parseInt(Math.random() * (99999999 - 89 + 1) + 89, 10)
    }
    const goAnchor = selector => {
      console.log(selector)
      // console.log(querySelector(selector))
      // console.log(document.getElementsByClassName('.nav')[0])
      // document
      //   .getElementsByClassName('.nav')[0]
      //   .querySelector(selector)
      //   .scrollIntoView({
      //     behavior: 'smooth', // 平滑过渡
      //     block: 'start' // 上边框与视窗顶部平齐。默认值
      //   })
    }
    return {
      ...toRefs(state),
      numVal,
      change,
      content
    }
  }
}
</script>

<style>
</style>
