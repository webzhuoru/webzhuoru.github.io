(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fdc90e3"],{"5e72":function(c,t,e){"use strict";e.r(t);var i=e("7a23"),n=function(c){return Object(i["D"])("data-v-6c32daae"),c=c(),Object(i["B"])(),c},o={class:"confirm-order-container"},a={class:"reciver-info"},b={class:"left"},s={class:"right"},l={class:"basic-info"},d={class:"name"},O={class:"phone"},m={class:"address"},j={class:"product-info"},r={class:"basic-info"},u={class:"img-box"},g={class:"right"},I={class:"name"},f=n((function(){return Object(i["i"])("div",{class:"counts"},"数量：1",-1)})),v=n((function(){return Object(i["i"])("div",{class:"time"},"发货时间：48小时内",-1)})),N=n((function(){return Object(i["i"])("div",{class:"divide-line"},null,-1)})),k={class:"other-info"},A={class:"comment"},p=Object(i["j"])(" 订单备注："),E={class:"points"},h=Object(i["j"])("共1件 小计："),w={class:"point-text"},M={class:"bottom"},R=n((function(){return Object(i["i"])("text",{decode:""},"共1件   ",-1)})),X=n((function(){return Object(i["i"])("text",null,"合计：",-1)})),T={class:"total"};function V(c,t,e,n,V,z){var G=Object(i["H"])("van-nav-bar"),W=Object(i["H"])("van-image");return Object(i["A"])(),Object(i["h"])(i["a"],null,[Object(i["k"])(G,{"left-arrow":"",onClickLeft:n.gotoleft,title:"确认订单"},null,8,["onClickLeft"]),Object(i["i"])("div",o,[Object(i["i"])("div",a,[Object(i["i"])("div",b,[Object(i["k"])(W,{src:c.locationpng},null,8,["src"])]),Object(i["i"])("div",s,[Object(i["i"])("div",l,[Object(i["i"])("text",d,Object(i["K"])(c.info.userName),1),Object(i["i"])("text",O,Object(i["K"])(c.info.telNumber),1)]),Object(i["i"])("div",m,Object(i["K"])(c.info.provinceName+c.info.cityName+c.info.countyName+c.info.detailInfo),1)])]),Object(i["i"])("div",j,[Object(i["i"])("div",r,[Object(i["i"])("div",u,[Object(i["k"])(W,{class:"goods-img",src:c.goods.primaryPicUrl},null,8,["src"])]),Object(i["i"])("div",g,[Object(i["i"])("div",I,Object(i["K"])(c.goods.goodsName),1),f,v])]),N,Object(i["i"])("div",k,[Object(i["i"])("div",A,[p,Object(i["R"])(Object(i["i"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return c.comment=t}),placeholder:"需要协商的请留言","placeholder-class":"placeholder"},null,512),[[i["N"],c.comment]])])]),Object(i["i"])("div",E,[h,Object(i["i"])("text",w,Object(i["K"])(c.goods.retailPrice||c.goods.virtualPrice)+"积分",1)])]),Object(i["i"])("div",M,[R,X,Object(i["i"])("text",T,Object(i["K"])(c.goods.retailPrice||c.goods.virtualPrice)+"积分",1),Object(i["i"])("div",{class:"submit-btn",onClick:t[1]||(t[1]=function(){return n.submit&&n.submit.apply(n,arguments)})},"提交订单")])])],64)}var z=e("5530"),G=e("5f53"),W=e.n(G),D=e("365c"),B=e("a18c"),Q={name:"confirmOrder",setup:function(c){var t=Object(i["E"])({active:0,goods:null,goodsID:"",standard:"",locationpng:W.a,comment:"",info:null});function e(){B["a"].push("/orderSuccess")}function n(){B["a"].go(-1)}return t.goodsID=B["a"].currentRoute.value.query.goodsID,t.standard=B["a"].currentRoute.value.query.standard,console.log("confirmOrder",t,B["a"]),Object(D["g"])({goodsId:t.goodsID,specIds:t.standard}).then((function(c){console.log("get goods confirmOrder==>",c),0===c.code&&(t.goods=c.data)})),Object(D["f"])().then((function(c){0===c.code&&(t.info=c.data),console.log("get default address=>",c)})),Object(z["a"])(Object(z["a"])({},Object(i["L"])(t)),{},{submit:e,gotoleft:n})}},U=(e("d75c"),e("6b0d")),x=e.n(U);const J=x()(Q,[["render",V],["__scopeId","data-v-6c32daae"]]);t["default"]=J},"5f53":function(c,t){c.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5Mzk5NjRERTM5RTExRUJCRjlDQUQ1N0M0OEE4OTBDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5Mzk5NjRFRTM5RTExRUJCRjlDQUQ1N0M0OEE4OTBDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTkzOTk2NEJFMzlFMTFFQkJGOUNBRDU3QzQ4QTg5MEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTkzOTk2NENFMzlFMTFFQkJGOUNBRDU3QzQ4QTg5MEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sAZmmAAAIG0lEQVR42sRa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"},a7c9:function(c,t,e){},d75c:function(c,t,e){"use strict";e("a7c9")}}]);
//# sourceMappingURL=chunk-7fdc90e3.e5beb402.js.map