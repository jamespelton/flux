"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[7550],{34547:(e,t,a)=>{a.d(t,{Z:()=>d});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"toastification"},[t("div",{staticClass:"d-flex align-items-start"},[t("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[t("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),t("div",{staticClass:"d-flex flex-grow-1"},[t("div",[e.title?t("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${e.variant}`,domProps:{textContent:e._s(e.title)}}):e._e(),e.text?t("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),t("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():t("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},o=[],n=a(47389);const i={components:{BAvatar:n.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},s=i;var l=a(1001),c=(0,l.Z)(s,r,o,!1,null,"22d964ca",null);const d=c.exports},37550:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var r=function(){var e=this,t=e._self._c;return t("div",[t("b-card",[t("h6",{staticClass:"mb-1"},[e._v(" Click the 'Download Debug File' button to download the Benchmark log. This may take a few minutes depending on file size. ")]),t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-download",variant:"outline-primary",size:"md"}},[e._v(" Download Debug File ")]),e.total&&e.downloaded?t("div",{staticClass:"d-flex",staticStyle:{width:"300px"}},[t("b-card-text",{staticClass:"mt-1 mb-0 mr-auto"},[e._v(" "+e._s(`${(e.downloaded/1e6).toFixed(2)} / ${(e.total/1e6).toFixed(2)}`)+" MB - "+e._s(`${(e.downloaded/e.total*100).toFixed(2)}%`)+" ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon cancel-button",attrs:{variant:"danger",size:"sm"},on:{click:e.cancelDownload}},[e._v(" x ")])],1):e._e(),t("b-popover",{ref:"popover",attrs:{target:"start-download",triggers:"click",show:e.downloadPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.downloadPopoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v("Are You Sure?")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onDownloadClose}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onDownloadClose}},[e._v(" Cancel ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onDownloadOk}},[e._v(" Download Debug ")])],1)])],1)]),t("b-card",[t("h6",{staticClass:"mb-1"},[e._v(" Click the 'Show Debug File' button to view the last 100 lines of the Benchmark debug file. ")]),t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{id:"start-tail",variant:"outline-primary",size:"md"}},[e._v(" Show Debug File ")]),e.callResponse.data.message?t("b-form-textarea",{staticClass:"mt-1",attrs:{plaintext:"","no-resize":"",rows:"30",value:e.callResponse.data.message}}):e._e(),t("b-popover",{ref:"popover",attrs:{target:"start-tail",triggers:"click",show:e.tailPopoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.tailPopoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{staticClass:"d-flex justify-content-between align-items-center"},[t("span",[e._v("Are You Sure?")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onTailClose}},[t("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[t("div",[t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onTailClose}},[e._v(" Cancel ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onTailOk}},[e._v(" Show Debug ")])],1)])],1)])],1)},o=[],n=(a(98858),a(61318),a(33228),a(86855)),i=a(15193),s=a(53862),l=a(333),c=a(64206),d=a(34547),u=a(20266),p=a(39569);const h={components:{BCard:n._,BButton:i.T,BPopover:s.x,BFormTextarea:l.y,BCardText:c.j,ToastificationContent:d.Z},directives:{Ripple:u.Z},data(){return{downloadPopoverShow:!1,tailPopoverShow:!1,abortToken:{},downloaded:0,total:0,callResponse:{status:"",data:{}}}},methods:{cancelDownload(){this.abortToken.cancel("User download cancelled"),this.downloaded="",this.total=""},onDownloadClose(){this.downloadPopoverShow=!1},async onDownloadOk(){const e=this;this.downloadPopoverShow=!1,this.abortToken=p.Z.cancelToken();const t=localStorage.getItem("zelidauth"),a={headers:{zelidauth:t},responseType:"blob",onDownloadProgress(t){e.downloaded=t.loaded,e.total=t.total},cancelToken:e.abortToken.token},r=await p.Z.justAPI().get("/flux/benchmarkdebug",a),o=window.URL.createObjectURL(new Blob([r.data])),n=document.createElement("a");n.href=o,n.setAttribute("download","debug.log"),document.body.appendChild(n),n.click()},onTailClose(){this.tailPopoverShow=!1},async onTailOk(){this.tailPopoverShow=!1;const e=localStorage.getItem("zelidauth");p.Z.tailBenchmarkDebug(e).then((e=>{"error"===e.data.status?this.$toast({component:d.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=e.data.status,this.callResponse.data=e.data.data)})).catch((e=>{this.$toast({component:d.Z,props:{title:"Error while trying to get latest debug of Benchmark",icon:"InfoIcon",variant:"danger"}}),console.log(e)}))}}},v=h;var b=a(1001),m=(0,b.Z)(v,r,o,!1,null,null,null);const g=m.exports},39569:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(80914);const o={start(e){return(0,r.Z)().get("/benchmark/start",{headers:{zelidauth:e}})},restart(e){return(0,r.Z)().get("/benchmark/restart",{headers:{zelidauth:e}})},getStatus(){return(0,r.Z)().get("/benchmark/getstatus")},restartNodeBenchmarks(e){return(0,r.Z)().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:e}})},signFluxTransaction(e,t){return(0,r.Z)().get(`/benchmark/signzelnodetransaction/${t}`,{headers:{zelidauth:e}})},helpSpecific(e){return(0,r.Z)().get(`/benchmark/help/${e}`)},help(){return(0,r.Z)().get("/benchmark/help")},stop(e){return(0,r.Z)().get("/benchmark/stop",{headers:{zelidauth:e}})},getBenchmarks(){return(0,r.Z)().get("/benchmark/getbenchmarks")},getInfo(){return(0,r.Z)().get("/benchmark/getinfo")},tailBenchmarkDebug(e){return(0,r.Z)().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:e}})},justAPI(){return(0,r.Z)()},cancelToken(){return r.S}}},50926:(e,t,a)=>{var r=a(23043),o=a(69985),n=a(6648),i=a(44201),s=i("toStringTag"),l=Object,c="Arguments"===n(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(a){}};e.exports=r?n:function(e){var t,a,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=d(t=l(e),s))?a:c?n(t):"Object"===(r=n(t))&&o(t.callee)?"Arguments":r}},62148:(e,t,a)=>{var r=a(98702),o=a(72560);e.exports=function(e,t,a){return a.get&&r(a.get,t,{getter:!0}),a.set&&r(a.set,t,{setter:!0}),o.f(e,t,a)}},23043:(e,t,a)=>{var r=a(44201),o=r("toStringTag"),n={};n[o]="z",e.exports="[object z]"===String(n)},34327:(e,t,a)=>{var r=a(50926),o=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},21500:e=>{var t=TypeError;e.exports=function(e,a){if(e<a)throw new t("Not enough arguments");return e}},98858:(e,t,a)=>{var r=a(11880),o=a(68844),n=a(34327),i=a(21500),s=URLSearchParams,l=s.prototype,c=o(l.append),d=o(l["delete"]),u=o(l.forEach),p=o([].push),h=new s("a=1&a=2&b=3");h["delete"]("a",1),h["delete"]("b",void 0),h+""!=="a=2"&&r(l,"delete",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return d(this,e);var r=[];u(this,(function(e,t){p(r,{key:t,value:e})})),i(t,1);var o,s=n(e),l=n(a),h=0,v=0,b=!1,m=r.length;while(h<m)o=r[h++],b||o.key===s?(b=!0,d(this,o.key)):v++;while(v<m)o=r[v++],o.key===s&&o.value===l||c(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},61318:(e,t,a)=>{var r=a(11880),o=a(68844),n=a(34327),i=a(21500),s=URLSearchParams,l=s.prototype,c=o(l.getAll),d=o(l.has),u=new s("a=1");!u.has("a",2)&&u.has("a",void 0)||r(l,"has",(function(e){var t=arguments.length,a=t<2?void 0:arguments[1];if(t&&void 0===a)return d(this,e);var r=c(this,e);i(t,1);var o=n(a),s=0;while(s<r.length)if(r[s++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},33228:(e,t,a)=>{var r=a(67697),o=a(68844),n=a(62148),i=URLSearchParams.prototype,s=o(i.forEach);r&&!("size"in i)&&n(i,"size",{get:function(){var e=0;return s(this,(function(){e++})),e},configurable:!0,enumerable:!0})}}]);