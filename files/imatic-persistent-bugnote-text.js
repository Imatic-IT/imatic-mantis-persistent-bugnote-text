!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=38)}({38:function(t,e,n){"use strict";n.r(e),function(){function t(){const t=function(){const t=document.querySelector("#ImaticPersistentBugnoteText");if(null!=t)return JSON.parse(t.dataset.settings)}();if(null!==t){const e=t.issue_id,n=t.user_id,o=document.querySelector("#bugnote_text");if(null!==o){const t=function(t,e){const n="ImaticPersistentBugnoteText_"+t+"_"+e,o=localStorage.getItem(n);if(console.log(o),null===o)return null;const r=CryptoJS.AES.decrypt(o,"secret-key").toString(CryptoJS.enc.Utf8);return decodeURIComponent(r)}(e,n);null!==t&&(o.value=t),o.addEventListener("input",(function(){!function(t,e,n){const o="ImaticPersistentBugnoteText_"+t+"_"+e,r=encodeURIComponent(n),u=CryptoJS.AES.encrypt(r,"secret-key").toString();localStorage.setItem(o,u)}(e,n,o.value)}));const r=document.querySelector("#bugnoteadd");null!==r&&r.addEventListener("submit",(function(){!function(t,e){const n="ImaticPersistentBugnoteText_"+t+"_"+e;localStorage.removeItem(n)}(e,n)}))}}}document.addEventListener("DOMContentLoaded",(function(){t()}))}()}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJpbml0UGVyc2lzdGVudEJ1Z25vdGVUZXh0Iiwic2V0dGluZ3MiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkpTT04iLCJwYXJzZSIsImRhdGFzZXQiLCJnZXRTZXR0aW5ncyIsImlzc3VlSWQiLCJpc3N1ZV9pZCIsInVzZXJJZCIsInVzZXJfaWQiLCJidWdub3RlVGV4dEFyZWEiLCJidWdub3RlVGV4dCIsImVuY3J5cHRlZFRleHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImRlY29kZWRUZXh0IiwiQ3J5cHRvSlMiLCJBRVMiLCJkZWNyeXB0IiwidG9TdHJpbmciLCJlbmMiLCJVdGY4IiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibG9hZEJ1Z25vdGVUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRleHQiLCJlbmNvZGVkVGV4dCIsImVuY29kZVVSSUNvbXBvbmVudCIsImVuY3J5cHQiLCJzZXRJdGVtIiwic2F2ZUJ1Z25vdGVUZXh0IiwiYnVnbm90ZUZvcm0iLCJyZW1v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LEVBQVFtQixHQUN0QyxNQUFNdkMsRUFBTSwrQkFBaUNrQixFQUFVLElBQU1FLEVBQ3ZEb0IsRUFBY0MsbUJBQW1CRixHQUNqQ2YsRUFBZ0JNLFNBQVNDLElBQUlXLFFBQVFGLEVBQWEsY0FBY1AsV0FDdEVSLGFBQWFrQixRQUFRM0MsRUFBS3dCLEdEMkJWb0IsQ0FBZ0IxQixFQUFTRSxFQUFRRSxFQUFnQjVCLFVBR3JELE1BQU1tRCxFQUFjakMsU0FBU0MsY0FBYyxlQUN2QyxPQUFTZ0MsR0FDVEEsRUFBWVAsaUJBQWlCLFVBQVUsWUNqQjNELFNBQTBCcEIsRUFBU0UsR0FDL0IsTUFBTXBCLEVBQU0sK0JBQWlDa0IsRUFBVSxJQUFNRSxFQUM3REssYUFBYXFCLFdBQVc5QyxHRGdCSitDLENBQWlCN0IsRUFBU0UsUUFPOUNSLFNBQVMwQixpQkFBaUIsb0JBQW9CLFdBQzFDN0IsT0EzQ1IiLCJmaWxlIjoiaW1hdGljLXBlcnNpc3RlbnQtYnVnbm90ZS10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM4KTtcbiIsImltcG9ydCB7IHNhdmVCdWdub3RlVGV4dCwgbG9hZEJ1Z25vdGVUZXh0LCBjbGVhckJ1Z25vdGVUZXh0IH0gZnJvbSAnLi91dGlscyc7XG5cbihmdW5jdGlvbiAoKSB7XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBnZXRTZXR0aW5ncygpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0ltYXRpY1BlcnNpc3RlbnRCdWdub3RlVGV4dFwiKTtcbiAgICAgICAgaWYgKGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGVsLmRhdGFzZXQuc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRQZXJzaXN0ZW50QnVnbm90ZVRleHQoKSB7XG5cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXG4gICAgICAgIGlmIChudWxsICE9PSBzZXR0aW5ncykge1xuICAgICAgICAgICAgY29uc3QgaXNzdWVJZCA9IHNldHRpbmdzLmlzc3VlX2lkO1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gc2V0dGluZ3MudXNlcl9pZDtcbiAgICAgICAgICAgIGNvbnN0IGJ1Z25vdGVUZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnVnbm90ZV90ZXh0XCIpO1xuXG4gICAgICAgICAgICBpZiAobnVsbCAhPT0gYnVnbm90ZVRleHRBcmVhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnVnbm90ZVRleHQgPSBsb2FkQnVnbm90ZVRleHQoaXNzdWVJZCwgdXNlcklkKTtcblxuICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBidWdub3RlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBidWdub3RlVGV4dEFyZWEudmFsdWUgPSBidWdub3RlVGV4dDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidWdub3RlVGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUJ1Z25vdGVUZXh0KGlzc3VlSWQsIHVzZXJJZCwgYnVnbm90ZVRleHRBcmVhLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1Z25vdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWdub3RlYWRkXCIpO1xuICAgICAgICAgICAgICAgIGlmIChudWxsICE9PSBidWdub3RlRm9ybSkge1xuICAgICAgICAgICAgICAgICAgICBidWdub3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyQnVnbm90ZVRleHQoaXNzdWVJZCwgdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0UGVyc2lzdGVudEJ1Z25vdGVUZXh0KCk7XG4gICAgfSk7XG59KVxuKCk7XG5cblxuXG5cbiIsImZ1bmN0aW9uIHNhdmVCdWdub3RlVGV4dChpc3N1ZUlkLCB1c2VySWQsIHRleHQpIHtcbiAgICBjb25zdCBrZXkgPSAnSW1hdGljUGVyc2lzdGVudEJ1Z25vdGVUZXh0XycgKyBpc3N1ZUlkICsgJ18nICsgdXNlcklkO1xuICAgIGNvbnN0IGVuY29kZWRUZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpO1xuICAgIGNvbnN0IGVuY3J5cHRlZFRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChlbmNvZGVkVGV4dCwgJ3NlY3JldC1rZXknKS50b1N0cmluZygpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZW5jcnlwdGVkVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRCdWdub3RlVGV4dChpc3N1ZUlkLCB1c2VySWQpIHtcbiAgICBjb25zdCBrZXkgPSAnSW1hdGljUGVyc2lzdGVudEJ1Z25vdGVUZXh0XycgKyBpc3N1ZUlkICsgJ18nICsgdXNlcklkO1xuICAgIGNvbnN0IGVuY3J5cHRlZFRleHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGNvbnNvbGUubG9nKGVuY3J5cHRlZFRleHQpXG4gICAgaWYgKGVuY3J5cHRlZFRleHQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZW5jcnlwdGVkVGV4dCwgJ3NlY3JldC1rZXknKTtcbiAgICBjb25zdCBkZWNvZGVkVGV4dCA9IGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGRlY29kZWRUZXh0KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJCdWdub3RlVGV4dChpc3N1ZUlkLCB1c2VySWQpIHtcbiAgICBjb25zdCBrZXkgPSAnSW1hdGljUGVyc2lzdGVudEJ1Z25vdGVUZXh0XycgKyBpc3N1ZUlkICsgJ18nICsgdXNlcklkO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59XG5cbmV4cG9ydCB7IHNhdmVCdWdub3RlVGV4dCwgbG9hZEJ1Z25vdGVUZXh0LCBjbGVhckJ1Z25vdGVUZXh0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9