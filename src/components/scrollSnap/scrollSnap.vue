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
.list-ul {
  width: 500px; height: 353px;
  margin: auto;
  font-size: 0;
  scroll-snap-type: y mandatory;
  white-space: nowrap;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; // IE 10+隐藏滚动条
  overflow: -moz-scrollbars-none; // Firefox隐藏滚动条
}
.list-ul::-webkit-scrollbar { width: 0 !important }
.list-li {
  width: 100%; height: 100%;
  scroll-snap-align: center;
  position: relative;
  transition: filter .3s;
}
@media screen and (max-width: 480px) {
  .list-ul {
    width: 100%;
    height: calc(100vw / 500 * 353);
  }
}
img {
  -webkit-user-drag: none;
  display: block;
  width: 100%;
  height: 100%;
}
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>HTML代码：</h3>
              <pre>
                  <code v-text="html">
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>JS代码：</h3>
              <pre>
                  <code>
const content = document.getElementById('listY');
const result = document.getElementById('result');
// 定时器，用来检测滚动是否结束
let timerScrollEndDetect = null;
// 滚动事件开始
content.addEventListener('scroll', function () {
  clearTimeout(timerScrollEndDetect);
  timerScrollEndDetect = setTimeout(function () {
    // 100毫秒内滚动事件没触发，认为停止滚动了
    // 对列表元素进行位置检测
    [].slice.call(content.children).forEach(function (eleList, index) {
      if (Math.abs(eleList.getBoundingClientRect().top - content.getBoundingClientRect().top) < 10) {
        // 添加标志类名
        eleList.classList.add('active');
        // 提示
        result.innerHTML = '滚动结束，当前显示的是第'+ (index + 1) +'个列表。';
      } else {
        eleList.classList.remove('active');
      }
    });
  }, 100);

  // 提示
  result.innerHTML = '滚动中...';
});
                  </code>
              </pre>
            </div>
          </div>
        </div>
        <div class="demo-result">
          <div id="result" class="result"></div>
          <div id="listY" class="list-ul">
            <div class="list-li active">
              <img class="list-img" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651">
            </div>
            <div class="list-li">
              <img class="list-img" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651">
            </div>
            <div class="list-li">
              <img class="list-img" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651">
            </div>
            <div class="list-li">
              <img class="list-img" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651">
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'scrollSnap',
    data() {
      return {
        html: `<div id="result" class="result"></div>
  <div id="listY" class="list-ul">
  <div class="list-li active">
    <img class="list-img" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651">
  </div>
  <div class="list-li">
    <img class="list-img" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651">
  </div>
  <div class="list-li">
    <img class="list-img" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651">
  </div>
  <div class="list-li">
    <img class="list-img" src="https://user-gold-cdn.xitu.io/2019/3/19/169936a894b4a755?w=500&h=353&f=jpeg&s=55651">
  </div>
</div>`
      }
    },
    mounted() {
      const content = document.getElementById('listY');
      const result = document.getElementById('result');
      // 定时器，用来检测滚动是否结束
      let timerScrollEndDetect = null;
      // 滚动事件开始
      content.addEventListener('scroll', function () {
        clearTimeout(timerScrollEndDetect);
        timerScrollEndDetect = setTimeout(function () {
          // 100毫秒内滚动事件没触发，认为停止滚动了
          // 对列表元素进行位置检测
          [].slice.call(content.children).forEach(function (eleList, index) {
            if (Math.abs(eleList.getBoundingClientRect().top - content.getBoundingClientRect().top) < 10) {
              // 添加标志类名
              eleList.classList.add('active');
              // 提示
              result.innerHTML = '滚动结束，当前显示的是第'+ (index + 1) +'个列表。';
            } else {
              eleList.classList.remove('active');
            }
          });
        }, 100);

        // 提示
        result.innerHTML = '滚动中...';
      });
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .list-ul {
    width: 500px; height: 353px;
    margin: auto;
    font-size: 0;
    scroll-snap-type: y mandatory;
    white-space: nowrap;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; // IE 10+隐藏滚动条
    overflow: -moz-scrollbars-none; // Firefox隐藏滚动条
  }
  .list-ul::-webkit-scrollbar { width: 0 !important }
  .list-li {
    width: 100%; height: 100%;
    scroll-snap-align: center;
    position: relative;
    transition: filter .3s;
  }
  @media screen and (max-width: 480px) {
    .list-ul {
      width: 100%;
      height: calc(100vw / 500 * 353);
    }
  }
  img {
    -webkit-user-drag: none;
    display: block;
    width: 100%;
    height: 100%;
  }
  .demo-code {
    width: 100%;
  }
</style>
