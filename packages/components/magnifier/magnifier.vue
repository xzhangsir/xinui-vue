<template>
  <div class="x-img-wrap"
       v-magnifier
       :style="{
          width:imgWidth + 'px',
          height:imgHeight + 'px'
        }">
    <div class="x-mag-wrap"
         :style="{
            width:magWidth+'px',
            height:magHeight + 'px',
            borderRadius:borderRadius
       }">
      <img :src="imgUrl"
           :style="{
            width:imgWidth + 'px',
            height:imgHeight + 'px'
          }"
           class="x-mag-img" />
    </div>
    <img :src="imgUrl"
         class="x-static-img" />
  </div>
</template>
<script>
import { magnifier } from '../../directives'
export default {
  name: 'x-magnifier',
  directives: {
    magnifier
  },
  props: {
    imgUrl: String,
    imgWidth: Number,
    imgHeight: Number,
    magWidth: Number,
    magHeight: Number,
    borderRadius: String
  },
  setup(props) {}
}
</script>
<style lang = "less" scoped>
.x-img-wrap {
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;
  position: relative;
  .x-mag-wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #999;
    cursor: move;
    overflow: hidden;
    display: none;
    &.x-show {
      display: block;
      transform: scale(1.5);
    }
  }
  .x-mag-img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .x-static-img {
    width: 100%;
  }
}
</style>
