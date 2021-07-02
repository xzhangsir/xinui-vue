<template>
  <div class="wrapper">
    <input id="exp"
           class="exp"
           type="checkbox">
    <div class="text">
      <label class="btn"
             for="exp"></label>
      {{content}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'x-textOpenCutOut',
  props: {
    content: String
  }
}
</script>
<style>
.wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.text {
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  position: relative;
  line-height: 1.5;
  max-height: 4.5em;
  transition: 0.3s max-height;
}
.text::before {
  content: '';
  height: calc(100% - 26px);
  float: right;
}
.text::after {
  content: '';
  width: 100vw;
  height: 10vw;
  position: absolute;
  margin-left: -100px;
}
.btn {
  position: relative;
  float: right;
  clear: both;
  margin-left: 20px;
  font-size: 16px;
  padding: 0 8px;
  background: #3f51b5;
  line-height: 24px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
.btn::after {
  content: '展开';
}
.exp {
  display: none;
}
.exp:checked + .text {
  max-height: 200px;
}
.exp:checked + .text::after {
  visibility: hidden;
}
.exp:checked + .text .btn::before {
  visibility: hidden;
}
.exp:checked + .text .btn::after {
  content: '收起';
}
.btn::before {
  content: '...';
  position: absolute;
  left: -5px;
  color: #333;
  transform: translateX(-100%);
}
</style>

