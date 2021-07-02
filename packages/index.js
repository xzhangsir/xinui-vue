import "./css/reset.css"
import xMagnifier from './components/magnifier/'
import xDigitalRoll from "./components/digitalRoll/"
import xTextOpenCutOut from "./components/textOpenCutOut/"
const components = [xMagnifier, xDigitalRoll, xTextOpenCutOut]

var install = (app, opts = {}) => {
  components.forEach(item => {
    app.component(item.name, item)
  })
}

export default {
  // 全局导出
  version: '0.0.1',
  install,
  xMagnifier, // 单独导出button组件用于按需加载
  xDigitalRoll,
  xTextOpenCutOut
}