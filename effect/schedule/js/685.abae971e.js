"use strict";(self["webpackChunkschedule"]=self["webpackChunkschedule"]||[]).push([[685],{6685:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var s=a(3816),l=(a(1758),a(2250),a(7658),a(3396)),i=a(4870),n=a(7139),o=a(2483);const d=t=>((0,l.dD)("data-v-b7b2066a"),t=t(),(0,l.Cn)(),t),c={class:"histry"},r=d((()=>(0,l._)("div",{class:"histoptit"}," 成就账单 ",-1))),g={class:"fixpick"},u={key:0,class:"nomore"},y={key:1,class:"gridbox"},v={class:"griditembox"},w={class:"testtit"},p={class:"testtit color1"},h={class:"testtit color2"};var m={__name:"gameHistry",setup(t){const e=(0,o.tv)();let a=JSON.stringify({yearHistry:[]}),d=localStorage.getItem("gamelist")||a;d&&(d=JSON.parse(d));let m=(0,i.qj)({list:[],data:[],getdata:()=>{console.log("this.gamelist.data",m.data);let t=[...d.yearHistry].reverse();if(m.data){let e=!0;m.list.length=0,t.map((t=>{e=m.isTimeInRange(t.day),e&&m.list.push(t)}))}else m.list=t},isTimeInRange:t=>{let e="",a="";const s=new Date(t);m.data&&(e=m.data[0],a=m.data[1]);const l=new Date(e),i=new Date(a);return s>=l&&s<=i}});console.log("originlist",d.yearHistry),m.list=[...d.yearHistry].reverse();const k=()=>{e.push("/")};return(t,e)=>{const a=s.iJ;return(0,l.wg)(),(0,l.iD)("div",c,[r,(0,l._)("div",g,[(0,l.Wm)(a,{modelValue:(0,i.SU)(m).data,"onUpdate:modelValue":e[0]||(e[0]=t=>(0,i.SU)(m).data=t),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD",onChange:(0,i.SU)(m).getdata},null,8,["modelValue","onChange"])]),(0,i.SU)(m).list.length<=0?((0,l.wg)(),(0,l.iD)("div",u," 暂无成就,快去铸造辉煌 ")):((0,l.wg)(),(0,l.iD)("div",y,[(0,l._)("div",v,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,i.SU)(m).list,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"test",key:e},[(0,l._)("div",w,(0,n.zw)(t.day),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.todaylist,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"testlist",key:e},(0,n.zw)(t.name)+" +"+(0,n.zw)(t.count),1)))),128)),(0,l._)("div",p,(0,n.zw)(t.daycounts?`${t.weekly}得分：${t.daycounts}`:""),1),(0,l._)("div",h,(0,n.zw)(t.weekcounts?`第${t.secondday}周得分：${t.weekcounts}`:""),1)])))),128))])])),(0,l._)("div",{class:"fixup goback",onClick:k},"GoBack")])}}},k=a(89);const D=(0,k.Z)(m,[["__scopeId","data-v-b7b2066a"]]);var _=D}}]);
//# sourceMappingURL=685.abae971e.js.map