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
.blockcontent{
  width:60px;
  min-height:60px;
  border:1px solid #ccc;
  margin:100px auto;
  padding:10px;
}
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>HTML代码：</h3>
              <pre>
                  <code>
&lt;div class="blockcontent" contenteditable="true"&gt;&lt;/div&gt;
                  </code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <div class="blockcontent" contenteditable="true"></div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'adaptive-div-demo',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .blockcontent{
    width:60px;
    min-height:60px;
    border:1px solid #ccc;
    margin:100px auto;
    padding:10px;
  }
</style>
