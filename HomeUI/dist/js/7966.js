"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[7966],{34917:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("div",[e.callResponse.data?t("b-card",[t("app-collapse",{attrs:{accordion:""},model:{value:e.activeHelpNames,callback:function(t){e.activeHelpNames=t},expression:"activeHelpNames"}},e._l(e.helpResponse,(function(a){return t("div",{key:a},[a.startsWith("=")?t("div",[t("br"),t("h2",[e._v(" "+e._s(a.split(" ")[1])+" ")])]):e._e(),a.startsWith("=")?e._e():t("app-collapse-item",{attrs:{title:a},on:{visible:function(t){return e.updateActiveHelpNames(t,a)}}},[t("p",{staticClass:"helpSpecific"},[e._v(" "+e._s(e.currentHelpResponse||"Loading help message...")+" ")]),t("hr")])],1)})),0)],1):e._e()],1)},n=[],r=a(23215),l=a(34547),i=a(57796),c=a(22049),o=a(39569);const p={components:{BCard:r._,AppCollapse:i.Z,AppCollapseItem:c.Z,ToastificationContent:l.Z},data(){return{callResponse:{status:"",data:""},activeHelpNames:"",currentHelpResponse:""}},computed:{helpResponse(){return this.callResponse.data?this.callResponse.data.split("\n").filter((e=>""!==e)).map((e=>e.startsWith("=")?e:e.split(" ")[0])):[]}},mounted(){this.daemonHelp()},methods:{async daemonHelp(){const e=await o.Z.help();"error"===e.data.status?this.$toast({component:l.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(this.callResponse.status=e.data.status,this.callResponse.data=e.data.data)},updateActiveHelpNames(e,t){this.activeHelpNames=t,this.benchmarkHelpSpecific()},async benchmarkHelpSpecific(){this.currentHelpResponse="",console.log(this.activeHelpNames);const e=await o.Z.helpSpecific(this.activeHelpNames);if(console.log(e),"error"===e.data.status)this.$toast({component:l.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}});else{const t=e.data.data.split("\n"),a=t.length;let s=0;for(let e=0;e<a;e+=1){let a="";if("{"===t[e].trim()||"["===t[e].trim()){s+=4;for(let e=0;e<s;e+=1)a+=" ";t[e]=a+t[e],s+=4}else if("}"===t[e].trim()||"]"===t[e].trim()){s-=4;for(let e=0;e<s;e+=1)a+=" ";t[e]=a+t[e],s-=4}else{for(let e=0;e<s;e+=1)a+=" ";t[e]=a+t[e]}}this.currentHelpResponse=t.join("\n"),console.log(this.currentHelpResponse)}}}},h=p;var u=a(1001),d=(0,u.Z)(h,s,n,!1,null,null,null);const m=d.exports},39569:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(80914);const n={start(e){return(0,s.Z)().get("/benchmark/start",{headers:{zelidauth:e}})},restart(e){return(0,s.Z)().get("/benchmark/restart",{headers:{zelidauth:e}})},getStatus(){return(0,s.Z)().get("/benchmark/getstatus")},restartNodeBenchmarks(e){return(0,s.Z)().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:e}})},signFluxTransaction(e,t){return(0,s.Z)().get(`/benchmark/signzelnodetransaction/${t}`,{headers:{zelidauth:e}})},helpSpecific(e){return(0,s.Z)().get(`/benchmark/help/${e}`)},help(){return(0,s.Z)().get("/benchmark/help")},stop(e){return(0,s.Z)().get("/benchmark/stop",{headers:{zelidauth:e}})},getBenchmarks(){return(0,s.Z)().get("/benchmark/getbenchmarks")},getInfo(){return(0,s.Z)().get("/benchmark/getinfo")},tailBenchmarkDebug(e){return(0,s.Z)().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:e}})},justAPI(){return(0,s.Z)()},cancelToken(){return s.S}}}}]);