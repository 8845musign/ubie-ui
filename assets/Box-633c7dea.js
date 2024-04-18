import{j as p}from"./jsx-runtime-9c4ae004.js";import{c as k}from"./clsx-1229b3e0.js";import{p as y,m as b,r as _}from"./style-6e220354.js";const T="_box_1s6x3_1",h="_backgroundColorPrimary_1s6x3_9",f="_backgroundColorPrimaryDarken_1s6x3_13",C="_backgroundColorAccent_1s6x3_17",w="_backgroundColorAccentDarken_1s6x3_21",q="_backgroundColorAlert_1s6x3_25",P="_backgroundColorGray_1s6x3_29",A="_backgroundColorWhite_1s6x3_33",D="_borderGray_1s6x3_37",G="_borderGrayThick_1s6x3_41",S="_borderPrimary_1s6x3_45",F="_borderPrimaryThick_1s6x3_49",V="_widthFull_1s6x3_53",a={box:T,backgroundColorPrimary:h,backgroundColorPrimaryDarken:f,backgroundColorAccent:C,backgroundColorAccentDarken:w,backgroundColorAlert:q,backgroundColorGray:P,backgroundColorWhite:A,borderGray:D,borderGrayThick:G,borderPrimary:S,borderPrimaryThick:F,widthFull:V},n=e=>e.charAt(0).toUpperCase()+e.slice(1),j=({as:e="div",children:i,pt:t,pr:m,pb:s,pl:o,mt:u,mr:x,mb:d,ml:c,radius:v,backgroundColor:l,border:r,width:g})=>p.jsx(e,{className:k([a.box,l&&a[`backgroundColor${n(l)}`],r&&a[`border${n(r)}`],g&&a.widthFull]),style:{...y({pt:t,pr:m,pb:s,pl:o}),...b({mt:u,mr:x,mb:d,ml:c}),..._(v)},children:i});j.__docgenInfo={description:"",methods:[],displayName:"Box",props:{as:{required:!1,tsType:{name:"HTMLElementTagNameMap"},description:`レンダリングされるHTML要素
@default div`,defaultValue:{value:"'div'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'primaryDarken' | 'accent' | 'accentDarken' | 'alert' | 'gray' | 'white'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'primaryDarken'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'accentDarken'"},{name:"literal",value:"'alert'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'white'"}]},description:"背景色"},border:{required:!1,tsType:{name:"union",raw:"'gray' | 'grayThick' | 'primary' | 'primaryThick'",elements:[{name:"literal",value:"'gray'"},{name:"literal",value:"'grayThick'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'primaryThick'"}]},description:"ボーダーの種類"},width:{required:!1,tsType:{name:"literal",value:"'full'"},description:"幅を指定。他のスタイルの影響を受け、幅が100%とならない場合にのみ使用"},pt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-topの値。Spacing Tokenのキーを指定"},pr:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-rightの値。Spacing Tokenのキーを指定"},pb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-bottomの値。Spacing Tokenのキーを指定"},pl:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-leftの値。Spacing Tokenのキーを指定"},mt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-topの値。Spacing Tokenのキーを指定"},mr:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-rightの値。Spacing Tokenのキーを指定"},mb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-bottomの値。Spacing Tokenのキーを指定"},ml:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-leftの値。Spacing Tokenのキーを指定"},radius:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"角丸を指定。Radius Tokenのキーを指定"}}};export{j as B};
