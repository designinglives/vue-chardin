import 'chardin.js'
import 'chardin.js/chardinjs.css'
import {chardin} from './directives'

const VueChardin = {
  install(Vue, options) {
    Vue.directive('chardin', chardin)
  }
};

//auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueChardin);
  //expose formly functions if auto installed
}


export default VueChardin;
