/*!
 * 
 *   simple-keyboard v3.4.64 (index.modern.js - Modern Browsers bundle)
 *   https://github.com/hodgef/simple-keyboard
 *
 *   NOTE: This modern browsers bundle (index.modern.js) removes all polyfills
 *   included in the standard version. Use this if you are supporting
 *   modern browsers only. Otherwise, use the standard version (index.js).
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleKeyboard=e():t.SimpleKeyboard=e()}(this,(function(){return function(){"use strict";var t={d:function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:function(){return k}});function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){function t(e){var n=e.getOptions,o=e.getCaretPosition,i=e.getCaretPositionEnd,a=e.dispatch;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"isStandardButton",(function(t){return t&&!("{"===t[0]&&"}"===t[t.length-1])})),this.getOptions=n,this.getCaretPosition=o,this.getCaretPositionEnd=i,this.dispatch=a,t.bindMethods(t,this)}var e,i,u;return e=t,u=[{key:"bindMethods",value:function(t,e){var n,i=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=o(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){u=!0,s=t},f:function(){try{r||null==n.return||n.return()}finally{if(u)throw s}}}}(Object.getOwnPropertyNames(t.prototype));try{for(i.s();!(n=i.n()).done;){var a=n.value;"constructor"===a||"bindMethods"===a||(e[a]=e[a].bind(e))}}catch(t){i.e(t)}finally{i.f()}}}],(i=[{key:"getButtonType",value:function(t){return t.includes("{")&&t.includes("}")&&"{//}"!==t?"functionBtn":"standardBtn"}},{key:"getButtonClass",value:function(t){var e=this.getButtonType(t),n=t.replace("{","").replace("}",""),o="";return"standardBtn"!==e&&(o=" hg-button-".concat(n)),"hg-".concat(e).concat(o)}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"↑","{arrowleft}":"←","{arrowdown}":"↓","{arrowright}":"→","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{forwarddelete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"getButtonDisplayName",value:function(t,e,n){return(e=n?Object.assign({},this.getDefaultDiplay(),e):e||this.getDefaultDiplay())[t]||t}},{key:"getUpdatedInput",value:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=this.getOptions(),s=[n,o,i],r=e;return("{bksp}"===t||"{backspace}"===t)&&r.length>0?r=this.removeAt.apply(this,[r].concat(s)):("{delete}"===t||"{forwarddelete}"===t)&&r.length>0?r=this.removeForwardsAt.apply(this,[r].concat(s)):"{space}"===t?r=this.addStringAt.apply(this,[r," "].concat(s)):"{tab}"!==t||"boolean"==typeof a.tabCharOnTab&&!1===a.tabCharOnTab?"{enter}"!==t&&"{numpadenter}"!==t||!a.newLineOnEnter?t.includes("numpad")&&Number.isInteger(Number(t[t.length-2]))?r=this.addStringAt.apply(this,[r,t[t.length-2]].concat(s)):"{numpaddivide}"===t?r=this.addStringAt.apply(this,[r,"/"].concat(s)):"{numpadmultiply}"===t?r=this.addStringAt.apply(this,[r,"*"].concat(s)):"{numpadsubtract}"===t?r=this.addStringAt.apply(this,[r,"-"].concat(s)):"{numpadadd}"===t?r=this.addStringAt.apply(this,[r,"+"].concat(s)):"{numpaddecimal}"===t?r=this.addStringAt.apply(this,[r,"."].concat(s)):"{"===t||"}"===t?r=this.addStringAt.apply(this,[r,t].concat(s)):t.includes("{")||t.includes("}")||(r=this.addStringAt.apply(this,[r,t].concat(s))):r=this.addStringAt.apply(this,[r,"\n"].concat(s)):r=this.addStringAt.apply(this,[r,"\t"].concat(s)),r}},{key:"updateCaretPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.updateCaretPosAction(t,e);this.dispatch((function(t){t.setCaretPosition(n)}))}},{key:"updateCaretPosAction",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.getOptions(),o=this.getCaretPosition();return null!=o&&(e?o>0&&(o-=t):o+=t),n.debug&&console.log("Caret at:",o),o}},{key:"addStringAt",value:function(t,e){var n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return o||0===o?(n=[t.slice(0,o),e,t.slice(i)].join(""),this.isMaxLengthReached()||a&&this.updateCaretPos(e.length)):n=t+e,n}},{key:"removeAt",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(0===n&&0===o)return t;if(n===o){var a=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;n&&n>=0?t.substring(n-2,n).match(a)?(e=t.substr(0,n-2)+t.substr(n),i&&this.updateCaretPos(2,!0)):(e=t.substr(0,n-1)+t.substr(n),i&&this.updateCaretPos(1,!0)):t.slice(-2).match(a)?(e=t.slice(0,-2),i&&this.updateCaretPos(2,!0)):(e=t.slice(0,-1),i&&this.updateCaretPos(1,!0))}else e=t.slice(0,n)+t.slice(o),i&&this.dispatch((function(t){t.setCaretPosition(n)}));return e}},{key:"removeForwardsAt",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(null==t||!t.length||null===n)return t;if(n===o){var a=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g,s=t.substring(n,n+2),r=s.match(a);e=r?t.substr(0,n)+t.substr(n+2):t.substr(0,n)+t.substr(n+1)}else e=t.slice(0,n)+t.slice(o),i&&this.dispatch((function(t){t.setCaretPosition(n)}));return e}},{key:"handleMaxLength",value:function(t,e){var n=this.getOptions(),o=n.maxLength,i=t[n.inputName||"default"],s=e.length-1>=o;if(e.length<=i.length)return!1;if(Number.isInteger(o))return n.debug&&console.log("maxLength (num) reached:",s),s?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if("object"===a(o)){var r=e.length-1>=o[n.inputName||"default"];return n.debug&&console.log("maxLength (obj) reached:",r),r?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}},{key:"isMaxLengthReached",value:function(){return Boolean(this.maxLengthReached)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints}},{key:"pointerEventsSupported",value:function(){return!!window.PointerEvent}},{key:"camelCase",value:function(t){return t?t.toLowerCase().trim().split(/[.\-_\s]/g).reduce((function(t,e){return e.length?t+e[0].toUpperCase()+e.slice(1):t})):""}},{key:"chunkArray",value:function(t,e){return n(Array(Math.ceil(t.length/e))).map((function(n,o){return t.slice(e*o,e+e*o)}))}}])&&s(e.prototype,i),u&&s(e,u),Object.defineProperty(e,"prototype",{writable:!1}),t}();r(u,"noop",(function(){}));var l=u;function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=function(){function t(e){var n=e.dispatch,o=e.getOptions;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dispatch=n,this.getOptions=o,l.bindMethods(t,this)}var e,n,o;return e=t,(n=[{key:"handleHighlightKeyDown",value:function(t){var e=this.getOptions(),n=this.getSimpleKeyboardLayoutKey(t);this.dispatch((function(o){var i,a,s=o.getButtonElement(n),r=o.getButtonElement("{".concat(n,"}"));if(s)i=s,a=n;else{if(!r)return;i=r,a="{".concat(n,"}")}i&&(i.style.backgroundColor=e.physicalKeyboardHighlightBgColor||"#dadce4",i.style.color=e.physicalKeyboardHighlightTextColor||"black",e.physicalKeyboardHighlightPress&&(e.physicalKeyboardHighlightPressUseClick?i.click():o.handleButtonClicked(a,t)))}))}},{key:"handleHighlightKeyUp",value:function(t){var e=this.getSimpleKeyboardLayoutKey(t);this.dispatch((function(t){var n=t.getButtonElement(e)||t.getButtonElement("{".concat(e,"}"));n&&n.removeAttribute&&n.removeAttribute("style")}))}},{key:"getSimpleKeyboardLayoutKey",value:function(t){var e,n="",o=t.code||t.key||this.keyCodeToKey(null==t?void 0:t.keyCode);return(n=null!=o&&o.includes("Numpad")||null!=o&&o.includes("Shift")||null!=o&&o.includes("Space")||null!=o&&o.includes("Backspace")||null!=o&&o.includes("Control")||null!=o&&o.includes("Alt")||null!=o&&o.includes("Meta")?t.code||"":t.key||this.keyCodeToKey(null==t?void 0:t.keyCode)||"").length>1?null===(e=n)||void 0===e?void 0:e.toLowerCase():n}},{key:"keyCodeToKey",value:function(t){return{8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Meta",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9",106:"NumpadMultiply",107:"NumpadAdd",109:"NumpadSubtract",110:"NumpadDecimal",111:"NumpadDivide",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}[t]}}])&&c(e.prototype,n),o&&c(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var p=function(){function t(e){var n,o,i,a=e.utilities;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i=0,(o="pageIndex")in(n=this)?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,this.utilities=a,l.bindMethods(t,this),this.pageSize=this.utilities.getOptions().layoutCandidatesPageSize||5}var e,n,o;return e=t,(n=[{key:"destroy",value:function(){this.candidateBoxElement&&(this.candidateBoxElement.remove(),this.pageIndex=0)}},{key:"show",value:function(t){var e=this,n=t.candidateValue,o=t.targetElement,i=t.onSelect;if(n&&n.length){var a=this.utilities.chunkArray(n.split(" "),this.pageSize);this.renderPage({candidateListPages:a,targetElement:o,pageIndex:this.pageIndex,nbPages:a.length,onItemSelected:function(t,n){i(t,n),e.destroy()}})}}},{key:"renderPage",value:function(t){var e,n=this,o=t.candidateListPages,i=t.targetElement,a=t.pageIndex,s=t.nbPages,r=t.onItemSelected;null===(e=this.candidateBoxElement)||void 0===e||e.remove(),this.candidateBoxElement=document.createElement("div"),this.candidateBoxElement.className="hg-candidate-box";var u=document.createElement("ul");u.className="hg-candidate-box-list",o[a].forEach((function(t){var e=document.createElement("li"),n=function(){var t=new MouseEvent("click");return Object.defineProperty(t,"target",{value:e}),t};e.className="hg-candidate-box-list-item",e.textContent=t,e.onclick=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n();return r(t,e)},u.appendChild(e)}));var l=a>0,c=document.createElement("div");c.classList.add("hg-candidate-box-prev"),l&&c.classList.add("hg-candidate-box-btn-active"),c.onclick=function(){l&&n.renderPage({candidateListPages:o,targetElement:i,pageIndex:a-1,nbPages:s,onItemSelected:r})},this.candidateBoxElement.appendChild(c),this.candidateBoxElement.appendChild(u);var d=a<s-1,h=document.createElement("div");h.classList.add("hg-candidate-box-next"),d&&h.classList.add("hg-candidate-box-btn-active"),h.onclick=function(){d&&n.renderPage({candidateListPages:o,targetElement:i,pageIndex:a+1,nbPages:s,onItemSelected:r})},this.candidateBoxElement.appendChild(h),i.prepend(this.candidateBoxElement)}}])&&h(e.prototype,n),o&&h(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=function(){function t(e,n){var o=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"defaultName","default"),b(this,"activeInputElement",null),b(this,"handleParams",(function(t,e){var n,o,i;if("string"==typeof t)n=t.split(".").join(""),o=document.querySelector(".".concat(n)),i=e;else if(t instanceof HTMLDivElement){if(!t.className)throw console.warn("Any DOM element passed as parameter must have a class."),new Error("KEYBOARD_DOM_CLASS_ERROR");n=t.className.split(" ")[0],o=t,i=e}else n="simple-keyboard",o=document.querySelector(".".concat(n)),i=t;return{keyboardDOMClass:n,keyboardDOM:o,options:i}})),b(this,"getOptions",(function(){return o.options})),b(this,"getCaretPosition",(function(){return o.caretPosition})),b(this,"getCaretPositionEnd",(function(){return o.caretPositionEnd})),b(this,"registerModule",(function(t,e){o.modules[t]||(o.modules[t]={}),e(o.modules[t])})),b(this,"getKeyboardClassString",(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=[o.keyboardDOMClass].concat(e).filter((function(t){return!!t}));return i.join(" ")})),"undefined"!=typeof window){var i=this.handleParams(e,n),a=i.keyboardDOMClass,s=i.keyboardDOM,r=i.options,u=void 0===r?{}:r;this.utilities=new l({getOptions:this.getOptions,getCaretPosition:this.getCaretPosition,getCaretPositionEnd:this.getCaretPositionEnd,dispatch:this.dispatch}),this.caretPosition=null,this.caretPositionEnd=null,this.keyboardDOM=s,this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({layoutName:"default",theme:"hg-theme-default",inputName:"default",preventMouseDownDefault:!1,enableLayoutCandidates:!0,excludeFromLayout:{}},u),this.keyboardPluginClasses="",l.bindMethods(t,this);var c=this.options.inputName,h=void 0===c?this.defaultName:c;if(this.input={},this.input[h]="",this.keyboardDOMClass=a,this.buttonElements={},window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),this.currentInstanceName=this.utilities.camelCase(this.keyboardDOMClass),window.SimpleKeyboardInstances[this.currentInstanceName]=this,this.allKeyboardInstances=window.SimpleKeyboardInstances,this.keyboardInstanceNames=Object.keys(window.SimpleKeyboardInstances),this.isFirstKeyboardInstance=this.keyboardInstanceNames[0]===this.currentInstanceName,this.physicalKeyboard=new d({dispatch:this.dispatch,getOptions:this.getOptions}),this.candidateBox=this.options.enableLayoutCandidates?new p({utilities:this.utilities}):null,!this.keyboardDOM)throw console.warn('".'.concat(a,'" was not found in the DOM.')),new Error("KEYBOARD_DOM_ERROR");this.render(),this.modules={},this.loadModules()}}var e,n,o;return e=t,(n=[{key:"setCaretPosition",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;this.caretPosition=t,this.caretPositionEnd=e}},{key:"getInputCandidates",value:function(t){var e=this,n=this.options.layoutCandidates;if(!n||"object"!==g(n))return{};var o=Object.keys(n).filter((function(n){var o=t.substring(0,e.getCaretPositionEnd()||0)||t,i=new RegExp("".concat(n,"$"),"gi");return!!f(o.matchAll(i)).length}));if(o.length>1){var i=o.sort((function(t,e){return e.length-t.length}))[0];return{candidateKey:i,candidateValue:n[i]}}if(o.length){var a=o[0];return{candidateKey:a,candidateValue:n[a]}}return{}}},{key:"showCandidatesBox",value:function(t,e,n){var o=this;this.candidateBox&&this.candidateBox.show({candidateValue:e,targetElement:n,onSelect:function(e,n){var i=e.normalize("NFD"),a=o.getInput(o.options.inputName,!0),s=o.getCaretPositionEnd()||0,r=a.substring(0,s||0)||a,u=new RegExp("".concat(t,"$"),"gi"),l=r.replace(u,i),c=a.replace(r,l),d=l.length-r.length,h=(s||a.length)+d;h<0&&(h=0),o.setInput(c,o.options.inputName,!0),o.setCaretPosition(h),"function"==typeof o.options.onChange&&o.options.onChange(o.getInput(o.options.inputName,!0),n),"function"==typeof o.options.onChangeAll&&o.options.onChangeAll(o.getAllInputs(),n)}})}},{key:"handleButtonClicked",value:function(t,e){var n=this.options,o=n.inputName,i=void 0===o?this.defaultName:o,a=n.debug;if("{//}"!==t){this.input[i]||(this.input[i]="");var s=this.utilities.getUpdatedInput(t,this.input[i],this.caretPosition,this.caretPositionEnd);if(this.utilities.isStandardButton(t)&&this.activeInputElement&&this.input[i]&&this.input[i]===s&&0===this.caretPosition&&this.caretPositionEnd===s.length)return this.setInput("",this.options.inputName,!0),this.setCaretPosition(0),this.activeInputElement.value="",this.activeInputElement.setSelectionRange(0,0),void this.handleButtonClicked(t,e);if("function"==typeof this.options.onKeyPress&&this.options.onKeyPress(t,e),this.input[i]!==s&&(!this.options.inputPattern||this.options.inputPattern&&this.inputPatternIsValid(s))){if(this.options.maxLength&&this.utilities.handleMaxLength(this.input,s))return;var r=this.utilities.getUpdatedInput(t,this.input[i],this.caretPosition,this.caretPositionEnd,!0);if(this.setInput(r,this.options.inputName,!0),a&&console.log("Input changed:",this.getAllInputs()),this.options.debug&&console.log("Caret at: ",this.getCaretPosition(),this.getCaretPositionEnd(),"(".concat(this.keyboardDOMClass,")")),this.options.syncInstanceInputs&&this.syncInstanceInputs(),"function"==typeof this.options.onChange&&this.options.onChange(this.getInput(this.options.inputName,!0),e),"function"==typeof this.options.onChangeAll&&this.options.onChangeAll(this.getAllInputs(),e),null!=e&&e.target&&this.options.enableLayoutCandidates){var u,l=this.getInputCandidates(s),c=l.candidateKey,d=l.candidateValue;c&&d?this.showCandidatesBox(c,d,this.keyboardDOM):null===(u=this.candidateBox)||void 0===u||u.destroy()}}a&&console.log("Key pressed:",t)}}},{key:"getMouseHold",value:function(){return this.isMouseHold}},{key:"setMouseHold",value:function(t){this.options.syncInstanceInputs?this.dispatch((function(e){e.isMouseHold=t})):this.isMouseHold=t}},{key:"handleButtonMouseDown",value:function(t,e){var n=this;e&&(this.options.preventMouseDownDefault&&e.preventDefault(),this.options.stopMouseDownPropagation&&e.stopPropagation(),e.target.classList.add(this.activeButtonClass)),this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdTimeout&&clearTimeout(this.holdTimeout),this.setMouseHold(!0),this.options.disableButtonHold||(this.holdTimeout=window.setTimeout((function(){(n.getMouseHold()&&(!t.includes("{")&&!t.includes("}")||"{delete}"===t||"{backspace}"===t||"{bksp}"===t||"{space}"===t||"{tab}"===t)||"{arrowright}"===t||"{arrowleft}"===t||"{arrowup}"===t||"{arrowdown}"===t)&&(n.options.debug&&console.log("Button held:",t),n.handleButtonHold(t)),clearTimeout(n.holdTimeout)}),500))}},{key:"handleButtonMouseUp",value:function(t,e){var n=this;e&&(this.options.preventMouseUpDefault&&e.preventDefault&&e.preventDefault(),this.options.stopMouseUpPropagation&&e.stopPropagation&&e.stopPropagation(),!(e.target===this.keyboardDOM||e.target&&this.keyboardDOM.contains(e.target)||this.candidateBox&&this.candidateBox.candidateBoxElement&&(e.target===this.candidateBox.candidateBoxElement||e.target&&this.candidateBox.candidateBoxElement.contains(e.target)))&&this.candidateBox&&this.candidateBox.destroy()),this.recurseButtons((function(t){t.classList.remove(n.activeButtonClass)})),this.setMouseHold(!1),this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),t&&"function"==typeof this.options.onKeyReleased&&this.options.onKeyReleased(t)}},{key:"handleKeyboardContainerMouseDown",value:function(t){this.options.preventMouseDownDefault&&t.preventDefault()}},{key:"handleButtonHold",value:function(t){var e=this;this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdInteractionTimeout=window.setTimeout((function(){e.getMouseHold()?(e.handleButtonClicked(t),e.handleButtonHold(t)):clearTimeout(e.holdInteractionTimeout)}),100)}},{key:"syncInstanceInputs",value:function(){var t=this;this.dispatch((function(e){e.replaceInput(t.input),e.setCaretPosition(t.caretPosition,t.caretPositionEnd)}))}},{key:"clearInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.inputName||this.defaultName;this.input[t]="",this.setCaretPosition(0),this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"getInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.inputName||this.defaultName,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.options.syncInstanceInputs&&!e&&this.syncInstanceInputs(),this.options.rtl){var n=this.input[t].replace("‫","").replace("‬","");return"‫"+n+"‬"}return this.input[t]}},{key:"getAllInputs",value:function(){var t=this,e={};return Object.keys(this.input).forEach((function(n){e[n]=t.getInput(n,!0)})),e}},{key:"setInput",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.inputName||this.defaultName,n=arguments.length>2?arguments[2]:void 0;this.input[e]=t,!n&&this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"replaceInput",value:function(t){this.input=t}},{key:"setOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.changedOptions(t);this.options=Object.assign(this.options,t),e.length&&(this.options.debug&&console.log("changedOptions",e),this.onSetOptions(e),this.render())}},{key:"changedOptions",value:function(t){var e=this;return Object.keys(t).filter((function(n){return JSON.stringify(t[n])!==JSON.stringify(e.options[n])}))}},{key:"onSetOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.includes("layoutName")&&this.candidateBox&&this.candidateBox.destroy(),(t.includes("layoutCandidatesPageSize")||t.includes("layoutCandidates"))&&this.candidateBox&&(this.candidateBox.destroy(),this.candidateBox=new p({utilities:this.utilities}))}},{key:"resetRows",value:function(){this.keyboardRowsDOM&&this.keyboardRowsDOM.remove(),this.keyboardDOM.className=this.keyboardDOMClass,this.buttonElements={}}},{key:"dispatch",value:function(t){if(!window.SimpleKeyboardInstances)throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),new Error("INSTANCES_VAR_ERROR");return Object.keys(window.SimpleKeyboardInstances).forEach((function(e){t(window.SimpleKeyboardInstances[e],e)}))}},{key:"addButtonTheme",value:function(t,e){var n=this;e&&t&&(t.split(" ").forEach((function(o){e.split(" ").forEach((function(e){n.options.buttonTheme||(n.options.buttonTheme=[]);var i=!1;n.options.buttonTheme.map((function(t){if(null!=t&&t.class.split(" ").includes(e)){i=!0;var n=t.buttons.split(" ");n.includes(o)||(i=!0,n.push(o),t.buttons=n.join(" "))}return t})),i||n.options.buttonTheme.push({class:e,buttons:t})}))})),this.render())}},{key:"removeButtonTheme",value:function(t,e){var n=this;if(!t&&!e)return this.options.buttonTheme=[],void this.render();t&&Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.length&&(t.split(" ").forEach((function(t){var o,i;null===(o=n.options)||void 0===o||null===(i=o.buttonTheme)||void 0===i||i.map((function(o,i){if(o&&e&&e.includes(o.class)||!e){var a,s,r=null===(a=o)||void 0===a?void 0:a.buttons.split(" ").filter((function(e){return e!==t}));o&&null!=r&&r.length?o.buttons=r.join(" "):(null===(s=n.options.buttonTheme)||void 0===s||s.splice(i,1),o=null)}return o}))})),this.render())}},{key:"getButtonElement",value:function(t){var e,n=this.buttonElements[t];return n&&(e=n.length>1?n:n[0]),e}},{key:"inputPatternIsValid",value:function(t){var e,n=this.options.inputPattern;if((e=n instanceof RegExp?n:n[this.options.inputName||this.defaultName])&&t){var o=e.test(t);return this.options.debug&&console.log('inputPattern ("'.concat(e,'"): ').concat(o?"passed":"did not pass!")),o}return!0}},{key:"setEventListeners",value:function(){!this.isFirstKeyboardInstance&&this.allKeyboardInstances||(this.options.debug&&console.log("Caret handling started (".concat(this.keyboardDOMClass,")")),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("touchend",this.handleTouchEnd),document.addEventListener("select",this.handleSelect),document.addEventListener("selectionchange",this.handleSelectionChange))}},{key:"handleKeyUp",value:function(t){this.caretEventHandler(t),this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyUp(t)}},{key:"handleKeyDown",value:function(t){this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyDown(t)}},{key:"handleMouseUp",value:function(t){this.caretEventHandler(t)}},{key:"handleTouchEnd",value:function(t){this.caretEventHandler(t)}},{key:"handleSelect",value:function(t){this.caretEventHandler(t)}},{key:"handleSelectionChange",value:function(t){this.caretEventHandler(t)}},{key:"caretEventHandler",value:function(t){var e,n=this;t.target.tagName&&(e=t.target.tagName.toLowerCase()),this.dispatch((function(o){var i=t.target===o.keyboardDOM||t.target&&o.keyboardDOM.contains(t.target);("textarea"===e||"input"===e&&["text","search","url","tel","password"].includes(t.target.type))&&!o.options.disableCaretPositioning?(o.setCaretPosition(t.target.selectionStart,t.target.selectionEnd),n.activeInputElement=t.target,o.options.debug&&console.log("Caret at: ",o.getCaretPosition(),o.getCaretPositionEnd(),t&&t.target.tagName.toLowerCase(),"(".concat(o.keyboardDOMClass,")"))):!o.options.disableCaretPositioning&&i||"selectionchange"===(null==t?void 0:t.type)||(o.setCaretPosition(null),n.activeInputElement=null,o.options.debug&&console.log('Caret position reset due to "'.concat(null==t?void 0:t.type,'" event'),t))}))}},{key:"recurseButtons",value:function(t){var e=this;t&&Object.keys(this.buttonElements).forEach((function(n){return e.buttonElements[n].forEach(t)}))}},{key:"destroy",value:function(){this.options.debug&&console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName)),document.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchend",this.handleTouchEnd),document.removeEventListener("select",this.handleSelect),document.removeEventListener("selectionchange",this.handleSelectionChange),document.onpointerup=null,document.ontouchend=null,document.ontouchcancel=null,document.onmouseup=null,this.recurseButtons((function(t){t&&(t.onpointerdown=null,t.onpointerup=null,t.onpointercancel=null,t.ontouchstart=null,t.ontouchend=null,t.ontouchcancel=null,t.onclick=null,t.onmousedown=null,t.onmouseup=null,t.remove(),t=null)})),this.keyboardDOM.onpointerdown=null,this.keyboardDOM.ontouchstart=null,this.keyboardDOM.onmousedown=null,this.resetRows(),this.candidateBox&&(this.candidateBox.destroy(),this.candidateBox=null),this.activeInputElement=null,this.keyboardDOM.innerHTML="",window.SimpleKeyboardInstances[this.currentInstanceName]=null,delete window.SimpleKeyboardInstances[this.currentInstanceName],this.initialized=!1}},{key:"getButtonThemeClasses",value:function(t){var e=this.options.buttonTheme,n=[];return Array.isArray(e)&&e.forEach((function(e){if(e&&e.class&&"string"==typeof e.class&&e.buttons&&"string"==typeof e.buttons){var o=e.class.split(" ");e.buttons.split(" ").includes(t)&&(n=[].concat(f(n),f(o)))}else console.warn('Incorrect "buttonTheme". Please check the documentation.',e)})),n}},{key:"setDOMButtonAttributes",value:function(t,e){var n=this.options.buttonAttributes;Array.isArray(n)&&n.forEach((function(n){n.attribute&&"string"==typeof n.attribute&&n.value&&"string"==typeof n.value&&n.buttons&&"string"==typeof n.buttons?n.buttons.split(" ").includes(t)&&e(n.attribute,n.value):console.warn('Incorrect "buttonAttributes". Please check the documentation.',n)}))}},{key:"onTouchDeviceDetected",value:function(){this.processAutoTouchEvents(),this.disableContextualWindow()}},{key:"disableContextualWindow",value:function(){window.oncontextmenu=function(t){if(t.target.classList.contains("hg-button"))return t.preventDefault(),t.stopPropagation(),!1}}},{key:"processAutoTouchEvents",value:function(){this.options.autoUseTouchEvents&&(this.options.useTouchEvents=!0,this.options.debug&&console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."))}},{key:"onInit",value:function(){this.options.debug&&console.log("".concat(this.keyboardDOMClass," Initialized")),this.setEventListeners(),"function"==typeof this.options.onInit&&this.options.onInit(this)}},{key:"beforeFirstRender",value:function(){this.utilities.isTouchDevice()&&this.onTouchDeviceDetected(),"function"==typeof this.options.beforeFirstRender&&this.options.beforeFirstRender(this),this.isFirstKeyboardInstance&&this.utilities.pointerEventsSupported()&&!this.options.useTouchEvents&&!this.options.useMouseEvents&&this.options.debug&&console.log("Using PointerEvents as it is supported by this browser"),this.options.useTouchEvents&&this.options.debug&&console.log("useTouchEvents has been enabled. Only touch events will be used.")}},{key:"beforeRender",value:function(){"function"==typeof this.options.beforeRender&&this.options.beforeRender(this)}},{key:"onRender",value:function(){"function"==typeof this.options.onRender&&this.options.onRender(this)}},{key:"onModulesLoaded",value:function(){"function"==typeof this.options.onModulesLoaded&&this.options.onModulesLoaded(this)}},{key:"loadModules",value:function(){var t=this;Array.isArray(this.options.modules)&&(this.options.modules.forEach((function(e){var n=new e(t);n.init&&n.init(t)})),this.keyboardPluginClasses="modules-loaded",this.render(),this.onModulesLoaded())}},{key:"getModuleProp",value:function(t,e){return!!this.modules[t]&&this.modules[t][e]}},{key:"getModulesList",value:function(){return Object.keys(this.modules)}},{key:"parseRowDOMContainers",value:function(t,e,n,o){var i=this,a=Array.from(t.children),s=0;return a.length&&n.forEach((function(n,r){var u=o[r];if(!(u&&u>n))return!1;var l=n-s,c=u-s,d=document.createElement("div");d.className+="hg-button-container";var h="".concat(i.options.layoutName,"-r").concat(e,"c").concat(r);d.setAttribute("data-skUID",h);var p=a.splice(l,c-l+1);s=c-l,p.forEach((function(t){return d.appendChild(t)})),a.splice(l,0,d),t.innerHTML="",a.forEach((function(e){return t.appendChild(e)})),i.options.debug&&console.log("rowDOMContainer",p,l,c,s+1)})),t}},{key:"render",value:function(){var t=this;this.resetRows(),this.initialized||this.beforeFirstRender(),this.beforeRender();var e="hg-layout-".concat(this.options.layoutName),n=this.options.layout||{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]},o=this.options.useTouchEvents||!1,i=o?"hg-touch-events":"",a=this.options.useMouseEvents||!1,s=this.options.disableRowButtonContainers;this.keyboardDOM.className=this.getKeyboardClassString(this.options.theme,e,this.keyboardPluginClasses,i),this.keyboardRowsDOM=document.createElement("div"),this.keyboardRowsDOM.className="hg-rows",n[this.options.layoutName||this.defaultName].forEach((function(e,n){var i=e.split(" ");t.options.excludeFromLayout&&t.options.excludeFromLayout[t.options.layoutName||t.defaultName]&&(i=i.filter((function(e){return t.options.excludeFromLayout&&!t.options.excludeFromLayout[t.options.layoutName||t.defaultName].includes(e)})));var r=document.createElement("div");r.className+="hg-row";var u=[],l=[];i.forEach((function(e,i){var c,d=!s&&"string"==typeof e&&e.length>1&&0===e.indexOf("["),h=!s&&"string"==typeof e&&e.length>1&&e.indexOf("]")===e.length-1;d&&(u.push(i),e=e.replace(/\[/g,"")),h&&(l.push(i),e=e.replace(/\]/g,""));var p=t.utilities.getButtonClass(e),y=t.utilities.getButtonDisplayName(e,t.options.display,t.options.mergeDisplay),g=t.options.useButtonTag?"button":"div",m=document.createElement(g);m.className+="hg-button ".concat(p),(c=m.classList).add.apply(c,f(t.getButtonThemeClasses(e))),t.setDOMButtonAttributes(e,(function(t,e){m.setAttribute(t,e)})),t.activeButtonClass="hg-activeButton",!t.utilities.pointerEventsSupported()||o||a?o?(m.ontouchstart=function(n){t.handleButtonClicked(e,n),t.handleButtonMouseDown(e,n)},m.ontouchend=function(n){t.handleButtonMouseUp(e,n)},m.ontouchcancel=function(n){t.handleButtonMouseUp(e,n)}):(m.onclick=function(n){t.setMouseHold(!1),t.handleButtonClicked(e,n)},m.onmousedown=function(n){t.handleButtonMouseDown(e,n)},m.onmouseup=function(n){t.handleButtonMouseUp(e,n)}):(m.onpointerdown=function(n){t.handleButtonClicked(e,n),t.handleButtonMouseDown(e,n)},m.onpointerup=function(n){t.handleButtonMouseUp(e,n)},m.onpointercancel=function(n){t.handleButtonMouseUp(e,n)}),m.setAttribute("data-skBtn",e);var v="".concat(t.options.layoutName,"-r").concat(n,"b").concat(i);m.setAttribute("data-skBtnUID",v);var b=document.createElement("span");b.innerHTML=y,m.appendChild(b),t.buttonElements[e]||(t.buttonElements[e]=[]),t.buttonElements[e].push(m),r.appendChild(m)})),r=t.parseRowDOMContainers(r,n,u,l),t.keyboardRowsDOM.appendChild(r)})),this.keyboardDOM.appendChild(this.keyboardRowsDOM),this.onRender(),this.initialized||(this.initialized=!0,!this.utilities.pointerEventsSupported()||o||a?o?(document.ontouchend=function(e){return t.handleButtonMouseUp(void 0,e)},document.ontouchcancel=function(e){return t.handleButtonMouseUp(void 0,e)},this.keyboardDOM.ontouchstart=function(e){return t.handleKeyboardContainerMouseDown(e)}):o||(document.onmouseup=function(e){return t.handleButtonMouseUp(void 0,e)},this.keyboardDOM.onmousedown=function(e){return t.handleKeyboardContainerMouseDown(e)}):(document.onpointerup=function(e){return t.handleButtonMouseUp(void 0,e)},this.keyboardDOM.onpointerdown=function(e){return t.handleKeyboardContainerMouseDown(e)}),this.onInit())}}])&&v(e.prototype,n),o&&v(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();return e}()}));
//# sourceMappingURL=index.modern.js.map