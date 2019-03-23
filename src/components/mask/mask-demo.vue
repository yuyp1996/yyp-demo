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
            <div v-highlight v-if="item.htmlText">
              <h3>HTML代码：</h3>
              <pre>
                  <code v-html="item.htmlText"></code>
              </pre>
            </div>
            <div v-highlight v-if="item.js">
              <h3>JS代码：</h3>
              <pre>
                  <code v-html="item.js"></code>
              </pre>
            </div>
          </div>
          <div class="demo-result" v-html="item.html">
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
          html: `<img class="g-mask-bg1" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />`,
          css: `.g-mask-bg1{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
    mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
}`
        },
        {
          name: 'svg遮罩',
          html: `<img class="g-mask-bg2" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />`,
          css: `.g-mask-bg1{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('../assets/imgs/star.svg');
    mask-image: url('../assets/imgs/star.svg');
}`
        },
        {
          name: 'svg 自带mask遮罩(只有Firefox下有效)',
          html: `<img class="g-mask-bg3" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />
<svg>
  <defs>
    <mask id="mask" maskContentUnits="objectBoundingBox">
      <circle cx=".5" cy=".5" r=".5" fill="white"/>
      <polyline points=".375 .25,0.65625 .5,.375 .75" fill="white" stroke="black" stroke-width="0.0625"/>
    </mask>
  </defs>
</svg>`,
          css: `.g-mask-bg3{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url(#mask);
    mask-image: url(#mask);
}`
        },
        {
          name: 'svg 自带mask遮罩（所有浏览器以及IE9）',
          html: `<svg width="250" height="186">
    <image xlink:href="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" class="g-mask-bg4" width="250" height="186"></image>
</svg>`,
          css: `.g-mask-bg4{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url(#mask);
    mask-image: url(#mask);
    mask: url(#mask);
}`
        },
        {
          name: 'image-set()功能符',
          html: `<img class="g-mask-bg5" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />`,
          css: `.g-mask-bg5{
    width: 250px; height: 187.5px;
    -webkit-mask-image: -webkit-image-set(url('../assets/imgs/star.svg') 1px,url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799') 2px);
    mask-image: image-set(url('../assets/imgs/star.svg') 1px,url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799') 2px);
}`
        },
        {
          name: 'cross-fade()功能符',
          html: `<img class="g-mask-bg6" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />`,
          css: `.g-mask-bg6 {
    width: 250px; height: 187.5px;
    -webkit-mask-image: -webkit-cross-fade(url('../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799'), 50%);
    mask-image: cross-fade(url('../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799'), 50%);
}`
        },
        {
          name: 'element()功能符资源(只有Firefox下有效)',
          html: `<h4 id="title">马萨卡马萨卡马萨卡</h4>
<img class="g-mask-bg7" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />`,
          css: `#title {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
.g-mask-bg7 {
  width: 250px; height: 187.5px;
  -webkit-mask-image: -webkit-element(#title);
  mask-image: -moz-element(#title);
  mask-image: element(#title);
}`
        },
        {
          name: '<gradient>渐变作为遮罩图片',
          html: `<img class="g-mask-bg8" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" />`,
          css: `.g-mask-bg8 {
    width: 250px; height: 187.5px;
    -webkit-mask-image: repeating-radial-gradient(rgba(0,0,0,0) 4px, rgba(0,0,0,1) 10px, rgba(0,0,0,1) 12px);
    mask-image: repeating-radial-gradient(rgba(0,0,0,0) 4px, rgba(0,0,0,1) 10px, rgba(0,0,0,1) 12px);
}`
        },
      ],
    }
  },
  created () {
    this.content.forEach(val => {
      val.htmlText = val.html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .g-mask-bg1{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
    mask-image: url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
  }
  .g-mask-bg2{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('../../assets/imgs/star.svg');
    mask-image: url('../../assets/imgs/star.svg');
  }
  .g-mask-bg3{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url(#mask);
    mask-image: url(#mask);
  }
  .g-mask-bg4{
    width: 250px; height: 187.5px;
    -webkit-mask-image: url(#mask);
    mask-image: url(#mask);
    mask: url(#mask);
  }
  .g-mask-bg5{
    width: 250px; height: 187.5px;
    -webkit-mask-image: -webkit-image-set(url('../../assets/imgs/star.svg') 1x, url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799') 2x);
    mask-image: image-set(url('../../assets/imgs/star.svg') 1x, url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799') 2x);
  }
  .g-mask-bg6 {
    width: 250px; height: 187.5px;
    -webkit-mask-image: -webkit-cross-fade(url('../../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799'), 50%);
    mask-image: cross-fade(url('../../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799'), 50%);
  }
  #title {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
  .g-mask-bg7 {
    width: 250px; height: 187.5px;
    -webkit-mask-image: -webkit-element(#title);
    mask-image: -moz-element(#title);
    mask-image: element(#title);
  }
  .g-mask-bg8 {
    width: 250px; height: 187.5px;
    -webkit-mask-image: repeating-radial-gradient(rgba(0,0,0,0) 4px, rgba(0,0,0,1) 10px, rgba(0,0,0,1) 12px);
    mask-image: repeating-radial-gradient(rgba(0,0,0,0) 4px, rgba(0,0,0,1) 10px, rgba(0,0,0,1) 12px);
  }
</style>
