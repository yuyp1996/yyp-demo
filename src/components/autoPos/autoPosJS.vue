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
.g-box{
  height: 300px;
  overflow-y: auto;
}
.auto-pos {
  margin-top: 100px;
  line-height: 30px;
  position: sticky;
  top: 20px;
  background: #ccc;
}
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>HTML代码：</h3>
              <pre>
                  <code>
&lt;div class="g-box"&gt;
  &lt;div class="auto-pos"&gt;自动定位&lt;/div&gt;
  &lt;div style="height: 900px"&gt;&lt;/div&gt;
&lt;/div&gt;
                  </code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <div class="g-box" id="eleBox">
              <div class="auto-pos" id="elePos">自动定位</div>
              <div style="height: 900px;background: url('https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651')"></div>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'autoPos',
    mounted() {
      const eleBox = document.getElementById('eleBox');
      const elePos = document.getElementById('elePos');
      const dist = 10;
      const eleTop = elePos.offsetTop;
      if (eleBox && elePos) {
        eleBox.addEventListener('scroll', function (e) {
          if (eleBox.scrollTop > eleTop - dist) {
            elePos.style.cssText = `position:fixed;margin:0;top:${eleBox.offsetTop + 10}px;width:${eleBox.clientWidth}px`;
          } else {
            elePos.style.cssText = 'position:inherit;';
          }
        });
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .g-box{
    position: relative;
    height: 300px;
    overflow-y: auto;
  }
  .auto-pos {
    margin-top: 100px;
    line-height: 30px;
    background: #ccc;
  }
</style>
