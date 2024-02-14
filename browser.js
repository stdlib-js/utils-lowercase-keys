// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Object.prototype.hasOwnProperty;function r(e){return"number"==typeof e}function i(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,a){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=a?e+i(n):i(n)+e,t&&(e="-"+e)),e}var t=String.prototype.toLowerCase,n=String.prototype.toUpperCase;function o(e){var i,o,s;switch(e.specifier){case"b":i=2;break;case"o":i=8;break;case"x":case"X":i=16;break;default:i=10}if(o=e.arg,s=parseInt(o,10),!isFinite(s)){if(!r(o))throw new Error("invalid integer. Value: "+o);s=0}return s<0&&("u"===e.specifier||10!==i)&&(s=4294967295+s+1),s<0?(o=(-s).toString(i),e.precision&&(o=a(o,e.precision,e.padRight)),o="-"+o):(o=s.toString(i),s||e.precision?e.precision&&(o=a(o,e.precision,e.padRight)):o="",e.sign&&(o=e.sign+o)),16===i&&(e.alternate&&(o="0x"+o),o=e.specifier===n.call(e.specifier)?n.call(o):t.call(o)),8===i&&e.alternate&&"0"!==o.charAt(0)&&(o="0"+o),o}function s(e){return"string"==typeof e}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,u=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var i,a,t=parseFloat(e.arg);if(!isFinite(t)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+a);t=e.arg}switch(e.specifier){case"e":case"E":a=t.toExponential(e.precision);break;case"f":case"F":a=t.toFixed(e.precision);break;case"g":case"G":c(t)<1e-4?((i=e.precision)>0&&(i-=1),a=t.toExponential(i)):a=t.toPrecision(e.precision),e.alternate||(a=f.call(a,v,"$1e"),a=f.call(a,b,"e"),a=f.call(a,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=f.call(a,g,"e+0$1"),a=f.call(a,u,"e-0$1"),e.alternate&&(a=f.call(a,d,"$1."),a=f.call(a,h,"$1.e")),t>=0&&e.sign&&(a=e.sign+a),a=e.specifier===l.call(e.specifier)?l.call(a):p.call(a)}function y(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var a=r-e.length;return a<0?e:e=i?e+y(a):y(a)+e}var k=String.fromCharCode,E=isNaN,V=Array.isArray;function $(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,i,t,n,c,p,l,f,g;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,f=0;f<e.length;f++)if(s(t=e[f]))p+=t;else{if(r=void 0!==t.precision,!(t=$(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,g=0;g<i.length;g++)switch(n=i.charAt(g)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,E(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!E(t.arg)){if((c=parseInt(t.arg,10))<0||c>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(c)?String(t.arg):k(c)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,i,a,t;for(i=[],t=0,a=T.exec(e);a;)(r=e.slice(t,T.lastIndex-a[0].length)).length&&i.push(r),i.push(F(a)),t=T.lastIndex,a=T.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function C(e){return"string"==typeof e}function A(e){var r,i,a;if(!C(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=I(e),(i=new Array(arguments.length))[0]=r,a=1;a<i.length;a++)i[a]=arguments[a];return S.apply(null,i)}return function(r){var i,a,t,n;if("object"!=typeof r||null===r)throw new TypeError(A("invalid argument. Must provide an object. Value: `%s`.",r));for(a in i={},r)n=a,null!=(t=r)&&e.call(t,n)&&(i[a.toLowerCase()]=r[a]);return i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).lowercaseKeys=r();
//# sourceMappingURL=browser.js.map
