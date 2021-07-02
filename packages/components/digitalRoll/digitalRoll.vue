<template>
  <ul class="x-numroll">
    <li v-for="(item,index) in newNum"
        :key="index"
        :class="[item === ','? 'x-comma' : 'x-itemnum']">
      <span v-if="item === ','">{{item}}</span>
      <span v-else>
        <i :ref="numberItem"
           :style="{'transitionDuration':duration}">0123456789</i>
      </span>
    </li>
  </ul>
</template>
<script>
import { onMounted, computed, watch } from 'vue'

export default {
  name: 'x-digitalRoll',
  props: {
    count: {
      required: true,
      type: [String, Number],
      validator: value => value * 1 >= 0
    },
    maxNum: {
      type: [String, Number],
      default: 9
    },
    duration: {
      type: [String],
      default: '1s'
    }
  },
  setup(props) {
    const itemRefs = []
    const numberItem = el => {
      el && itemRefs.push(el)
    }
    const newNum = computed(() => {
      return (addZeroNum() + props.count).replace(
        /\d{1,3}(?=(\d{3})+$)/g,
        '$&,'
      )
    })
    const setNumberTransform = () => {
      let numStr = addZeroNum() + props.count
      for (let i = 0; i < numStr.length; i++) {
        itemRefs[i].style.transform = `translate(0, -${numStr[i] * 10}%)`
      }
    }
    watch(
      () => newNum.value,
      () => {
        setNumberTransform()
      }
    )
    onMounted(() => {
      setTimeout(() => {
        setNumberTransform()
      })
    })
    // 补几个零
    function addZeroNum() {
      var len = String(props.count).length
      if (props.maxNum > len) {
        return new Array(props.maxNum - len).fill('0').join('')
      } else {
        return ''
      }
    }
    return {
      newNum,
      numberItem
    }
  }
}
</script>
<style lang="less" scoped>
.x-numroll {
  width: 100%;
  display: flex;
  justify-content: sapce-between;
  .x-itemnum {
    color: #f00;
    font-size: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    list-style: none;
    overflow: hidden;
    background: #000;
    i {
      width: 100%;
      display: inline-block;
      text-align: center;
      writing-mode: vertical-lr;
      text-orientation: upright;
      transform: translate(0, 0);
      transition-property: transform;
      transition-timing-function: ease-in-out;
    }
  }
  .x-comma {
    line-height: 24px;
    span {
      font-size: 48px;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>