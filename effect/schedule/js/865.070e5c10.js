"use strict";(self["webpackChunkschedule"]=self["webpackChunkschedule"]||[]).push([[865],{3865:function(e,t,l){l.r(t),l.d(t,{default:function(){return A}});var a=l(8046),o=(l(1758),l(6467),l(7150)),s=(l(6809),l(3816)),c=(l(2250),l(7658),l(3396)),i=l(4870),n=l(7139),r=l(9242),d=l(2748),u=l(2483);const g=e=>((0,c.dD)("data-v-619f9f92"),e=e(),(0,c.Cn)(),e),v={class:"histry"},k=g((()=>(0,c._)("div",{class:"histoptit"}," 成就账单 ",-1))),m={class:"fixpick"},S={key:0,class:"nomore"},w={key:1,class:"gridbox"},y={class:"griditembox"},D={class:"testtit"},U={class:"testtit color1"},p={class:"testtit color2"},h={key:0,class:"lifebeginswith"},f={class:"head"},F=g((()=>(0,c._)("div",{class:"title"},"走马观花",-1))),C=["onClick"],M={class:"areaboxs"},_={class:"box many"};var B={__name:"gameHistry",setup(e){const t=(0,u.tv)();let l=JSON.stringify({yearHistry:[]}),g=localStorage.getItem("gamelist")||l;g&&(g=JSON.parse(g));let B=(0,i.qj)({list:[],data:[],list4000:[],colors:[],satrtgame:"1995-10-1",motto:"许多人的一生，写于纸上也不过寥寥几句话，而人的一生大概会有4000周，及时行乐。",showMark:!1,markmotto:()=>{g.motto=B.motto,localStorage.setItem("gamelist",JSON.stringify(g))},getdata:()=>{let e=[...g.yearHistry].reverse();if(B.data){let t=!0;B.list.length=0,e.map((e=>{t=B.isTimeInRange(e.day),t&&B.list.push(e)}))}else B.list=e},isTimeInRange:e=>{let t="",l="";const a=new Date(e);B.data&&(t=B.data[0],l=B.data[1]);const o=new Date(t),s=new Date(l);return a>=o&&a<=s},splitArray:(e,t,l)=>{let a=["#FFC107","#FF9800","#FF5722","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF5722"],o=l,s=[];for(let c=0;c<t;c++){let t=c*o,l=t+o,i=e.slice(t,l),n=a[c];s.push({data:i,color:n})}return s},getWeeksSince(e){const t=6048e5,l=new Date(e),a=new Date,o=a.getTime()-l.getTime();console.log("diff / oneWeek",Math.floor(o/t));const s=Math.ceil(o/t);return s},backWeeksSince(e,t){const l=6048e5,a=864e5,o=new Date(e);let s=o.getDay(),c=0;s&&(c=7-s);let i=o.getTime()+c*a;const n=i+a+(t-1)*l;let r=B.getDateTime(n);const d=i+t*l;let u=B.getDateTime(d);return[r,u]},getmyweek(e){console.log("item",e.daylimit),B.data=[...e.daylimit],B.closeMark(),B.getdata()},getDateTime(e){let t=Date.parse(new Date(e)),l=new Date(t);l.setDate(l.getDate());var a=l.getFullYear(),o=l.getMonth()+1<10?"0"+(l.getMonth()+1):l.getMonth()+1,s=l.getDate()<10?"0"+l.getDate():l.getDate();let c=a+"-"+o+"-"+s;return c},closeMark(){B.showMark=!1},openMark(){B.showMark=!0}});B.list=[...g.yearHistry].reverse(),B.satrtgame=g.satrtgame,B.motto=g.motto,B.colors=["#FFC107","#FF9800","#FF5722","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FF5722"];const b=()=>{t.push("/")},x=B.getWeeksSince(B.satrtgame);console.log("重新计算剩余周",x);const A=new Array(4e3).fill(0).map(((e,t)=>{let l=t+1;const a=B.list.findIndex((e=>e.passday==t+1));let o=555;-1!==a&&(o=B.list[a].weekcounts);let s=`人生的第${l}周:${o}分`,c="",i=B.backWeeksSince(B.satrtgame,l);l>x&&(s=`人生的第${l}周:  嘿，努力过好当下，未来可期！！！`,c="#ebedf0");let n={value:l,content:s,color:c,daylimit:i};return n}));function Y(e){const t=[];let l=e[0],a=!1;for(let o=0;o<e.length;o++){const s=e[o],c=Math.abs(s-l);c<=20&&!a?(t.push({value:s,isMarked:!0}),a=!0,console.log("如果差值大于等于20，则标记当前元素",o,c,a)):a?(console.log("如果前一个元素已经标记，则当前元素不可再标记",o,c,a),t.push({value:s,isMarked:!1}),a=!1):(console.log("否则不标记当前元素",o,c,a),t.push({value:s,isMarked:!1})),l=s}return t}B.list4000=B.splitArray(A,4,1024);const $=[155,152,121,119,113,23,0],H=Y($);return console.log("输出标记后的数组",H),(e,t)=>{const l=s.iJ,u=o.mi,g=a.Q0;return(0,c.wg)(),(0,c.iD)("div",v,[k,(0,c._)("div",m,[(0,c.Wm)(l,{modelValue:(0,i.SU)(B).data,"onUpdate:modelValue":t[0]||(t[0]=e=>(0,i.SU)(B).data=e),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD",onChange:(0,i.SU)(B).getdata},null,8,["modelValue","onChange"])]),(0,i.SU)(B).list.length<=0?((0,c.wg)(),(0,c.iD)("div",S," 暂无成就,快去铸造辉煌 ")):((0,c.wg)(),(0,c.iD)("div",w,[(0,c._)("div",y,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,i.SU)(B).list,((e,l)=>((0,c.wg)(),(0,c.iD)("div",{class:"test",key:l},[(0,c._)("div",D,(0,n.zw)(e.day),1),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.todaylist,((e,t)=>((0,c.wg)(),(0,c.iD)("div",{class:"testlist",key:t},(0,n.zw)(e.name)+" +"+(0,n.zw)(e.count),1)))),128)),(0,c._)("div",U,(0,n.zw)(e.daycounts?`${e.weekly}得分：${e.daycounts}`:""),1),(0,c._)("div",p,(0,n.zw)(e.weekcounts?`今年第${e.secondday}周得分：${e.weekcounts}`:""),1),e.passday?((0,c.wg)(),(0,c.iD)("div",{key:0,class:"testtit color1 point",onClick:t[1]||(t[1]=(...e)=>(0,i.SU)(B).openMark&&(0,i.SU)(B).openMark(...e))},(0,n.zw)(`人生已过${e.passday}周,剩余不足${4e3-e.passday}周，及时行乐`),1)):(0,c.kq)("",!0)])))),128))])])),((0,c.wg)(),(0,c.j4)(c.Ob,null,[(0,i.SU)(B).showMark?((0,c.wg)(),(0,c.iD)("div",h,[(0,c._)("div",f,[F,(0,c.Wm)(u,{class:"close",icon:(0,i.SU)(d.x8P),circle:"",onClick:(0,i.SU)(B).closeMark},null,8,["icon","onClick"])]),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,i.SU)(B).list4000,(e=>((0,c.wg)(),(0,c.iD)("div",{class:"lefebox",key:e.color},[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.data,(e=>((0,c.wg)(),(0,c.j4)(g,{content:e.content,effect:"light",key:e.value},{default:(0,c.w5)((()=>[(0,c._)("div",{class:"liftitem point",style:(0,n.j5)({background:e.color?e.color:e.value<104?(0,i.SU)(B).colors[0]:e.value<208?(0,i.SU)(B).colors[1]:e.value<312?(0,i.SU)(B).colors[2]:e.value<416?(0,i.SU)(B).colors[3]:e.value<520?(0,i.SU)(B).colors[4]:e.value<624?(0,i.SU)(B).colors[5]:e.value<728?(0,i.SU)(B).colors[6]:e.value<832?(0,i.SU)(B).colors[7]:e.value<936?(0,i.SU)(B).colors[8]:e.value<1040?(0,i.SU)(B).colors[9]:e.value<1144?(0,i.SU)(B).colors[10]:e.value<1248?(0,i.SU)(B).colors[11]:e.value<1352?(0,i.SU)(B).colors[12]:e.value<1456?(0,i.SU)(B).colors[13]:e.value<1560?(0,i.SU)(B).colors[14]:e.value<1664?(0,i.SU)(B).colors[15]:e.value<1768?(0,i.SU)(B).colors[16]:e.value<1872?(0,i.SU)(B).colors[17]:e.value<1976?(0,i.SU)(B).colors[18]:(0,i.SU)(B).colors[19]}),onClick:t=>(0,i.SU)(B).getmyweek(e)},null,12,C)])),_:2},1032,["content"])))),128))])))),128)),(0,c._)("div",M,[(0,c._)("div",_,[(0,c.wy)((0,c._)("textarea",{type:"text",onBlur:t[2]||(t[2]=(...e)=>(0,i.SU)(B).markmotto&&(0,i.SU)(B).markmotto(...e)),class:"input","onUpdate:modelValue":t[3]||(t[3]=e=>(0,i.SU)(B).motto=e)},null,544),[[r.nr,(0,i.SU)(B).motto]])])])])):(0,c.kq)("",!0)],1024)),(0,c._)("div",{class:"fixup goback",onClick:b},"GoBack")])}}},b=l(89);const x=(0,b.Z)(B,[["__scopeId","data-v-619f9f92"]]);var A=x}}]);
//# sourceMappingURL=865.070e5c10.js.map