import{j as n}from"./jsx-runtime-BJwPuJt0.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as a}from"./index-DX35FyXq.js";import{g as W,p as j,m as N,w}from"./style-D1Pgu1yr.js";const M="_stack_o58p7_1",I={stack:M},p=({as:u="div",children:m,className:t,spacing:e,gap:l,alignItems:v="stretch",justifyContent:i="flex-start",p:r,px:d,py:E,pt:B,pr:c,pb:A,pl:o,m:F,mx:f,my:C,mt:g,mr:D,mb:y,ml:V,width:S,minWidth:q,maxWidth:k,...T})=>{const h=(x,s)=>a.isValidElement(u)?a.cloneElement(u,u.props,n.jsx("div",{...x,children:s})):n.jsx(u,{...x,children:s}),_=a.useMemo(()=>l??e??void 0,[l,e]);return h({className:b(t,I.stack),style:{alignItems:`${v}`,justifyContent:`${i}`,...W(_),...j({p:r,px:d,py:E,pt:B,pr:c,pb:A,pl:o}),...N({m:F,mx:f,my:C,mt:g,mr:D,mb:y,ml:V}),...w({width:S,minWidth:q,maxWidth:k})},...T},m)};try{p.displayName="Stack",p.__docgenInfo={description:`Stackコンポーネント
一方向に一定のリズムで要素を積み上げるレイアウト`,displayName:"Stack",props:{as:{defaultValue:{value:"div"},description:"レンダリングされるコンポーネントまたはHTML要素",name:"as",required:!1,type:{name:"keyof HTMLElementTagNameMap | ReactElement<ComponentType<FC<PropsWithoutText | PropsWithTextBody>>, string | JSXElementConstructor<...>>"}},alignItems:{defaultValue:{value:"stretch"},description:"水平方向における子要素のレイアウトを定める。",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"stretch"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:{value:"flex-start"},description:`垂直方向における子要素のレイアウトを定める。
@deprecated directionが削除されたため必要なくなりました`,name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"flex-start"'},{value:'"center"'},{value:'"flex-end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},className:{defaultValue:null,description:`CSSのクラス
@deprecated マージンなどをつけたい場合は<Box>を使ってください`,name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"子要素",name:"children",required:!0,type:{name:"ReactNode"}},spacing:{defaultValue:null,description:`子要素の間隔。指定しない場合は0
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},gap:{defaultValue:null,description:`spacingのエイリアス（どちらかしか指定できません）
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"gap",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},m:{defaultValue:null,description:`四方のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"m",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mx:{defaultValue:null,description:`水平方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mx",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},my:{defaultValue:null,description:`垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"my",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"上方向のマージン。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:`右方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`下方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:`左方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"ml",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},p:{defaultValue:null,description:`四方のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"p",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},px:{defaultValue:null,description:`水平方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"px",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},py:{defaultValue:null,description:`垂直方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"py",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pt:{defaultValue:null,description:"上方向のパディング。Spacing Tokenのキーを指定",name:"pt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pr:{defaultValue:null,description:`右方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pb:{defaultValue:null,description:`下方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pl:{defaultValue:null,description:`左方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pl",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},width:{defaultValue:{value:"auto"},description:"幅を指定",name:"width",required:!1,type:{name:"CSSWitdh"}},minWidth:{defaultValue:{value:"auto"},description:"最小幅",name:"minWidth",required:!1,type:{name:"CSSWitdh"}},maxWidth:{defaultValue:{value:"none"},description:"最大幅",name:"maxWidth",required:!1,type:{name:"CSSMaxWidth"}}}}}catch{}export{p as S};
