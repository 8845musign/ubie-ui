import{v as T}from"./v4-4a60fe23.js";const{addons:m}=__STORYBOOK_MODULE_PREVIEW_API__,{global:_}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:A}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var S="storybook/actions",b=`${S}/action-event`,v={depth:10,clearOnStoryChange:!0,limit:50},R=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:R(r,e)},x=t=>!!(typeof t=="object"&&t&&R(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),w=t=>{if(x(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),n=r==null?void 0:r.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(n.constructor.prototype)}),e}return t},D=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?T():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(t,e={}){let r={...v,...e},n=function(...i){var O,d;if(e.implicit){let g=(O="__STORYBOOK_PREVIEW__"in _?_.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(g){let c=!((d=window==null?void 0:window.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),u=new A({phase:g.phase,name:t,deprecated:c});if(c)console.warn(u);else throw u}}let o=m.getChannel(),s=D(),a=5,l=i.map(w),h=i.length>1?l:l[0],E={id:s,count:0,data:{name:t,args:h},options:{...r,maxDepth:a+(r.depth||3),allowFunction:r.allowFunction||!1}};o.emit(b,E)};return n.isAction=!0,n.implicit=e.implicit,n}var f=(t,e)=>typeof e[t]>"u"&&!(t in e),I=t=>{let{initialArgs:e,argTypes:r,id:n,parameters:{actions:i}}=t;if(!i||i.disable||!i.argTypesRegex||!r)return{};let o=new RegExp(i.argTypesRegex);return Object.entries(r).filter(([s])=>!!o.test(s)).reduce((s,[a,l])=>(f(a,e)&&(s[a]=p(a,{implicit:!0,id:n})),s),{})},j=t=>{let{initialArgs:e,argTypes:r,parameters:{actions:n}}=t;return n!=null&&n.disable||!r?{}:Object.entries(r).filter(([i,o])=>!!o.action).reduce((i,[o,s])=>(f(o,e)&&(i[o]=p(typeof s.action=="string"?s.action:o)),i),{})},L=[j,I],y=!1,C=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!y&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in _&&typeof _.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=_.__STORYBOOK_TEST_ON_MOCK_CALL__;r((n,i)=>{let o=n.getMockName();(!/^next\/.*::/.test(o)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(s=>o.startsWith(s)))&&p(o)(i)}),y=!0}},B=[C];export{L as argsEnhancers,B as loaders};
