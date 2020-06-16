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
fieldset {
  display: none;
  padding: 0;
}
.disNone {
  display: none !important;
}
.invoice-tips {
  color: red;
}
.invoiceForm {
  border: 1px solid #ddd;
  padding-top: 75px;
  padding-bottom: 90px;
  fieldset {
    border: 0 none;
  }
}
.invoiceForm-col {
  margin-left: 130px;
  height: 80px;
}
.cs-caption {
  display: inline-block;
  box-sizing: content-box;
  width: 150px;
  text-align: right;
  padding-right: 10px;
}
.cs-radio-input {
  display: none;
}
.cs-radio-icon {
  display: inline-block;
  vertical-align: -3px;
  width: 15px;
  height: 15px;
  border: 1px solid #333;
  border-radius: 50%;
  padding: 3px;
  background-clip: content-box;
  margin-left: 10px;
}
// 单选框被选
.cs-radio-input:checked + .cs-radio-icon{
  border-color: #e94746;
  background-color: #e94746;
}
:checked ~ .invoice-tips {
  display: none;
}
// 验证不通过
.valid :invalid ~ .invoiceForm-col-error,
.valid .cs-input:placeholder-shown ~ .invoiceForm-col-error,
.valid .unValid ~ .invoiceForm-col-error{
  display: block;
}
.cs-radio-span {
  display: inline-block;
  box-sizing: content-box;
  padding-left: 4px;
  width: 101px;
  line-height: 21px;
}
.invoiceForm-col-error {
  display: none;
  width: 100%;
  margin-top: 8px;
  padding-left: 174px;
  color: #e94746;
}
.invoiceForm-col-tips {
  width: 100%;
  margin-top: 8px;
  padding-left: 311px;
}
.col-btn {
  margin-left: 440px;
  margin-top: 40px;
  padding: 0 12px;
  min-width: 110px;
  height: 42px;
  color: #fff;
  background-color: #e94746;
  border: none;
  border-radius: 3px;
  font-size: 16px;
}
.cs-input {
  display: inline-block;
  height: 42px;
  line-height: 42px;
  width: 335px;
  border: 1px solid #ddd;
  padding-left: 10px;
  color: #666;
}
.cs-input::placeholder {
  color: #ddd;
}

// 用before content填写提示语
.cs-valid-tips {
  width: 100%;
  margin-top: 8px;
  padding-left: 174px;
  color: #e94746;
}
.valid .newPassword-error:invalid + .cs-valid-tips::before {
  content: '密码至少6位，包含大小写字母和数字';
}
.valid .newPassword-error:placeholder-shown + .cs-valid-tips::before {
  content: '记得填写新密码哦';
}
.valid .validPassword-error:placeholder-shown + .cs-valid-tips::before {
  content: '还需要填写一遍密码，防止您写错';
}
.valid .un_valid.validPassword-error + .cs-valid-tips::before {
  content: '密码不一致，重新填一次吧';
}

//:placeholder-shown实现占位符交互效果
.input-fill-x, .input-outline-x {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  position: relative;
}
.input-fill-x {
  border-bottom: 1px solid #d0d0d5;
}
.input-fill-x::after {
  content: "";
  position: absolute;
  border-bottom: 2px solid #2486ff;
  left: 0; right: 0; bottom: -1px;
  transform: scaleX(0);
  transition: transform .25s;
}
.input-fill-x:focus-within::after {
  transform: scaleX(1);
}
.input-control {
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  outline: none;
}
.input-fill {
  padding: 20px 16px 6px;
  border: 1px solid transparent;
  background: #f5f5f5;
}
.input-outline {
  padding: 13px 16px 13px;
  border: 1px solid #d0d0d5;
  border-radius: 4px;
  transition: border-color .25s;
}
.input-outline:focus,
/* 默认placeholder颜色透明不可见 */
.input-control:placeholder-shown::placeholder {
  color: transparent;
}
.input-label {
  position: absolute;
  font-size: 16px;
  line-height: 1.5;
  left: 16px; top: 14px;
  color: #a2a9b6;
  padding: 0 2px;
  transform-origin: 0 0;
  pointer-events: none;
  transition: all .25s;
}
/* 线框样式label定位 */
.input-control:not(:placeholder-shown) ~ .input-label,
.input-control:focus ~ .input-label {
  color: #2486ff;
  transform: scale(0.75) translate(-2px, -32px);
}
/* 填充样式下label定位 */
.input-fill:not(:placeholder-shown) ~ .input-label,
.input-fill:focus ~ .input-label {
  transform: scale(0.75) translateY(-14px);
}
/* 线框交互下有个白色背景 */
.input-outline ~ .input-label {
  background-color: #fff;
}


