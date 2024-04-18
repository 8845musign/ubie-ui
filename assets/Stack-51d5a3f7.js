import{j as s}from"./jsx-runtime-9c4ae004.js";import{c as i}from"./clsx-1229b3e0.js";const m="_stack_elkfr_1",u={stack:m},c=({as:e="div",children:a,className:l,spacing:t,alignItems:n="flex-start",justifyContent:r="flex-start"})=>s.jsx(e,{style:{alignItems:`${n}`,justifyContent:`${r}`,gap:`var(--size-spacing-${t})`},className:i(l,u.stack),children:a});c.__docgenInfo={description:`Stackコンポーネント
一方向に一定のリズムで要素を積み上げるレイアウト`,methods:[],displayName:"Stack",props:{as:{required:!1,tsType:{name:"HTMLElementTagNameMap"},description:`レンダリングされるコンポーネントまたはHTML要素
@default div`,defaultValue:{value:"'div'",computed:!1}},spacing:{required:!0,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"子要素の間隔"},alignItems:{required:!1,tsType:{name:"union",raw:"'normal' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:"主軸方向における子要素のレイアウトを定める。`direction` prop が `column` の場合は水平軸、 `row` の場合は垂直軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと\n@default flex-start",defaultValue:{value:"'flex-start'",computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:`| 'normal'
| 'flex-start'
| 'center'
| 'flex-end'
| 'space-between'
| 'space-around'
| 'space-evenly'`,elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"交差軸方向における子要素のレイアウトを定める。directionが `column` の場合は垂軸直、`row` の場合は水平軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと\n@default flex-start",defaultValue:{value:"'flex-start'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSSのクラス"},children:{required:!0,tsType:{name:"ReactNode"},description:"子要素"}}};export{c as S};
