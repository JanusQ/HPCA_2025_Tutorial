import{r as k,I as O,_ as P,f as q,h as Q,e as M,i as z,j as i,J as A,A as R,T as H}from"./index-C1MMgIkc.js";import{d as I}from"./default-Vvv3qaXh.js";var F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM688 420h-55.2c-5.1 0-10 2.5-13 6.6L468.9 634.4l-64.7-89c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.4 0-12.8-6.5-12.8z"}}]},name:"carry-out",theme:"outlined"},L=function(m,n){return k.createElement(O,P({},m,{ref:n,icon:F}))};const a=k.forwardRef(L),U="_root_1kcrx_1",B={root:U};var N={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(x,m){(function(n,s){x.exports=s()})(q,function(){var n={};n.version="0.2.0";var s=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(e){var t,r;for(t in e)r=e[t],r!==void 0&&e.hasOwnProperty(t)&&(s[t]=r);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=S(e,s.minimum,1),n.status=e===1?null:e;var r=n.render(!t),c=r.querySelector(s.barSelector),l=s.speed,p=s.easing;return r.offsetWidth,E(function(o){s.positionUsing===""&&(s.positionUsing=n.getPositioningCSS()),g(c,j(e,l,p)),e===1?(g(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){g(r,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){n.remove(),o()},l)},l)):setTimeout(o,l)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var e=function(){setTimeout(function(){n.status&&(n.trickle(),e())},s.trickleSpeed)};return s.trickle&&e(),this},n.done=function(e){return!e&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(e){var t=n.status;return t?(typeof e!="number"&&(e=(1-t)*S(Math.random()*t,.1,.95)),t=S(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*s.trickleRate)},function(){var e=0,t=0;n.promise=function(r){return!r||r.state()==="resolved"?this:(t===0&&n.start(),e++,t++,r.always(function(){t--,t===0?(e=0,n.done()):n.set((e-t)/e)}),this)}}(),n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");C(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=s.template;var r=t.querySelector(s.barSelector),c=e?"-100":y(n.status||0),l=document.querySelector(s.parent),p;return g(r,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),s.showSpinner||(p=t.querySelector(s.spinnerSelector),p&&v(p)),l!=document.body&&C(l,"nprogress-custom-parent"),l.appendChild(t),t},n.remove=function(){T(document.documentElement,"nprogress-busy"),T(document.querySelector(s.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&v(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};function S(e,t,r){return e<t?t:e>r?r:e}function y(e){return(-1+e)*100}function j(e,t,r){var c;return s.positionUsing==="translate3d"?c={transform:"translate3d("+y(e)+"%,0,0)"}:s.positionUsing==="translate"?c={transform:"translate("+y(e)+"%,0)"}:c={"margin-left":y(e)+"%"},c.transition="all "+t+"ms "+r,c}var E=function(){var e=[];function t(){var r=e.shift();r&&r(t)}return function(r){e.push(r),e.length==1&&t()}}(),g=function(){var e=["Webkit","O","Moz","ms"],t={};function r(o){return o.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(u,d){return d.toUpperCase()})}function c(o){var u=document.body.style;if(o in u)return o;for(var d=e.length,b=o.charAt(0).toUpperCase()+o.slice(1),h;d--;)if(h=e[d]+b,h in u)return h;return o}function l(o){return o=r(o),t[o]||(t[o]=c(o))}function p(o,u,d){u=l(u),o.style[u]=d}return function(o,u){var d=arguments,b,h;if(d.length==2)for(b in u)h=u[b],h!==void 0&&u.hasOwnProperty(b)&&p(o,b,h);else p(o,d[1],d[2])}}();function _(e,t){var r=typeof e=="string"?e:f(e);return r.indexOf(" "+t+" ")>=0}function C(e,t){var r=f(e),c=r+t;_(r,t)||(e.className=c.substring(1))}function T(e,t){var r=f(e),c;_(e,t)&&(c=r.replace(" "+t+" "," "),e.className=c.substring(1,c.length-1))}function f(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function v(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})})(N);var J=N.exports;const w=Q(J);w.configure({easing:"ease",speed:500,showSpinner:!0,trickleSpeed:200,minimum:.3});function W(){const x=M();let{fileName:m}=z();const[n,s]=k.useState(m),S=[{title:"Getting Started",key:"1",icon:i.jsx(a,{}),children:[{title:"Install JanusQ",key:"1_1_install_janusq",icon:i.jsx(a,{})},{title:"Submit to cloud",key:"1_2_submit_to_cloud",icon:i.jsx(a,{})}]},{title:"QuCT",key:"2",icon:i.jsx(a,{}),children:[{title:"Vectorization model of QuCT",key:"2_1_vectorization",icon:i.jsx(a,{})},{title:"Fidelity prediction of QuCT on quantum simulators",key:"2_2_fidelity_prediction_simulator",icon:i.jsx(a,{})},{title:"Fidelity prediction of QuCT on real quantum devices",key:"2_3_fidelity_prediction_realqc",icon:i.jsx(a,{})},{title:"Fidelity optimization based on QuCT",key:"2_4_fidelity_optimization",icon:i.jsx(a,{})},{title:"Unitary decomposition based on QuCT",key:"2_5_unitary_decomposition",icon:i.jsx(a,{})},{title:"Extending framework for bug identification",key:"2_6_extend_framework_bug_identification",icon:i.jsx(a,{})}]},{title:"MorphQPV",key:"3",icon:i.jsx(a,{}),children:[{title:"Assertion statement of MorphQPV",key:"3_1_assertion_statement",icon:i.jsx(a,{})}]},{title:"QuFEM",key:"4",icon:i.jsx(a,{}),children:[{title:"Readout calibration of QuFEM on quantum simulators",key:"4_1_readout_calibration_simulator",icon:i.jsx(a,{})},{title:"Readout calibration of QuFEM on real quantum devices",key:"4_2_readout_calibration_realqc",icon:i.jsx(a,{})}]},{title:"HyQSAT",key:"5",icon:i.jsx(a,{}),children:[{title:"Hybrid quantum-classical SAT solver",key:"5_1_solve_sat_domain_problem",icon:i.jsx(a,{})}]},{title:"Choco-Q",key:"6",icon:i.jsx(a,{}),children:[{title:"Constained binary optimization with QAOA",key:"6_1_solve_constained_binary_optimization_problem",icon:i.jsx(a,{})}]}],[y,j]=k.useState(""),E=async _=>{w.start();const T=await(await fetch(`/HPCA_2025_Tutorial/demo/ipynb/${_}.ipynb`)).blob(),f=new FileReader;f.onload=function(){try{if(f.result){const v=JSON.parse(f.result);j(v),w.done()}else j({cells:[{cell_type:"markdown",metadata:{},source:["TBD"]}]}),w.done()}catch(v){console.error("Failed to parse JSON:",v)}},f.readAsText(T)},g=(_,C)=>{window.scrollTo({top:0,behavior:"auto"}),x(`/demo/${_[0]}`),s()};return k.useEffect(()=>{m?E(m):x("/demo/1_1_install_janusq")},[m]),i.jsxs("div",{className:B.root,children:[i.jsx(A,{}),i.jsx("div",{className:"placeholder",style:{height:60}}),i.jsxs("div",{className:"demonstrations",children:[i.jsx("div",{className:"left_menu",children:i.jsx(R,{offsetTop:80,children:i.jsx(H,{defaultSelectedKeys:[n],showLine:!0,onSelect:g,treeData:S,defaultExpandAll:!0})})}),y?i.jsx("div",{className:"IpynbRenderer_content",children:i.jsx(I.IpynbRenderer,{syntaxTheme:"darcula",onLoad:()=>{console.log("loaded")},ipynb:y})}):""]})]})}export{W as default};