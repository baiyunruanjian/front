(window.webpackJsonp=window.webpackJsonp||[]).push([["Products"],{"0639":function(t,a,e){"use strict";var o={components:{},props:{title:{default:"未命名"},open:{default:!1},isRoute:{}},watch:{open:function(t){this.isOpen=t}},methods:{closed:function(){this.isOpen=!1,this.$emit("close",!0)}},data:function(){return{isOpen:!1}}},s=(e("f5cc"),e("2877")),i=Object(s.a)(o,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"custom",attrs:{width:"940px",modal:!1,visible:t.isOpen,"before-close":t.closed,"close-on-click-modal":!1},on:{"update:visible":function(a){t.isOpen=a}}},[o("div",{staticClass:"readme"},[o("div",{staticClass:"title"},[o("img",{attrs:{src:e("fbb8"),alt:"使用软件须知"}})]),o("div",{staticClass:"content"},[o("p",[t._v("软件管理员只能有一个,管理员密码要保管好，所有与授权相关的都需要管理操作才能完成，管理员有义务定期检查软件帐号的权限是否合理。软件使用请一人一个帐号，第一次使用软件请一定要修改自己的登陆密码，不要把帐号密码告诉其它的同事，以免其它人以你的名义违规操作软件，因为软件的操作记录是以帐号为依据的。请牢记自己的用户名和密码，建议使用数字、字母大小写组合的密码。为了能更加流畅的使用本系统，建议使用火狐浏览器或谷歌浏览器打开本软件，要安装火狐浏览器请点这里到官网下载。离开电脑前或下班了记得退出软件，以免其它人在你的电脑上用你的帐号修改资料。数据录入一定要及时、规范，不能物料都从仓库领走一个星期了，系统中还没记录。")]),o("div",{staticClass:"next"},[null!=t.isRoute?o("a",{directives:[{name:"route-to",rawName:"v-route-to",value:"/products",expression:"`/products`"}],attrs:{href:"javascript:;"}},[t._v("知道了")]):o("a",{attrs:{href:"javascript:;"},on:{click:t.closed}},[t._v("关闭")])])])])])}),[],!1,null,"04fc598f",null);a.a=i.exports},"16b4":function(t,a,e){"use strict";var o=e("fa9e");e.n(o).a},"3f71":function(t,a,e){t.exports=e.p+"img/products_title.png"},5793:function(t,a,e){t.exports=e.p+"img/product_more_title.png"},"59bd":function(t,a,e){"use strict";var o={props:{open:{default:!1},message:{default:"-"}},watch:{open:function(t){this.isOpen=t}},methods:{closed:function(){this.isOpen=!1,this.$emit("close",!0)}},data:function(){return{isOpen:!1}}},s=(e("b1a6"),e("2877")),i=Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"custom",attrs:{width:"260px",modal:!1,visible:t.isOpen,"before-close":t.closed,"close-on-click-modal":!1,"show-close":!1},on:{"update:visible":function(a){t.isOpen=a}}},[e("div",{staticClass:"custom-alert"},[e("div",{staticClass:"btn-close",on:{click:t.closed}}),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.message)}})])])}),[],!1,null,"0daa8b92",null);a.a=i.exports},"7a01":function(t,a,e){},"917d":function(t,a,e){},9293:function(t,a,e){},b1a6:function(t,a,e){"use strict";var o=e("917d");e.n(o).a},c3bc:function(t,a,e){},c70a:function(t,a,e){t.exports=e.p+"img/byrj_logo.png"},c828:function(t,a,e){"use strict";var o=e("9293");e.n(o).a},d5cb:function(t,a,e){},daa8:function(t,a,e){"use strict";var o=e("d5cb");e.n(o).a},f5cc:function(t,a,e){"use strict";var o=e("7a01");e.n(o).a},fa9e:function(t,a,e){},fbb8:function(t,a,e){t.exports=e.p+"img/readme_title.png"},feb8:function(t,a,e){"use strict";var o=e("c3bc");e.n(o).a},ff40:function(t,a,e){"use strict";e.r(a);var o=e("0639"),s=e("00e7"),i=e.n(s),n=e("59bd"),c={components:{DialogAlert:n.a},props:{title:{default:"未命名"},open:{default:!1}},watch:{open:function(t){if(this.isOpen=t,t){var a=i.a.get("UserInfo");if(a){var e=JSON.parse(a);this.formData.account=e.account,this.formData.contacts=e.contacts,this.formData.phone=e.phone}}}},methods:{closeAlert:function(){this.$refs[this.$dialogAlert.ref].focus(),this.$dialogAlert=Object.assign(this.$dialogAlert,{isOpen:!1,message:"",ref:""}),this.$forceUpdate()},closed:function(){this.isOpen=!1,this.$emit("close",!0)},submit:function(){return this.formData.account?this.formData.contacts?this.formData.phone?this.formData.content?this.formData.content.length>200?(this.$dialogAlert=Object.assign(this.$dialogAlert,{isOpen:!0,message:"内容不超200字",ref:"content"}),this.$forceUpdate(),!1):(this.isOpen=!1,void this.$emit("success",this.formData)):(this.$dialogAlert=Object.assign(this.$dialogAlert,{isOpen:!0,message:"请填写内容",ref:"content"}),this.$forceUpdate(),!1):(this.$dialogAlert=Object.assign(this.$dialogAlert,{isOpen:!0,message:"请填写电话",ref:"phone"}),this.$forceUpdate(),!1):(this.$dialogAlert=Object.assign(this.$dialogAlert,{isOpen:!0,message:"请填写联系人",ref:"contacts"}),this.$forceUpdate(),!1):(this.$dialogAlert=Object.assign(this.$dialogAlert,{isOpen:!0,message:"请填写用户名",ref:"account"}),this.$forceUpdate(),!1)}},data:function(){return{isOpen:!1,formData:{account:"",contacts:"",phone:"",email:"",content:""}}}},r=(e("c828"),e("2877")),l={components:{DialogProductConsult:Object(r.a)(c,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"custom",attrs:{width:"720px",modal:!1,visible:t.isOpen,"before-close":t.closed,"close-on-click-modal":!1},on:{"update:visible":function(a){t.isOpen=a}}},[o("div",{staticClass:"product_consult"},[o("div",{staticClass:"hd"},[o("img",{attrs:{src:e("c70a"),alt:"logo"}}),t._v(" 我要咨询 ")]),o("div",{staticClass:"form"},[o("dl",[o("dd",[o("label",[t._v("用户名")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],ref:"account",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.formData.account},on:{input:function(a){a.target.composing||t.$set(t.formData,"account",a.target.value)}}})]),o("dd",[o("label",[t._v("联系人")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.contacts,expression:"formData.contacts"}],ref:"contacts",attrs:{type:"text",placeholder:"请输入联系人"},domProps:{value:t.formData.contacts},on:{input:function(a){a.target.composing||t.$set(t.formData,"contacts",a.target.value)}}})]),o("dd",[o("label",[t._v("电话")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],ref:"phone",attrs:{type:"text",placeholder:"请输入电话"},domProps:{value:t.formData.phone},on:{input:function(a){a.target.composing||t.$set(t.formData,"phone",a.target.value)}}})]),o("dd",[o("label",[t._v("邮箱")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],ref:"email",attrs:{type:"text",placeholder:"请输入邮箱"},domProps:{value:t.formData.email},on:{input:function(a){a.target.composing||t.$set(t.formData,"email",a.target.value)}}})])]),o("div",{staticClass:"textarea"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],ref:"content",attrs:{placeholder:"请输入咨询内容 (限200字)"},domProps:{value:t.formData.content},on:{input:function(a){a.target.composing||t.$set(t.formData,"content",a.target.value)}}}),o("span",[t._v("限200字")])])]),o("div",{staticClass:"bm"},[o("div",{staticClass:"ll"},[t._v("免责声明：由于我们人手有限，不能对所有咨询一一答覆，敬请谅解。")]),o("div",{staticClass:"rr text-right"},[o("a",{attrs:{href:"javascript:;"},on:{click:t.submit}},[t._v("提交")])]),o("div",{staticClass:"clr"})])]),o("DialogAlert",{attrs:{open:t.$dialogAlert.isOpen,message:t.$dialogAlert.message},on:{close:t.closeAlert}})],1)}),[],!1,null,"ff2f0600",null).exports},props:{title:{default:"未命名"},open:{default:!1},isRoute:{}},watch:{open:function(t){this.isOpen=t}},methods:{DialogProductConsult_Submit:function(t){},closed:function(){this.isOpen=!1,this.$emit("close",!0)}},data:function(){return{isOpen:!1,isDialogProductConsult:!1}}},d=(e("feb8"),Object(r.a)(l,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"custom",attrs:{width:"1000px",modal:!1,visible:t.isOpen,"before-close":t.closed,"close-on-click-modal":!1},on:{"update:visible":function(a){t.isOpen=a}}},[o("div",{staticClass:"product_more"},[o("div",{staticClass:"title"},[o("img",{attrs:{src:e("5793"),alt:"更多软件"}})]),o("div",{staticClass:"content"},[o("p",[t._v("信息化已经遍饰我们周边，空气中也充满了信息化的味道。")]),o("p",[t._v("企业必须投身于信息化，已是不待选择的现实。")]),o("p",[t._v("要实现扁平化管理，全面信息化是基础。")]),o("p",[t._v("全面信息化是一个庞大的信息工程，它离不开一个大框架的支撑。")]),o("p",[t._v("我们在企业管理软件方面有着多年的研究。")]),o("p",[t._v("软件即工具。")]),o("p",[t._v("不同规模的企业对企业管理软件有着不同的需求。")]),o("p",[t._v("二个人到饭店就餐与八个人到饭店就餐，对菜品的需求当然不一样。")]),o("p",[t._v("因此，我们研发的各种各样的企业管理软件，不知不觉中已经不少。")]),o("p",[t._v("当前决定选择其中适合小微企业使用的贸易管理、工业管理、代工管理的10个初级软件")]),o("p",[t._v("进行开发。")]),o("p",[t._v("更多软件能够快速满足企业的经营规模扩大之后的新需求。")]),o("p",[t._v("在初级软件上进行升级可节省重新开发的费用。")]),o("div",{staticClass:"next"},[o("a",{attrs:{href:"javascript:;"},on:{click:function(a){t.isDialogProductConsult=!0}}},[t._v("我要咨询")])])]),o("div",{staticClass:"footer"},[o("p",[t._v("广东省汕头市澄海区白云软件开发有限公司")]),o("p",[t._v("粤ICP备16007973号")])])]),o("DialogProductConsult",{attrs:{open:t.isDialogProductConsult},on:{success:t.DialogProductConsult_Submit,close:function(a){t.isDialogProductConsult=!1}}})],1)}),[],!1,null,"42320a8f",null).exports),u={components:{DialogAlert:n.a},props:{title:{default:"未命名"},open:{default:!1},data:{default:{}}},watch:{open:function(t){if(this.isOpen=t,t){"id"in this.data&&this.GetProductDetail(this.data.id);var a=i.a.get("UserInfo");if(a)JSON.parse(a)}}},methods:{GetProductDetail:function(t){var a=this;this.axios.get("/software/selectDetail?id=".concat(t)).then((function(t){0==t.data.code&&(a.ProductDetail=t.data.data)}))},closeAlert:function(){this.$refs[this.$dialogAlert.ref].focus(),this.$dialogAlert=Object.assign(this.$dialogAlert,{isOpen:!1,message:"",ref:""}),this.$forceUpdate()},closed:function(){this.isOpen=!1,this.$emit("close",!0)},submit:function(){this.isOpen=!1,this.$emit("success",this.formData)}},data:function(){return{isOpen:!1,ProductDetail:{},formData:{userId:"",userName:"",softwareId:"",softwareName:"",softwarePrice:""}}}},p=(e("daa8"),Object(r.a)(u,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"custom",attrs:{width:"650px",modal:!1,visible:t.isOpen,"before-close":t.closed,"close-on-click-modal":!1},on:{"update:visible":function(a){t.isOpen=a}}},[t._v(" "+t._s(t.ProductDetail)+" "),e("div",{staticClass:"product_buy"},[e("div",{staticClass:"hd"},[t._v("扫码付款")]),e("div",{staticClass:"form"},[e("dl",[e("dd",[e("label",[t._v("用户名：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],ref:"account",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.formData.account},on:{input:function(a){a.target.composing||t.$set(t.formData,"account",a.target.value)}}})]),e("dd",[e("label",[t._v("联系人：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.contacts,expression:"formData.contacts"}],ref:"contacts",attrs:{type:"text",placeholder:"请输入联系人"},domProps:{value:t.formData.contacts},on:{input:function(a){a.target.composing||t.$set(t.formData,"contacts",a.target.value)}}})]),e("dd",[e("label",[t._v("电 话：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],ref:"phone",attrs:{type:"text",placeholder:"请输入电话"},domProps:{value:t.formData.phone},on:{input:function(a){a.target.composing||t.$set(t.formData,"phone",a.target.value)}}})])]),e("dl",[e("dd",[e("label",[t._v("软件名称：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],ref:"account",attrs:{type:"text",placeholder:"请输入软件名称"},domProps:{value:t.formData.account},on:{input:function(a){a.target.composing||t.$set(t.formData,"account",a.target.value)}}})]),e("dd",[e("label",[t._v("价格：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.contacts,expression:"formData.contacts"}],ref:"contacts",attrs:{type:"text",placeholder:"请输入价格"},domProps:{value:t.formData.contacts},on:{input:function(a){a.target.composing||t.$set(t.formData,"contacts",a.target.value)}}})])]),e("dl",[e("dd",[e("label",[t._v("定金：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],ref:"account",attrs:{type:"text",placeholder:"请输入定金"},domProps:{value:t.formData.account},on:{input:function(a){a.target.composing||t.$set(t.formData,"account",a.target.value)}}})]),e("dd",[e("label",[t._v("余款：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.contacts,expression:"formData.contacts"}],ref:"contacts",attrs:{type:"text",placeholder:"请输入余款"},domProps:{value:t.formData.contacts},on:{input:function(a){a.target.composing||t.$set(t.formData,"contacts",a.target.value)}}})]),e("dd",[e("label",[t._v("全款：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.contacts,expression:"formData.contacts"}],ref:"contacts",attrs:{type:"text",placeholder:"请输入全款"},domProps:{value:t.formData.contacts},on:{input:function(a){a.target.composing||t.$set(t.formData,"contacts",a.target.value)}}})])])]),e("div",{staticClass:"qrcode"},[e("ul",[e("li",[e("label",[t._v("微信")]),e("img",{attrs:{src:""}})]),e("li",[e("label",[t._v("支付宝")]),e("img",{attrs:{src:""}})])])]),e("div",{staticClass:"bm"},[e("div",{staticClass:"rr text-right"},[e("a",{attrs:{href:"javascript:;"}},[t._v("已付款")]),e("a",{attrs:{href:"javascript:;"},on:{click:t.submit}},[t._v("提交")])]),e("div",{staticClass:"clr"})])]),e("DialogAlert",{attrs:{open:t.$dialogAlert.isOpen,message:t.$dialogAlert.message},on:{close:t.closeAlert}})],1)}),[],!1,null,"1027ddba",null).exports),m={components:{DialogReadme:o.a,DialogProductMore:d,DialogProductBuy:p},methods:{GetProductData:function(){var t=this;this.axios.get("/software/selectList").then((function(a){0==a.data.code&&(t.ProductData=a.data.data)}))}},mounted:function(){this.GetProductData()},data:function(){return{isDialogProductBuyOpen:!1,dialogProductBuy_data:{},isDialogReadmeOpen:!1,isDialogProductMoreOpen:!1,ProductData:{}}}},f=(e("16b4"),Object(r.a)(m,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"products"},[o("div",{staticClass:"wrap"},[o("div",{staticClass:"wrap-1000"},[o("div",{staticClass:"header"},[o("img",{staticClass:"logo",attrs:{src:e("3f71"),alt:"软件产品"}}),o("a",{staticClass:"readme",attrs:{href:"javascript:;"},on:{click:function(a){t.isDialogReadmeOpen=!0}}},[t._v("使用软件须知")])]),o("div",{staticClass:"content"},[t.ProductData&&"content"in t.ProductData?o("ul",{staticClass:"pro-list"},t._l(t.ProductData.content,(function(a){return o("li",{key:a.id},[o("div",{staticClass:"pro-item"},[o("table",[o("tr",[o("td",{attrs:{colspan:"2"}},[t._v("名称："+t._s(a.name))])]),o("tr",[o("td",[t._v("价格："+t._s((a.price/100).toFixed(2)))]),o("td",{staticClass:"profile"},[t._v("简介")])])]),o("a",{staticClass:"pro-item-buy",attrs:{href:"javascript:;"},on:{click:function(e){t.isDialogProductBuyOpen=!0,t.dialogProductBuy_data=a}}},[t._m(0,!0)])])])})),0):t._e(),o("div",{staticClass:"clr"})]),o("div",{staticClass:"bottom"},[o("a",{attrs:{href:"javascript:;"},on:{click:function(a){t.isDialogProductMoreOpen=!0}}},[t._v("更多软件")])]),t._m(1)])]),o("DialogReadme",{attrs:{open:t.isDialogReadmeOpen},on:{close:function(a){t.isDialogReadmeOpen=!1}}}),o("DialogProductMore",{attrs:{open:t.isDialogProductMoreOpen},on:{close:function(a){t.isDialogProductMoreOpen=!1}}}),o("DialogProductBuy",{attrs:{open:t.isDialogProductBuyOpen,data:t.dialogProductBuy_data},on:{close:function(a){t.isDialogProductBuyOpen=!1}}})],1)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("i",[t._v("买")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("p",[t._v("广东省汕头市澄海区白云软件开发有限公司")]),e("p",[t._v("粤ICP备16007973号")])])}],!1,null,null,null));a.default=f.exports}}]);
//# sourceMappingURL=Products.js.map