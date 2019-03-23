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
    width: 250px;
    height: 187.5px;
    -webkit-mask-image: url('../../assets/imgs/star.svg');
    mask-image: url('../../assets/imgs/star.svg');
    margin: 20px;
}
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>HTML代码：</h3>
              <pre>
                  <code>
&lt;img src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651" class="mask-image"&gt;

&lt;p&gt;请选择mask-size：&lt;select id="maskSize"&gt;
    &lt;option value="cover"&gt;cover&lt;/option&gt;
    &lt;option value="contain"&gt;contain&lt;/option&gt;
    &lt;option value="auto" selected&gt;auto&lt;/option&gt;
&lt;/select>&lt;/p&gt;
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>JS代码：</h3>
              <pre>
                  <code>
var eleSel = document.getElementById('maskSize');
var eleImg = document.querySelector('.mask-image');
if (eleSel && eleImg) {
    eleSel.addEventListener('change', function () {
        eleImg.style.webkitMaskSize = this.value;
        eleImg.style.maskSize = this.value;
    });
}
                  </code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <img src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651"
                 :style="{'mask-size': maskSize,webkitMaskSize:maskSize}" class="mask-image">

            <p>请选择mask-size：<select id="maskSize" v-model="maskSize">
              <option value="cover">cover</option>
              <option value="contain">contain</option>
              <option value="auto" selected>auto</option>
            </select></p>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'mask-size-demo',
    data() {
      return {
        maskSize: 'auto',
      }
    },
    created() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mask-image {
    width: 250px;
    height: 187.5px;
    -webkit-mask-image: url('../../assets/imgs/star.svg');
    mask-image: url('../../assets/imgs/star.svg');
    margin: 20px;
  }
</style>
