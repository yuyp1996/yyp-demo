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
.mask-image {
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('../../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
    mask-image: url('../../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
}
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>HTML代码：</h3>
              <pre>
                  <code>
&lt;img src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" class="mask-image"&gt;

&lt;p&gt;请选择mask-composite：&lt;select id="maskOrigin"&gt;
    &lt;option value="source-over" selected&gt;source-over&lt;/option&gt;
    &lt;option value="source-in"&gt;source-in&lt;/option&gt;
    &lt;option value="source-out"&gt;source-out&lt;/option&gt;
    &lt;option value="source-atop"&gt;source-atop&lt;/option&gt;
    &lt;option value="destination-over"&gt;destination-over&lt;/option&gt;
    &lt;option value="destination-in"&gt;destination-in&lt;/option&gt;
    &lt;option value="destination-out"&gt;destination-out&lt;/option&gt;
    &lt;option value="destination-atop"&gt;destination-atop&lt;/option&gt;
    &lt;option value="plus-lighter"&gt;plus-lighter&lt;/option&gt;
    &lt;option value="copy"&gt;copy&lt;/option&gt;
    &lt;option value="clear"&gt;clear&lt;/option&gt;
    &lt;option value="xor"&gt;xor&lt;/option&gt;
&lt;/select>&lt;/p&gt;
或者：
&lt;select id="maskComposite"&gt;
  &lt;option value="add"&gt;add&lt;/option&gt;
  &lt;option value="subtract"&gt;subtract&lt;/option&gt;
  &lt;option value="intersect" selected&gt;intersect&lt;/option&gt;
  &lt;option value="exclude"&gt;exclude&lt;/option&gt;
&lt;/select&gt;&lt;/p&gt;
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>JS代码：</h3>
              <pre>
                  <code>
var eleSel = document.getElementById('maskComposite');
var eleImg = document.querySelector('.mask-image');
if (eleSel && eleImg) {
    eleSel.addEventListener('change', function () {
        eleImg.style.webkitMaskComposite = this.value;
        eleImg.style.maskComposite = this.value;
    });
}
                  </code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <img src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651"
                 :style="{maskComposite: maskComposite,webkitMaskComposite :maskComposite}" class="mask-image">

            <p>请选择mask-origin：
              <select v-if="isChrome" v-model="maskComposite">
                <option value="source-over" selected>source-over</option>
                <option value="source-in">source-in</option>
                <option value="source-out">source-out</option>
                <option value="source-atop">source-atop</option>
                <option value="destination-over">destination-over</option>
                <option value="destination-in">destination-in</option>
                <option value="destination-out">destination-out</option>
                <option value="destination-atop">destination-atop</option>
                <option value="plus-lighter">plus-lighter</option>
                <option value="copy">copy</option>
                <option value="clear">clear</option>
                <option value="xor">xor</option>
              </select>
              <select v-else v-model="maskComposite">
                <option value="add">add</option>
                <option value="subtract">subtract</option>
                <option value="intersect" selected>intersect</option>
                <option value="exclude">exclude</option>
              </select>
            </p>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'mask-clip-demo',
    data() {
      return {
        isChrome: true,
        maskComposite: 'source-over',
      }
    },
    created() {
      const userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      if (userAgent.indexOf("Firefox") > -1) { //判断是否Firefox浏览器
        this.isChrome = false;
        this.maskComposite = 'intersect';
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mask-image {
    width: 250px; height: 187.5px;
    -webkit-mask-image: url('../../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
    mask-image: url('../../assets/imgs/star.svg'), url('https://user-gold-cdn.xitu.io/2019/3/18/1698fef6bce1ab4d?w=30&h=30&f=png&s=799');
  }
</style>
