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
    -webkit-mask-image: url('../../assets/imgs/star.svg');
    mask-image: url('../../assets/imgs/star.svg');
    border: 20px solid #34538b;
    padding: 20px;
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

&lt;p&gt;请选择mask-clip：&lt;select id="maskClip"&gt;
    &lt;option value="content-box"&gt;content-box&lt;/option&gt;
    &lt;option value="padding-box"&gt;padding-box&lt;/option&gt;
    &lt;option value="border-box" selected&gt;border-box&lt;/option&gt;
    &lt;option value="fill-box"&gt;fill-box&lt;/option&gt;
    &lt;option value="stroke-box"&gt;stroke-box&lt;/option&gt;
    &lt;option value="view-box"&gt;view-box&lt;/option&gt;
    &lt;option value="no-clip"&gt;no-clip&lt;/option&gt;
&lt;/select>&lt;/p&gt;
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>JS代码：</h3>
              <pre>
                  <code>
var eleSel = document.getElementById('maskClip');
var eleImg = document.querySelector('.mask-image');
if (eleSel && eleImg) {
    eleSel.addEventListener('change', function () {
        eleImg.style.webkitMaskClip = this.value;
        eleImg.style.maskClip = this.value;
    });
}
                  </code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <img src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651"
                 :style="{'mask-clip': maskClip,webkitMaskClip:maskClip}" class="mask-image">

            <p>请选择mask-clip：<select id="maskClip" v-model="maskClip">
              <option value="content-box">content-box</option>
              <option value="padding-box">padding-box</option>
              <option value="border-box" selected>border-box</option>
              <option value="fill-box">fill-box</option>
              <option value="stroke-box">stroke-box</option>
              <option value="view-box">view-box</option>
              <option value="no-clip">no-clip</option>
            </select></p>
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
        maskClip: 'border-box',
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
    border: 20px solid #34538b;
    padding: 20px;
    margin: 20px;
  }
</style>
