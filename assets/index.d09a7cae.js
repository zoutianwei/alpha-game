import{_ as e,o as t,c as s,a,t as i,w as r,v as l,b as n,T as h,d as o,F as u,r as p,e as c,f as d}from"./vendor.e96f9f9b.js";const m={name:"App",data(){return{inputVal:"",curr:"a",alpha:this.createAlpha(),timer:"",showTime:0,startTime:"",records:[],rotate:!1}},mounted(){this.$refs.refInput.onpaste=function(){return!1}},computed:{upperCaseCurr(){return this.curr.toUpperCase()}},watch:{inputVal(e,t){if(this.inputVal){const s=/^[A-Za-z]+$/.test(e);this.inputVal=s?e:t}}},methods:{initTimer(){this.timer=setInterval((()=>{this.showTime=(.001*(Date.now()-this.startTime)).toFixed(3)}),1)},handleKeyup(e){if(/^[A-Za-z]+$/.test(e.key.toLowerCase()))if(e.key.toLowerCase()===this.curr){const t=Date.now();"a"===e.key.toLowerCase()&&(this.startTime=t,this.initTimer()),this.records.push({display:this.curr.toUpperCase(),currTime:((t-this.startTime)/1e3).toFixed(3)}),"z"===e.key.toLowerCase()&&(clearInterval(this.timer),this.showTime=this.records.slice(-1)[0].currTime),this.curr=this.alpha()}else e.preventDefault();else e.preventDefault()},handleReset(){this.inputVal="",this.curr="a",this.alpha=null,this.alpha=this.createAlpha(),this.startTime="",this.records=[],clearInterval(this.timer),this.showTime=0},createAlpha(){let e=0,t=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];return()=>(e++,e<t.length?t[e]:"完成")},handleRotate:e.throttle((function(){this.rotate=!0,setTimeout((()=>{this.rotate=!1}),1e3)}),1e3)}},f={id:"#app"},v=a("h1",{class:"title vivify shake"},"邹先生你好",-1),T=a("h2",{class:"subtitle"},"输入字母，看看你的速度有多快 :)",-1),y=a("div",{class:"github"},[a("a",{href:"http://zoutianwei.github.io"},[a("img",{src:"/alpha-game/assets/github.307f2da5.png",alt:"github"})])],-1),w={class:"status"},g={class:"game"},C=o(" 时间: "),k={class:""},b=o("s "),V={key:0,class:"result"},z=a("p",null,"成绩 🏁",-1),A=o();m.render=function(e,o,d,m,I,R){return t(),s("div",f,[v,T,y,a("div",w,[a("p",{class:["msg",{"vivify spin duration-1000":"完成"===R.upperCaseCurr}]},i(R.upperCaseCurr),3)]),a("div",g,[r(a("input",{type:"text",class:"game-input","onUpdate:modelValue":o[1]||(o[1]=e=>I.inputVal=e),placeholder:"在这里输入",onKeydown:o[2]||(o[2]=(...e)=>R.handleKeyup&&R.handleKeyup(...e)),ref:"refInput",autocomplete:"off",autocapitalize:"off",spellcheck:"false"},null,544),[[l,I.inputVal]]),a("div",{class:["game-reset",{"vivify spin duration-1000":I.rotate}],onClick:o[3]||(o[3]=e=>{R.handleReset(),R.handleRotate()})}," Reset ",2)]),a("div",{class:["timer",{"shake-little shake-constant":I.records.length}]},[C,a("span",k,i(I.showTime?I.showTime:"0.000"),1),b],2),a(h,{"enter-active-class":"vivify driveInTop duration-500","leave-active-class":"vivify driveOutTop duration-500"},{default:n((()=>[I.records.length?(t(),s("div",V,[z,a("ul",null,[(t(!0),s(u,null,p(I.records,((e,r)=>(t(),s("li",{key:`records-${r}`},[a("span",null,i(e.display)+": ",1),A,a("span",null,i(e.currTime)+"s",1)])))),128))])])):c("",!0)])),_:1})])},d(m).mount("#app");
