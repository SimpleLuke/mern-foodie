"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[728],{1099:function(e,t,n){n.r(t);var r=n(8214),i=n(5861),a=n(885),u=n(2810),l=n(3999),s=n(79),o=n(4664),d=n(7212),c=n(291),p=n(5094),f=n(9508),v=n(2791),h=n(9271),m=n(3108),y=(n(8055),n(184));t.default=function(){var e=(0,v.useContext)(m.V),t=(0,f.x)(),n=t.isLoading,x=t.error,g=t.sendRequest,Z=t.errorHandler,j=(0,h.k6)(),T=(0,p.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),V=(0,a.Z)(T,2),b=V[0],C=V[1],I=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,(i=new FormData).append("image",b.inputs.image.value),i.append("title",b.inputs.title.value),i.append("description",b.inputs.description.value),i.append("address",b.inputs.address.value),t.next=9,g("https://mern-1uk3.herokuapp.com/api/places","POST",{Authorization:"Bearer "+e.token},i);case 9:j.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return(0,y.jsxs)(v.Fragment,{children:[(0,y.jsx)(s.Z,{error:x,onClear:Z}),(0,y.jsxs)("form",{onSubmit:I,className:"place-form",children:[n&&(0,y.jsx)(o.Z,{asOverlay:!0}),(0,y.jsx)(u.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,c.hg)()],errorText:"Please enter a valid title.",onInput:C}),(0,y.jsx)(u.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,c.CP)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:C}),(0,y.jsx)(u.Z,{id:"address",element:"input",label:"Address",validators:[(0,c.hg)()],errorText:"Please enter a valid address.",onInput:C}),(0,y.jsx)(d.Z,{id:"image",onInput:C,errorText:"Please provide an image."}),(0,y.jsx)(l.Z,{type:"submit",disabled:!b.isValid,children:"Add Food"})]})]})}},7212:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(885),i=n(2791),a=n(3999),u=n(184),l=function(e){var t=(0,i.useRef)(),n=(0,i.useState)(),l=(0,r.Z)(n,2),s=l[0],o=l[1],d=(0,i.useState)(),c=(0,r.Z)(d,2),p=c[0],f=c[1],v=(0,i.useState)(!1),h=(0,r.Z)(v,2),m=h[0],y=h[1];(0,i.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){f(e.result)},e.readAsDataURL(s)}}),[s]);return(0,u.jsxs)("div",{className:"form-control",children:[(0,u.jsx)("input",{id:e.id,ref:t,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var n,r=m;t.target.files&&1===t.target.files.length?(n=t.target.files[0],o(n),y(!0),r=!0):(y(!1),r=!1),e.onInput(e.id,n,r)}}),(0,u.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,u.jsxs)("div",{className:"image-upload__preview",children:[p&&(0,u.jsx)("img",{src:p,alt:"Preview"}),!p&&(0,u.jsx)("p",{children:"Please pick an image."})]}),(0,u.jsx)(a.Z,{type:"button",onClick:function(){t.current.click()},children:"PICK IMAGE"})]}),!m&&(0,u.jsx)("p",{children:e.errorText})]})}},2810:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(885),i=n(1413),a=n(2791),u=n(291),l=n(184),s=function(e,t){switch(t.type){case"CHANGE":return(0,i.Z)((0,i.Z)({},e),{},{value:t.val,isValid:(0,u.Gu)(t.val,t.validators)});case"TOUCH":return(0,i.Z)((0,i.Z)({},e),{},{isTouched:!0});default:return e}},o=function(e){var t=(0,a.useReducer)(s,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),n=(0,r.Z)(t,2),i=n[0],u=n[1],o=function(t){u({type:"CHANGE",val:t.target.value,validators:e.validators})},d=function(){u({type:"TOUCH"})},c=e.onInput,p=e.id,f=i.value,v=i.isValid;(0,a.useEffect)((function(){c(p,f,v)}),[c,p,f,v]);var h="input"===e.element?(0,l.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:o,value:i.value,onBlur:d}):(0,l.jsx)("textarea",{id:e.id,row:e.row||3,onChange:o,value:i.value,onBlur:d});return(0,l.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[(0,l.jsx)("label",{htmlFor:e.id,children:e.label}),h,!i.isValid&&i.isTouched&&(0,l.jsx)("p",{children:e.errorText})]})}},5094:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(885),i=n(4942),a=n(1413),u=n(2791),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return(0,a.Z)((0,a.Z)({},e),{},{inputs:(0,a.Z)((0,a.Z)({},e.inputs),{},(0,i.Z)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formValidity};default:return e}},s=function(e,t){var n=(0,u.useReducer)(l,{inputs:e,isValid:t}),i=(0,r.Z)(n,2),a=i[0],s=i[1];return[a,(0,u.useCallback)((function(e,t,n){s({type:"INPUT_CHANGE",inputId:e,value:t,isValid:n})}),[]),(0,u.useCallback)((function(e,t){s({type:"SET_DATA",inputs:e,formValidity:t})}),[])]}},291:function(e,t,n){n.d(t,{Ox:function(){return d},CP:function(){return o},hg:function(){return s},Gu:function(){return c}});var r=n(8192);var i="REQUIRE",a="MINLENGTH",u="MAXLENGTH",l="EMAIL",s=function(){return{type:i}},o=function(e){return{type:a,val:e}},d=function(){return{type:l}},c=function(e,t){var n,s=!0,o=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,u=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw u}}}}(t);try{for(o.s();!(n=o.n()).done;){var d=n.value;d.type===i&&(s=s&&e.trim().length>0),d.type===a&&(s=s&&e.trim().length>=d.val),d.type===u&&(s=s&&e.trim().length<=d.val),"MIN"===d.type&&(s=s&&+e>=d.val),"MAX"===d.type&&(s=s&&+e<=d.val),d.type===l&&(s=s&&/^\S+@\S+\.\S+$/.test(e))}}catch(c){o.e(c)}finally{o.f()}return s}},8055:function(){}}]);
//# sourceMappingURL=728.dbb7be7d.chunk.js.map