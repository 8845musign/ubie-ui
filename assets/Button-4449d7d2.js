import{c as N,j as m,a}from"./clsx-0a53246e.js";import{r as I}from"./index-76fb7be0.js";import{s as e,V as l}from"./VariantIcon-57232559.js";const t=I.forwardRef(({children:n,variant:u="primary",size:p="large",className:v,block:x=!1,icon:s,fixedIcon:r,suffixIcon:o,type:y="button",...c},B)=>{const i=s==="default"?a(l,{variant:u}):s,d=r==="default"?a(l,{variant:u}):r,f=o==="default"?a(l,{variant:u}):o,A=N({[e.button]:!0,[e[u]]:!0,[e[p]]:!0,[e.block]:x,[e.disabled]:!!c.disabled},v);return m("button",{type:y,className:A,ref:B,...c,children:[d&&a("span",{className:e.fixedIcon,children:d}),m("span",{className:e.label,children:[i&&a("span",{className:e.icon,children:i}),n,f&&a("span",{className:e.suffixIcon,children:f})]})]})});t.displayName="Button";try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"ボタンの種類",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'},{value:'"text"'},{value:'"secondary"'},{value:'"accent"'},{value:'"textAlert"'},{value:'"authGoogle"'},{value:'"authLINE"'},{value:'"authApple"'}]}},size:{defaultValue:{value:"large"},description:"種類",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},block:{defaultValue:{value:"false"},description:"横幅を100%占有するかどうか",name:"block",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"ReactNode"}},fixedIcon:{defaultValue:null,description:"Fixedアイコン",name:"fixedIcon",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"後方配置のアイコン",name:"suffixIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}export{t as B};
//# sourceMappingURL=Button-4449d7d2.js.map
