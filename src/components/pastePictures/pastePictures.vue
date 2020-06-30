<template>
  <div class="main-box">
    <ol>
      <li>
        <h3 class="demo-title1"></h3>
        <div class="demo-box">
          <div class="demo-code">
            <div v-highlight>
              <h3>HTML代码：</h3>
              <pre>
                  <code>
&lt;div id="preview"&gt;自动定位&lt;/div&gt;
&lt;div id="log"&gt;&lt;/div&gt;
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>JS代码：</h3>
              <pre>
                  <code>
const log = document.getElementById('log');
const preview = document.getElementById('preview');

// 截图粘贴
document.addEventListener('paste', function (event) {
  const items = (event.clipboardData || window.clipboardData).items;
  let file = null;
  if (items && items.length) {
    // 搜索剪切板items
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        file = items[i].getAsFile();
        break;
      }
    }
  } else {
    log.innerHTML = '&lt;span style="color:red;"&gt;当前浏览器不支持&lt;/span&gt;';
    return;
  }
  if (!file) {
    log.innerHTML = '&lt;span style="color:red;"&gt;粘贴内容非图片&lt;/span&gt;';
    return;
  }
  // 此时file就是我们的剪切板中的图片对象
  // 如果需要预览，可以执行下面代码
  const reader = new FileReader();
  reader.onload = function(event) {
    preview.innerHTML = '&lt;img src="' + event.target.result + '" class="upload-image"&gt;';
  };
  reader.readAsDataURL(file);
  // 如果不需要预览，上面这段可以忽略
});

// 拖拽
preview.addEventListener('dragenter',function(event){
  event.stopPropagation();
  event.preventDefault();
});
preview.addEventListener('dragover',function(event){
  event.stopPropagation();
  event.preventDefault();
});
preview.addEventListener('dragleave',function(event){
  event.stopPropagation();
  event.preventDefault();
});
preview.addEventListener('drop',function(event){ //这里阻止默认事件，并绑定事件的对象，用来在组件上返回事件对象
  event.stopPropagation();
  event.preventDefault();
  if (event.dataTransfer && event.dataTransfer.items[0] && event.dataTransfer.items[0].type && event.dataTransfer.items[0].type.indexOf('image') > -1) { //这里就是判断是否有拖拽进来的文件且文件为图片格式
    let file = event.dataTransfer.items[0].getAsFile(); //获取文件
    const reader = new FileReader();
    reader.onload = event => {
      preview.innerHTML = '&lt;img src="' + event.target.result + '" class="upload-image"&gt;';
    };
    reader.readAsDataURL(file);
  } else {
    this.$message({
      type: 'warning',
      message: '上传的文件必须为图片且无法拖拽截图'
    });
  }
});
                  </code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <div id="preview"></div>
            <p id="log"></p>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'pastePictures',
    mounted() {
      const log = document.getElementById('log');
      const preview = document.getElementById('preview');

      // 截图粘贴
      document.addEventListener('paste', function (event) {
        const items = (event.clipboardData || window.clipboardData).items;
        let file = null;
        if (items && items.length) {
          // 搜索剪切板items
          for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
              file = items[i].getAsFile();
              break;
            }
          }
        } else {
          log.innerHTML = '<span style="color:red;">当前浏览器不支持</span>';
          return;
        }
        if (!file) {
          log.innerHTML = '<span style="color:red;">粘贴内容非图片</span>';
          return;
        }
        // 此时file就是我们的剪切板中的图片对象
        // 如果需要预览，可以执行下面代码
        const reader = new FileReader();
        reader.onload = function(event) {
          preview.innerHTML = '<img src="' + event.target.result + '" class="upload-image">';
        };
        reader.readAsDataURL(file);
        // 如果不需要预览，上面这段可以忽略
      });

      // 拖拽
      preview.addEventListener('dragenter',function(event){
        event.stopPropagation();
        event.preventDefault();
      });
      preview.addEventListener('dragover',function(event){
        event.stopPropagation();
        event.preventDefault();
      });
      preview.addEventListener('dragleave',function(event){
        event.stopPropagation();
        event.preventDefault();
      });
      preview.addEventListener('drop',function(event){ //这里阻止默认事件，并绑定事件的对象，用来在组件上返回事件对象
        event.stopPropagation();
        event.preventDefault();
        if (event.dataTransfer && event.dataTransfer.items[0] && event.dataTransfer.items[0].type && event.dataTransfer.items[0].type.indexOf('image') > -1) { //这里就是判断是否有拖拽进来的文件且文件为图片格式
          let file = event.dataTransfer.items[0].getAsFile(); //获取文件
          const reader = new FileReader();
          reader.onload = event => {
            preview.innerHTML = '<img src="' + event.target.result + '" class="upload-image">';
          };
          reader.readAsDataURL(file);
        } else {
          this.$message({
            type: 'warning',
            message: '上传的文件必须为图片且无法拖拽截图'
          });
        }
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #preview {
    min-height: 150px;
    width: 400px
  }
  #preview:empty::before {
    border: 1px solid #ddd;
    content: '预览区';
    display: block;
    text-align: center;
    font-size: 40px;
    line-height: 150px;
    opacity: .6;
  }
  .upload-image {
    max-width: 100%;
  }
</style>
