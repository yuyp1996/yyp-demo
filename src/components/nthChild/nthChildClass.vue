<template>
  <div class="main-box">
    <ol>
      <li>
        <h3 class="demo-title1"></h3>
        <div class="demo-box">
          <div class="demo-code">
            <div v-highlight>
              <h3>CSS代码：</h3>
              <pre>
                  <code>
.nth-child {
  p,span {
    font-size: 14px;
    line-height: 20px;
  }
  span {
    display: block;
  }
  .child-item:nth-child(2) {
    background: #000;
  }
}
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>HTML代码：</h3>
              <pre>
                  <code v-html="html"></code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <div class="nth-child">
              <span :class="{'child-item': !isDelSpanClass}" v-for="item in 5" v-if="!isDeleteSpan">
                我是第{{item}}个span元素
              </span>
              <p class="child-item" v-for="item in 5">
                我是第{{item}}个p元素
              </p>
            </div>
            <button @click="isDeleteSpan = !isDeleteSpan">{{isDeleteSpan?'显示':'隐藏'}}span元素</button>
            <button @click="isDelSpanClass = !isDelSpanClass">{{isDelSpanClass?'添加':'删除'}}span元素的class</button>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'nth-childEle-demo',
    data() {
      return {
        html: `<div class="nth-child">
  <span :class="{'child-item': !isDelSpanClass}" v-for="item in 5" v-if="!isDeleteSpan">
    我是第{{item}}个span元素
  </span>
  <p class="child-item" v-for="item in 5">
    我是第{{item}}个p元素
  </p>
</div>
<button @click="isDeleteSpan = !isDeleteSpan">{{isDeleteSpan?'显示':'隐藏'}}span元素</button>
<button @click="isDelSpanClass = !isDelSpanClass">{{isDelSpanClass?'添加':'删除'}}span元素的class</button>`,
        isDeleteSpan: false,
        isDelSpanClass: false,
      }
    },
    created() {
      this.html = this.html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nth-child {
    p,span {
      font-size: 14px;
      line-height: 20px;
    }
    span {
      display: block;
    }
    .child-item:nth-child(2) {
      background: #000;
    }
  }
</style>
