(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{224:function(t,e,o){var content=o(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("4da4d6ac",content,!0,{sourceMap:!1})},235:function(t,e,o){"use strict";o(224)},236:function(t,e,o){(e=o(24)(!1)).push([t.i,".page-register{height:100%;width:100%;padding:0;display:flex;justify-content:center;align-items:center;background-color:#297aff}.page-register .login-form{width:350px;height:450px;background-color:#fff;border-radius:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.page-register .login-form-head{font-size:18px;line-height:60px;text-align:center;font-weight:700}.page-register .login-form-body{padding:50px 20px 40px}.page-register .login-form-body .el-input{margin-bottom:10px}.page-register .login-form-foot{display:flex;justify-content:center;align-items:center}.page-register .login-form-foot .submit-btn{font-size:14px;font-weight:700;color:#fff;text-align:center;width:310px;line-height:36px;background-color:#297aff;cursor:pointer;border-radius:3px}.page-register .login-form-foot .submit-btn:hover{opacity:.8}.page-register .login-form-foot .submit-btn:active{opacity:1}",""]),t.exports=e},256:function(t,e,o){"use strict";o.r(e);o(33);var n=o(8),r=o(5),c=o.n(r),l={components:{},data:function(){return{account:{account:null,password:null}}},computed:{},methods:{onRegister:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=c.a.get(t.account,"account")){e.next=4;break}return t.$msg("用户不能为空"),e.abrupt("return");case 4:if(n=c.a.get(t.account,"password")){e.next=8;break}return t.$msg("密码不能为空"),e.abrupt("return");case 8:return e.next=10,t.$http.post("/auth/register",{account:o,password:n});case 10:e.sent;case 12:case"end":return e.stop()}}),e)})))()},toPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$router.push({name:t,params:e})}}},f=(o(235),o(26)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-register"},[o("div",{staticClass:"login-form"},[o("div",{staticClass:"login-form-head"},[t._v("注册")]),o("div",{staticClass:"login-form-body"},[o("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:t.account.account,callback:function(e){t.$set(t.account,"account",e)},expression:"account.account"}},[o("i",{staticClass:"el-input__icon el-icon-s-custom",attrs:{slot:"prefix"},slot:"prefix"})]),o("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:t.account.password,callback:function(e){t.$set(t.account,"password",e)},expression:"account.password"}},[o("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),o("div",{staticClass:"login-form-foot"},[o("div",{staticClass:"submit-btn",on:{click:function(e){return t.onRegister()}}},[t._v("注  册")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);