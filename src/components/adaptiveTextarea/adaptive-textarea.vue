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
.g-table-textarea{
    /*利用span内容自动撑起最外部div高度，textarea则高度100%自适应高度*/
    position: relative;
    border: 1px solid;
    min-height: 50px;/*保持最小高度*/
    span{
      word-wrap:break-word;
      word-break: break-all;
      line-height: inherit;
      color: #666;
      display:block;
      font-size: inherit;
    }
    textarea{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: inherit;
      color: inherit;
      line-height: inherit;
      resize:none;
      overflow:hidden;
      word-break: break-all;
    }
}
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>HTML代码：</h3>
              <pre>
                  <code>
&lt;div class="g-table-textarea"&gt;
  &lt;span id="eleSpan"&gt;&lt;/span&gt;
  &lt;textarea id="eleArea"&gt;&lt;/textarea&gt;
&lt;/div&gt;
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>JS代码：</h3>
              <pre>
                  <code>
var eleArea = document.getElementById('eleArea');
var eleSpan = document.getElementById('eleSpan');
if (eleArea && eleSpan) {
  eleArea.addEventListener('input', function (e) {
    eleSpan.innerText = e.target.value;
  });
}
                  </code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <div class="g-table-textarea">
              <span id="eleSpan"></span>
              <textarea id="eleArea"></textarea>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'adaptive-textarea-demo',
    mounted() {
      const eleArea = document.getElementById('eleArea');
      const eleSpan = document.getElementById('eleSpan');
      if (eleArea && eleSpan) {
        eleArea.addEventListener('input', function (e) {
          eleSpan.innerText = e.target.value;
        });
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .g-table-textarea{
    /*利用span内容自动撑起最外部div高度，textarea则高度100%自适应高度*/
    position: relative;
    border: 1px solid;
    min-height: 60px;/*保持最小高度*/
    width: 50px;
    span{
      font-family: inherit;
      word-break: break-word;
      line-height: inherit;
      color: #666;
      display:block;
      font-size: inherit;
      padding: 5px;
    }
    textarea{
      font-family: inherit;
      position: absolute;
      box-sizing: border-box;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 5px;
      font-size: inherit;
      color: inherit;
      line-height: inherit;
      resize:none;
      overflow:hidden;
      word-break: break-word;
      border: 0 none;
    }
  }
</style>
