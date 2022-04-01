// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=Object.prototype.hasOwnProperty;var t=function(r,t){return null!=r&&e.call(r,t)},n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=function(){try{return n({},"x",{}),!0}catch(r){return!1}},a=Object.defineProperty,o=Object.prototype,u=o.toString,c=o.__defineGetter__,s=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;var p=function(r,e,t){var n,i,a,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(f.call(r,e)||l.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,p="set"in t,i&&(a||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&c&&c.call(r,e,t.get),p&&s&&s.call(r,e,t.set),r},v=a,g=p,d=i()?v:g;var h=function(r,e,t){d(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=h;var b=function(r){return"string"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return w&&"symbol"==typeof Symbol.toStringTag},E=Object.prototype.toString,j=E;var P=function(r){return j.call(r)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=t,T=_,x=E;var V=P,S=function(r){var e,t,n;if(null==r)return x.call(r);t=r[T],e=O(r,T);try{r[T]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[T]=t:delete r[T],n},k=y()?S:V,I=String.prototype.valueOf;var A=k,R=function(r){try{return I.call(r),!0}catch(r){return!1}},$=y();var F=function(r){return"object"==typeof r&&(r instanceof String||($?R(r):"[object String]"===A(r)))},M=b,C=F;var N=m,B=function(r){return M(r)||C(r)},G=F;N(B,"isPrimitive",b),N(B,"isObject",G);var L=B,Z=Math.floor;var W=function(r){return Z(r)===r},X=W;var z=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&X(r.length)&&r.length>=0&&r.length<=9007199254740991};var U=function(r){return"number"==typeof r},Y=Number,D=Y.prototype.toString;var q=k,H=Y,J=function(r){try{return D.call(r),!0}catch(r){return!1}},K=y();var Q=function(r){return"object"==typeof r&&(r instanceof H||(K?J(r):"[object Number]"===q(r)))},rr=U,er=Q;var tr=m,nr=function(r){return rr(r)||er(r)},ir=Q;tr(nr,"isPrimitive",U),tr(nr,"isObject",ir);var ar=nr,or=Number.POSITIVE_INFINITY,ur=Y.NEGATIVE_INFINITY,cr=or,sr=ur,fr=W;var lr=function(r){return r<cr&&r>sr&&fr(r)},pr=ar.isPrimitive,vr=lr;var gr=function(r){return pr(r)&&vr(r)},dr=ar.isObject,hr=lr;var mr=function(r){return dr(r)&&hr(r.valueOf())},br=gr,wr=mr;var yr=m,Er=function(r){return br(r)||wr(r)},jr=mr;yr(Er,"isPrimitive",gr),yr(Er,"isObject",jr);var Pr=Er;var _r=function(r){return r!=r},Or=ar.isPrimitive,Tr=_r;var xr=function(r){return Or(r)&&Tr(r)},Vr=ar.isObject,Sr=_r;var kr=function(r){return Vr(r)&&Sr(r.valueOf())},Ir=xr,Ar=kr;var Rr=m,$r=function(r){return Ir(r)||Ar(r)},Fr=kr;Rr($r,"isPrimitive",xr),Rr($r,"isObject",Fr);var Mr=z,Cr=Pr.isPrimitive,Nr=L.isPrimitive,Br=$r.isPrimitive;var Gr=function(r,e,t){var n,i,a;if(!Mr(r)&&!Nr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Cr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Nr(r)){if(!Nr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Br(e)){for(a=i;a<n;a++)if(Br(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Lr=L.isPrimitive;var Zr=function(r){if(!Lr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Wr=L.isPrimitive;var Xr=function(r){if(!Wr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},zr=Zr,Ur=Xr,Yr=L.isPrimitive;var Dr=function(r){return Yr(r)&&r===Ur(r)&&r!==zr(r)},qr=or,Hr=ur;var Jr=function(r){return r==r&&r>Hr&&r<qr},Kr=Pr.isPrimitive;var Qr=function(r){return Kr(r)&&r>=0},re=Pr.isObject;var ee=function(r){return re(r)&&r.valueOf()>=0},te=Qr,ne=ee;var ie=m,ae=function(r){return te(r)||ne(r)},oe=ee;ie(ae,"isPrimitive",Qr),ie(ae,"isObject",oe);var ue=ae.isPrimitive,ce=L.isPrimitive;var se=function(r,e){var t,n;if(!ce(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ue(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},fe=Pr.isPrimitive,le=L.isPrimitive;var pe=se,ve=function(r,e,t){var n,i;if(!le(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!le(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!fe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var ge=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ve(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+pe("0",i):pe("0",i)+r,n&&(r="-"+r)),r},de=Dr,he=Xr,me=Zr,be=Jr,we=ar.isPrimitive,ye=ge;var Ee=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!be(n)){if(!we(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ye(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ye(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=de(r.specifier)?he(t):me(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},je=L.isPrimitive,Pe=/[-\/\\^$*+?.()|[\]{}]/g;var _e=function(r){var e,t;if(!je(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Pe,"\\$&"):(e=(e=r.substring(1,t)).replace(Pe,"\\$&"),r=r[0]+e+r.substring(t))},Oe=/./;var Te=function(r){return"boolean"==typeof r},xe=Boolean.prototype.toString;var Ve=k,Se=function(r){try{return xe.call(r),!0}catch(r){return!1}},ke=y();var Ie=function(r){return"object"==typeof r&&(r instanceof Boolean||(ke?Se(r):"[object Boolean]"===Ve(r)))},Ae=Te,Re=Ie;var $e=m,Fe=function(r){return Ae(r)||Re(r)},Me=Ie;$e(Fe,"isPrimitive",Te),$e(Fe,"isObject",Me);var Ce="object"==typeof self?self:null,Ne="object"==typeof window?window:null,Be=Fe.isPrimitive,Ge=function(){return new Function("return this;")()},Le=Ce,Ze=Ne,We=r(Object.freeze({__proto__:null}));var Xe=function(r){if(arguments.length){if(!Be(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ge()}if(Le)return Le;if(Ze)return Ze;if(We)return We;throw new Error("unexpected error. Unable to resolve global object.")},ze=Xe(),Ue=ze.document&&ze.document.childNodes,Ye=Int8Array,De=Oe,qe=Ue,He=Ye;var Je=function(){return"function"==typeof De||"object"==typeof He||"function"==typeof qe};var Ke=function(){return/^\s*function\s*([^(]*)/i},Qe=Ke;m(Qe,"REGEXP",Ke());var rt=Qe,et=k;var tt=Array.isArray?Array.isArray:function(r){return"[object Array]"===et(r)};var nt=function(r){return null!==r&&"object"==typeof r};m(nt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!tt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(nt));var it=nt;var at=k,ot=rt.REGEXP,ut=function(r){return it(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ct=function(r){var e,t,n;if(("Object"===(t=at(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ot.exec(n.toString()))return e[1]}return ut(r)?"Buffer":t},st=ct;var ft=ct;var lt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?st(r).toLowerCase():e},pt=function(r){return ft(r).toLowerCase()},vt=Je()?pt:lt;var gt=function(r){return"function"===vt(r)},dt=RegExp.prototype.exec;var ht=k,mt=function(r){try{return dt.call(r),!0}catch(r){return!1}},bt=y();var wt=_e,yt=gt,Et=L.isPrimitive,jt=function(r){return"object"==typeof r&&(r instanceof RegExp||(bt?mt(r):"[object RegExp]"===ht(r)))};var Pt=Dr,_t=Xr,Ot=Zr,Tt=function(r,e,t){if(!Et(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Et(e))e=wt(e),e=new RegExp(e,"g");else if(!jt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Et(t)&&!yt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},xt=Jr,Vt=ar.isPrimitive,St=function(r){return Math.abs(r)},kt=/e\+(\d)$/,It=/e-(\d)$/,At=/^(\d+)$/,Rt=/^(\d+)e/,$t=/\.0$/,Ft=/\.0*e/,Mt=/(\..*[^0])0*e/;var Ct=function(r){var e,t,n=parseFloat(r.arg);if(!xt(n)){if(!Vt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":St(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Tt(t,Mt,"$1e"),t=Tt(t,Ft,"e"),t=Tt(t,$t,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Tt(t,kt,"e+0$1"),t=Tt(t,It,"e-0$1"),r.alternate&&(t=Tt(t,At,"$1."),t=Tt(t,Rt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Pt(r.specifier)?_t(t):Ot(t)},Nt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Bt=se;var Gt=L.isPrimitive,Lt=Gr,Zt=_r,Wt=Ee,Xt=Ct,zt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Nt.exec(r);a;)(t=r.slice(e,Nt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Nt.lastIndex,a=Nt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Ut=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Bt(" ",n):Bt(" ",n)+r},Yt=ge,Dt=String.fromCharCode;var qt=t,Ht=function(r){var e,t,n,i,a,o,u,c,s;if(!Gt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=zt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Gt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Lt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Zt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Zt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Wt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Zt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Zt(a)?String(n.arg):Dt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Xt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Yt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ut(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var Jt=function(r){var e,t;if("object"!=typeof r||null===r)throw new TypeError(Ht("invalid argument. Must provide an object. Value: `%s`.",r));for(t in e={},r)qt(r,t)&&(e[t.toLowerCase()]=r[t]);return e},Kt=Jt;export{Kt as default};
//# sourceMappingURL=mod.js.map
