import{j as e}from"./jsx-runtime-69eee039.js";import{r as F}from"./index-7c191284.js";import{R as E}from"./RequiredLabel-0530a236.js";import{F as _}from"./Flex-213aa947.js";import{c as p}from"./clsx-1229b3e0.js";const f="_block_1qbpu_1",A="_radio_1qbpu_5",C="_label_1qbpu_10",D="_checked_1qbpu_31",o={block:f,radio:A,label:C,checked:D},s=F.forwardRef(({name:u,value:n,checked:r,children:a,className:d,block:t=!1,...l},i)=>e.jsxs("label",{className:p(o.label,t&&o.block,r&&o.checked),children:[e.jsx("input",{type:"radio",name:u,value:n,checked:r,className:p(d,o.radio),ref:i,...l}),a]}));s.displayName="RadioCard";try{s.displayName="RadioCard",s.__docgenInfo={description:`アクセシビリティに配慮したラジオボタン。
選択した後自動で遷移しないタイプのラジオボタン（選択してもなにもおきないボタン）に使用`,displayName:"RadioCard",props:{name:{defaultValue:null,description:"グループ化（排他制御）したい要素には同じ名前をつける",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"選択時のコールバックで渡される値",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"ラベルに表示されるテキストまたは要素",name:"children",required:!0,type:{name:"ReactNode"}},block:{defaultValue:{value:"false"},description:"横幅を100%占有するかどうか",name:"block",required:!1,type:{name:"boolean"}}}}}catch{}const b="_wrapper_a1vmf_1",y="_legend_a1vmf_7",m={wrapper:b,legend:y},c=F.forwardRef(({children:u,label:n,showRequiredLabel:r=!1,direction:a="column",...d},t)=>{const l=u.some(B=>B.type===s),i=a==="row"||l&&a==="column";return e.jsxs("fieldset",{className:m.wrapper,ref:t,...d,children:[e.jsxs("legend",{className:m.legend,children:[n,r&&e.jsx(E,{})]}),e.jsx(_,{spacing:l?"sm":"md",alignItems:i?"normal":void 0,direction:a,children:u})]})});c.displayName="RadioGroup";try{c.displayName="RadioGroup",c.__docgenInfo={description:"",displayName:"RadioGroup",props:{label:{defaultValue:null,description:"ラジオグループの見出し（legend要素）",name:"label",required:!0,type:{name:"string"}},showRequiredLabel:{defaultValue:{value:"false"},description:`必須マークを表示するか
注意: trueとしてもinput要素のrequired属性は付与されません`,name:"showRequiredLabel",required:!1,type:{name:"boolean"}},direction:{defaultValue:{value:"column"},description:"ラジオボタンの配置方向",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}}}catch{}export{c as R,s as a};