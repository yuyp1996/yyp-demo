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
  margin: 0 auto;
  position: relative;
  width: 600px;
  max-width: 100vw;
  height: 800px;
  overflow: hidden;
  background: #9b822d;

}
.book {
  height: 100%;
  margin: 0 16px;
}
.content {
  width: 100%;
  height: 100%;
  columns: 100vw 1;
  column-gap: 16px;
  transition: all .1s;
}
.noSelect {

  -webkit-touch-callout: none; /* iOS Safari */

  -webkit-user-select: none; /* Chrome/Safari/Opera */

  -khtml-user-select: none; /* Konqueror */

  -moz-user-select: none; /* Firefox */

  -ms-user-select: none; /* Internet Explorer/Edge */

  user-select: none; /* Non-prefixed version, currently not supported by any browser */

}
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>HTML代码：</h3>
              <pre>
                  <code>
&lt;div class="g-box"&gt;
  &lt;div class="book noSelect" id="book"&gt;
    &lt;div class="content" id="content"&gt;
      &lt;h3&gt;第一章 总纲&lt;/h3&gt;
      .......
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
                  </code>
              </pre>
            </div>
            <div v-highlight>
              <h3>JS代码：</h3>
              <pre>
                  <code>
const content = document.getElementById('content');
const book = document.getElementById('book');
let startLeft = 0; // 当前拖动位置
let moveStart = false; // 是否进行滑动
const downFun = function (e) {
  startLeft = e.clientX || Math.floor(Number(e.changedTouches[0].clientX));
  moveStart = true; // 开始滑动
};
const moveFun = function (e, ele) {
  if (!moveStart) return;
  ele.style.transform = `translateX(${Number(ele.style.transform.replace(/[^0-9\-,]/g,'')) + (e.clientX || Math.floor(Number(e.changedTouches[0].clientX))) - startLeft}px)`; // 控制content偏移
  startLeft = e.clientX || Math.floor(Number(e.changedTouches[0].clientX));
};
const upFun = function (ele) {
  moveStart = false;
  const nowPos = Number(ele.style.transform.replace(/[^0-9\-,]/g,''));
  if (nowPos > 0) { // 最开始一页
    ele.style.transform = `translateX(0px)`;
  } else if (Math.floor(Math.abs(nowPos) / ele.clientWidth) >= Math.floor(ele.scrollWidth / ele.clientWidth) - 1) { // 最后一页
    ele.style.transform = `translateX(-${ele.scrollWidth - content.clientWidth}px)`;
  } else { // 中间页
    ele.style.transform = `translateX(-${Math.round(Math.abs(nowPos) / ele.clientWidth) * (ele.clientWidth + 16)}px)`;
  }
};
// 电脑端
book.addEventListener('mousedown',function (e) {
  downFun(e);
});
book.addEventListener('mousemove',function (e) {
  moveFun(e, content);
});
document.body.addEventListener('mouseup',function () {
  upFun(content);
});
// 手机端
book.addEventListener('touchstart',function (e) {
  downFun(e);
});
book.addEventListener('touchmove',function (e) {
  moveFun(e, content);
});
document.body.addEventListener('touchend',function () {
  upFun(content);
})
                  </code>
              </pre>
            </div>
          </div>
        </div>
        <div class="demo-result">
          <div class="g-box">
            <div class="book noSelect" id="book">
              <div class="content" id="content">
                <h3>第一章 总纲</h3>
                <p>　　中国共产党是中国工人阶级的先锋队，同时是中国人民和中华民族的先锋队，是中国特色社会主义事业的领导核心，代表中国先进生产力的发展要求，代表中国先进文化的前进方向，代表中国最广大人民的根本利益。党的最高理想和最终目标是实现共产主义。</p><p>　　中国共产党以马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观、习近平新时代中国特色社会主义思想作为自己的行动指南。</p><p>　　马克思列宁主义揭示了人类社会历史发展的规律，它的基本原理是正确的，具有强大的生命力。中国共产党人追求的共产主义最高理想，只有在社会主义社会充分发展和高度发达的基础上才能实现。社会主义制度的发展和完善是一个长期的历史过程。坚持马克思列宁主义的基本原理，走中国人民自愿选择的适合中国国情的道路，中国的社会主义事业必将取得最终的胜利。</p><p>　　以毛泽东同志为主要代表的中国共产党人，把马克思列宁主义的基本原理同中国革命的具体实践结合起来，创立了毛泽东思想。毛泽东思想是马克思列宁主义在中国的运用和发展，是被实践证明了的关于中国革命和建设的正确的理论原则和经验总结，是中国共产党集体智慧的结晶。在毛泽东思想指引下，中国共产党领导全国各族人民，经过长期的反对帝国主义、封建主义、官僚资本主义的革命斗争，取得了新民主主义革命的胜利，建立了人民民主专政的中华人民共和国；新中国成立以后，顺利地进行了社会主义改造，完成了从新民主主义到社会主义的过渡，确立了社会主义基本制度，发展了社会主义的经济、政治和文化</p><p>　　十一届三中全会以来，以邓小平同志为主要代表的中国共产党人，总结新中国成立以来正反两方面的经验，解放思想，实事求是，实现全党工作中心向经济建设的转移，实行改革开放，开辟了社会主义事业发展的新时期，逐步形成了建设中国特色社会主义的路线、方针、政策，阐明了在中国建设社会主义、巩固和发展社会主义的基本问题，创立了邓小平理论。邓小平理论是马克思列宁主义的基本原理同当代中国实践和时代特征相结合的产物，是毛泽东思想在新的历史条件下的继承和发展，是马克思主义在中国发展的新阶段，是当代中国的马克思主义，是中国共产党集体智慧的结晶，引导着我国社会主义现代化事业不断前进。</p><p>　　十三届四中全会以来，以江泽民同志为主要代表的中国共产党人，在建设中国特色社会主义的实践中，加深了对什么是社会主义、怎样建设社会主义和建设什么样的党、怎样建设党的认识，积累了治党治国新的宝贵经验，形成了“三个代表”重要思想。“三个代表”重要思想是对马克思列宁主义、毛泽东思想、邓小平理论的继承和发展，反映了当代世界和中国的发展变化对党和国家工作的新要求，是加强和改进党的建设、推进我国社会主义自我完善和发展的强大理论武器，是中国共产党集体智慧的结晶，是党必须长期坚持的指导思想。始终做到“三个代表”，是我们党的立党之本、执政之基、力量之源。</p><p>　　十六大以来，以胡锦涛同志为主要代表的中国共产党人，坚持以邓小平理论和“三个代表”重要思想为指导，根据新的发展要求，深刻认识和回答了新形势下实现什么样的发展、怎样发展等重大问题，形成了以人为本、全面协调可持续发展的科学发展观。科学发展观是同马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想既一脉相承又与时俱进的科学理论，是马克思主义关于发展的世界观和方法论的集中体现，是马克思主义中国化重大成果，是中国共产党集体智慧的结晶，是发展中国特色社会主义必须长期坚持的指导思想。</p><p>　　十八大以来，以习近平同志为主要代表的中国共产党人，顺应时代发展，从理论和实践结合上系统回答了新时代坚持和发展什么样的中国特色社会主义、怎样坚持和发展中国特色社会主义这个重大时代课题，创立了习近平新时代中国特色社会主义思想。习近平新时代中国特色社会主义思想是对马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观的继承和发展，是马克思主义中国化最新成果，是党和人民实践经验和集体智慧的结晶，是中国特色社会主义理论体系的重要组成部分，是全党全国人民为实现中华民族伟大复兴而奋斗的行动指南，必须长期坚持并不断发展。在习近平新时代中国特色社会主义思想指导下，中国共产党领导全国各族人民，统揽伟大斗争、伟大工程、伟大事业、伟大梦想，推动中国特色社会主义进入了新时代。</p><p>　　改革开放以来我们取得一切成绩和进步的根本原因，归结起来就是：开辟了中国特色社会主义道路，形成了中国特色社会主义理论体系，确立了中国特色社会主义制度，发展了中国特色社会主义文化。全党同志要倍加珍惜、长期坚持和不断发展党历经艰辛开创的这条道路、这个理论体系、这个制度、这个文化，高举中国特色社会主义伟大旗帜，坚定道路自信、理论自信、制度自信、文化自信，贯彻党的基本理论、基本路线、基本方略，为实现推进现代化建设、完成祖国统一、维护世界和平与促进共同发展这三大历史任务，实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦而奋斗。</p><p>　　我国正处于并将长期处于社会主义初级阶段。这是在原本经济文化落后的中国建设社会主义现代化不可逾越的历史阶段，需要上百年的时间。我国的社会主义建设，必须从我国的国情出发，走中国特色社会主义道路。在现阶段，我国社会的主要矛盾是人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。由于国内的因素和国际的影响，阶级斗争还在一定范围内长期存在，在某种条件下还有可能激化，但已经不是主要矛盾。我国社会主义建设的根本任务，是进一步解放生产力，发展生产力，逐步实现社会主义现代化，并且为此而改革生产关系和上层建筑中不适应生产力发展的方面和环节。必须坚持和完善公有制为主体、多种所有制经济共同发展的基本经济制度，坚持和完善按劳分配为主体、多种分配方式并存的分配制度，鼓励一部分地区和一部分人先富起来，逐步消灭贫穷，达到共同富裕，在生产发展和社会财富增长的基础上不断满足人民日益增长的美好生活需要，促进人的全面发展。发展是我们党执政兴国的第一要务。必须坚持以人民为中心的发展思想，坚持创新、协调、绿色、开放、共享的发展理念。各项工作都要把有利于发展社会主义社会的生产力，有利于增强社会主义国家的综合国力，有利于提高人民的生活水平，作为总的出发点和检验标准，尊重劳动、尊重知识、尊重人才、尊重创造，做到发展为了人民、发展依靠人民、发展成果由人民共享。跨入新世纪，我国进入全面建设小康社会、加快推进社会主义现代化的新的发展阶段。必须按照中国特色社会主义事业“五位一体”总体布局和“四个全面”战略布局，统筹推进经济建设、政治建设、文化建设、社会建设、生态文明建设，协调推进全面建成小康社会、全面深化改革、全面依法治国、全面从严治党。在新世纪新时代，经济和社会发展的战略目标是，到建党一百年时，全面建成小康社会；到新中国成立一百年时，全面建成社会主义现代化强国。</p><p>　　


              </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'column',
    mounted() {
      const content = document.getElementById('content');
      const book = document.getElementById('book');
      let startLeft = 0; // 当前拖动位置
      let moveStart = false; // 是否进行滑动
      const downFun = function (e) {
        startLeft = e.clientX || Math.floor(Number(e.changedTouches[0].clientX));
        moveStart = true; // 开始滑动
      };
      const moveFun = function (e, ele) {
        if (!moveStart) return;
        ele.style.transform = `translateX(${Number(ele.style.transform.replace(/[^0-9\-,]/g,'')) + (e.clientX || Math.floor(Number(e.changedTouches[0].clientX))) - startLeft}px)`; // 控制content偏移
        startLeft = e.clientX || Math.floor(Number(e.changedTouches[0].clientX));
      };
      const upFun = function (ele) {
        moveStart = false;
        const nowPos = Number(ele.style.transform.replace(/[^0-9\-,]/g,''));
        if (nowPos > 0) { // 最开始一页
          ele.style.transform = `translateX(0px)`;
        } else if (Math.floor(Math.abs(nowPos) / ele.clientWidth) >= Math.floor(ele.scrollWidth / ele.clientWidth) - 1) { // 最后一页
          ele.style.transform = `translateX(-${ele.scrollWidth - content.clientWidth}px)`;
        } else { // 中间页
          ele.style.transform = `translateX(-${Math.round(Math.abs(nowPos) / ele.clientWidth) * (ele.clientWidth + 16)}px)`;
        }
      };
      // 电脑端
      book.addEventListener('mousedown',function (e) {
        downFun(e);
      });
      book.addEventListener('mousemove',function (e) {
        moveFun(e, content);
      });
      document.body.addEventListener('mouseup',function () {
        upFun(content);
      });
      // 手机端
      book.addEventListener('touchstart',function (e) {
        downFun(e);
      });
      book.addEventListener('touchmove',function (e) {
        moveFun(e, content);
      });
      document.body.addEventListener('touchend',function () {
        upFun(content);
      })

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .g-box{
    margin: 0 auto;
    position: relative;
    width: 600px;
    max-width: 100vw;
    height: 800px;
    overflow: hidden;
    background: #9b822d;

  }
  .book {
    height: 100%;
    margin: 0 16px;
  }
  .content {
    width: 100%;
    height: 100%;
    columns: 100vw 1;
    column-gap: 16px;
    transition: all .1s;
  }
  .demo-code {
    width: 100%;
  }
</style>