//:checked伪类实现多选框计数功能
[type="checkbox"] {
  position: absolute;
  clip: rect(0 0 0 0);
}

.cs-topic {
  display: inline-block;
  width: 64px;
  margin-top: 5px;
  padding: 5px 0;
  border: 1px solid silver;
  text-align: center;
  cursor: pointer;
}
.cs-topic:hover {
  border-color: gray;
}
:checked + .cs-topic {
  border-color: deepskyblue;
  background-color: azure;
}
/* 选择计数器 */
body {
  counter-reset: topicCounter;
}
:checked + .cs-topic {
  counter-increment: topicCounter;
}
.cs-topic-counter::before {
  color: red;
  margin: 0 2px;
  content: counter(topicCounter);
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
      // 获取指定节点后续所有的兄弟节点
      HTMLElement.prototype.nextAll = function(){
        let pe = this.parentElement;
        let cs = pe.children;
        let arr = [];
        for(let i=cs.length-1;i>=0;i--){
          let csi = cs[i];
          if(csi === this){
            break;
          }
          arr.unshift(csi);
        }
        return arr;
      };
      document.getElementById('invoiceForm').addEventListener('submit', function (e) {
        this.classList.add('valid');
        // 判断表单全部验证通过
        if (this.checkValidity && this.checkValidity() === true
        && document.getElementById('validPass').value === document.getElementById('newPass').value) { // 验证两次密码一致
          console.log('验证通过');
        }
        e.preventDefault();
      });
      // 根据是否输入电话号码来判断显示的提示
      document.querySelector('.js-phone').addEventListener('input',function (e) {
        if (this.value) {
          this.nextAll()[0].classList.add('disNone');
          this.nextAll()[1].classList.remove('disNone');
        } else {
          this.nextAll()[0].classList.remove('disNone');
          this.nextAll()[1].classList.add('disNone');
        }
      });
      // 单选框决定表单内容
      document.querySelectorAll("input[radioFie]").forEach(val => {
        val.addEventListener('click', function (e) {
          document.querySelectorAll('fieldset').forEach(fie => {
            if (fie.id === this.id + 'Fie') {
              fie.style.display = 'block';
              fie.disabled = '';
            } else {
              // 禁用不需要的表单内容
              fie.style.display = 'none';
              fie.disabled = true;
            }
          })
        })
      });
      // 确认两次输入密码一致
      document.getElementById('validPass').addEventListener('blur', function (e) {
        if (this.value === document.getElementById('newPass').value) {
          this.classList.remove('un_valid');
        } else {
          this.classList.add('un_valid');
        }
      })
                  </code>
              </pre>
            </div>
          </div>
          <div class="demo-result">
            <form class="invoiceForm" id="invoiceForm" novalidate>
              <div class="invoiceForm-col">
                <label class="cs-caption">发票抬头: </label>
                <input class="cs-radio-input"
                       type="radio"
                       radioFie
                       id="personalInvoice"
                       name="invoiceHead" required>
                <label class="cs-radio-icon" for="personalInvoice"></label>
                <label class="cs-radio-span" for="personalInvoice">个人</label>
                <input class="cs-radio-input"
                       type="radio"
                       radioFie
                       id="enterpriseInvoice"
                       name="invoiceHead">
                <label class="cs-radio-icon" for="enterpriseInvoice"></label>
                <label class="cs-radio-span" for="enterpriseInvoice">企业</label>
                <span class="c9 invoice-tips">(请选择发票抬头)</span>
                <div class="invoiceForm-col-error">请选择发票抬头</div>
              </div>
              <div class="invoiceForm-col"
                   style="padding-left: 170px;height: auto;padding-bottom: 10px;width: 300px">
                <!--:placeholder-shown实现占位符交互效果-->
                <h4>填充风格</h4>
                <div class="input-fill-x">
                  <input class="input-control input-fill" placeholder="邮箱">
                  <label class="input-label">邮箱</label>
                </div>
                <h4>轮廓风格</h4>
                <div class="input-outline-x">
                  <input class="input-control input-outline" placeholder="邮箱">
                  <label class="input-label">邮箱</label>
                </div>
                <!--:checked伪类实现多选框计数功能-->
                请选择你感兴趣的话题：<br>
                <input type="checkbox" id="topic1"><label for="topic1" class="cs-topic">科技</label>
                <input type="checkbox" id="topic2"><label for="topic2" class="cs-topic">体育</label>
                <input type="checkbox" id="topic3"><label for="topic3" class="cs-topic">军事</label>
                <input type="checkbox" id="topic4"><label for="topic4" class="cs-topic">娱乐</label>
                <input type="checkbox" id="topic5"><label for="topic5" class="cs-topic">动漫</label>
                <input type="checkbox" id="topic6"><label for="topic6" class="cs-topic">音乐</label>
                <input type="checkbox" id="topic7"><label for="topic7" class="cs-topic">电影</label>
                <input type="checkbox" id="topic8"><label for="topic8" class="cs-topic">生活</label>
                <p>您已选择<span class="cs-topic-counter"></span>个话题。</p>
              </div>
              <!--个人发票抬头-->
              <fieldset id="personalInvoiceFie">
                <div class="invoiceForm-col">
                  <label class="cs-caption">用户姓名: </label>
                  <input class="cs-input" placeholder="请输入姓名" type="text" required>
                  <div class="invoiceForm-col-error">请输入用户姓名</div>
                </div>
                <div class="invoiceForm-col">
                  <label class="cs-caption">新登录密码: </label>
                  <input class="cs-input newPassword-error"
                         placeholder="请输入新登录密码"
                         id="newPass"
                         type="password"
                         required
                         pattern="\w{6,}">
                  <div class="cs-valid-tips"></div>
                </div>
                <div class="invoiceForm-col">
                  <label class="cs-caption">确认新密码: </label>
                  <input class="cs-input validPassword-error"
                         placeholder="请确认新登录密码"
                         id="validPass"
                         type="password"
                         required
                         pattern="\w{6,}">
                  <div class="cs-valid-tips"></div>
                </div>
              </fieldset>
              <!--企业发票抬头-->
              <fieldset id="enterpriseInvoiceFie">
                <div class="invoiceForm-col">
                  <label class="cs-caption">客户名称: </label>
                  <input class="cs-input" placeholder="请输入客户名称" type="text" required>
                  <div class="invoiceForm-col-error">请输入客户名称</div>
                </div>
                <div class="invoiceForm-col">
                  <label class="cs-caption">纳税人识别号: </label>
                  <input class="cs-input" placeholder="请输入纳税人识别号" type="text" required>
                  <div class="invoiceForm-col-error">请输入纳税人识别号</div>
                </div>
                <div class="invoiceForm-col">
                  <label class="cs-caption">公司详细地址: </label>
                  <input class="cs-input" placeholder="请输入公司详细地址" type="text" required>
                  <div class="invoiceForm-col-error">请输入公司详细地址</div>
                </div>
                <div class="invoiceForm-col">
                  <label class="cs-caption">公司注册电话: </label>
                  <input class="cs-input js-phone"
                         placeholder="请输入公司注册电话"
                         type="text"
                         required
                         pattern="^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|
                 ([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$">
                  <div class="invoiceForm-col-error">请输入公司注册电话</div>
                  <div class="invoiceForm-col-error">请填写正确的注册电话</div>
                </div>
              </fieldset>
              <button type="submit" class="col-btn">提交</button>
            </form>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'adaptive-textarea-demo',
    data() {
      return {
        html: `<form class="invoiceForm" id="invoiceForm" novalidate>
  <div class="invoiceForm-col">
    <label class="cs-caption">发票抬头: </label>
    <input class="cs-radio-input"
           type="radio"
           radioFie
           id="personalInvoice"
           name="invoiceHead" required>
    <label class="cs-radio-icon" for="personalInvoice"></label>
    <label class="cs-radio-span" for="personalInvoice">个人</label>
    <input class="cs-radio-input"
           type="radio"
           radioFie
           id="enterpriseInvoice"
           name="invoiceHead">
    <label class="cs-radio-icon" for="enterpriseInvoice"></label>
    <label class="cs-radio-span" for="enterpriseInvoice">企业</label>
    <span class="c9 invoice-tips">(请选择发票抬头)</span>
    <div class="invoiceForm-col-error">请选择发票抬头</div>
  </div>
  <div class="invoiceForm-col"
       style="padding-left: 170px;height: auto;padding-bottom: 10px;width: 300px">
    <!--:placeholder-shown实现占位符交互效果-->
    <h4>填充风格</h4>
    <div class="input-fill-x">
      <input class="input-control input-fill" placeholder="邮箱">
      <label class="input-label">邮箱</label>
    </div>
    <h4>轮廓风格</h4>
    <div class="input-outline-x">
      <input class="input-control input-outline" placeholder="邮箱">
      <label class="input-label">邮箱</label>
    </div>
    <!--:checked伪类实现多选框计数功能-->
    请选择你感兴趣的话题：<br>
    <input type="checkbox" id="topic1"><label for="topic1" class="cs-topic">科技</label>
    <input type="checkbox" id="topic2"><label for="topic2" class="cs-topic">体育</label>
    <input type="checkbox" id="topic3"><label for="topic3" class="cs-topic">军事</label>
    <input type="checkbox" id="topic4"><label for="topic4" class="cs-topic">娱乐</label>
    <input type="checkbox" id="topic5"><label for="topic5" class="cs-topic">动漫</label>
    <input type="checkbox" id="topic6"><label for="topic6" class="cs-topic">音乐</label>
    <input type="checkbox" id="topic7"><label for="topic7" class="cs-topic">电影</label>
    <input type="checkbox" id="topic8"><label for="topic8" class="cs-topic">生活</label>
    <p>您已选择<span class="cs-topic-counter"></span>个话题。</p>
  </div>
  <!--个人发票抬头-->
  <fieldset id="personalInvoiceFie">
    <div class="invoiceForm-col">
      <label class="cs-caption">用户姓名: </label>
      <input class="cs-input" placeholder="请输入姓名" type="text" required>
      <div class="invoiceForm-col-error">请输入用户姓名</div>
    </div>
    <div class="invoiceForm-col">
      <label class="cs-caption">新登录密码: </label>
      <input class="cs-input newPassword-error"
             placeholder="请输入新登录密码"
             id="newPass"
             type="password"
             required
             pattern="\\w{6,}">
      <div class="cs-valid-tips"></div>
    </div>
    <div class="invoiceForm-col">
      <label class="cs-caption">确认新密码: </label>
      <input class="cs-input validPassword-error"
             placeholder="请确认新登录密码"
             id="validPass"
             type="password"
             required
             pattern="\\w{6,}">
      <div class="cs-valid-tips"></div>
    </div>
  </fieldset>
  <!--企业发票抬头-->
  <fieldset id="enterpriseInvoiceFie">
    <div class="invoiceForm-col">
      <label class="cs-caption">客户名称: </label>
      <input class="cs-input" placeholder="请输入客户名称" type="text" required>
      <div class="invoiceForm-col-error">请输入客户名称</div>
    </div>
    <div class="invoiceForm-col">
      <label class="cs-caption">纳税人识别号: </label>
      <input class="cs-input" placeholder="请输入纳税人识别号" type="text" required>
      <div class="invoiceForm-col-error">请输入纳税人识别号</div>
    </div>
    <div class="invoiceForm-col">
      <label class="cs-caption">公司详细地址: </label>
      <input class="cs-input" placeholder="请输入公司详细地址" type="text" required>
      <div class="invoiceForm-col-error">请输入公司详细地址</div>
    </div>
    <div class="invoiceForm-col">
      <label class="cs-caption">公司注册电话: </label>
      <input class="cs-input js-phone"
             placeholder="请输入公司注册电话"
             type="text"
             required
             pattern="^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0 - 9]{8}$">
  < div class = "invoiceForm-col-error" > 请输入公司注册电话 < /div>
  < div class = "invoiceForm-col-error" > 请填写正确的注册电话 < /div>
  < /div>
  < /fieldset>
  < button type = "submit" class = "col-btn" > 提交 < /button>
< /form>`
      }
    },
    mounted() {
      // 获取指定节点后续所有的兄弟节点
      HTMLElement.prototype.nextAll = function(){
        let pe = this.parentElement;
        let cs = pe.children;
        let arr = [];
        for(let i=cs.length-1;i>=0;i--){
          let csi = cs[i];
          if(csi === this){
            break;
          }
          arr.unshift(csi);
        }
        return arr;
      };
      document.getElementById('invoiceForm').addEventListener('submit', function (e) {
        this.classList.add('valid');
        // 判断表单全部验证通过
        if (this.checkValidity && this.checkValidity() === true
        && document.getElementById('validPass').value === document.getElementById('newPass').value) { // 验证两次密码一致
          console.log('验证通过');
        }
        e.preventDefault();
      });
      // 根据是否输入电话号码来判断显示的提示
      document.querySelector('.js-phone').addEventListener('input',function (e) {
        if (this.value) {
          this.nextAll()[0].classList.add('disNone');
          this.nextAll()[1].classList.remove('disNone');
        } else {
          this.nextAll()[0].classList.remove('disNone');
          this.nextAll()[1].classList.add('disNone');
        }
      });
      // 单选框决定表单内容
      document.querySelectorAll("input[radioFie]").forEach(val => {
        val.addEventListener('click', function (e) {
          document.querySelectorAll('fieldset').forEach(fie => {
            if (fie.id === this.id + 'Fie') {
              fie.style.display = 'block';
              fie.disabled = '';
            } else {
              // 禁用不需要的表单内容
              fie.style.display = 'none';
              fie.disabled = true;
            }
          })
        })
      });
      // 确认两次输入密码一致
      document.getElementById('validPass').addEventListener('blur', function (e) {
        if (this.value === document.getElementById('newPass').value) {
          this.classList.remove('un_valid');
        } else {
          this.classList.add('un_valid');
        }
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  fieldset {
    display: none;
    padding: 0;
  }
  .disNone {
    display: none !important;
  }
  .invoice-tips {
    color: red;
  }
  .invoiceForm {
    border: 1px solid #ddd;
    padding-top: 75px;
    padding-bottom: 90px;
    fieldset {
      border: 0 none;
    }
  }
  .invoiceForm-col {
    margin-left: 130px;
    height: 80px;
  }
  .cs-caption {
    display: inline-block;
    box-sizing: content-box;
    width: 150px;
    text-align: right;
    padding-right: 10px;
  }
  .cs-radio-input {
    display: none;
  }
  .cs-radio-icon {
    display: inline-block;
    vertical-align: -3px;
    width: 15px;
    height: 15px;
    border: 1px solid #333;
    border-radius: 50%;
    padding: 3px;
    background-clip: content-box;
    margin-left: 10px;
  }
  // 单选框被选
  .cs-radio-input:checked + .cs-radio-icon{
    border-color: #e94746;
    background-color: #e94746;
  }
  :checked ~ .invoice-tips {
    display: none;
  }
  // 验证不通过
  .valid :invalid ~ .invoiceForm-col-error,
  .valid .cs-input:placeholder-shown ~ .invoiceForm-col-error,
  .valid .unValid ~ .invoiceForm-col-error{
    display: block;
  }
  .cs-radio-span {
    display: inline-block;
    box-sizing: content-box;
    padding-left: 4px;
    width: 101px;
    line-height: 21px;
  }
  .invoiceForm-col-error {
    display: none;
    width: 100%;
    margin-top: 8px;
    padding-left: 174px;
    color: #e94746;
  }
  .invoiceForm-col-tips {
    width: 100%;
    margin-top: 8px;
    padding-left: 311px;
  }
  .col-btn {
    margin-left: 440px;
    margin-top: 40px;
    padding: 0 12px;
    min-width: 110px;
    height: 42px;
    color: #fff;
    background-color: #e94746;
    border: none;
    border-radius: 3px;
    font-size: 16px;
  }
  .cs-input {
    display: inline-block;
    height: 42px;
    line-height: 42px;
    width: 335px;
    border: 1px solid #ddd;
    padding-left: 10px;
    color: #666;
  }
  .cs-input::placeholder {
    color: #ddd;
  }

  // 用before content填写提示语
  .cs-valid-tips {
    width: 100%;
    margin-top: 8px;
    padding-left: 174px;
    color: #e94746;
  }
  .valid .newPassword-error:invalid + .cs-valid-tips::before {
    content: '密码至少6位，包含大小写字母和数字';
  }
  .valid .newPassword-error:placeholder-shown + .cs-valid-tips::before {
    content: '记得填写新密码哦';
  }
  .valid .validPassword-error:placeholder-shown + .cs-valid-tips::before {
    content: '还需要填写一遍密码，防止您写错';
  }
  .valid .un_valid.validPassword-error + .cs-valid-tips::before {
    content: '密码不一致，重新填一次吧';
  }

  //:placeholder-shown实现占位符交互效果
  .input-fill-x, .input-outline-x {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    position: relative;
  }
  .input-fill-x {
    border-bottom: 1px solid #d0d0d5;
  }
  .input-fill-x::after {
    content: "";
    position: absolute;
    border-bottom: 2px solid #2486ff;
    left: 0; right: 0; bottom: -1px;
    transform: scaleX(0);
    transition: transform .25s;
  }
  .input-fill-x:focus-within::after {
    transform: scaleX(1);
  }
  .input-control {
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    outline: none;
  }
  .input-fill {
    padding: 20px 16px 6px;
    border: 1px solid transparent;
    background: #f5f5f5;
  }
  .input-outline {
    padding: 13px 16px 13px;
    border: 1px solid #d0d0d5;
    border-radius: 4px;
    transition: border-color .25s;
  }
  .input-outline:focus,
  /* 默认placeholder颜色透明不可见 */
  .input-control:placeholder-shown::placeholder {
    color: transparent;
  }
  .input-label {
    position: absolute;
    font-size: 16px;
    line-height: 1.5;
    left: 16px; top: 14px;
    color: #a2a9b6;
    padding: 0 2px;
    transform-origin: 0 0;
    pointer-events: none;
    transition: all .25s;
  }
  /* 线框样式label定位 */
  .input-control:not(:placeholder-shown) ~ .input-label,
  .input-control:focus ~ .input-label {
    color: #2486ff;
    transform: scale(0.75) translate(-2px, -32px);
  }
  /* 填充样式下label定位 */
  .input-fill:not(:placeholder-shown) ~ .input-label,
  .input-fill:focus ~ .input-label {
    transform: scale(0.75) translateY(-14px);
  }
  /* 线框交互下有个白色背景 */
  .input-outline ~ .input-label {
    background-color: #fff;
  }


  //:checked伪类实现多选框计数功能
  [type="checkbox"] {
    position: absolute;
    clip: rect(0 0 0 0);
  }

  .cs-topic {
    display: inline-block;
    width: 64px;
    margin-top: 5px;
    padding: 5px 0;
    border: 1px solid silver;
    text-align: center;
    cursor: pointer;
  }
  .cs-topic:hover {
    border-color: gray;
  }
  :checked + .cs-topic {
    border-color: deepskyblue;
    background-color: azure;
  }
  /* 选择计数器 */
  body {
    counter-reset: topicCounter;
  }
  :checked + .cs-topic {
    counter-increment: topicCounter;
  }
  .cs-topic-counter::before {
    color: red;
    margin: 0 2px;
    content: counter(topicCounter);
  }
</style>
