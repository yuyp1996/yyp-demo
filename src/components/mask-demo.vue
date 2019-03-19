<template>
  <div class="main-box">
    <ol>
      <li v-for="(item,index) in content" :key="index">
        <h3 class="demo-title1">{{item.name}}</h3>
        <div class="demo-box">
          <div class="demo-code">
            <div v-highlight v-if="item.css">
              <h3>CSS代码：</h3>
              <pre>
                  <code v-html="item.css"></code>
              </pre>
            </div>
            <div v-highlight v-if="item.html">
              <h3>HTML代码：</h3>
              <pre>
                  <code v-html="item.html"></code>
              </pre>
            </div>
            <div v-highlight v-if="item.js">
              <h3>JS代码：</h3>
              <pre>
                  <code v-html="item.js"></code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <img :class="['g-mask-bg' + (index+1)]" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'mask-demo',
  data () {
    return {
      content: [
        {
          name: 'png遮罩',
          html: `&lt;img class="g-mask-bg1" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" /&gt;`,
          css: `.g-mask-bg1{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
    mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
}`
        },
        {
          name: 'svg遮罩',
          html: `&lt;img class="g-mask-bg2" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" /&gt;`,
          css: `.g-mask-bg1{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('https://www.zhangxinxu.com/study/201711/star.svg');
    mask-image: url('https://www.zhangxinxu.com/study/201711/star.svg');
}`
        }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .g-mask-bg1{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
    mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
  }
  .g-mask-bg2{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('https://www.zhangxinxu.com/study/201711/star.svg');
    mask-image: url('https://www.zhangxinxu.com/study/201711/star.svg');
  }
</style>
