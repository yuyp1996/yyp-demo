// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  setTimeout(() => {
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    });
  }, 200)
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
