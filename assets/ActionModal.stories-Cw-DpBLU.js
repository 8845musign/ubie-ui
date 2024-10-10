import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{r as o}from"./index-DX35FyXq.js";import{c as i}from"./clsx-B-dksMZM.js";import{u as ge,X as Ae,P as he,$ as Ce,V as Fe,j as be}from"./VisuallyHidden-DKw5kirp.js";import{o as Be}from"./style-D1Pgu1yr.js";import{B as O}from"./Button-T3RLXqeu.js";import"./index-I0DSigrg.js";import"./component-Jol18N2F.js";import"./VariantIcon-osO-qEpN.js";const xe="_modal_1ff9g_1",Ee="_overlay_1ff9g_10",ve="_normalOverlay_1ff9g_15",Oe="_darkerOverlay_1ff9g_19",_e="_dialog_1ff9g_23",ke="_fixedHeight_1ff9g_37",je="_scrollContainer_1ff9g_41",De="_mainContent_1ff9g_46",Le="_headerLess_1ff9g_56",Me="_header_1ff9g_56",Se="_sticky_1ff9g_73",Ie="_canScroll_1ff9g_78",He="_body_1ff9g_82",Pe="_buttonContainer_1ff9g_93",Ve="_panelEnter_1ff9g_109",we="_panelEnterFrom_1ff9g_115",qe="_panelEnterTo_1ff9g_119",Ne="_panelLeave_1ff9g_123",Te="_panelLeaveFrom_1ff9g_128",Re="_panelLeaveTo_1ff9g_132",t={modal:xe,overlay:Ee,normalOverlay:ve,darkerOverlay:Oe,dialog:_e,fixedHeight:ke,scrollContainer:je,mainContent:De,headerLess:Le,header:Me,sticky:Se,canScroll:Ie,body:He,buttonContainer:Pe,panelEnter:Ve,panelEnterFrom:we,panelEnterTo:qe,panelLeave:Ne,panelLeaveFrom:Te,panelLeaveTo:Re},r=({children:u,onClose:a,onPrimaryAction:n,onSecondaryAction:c,header:l,primaryActionLabel:_,secondaryActionLabel:k,primaryActionColor:te,closeLabel:ue="閉じる",overlayOpacity:ae="normal",fixedHeight:E=!1,showClose:oe=!0,open:re=!0,isStatic:se=!1,ariaLabelledby:d,hero:m,stickyHeader:le=!1,stickyFooter:ie=!1,...ce})=>{const de=Be(ae),v=o.useRef(null),pe=o.useCallback(f=>{f!==null&&l==null&&d!=null?f.setAttribute("aria-labelledby",d):f!==null&&l==null&&d==null&&f.removeAttribute("aria-labelledby")},[d,l]),{scrollContainerRef:me,canScrollUp:fe,canScrollDown:ye}=ge();return e.jsx(Ae,{show:re,as:o.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:e.jsxs(he,{ref:pe,static:se,onClose:a,className:t.modal,"aria-labelledby":d,initialFocus:v,...ce,children:[e.jsx("div",{className:i(t.overlay,t[de])}),e.jsxs(Ce,{className:i(t.dialog,{[t.fixedHeight]:E}),children:[l===void 0?e.jsx(Fe,{as:"p",tabIndex:-1,ref:v,children:"ダイアログ"}):null,e.jsx("div",{className:t.scrollContainer,ref:me,children:e.jsxs("div",{className:i(t.mainContent,{[t.headerLess]:l===void 0&&m===void 0,[t.fixedHeight]:E}),children:[m!==void 0?e.jsx("div",{className:t.hero,children:m}):null,l!==void 0?e.jsx(be,{tabIndex:-1,ref:v,className:i(t.header,!m&&le&&t.sticky,fe&&t.canScroll),children:l}):null,e.jsx("div",{className:i(t.body,{[t.fixedHeight]:E}),children:u}),e.jsxs("div",{className:i(t.buttonContainer,ie&&t.sticky,ye&&t.canScroll),children:[n&&_&&e.jsx(O,{block:!0,onClick:n,variant:te,children:_}),c&&k&&e.jsx(O,{block:!0,variant:"secondary",onClick:c,children:k}),oe&&e.jsx(O,{variant:"text",onClick:a,children:ue})]})]})})]})]})})};try{r.displayName="ActionModal",r.__docgenInfo={description:"",displayName:"ActionModal",props:{children:{defaultValue:null,description:"コンテンツとして表示する内容",name:"children",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const Ye={title:"Modal/ActionModal",component:r},s={header:"モーダル",overlayOpacity:"normal",primaryActionLabel:"回答結果を見る",fixedHeight:!1,isStatic:!1,stickyHeader:!1,stickyFooter:!1},p=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{margin:0},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{style:{margin:"12px 0 0"},children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),y={render:u=>{const[a,n]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx(p,{})})]})},args:s},g={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),secondaryActionLabel:"このまま回答を続ける",onSecondaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx(p,{})})]})},args:s},A={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:[e.jsx("p",{children:"contents"}),e.jsx("p",{children:"contents"}),e.jsx("p",{children:"contents"}),e.jsx("p",{children:"contents"}),e.jsx("p",{children:"contents"}),e.jsx("p",{children:"contents"}),e.jsx("p",{children:"contents"})]})]})},args:{...s,fixedHeight:!0}},h={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Customized"})})]})},args:{...s,header:"削除します",primaryActionColor:"alert",overlayOpacity:"darker",closeLabel:"キャンセル"}},C={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,"data-test-id":"some-id"}},F={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx(p,{})})]})},args:{...s,id:"dialog-id"}},b={render:u=>{const[a,n]=o.useState(!1),c="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),ariaLabelledby:c,children:[e.jsx("h2",{id:c,style:{margin:"0 0 12px"},children:"Custom Heading"}),e.jsx(p,{})]})]})},args:{...s,header:void 0}},B={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{style:{margin:0},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})]})},args:{...s}},x={render:u=>{const[a,n]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx(p,{})})]})},args:{...s,stickyHeader:!0,stickyFooter:!0}};var j,D,L;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <LongBody />
        </ActionModal>
      </>;
  },
  args: defaultArgs
}`,...(L=(D=y.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,S,I;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} secondaryActionLabel={'このまま回答を続ける'} onSecondaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <LongBody />
        </ActionModal>
      </>;
  },
  args: defaultArgs
}`,...(I=(S=g.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var H,P,V;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
          <p>contents</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    fixedHeight: true
  }
}`,...(V=(P=A.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var w,q,N;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Customized</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: '削除します',
    primaryActionColor: 'alert',
    overlayOpacity: 'darker',
    closeLabel: 'キャンセル'
  }
}`,...(N=(q=h.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var T,R,z;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Default</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    [\`data-test-id\`]: 'some-id'
  }
}`,...(z=(R=C.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var W,X,$;F.parameters={...F.parameters,docs:{...(W=F.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <LongBody />
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    id: 'dialog-id'
  }
}`,...($=(X=F.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var G,U,J;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)} ariaLabelledby={headerId}>
          <h2 id={headerId} style={{
          margin: '0 0 12px'
        }}>
            Custom Heading
          </h2>
          <LongBody />
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(J=(U=b.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Q,Y;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal hero={<img src="/images/placeholder.svg" alt="Illustration: Modal" style={{
        width: '100%',
        height: 'auto',
        verticalAlign: 'bottom'
      }} width={560} height={315} />} {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p style={{
          margin: 0
        }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs
  }
}`,...(Y=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <LongBody />
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    stickyHeader: true,
    stickyFooter: true
  }
}`,...(ne=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Ze=["Default","Secondary","FixedHeight","Customized","CustomDataAttribute","WithId","CustomHeader","WithHero","StickyHeaderAndFooter"];export{C as CustomDataAttribute,b as CustomHeader,h as Customized,y as Default,A as FixedHeight,g as Secondary,x as StickyHeaderAndFooter,B as WithHero,F as WithId,Ze as __namedExportsOrder,Ye as default};
