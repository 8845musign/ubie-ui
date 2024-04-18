import{j as f}from"./jsx-runtime-9c4ae004.js";import{c as d}from"./clsx-1229b3e0.js";const c="_flex_1f77r_1",p="_heightFull_1f77r_9",x="_widthFull_1f77r_13",e={flex:c,heightFull:p,widthFull:x},v=({as:a="div",children:t,direction:n="row",alignItems:r="flex-start",justifyContent:s="flex-start",wrap:i=!1,spacing:l,height:u,width:m})=>{const o=l?`var(--size-spacing-${l})`:"0";return f.jsx(a,{className:d(e.flex,u==="full"&&e.heightFull,m==="full"&&e.widthFull),style:{"--gap":o,"--flex-direction":n,"--align-items":r,"--justify-content":s,"--flex-wrap":i?"wrap":"nowrap"},children:t})};v.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{as:{required:!1,tsType:{name:"HTMLElementTagNameMap"},description:`レンダリングされるHTML要素
@default div`,defaultValue:{value:"'div'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"子要素同士の間隔"},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:`direction 重ねる向き
@default row`,defaultValue:{value:"'row'",computed:!1}},alignItems:{required:!1,tsType:{name:"union",raw:"'normal' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:"主軸方向における子要素のレイアウトを定める。`direction` prop が `column` の場合は水平軸、 `row` の場合は垂直軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと\n@default flex-start",defaultValue:{value:"'flex-start'",computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:`| 'normal'
| 'flex-start'
| 'center'
| 'flex-end'
| 'space-between'
| 'space-around'
| 'space-evenly'`,elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"交差軸方向における子要素のレイアウトを定める。directionが `column` の場合は垂軸直、`row` の場合は水平軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと\n@default flex-start",defaultValue:{value:"'flex-start'",computed:!1}},wrap:{required:!1,tsType:{name:"boolean"},description:`折り返しの有無
@default false`,defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"literal",value:"'full'"},description:"親要素に対し、100%としたい場合に使用"},width:{required:!1,tsType:{name:"literal",value:"'full'"},description:"デフォルトで<Flex>は横幅いっぱいを専有する。しかし例えば、フレックスコンテナの子要素として配置した場合、横幅が自身の子に合わせて小さくなる。これが不都合の場合に100%とする事が可能"}}};export{v as F};
