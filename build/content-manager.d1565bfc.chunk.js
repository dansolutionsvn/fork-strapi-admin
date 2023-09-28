(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[994],{30258:function(ua,Mt,f){"use strict";f.r(Mt),f.d(Mt,{App:function(){return da},default:function(){return mp}});var t=f(32735),Yt=f(74758),ie=f(53038),h=f(43383),xe=f(27649),Fe=f(82055),Dt=f(96709),Q=f(67879),ma=f(98978),Ar=f.n(ma),Ke=f(83983),v=e=>`content-manager.${e}`,ze=f(74506),Te=f(60216),n=f.n(Te),Or=(0,t.createContext)();function Xt({attributes:e,buttonData:r,children:o,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:u,relationsLayout:d,removeField:m,selectedItemName:g,setEditFieldToSelect:p,...y}){return t.createElement(Or.Provider,{value:{attributes:e,buttonData:r,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:u,relationsLayout:d,removeField:m,selectedItemName:g,setEditFieldToSelect:p,...y}},o)}Xt.defaultProps={attributes:{},buttonData:[],goTo(){},layout:[],metadatas:{},moveItem(){},moveRow(){},onAddData(){},relationsLayout:[],removeField(){},selectedItemName:null,setEditFieldToSelect(){}},Xt.propTypes={attributes:n().object,buttonData:n().array,children:n().node.isRequired,goTo:n().func,layout:n().array,metadatas:n().object,moveItem:n().func,moveRow:n().func,onAddData:n().func,relationsLayout:n().array,removeField:n().func,selectedItemName:n().string,setEditFieldToSelect:n().func};var $r=Xt,Ce={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"},q=f(8471),w=f(87933),G=f(49372),$e=f(47081),Ye=f(68625),kt=f(35331),Zr=e=>e.length>20?`${e.substring(0,20)}...`:e;const Jt=(0,q.ZP)(w.k)`
  height: ${({theme:e})=>e.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:e})=>e.spaces[3]};
  }
`,qr=(0,q.ZP)(Jt)`
  padding: 0 ${({theme:e})=>e.spaces[3]};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,pa=(0,q.ZP)(w.k)`
  display: inline-flex;
  max-height: ${32/16}rem;
  opacity: ${({transparent:e})=>e?0:1};
  background-color: ${({theme:e,isSibling:r})=>r?e.colors.neutral100:e.colors.primary100};
  border: 1px solid
    ${({theme:e,isSibling:r})=>r?e.colors.neutral150:e.colors.primary200};

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:e,isSibling:r})=>r?void 0:e.colors.primary600};
    }
  }

  ${G.Z} {
    color: ${({theme:e,isSibling:r})=>r?void 0:e.colors.primary600};
  }

  ${qr} {
    border-right: 1px solid
      ${({theme:e,isSibling:r})=>r?e.colors.neutral150:e.colors.primary200};
  }
`,_t=({labelField:e,transparent:r,isSibling:o})=>{const s=Zr(e);return t.createElement(pa,{hasRadius:!0,justifyContent:"space-between",transparent:r,isSibling:o},t.createElement(w.k,{gap:3},t.createElement(qr,{alignItems:"center"},t.createElement($e.Z,null)),t.createElement(G.Z,{fontWeight:"bold"},s)),t.createElement(w.k,{paddingLeft:3},t.createElement(Jt,{alignItems:"center"},t.createElement(Ye.Z,null)),t.createElement(Jt,{alignItems:"center"},t.createElement(kt.Z,null))))};_t.defaultProps={isSibling:!1,transparent:!1},_t.propTypes={isSibling:n().bool,labelField:n().string.isRequired,transparent:n().bool};var en=_t,S=f(72850),ge=f(50563),ga=f(16899),Se=f(4038);const fa=(0,q.ZP)(S.x)`
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ha=(0,q.ZP)(S.x)`
  height: ${32/16}rem;
  width: ${32/16}rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: ${6/16}rem;
    width: ${11/16}rem;
    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }
`,ya=q.ZP.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`,Nr=({displayedValue:e})=>t.createElement(fa,{paddingLeft:3,paddingRight:3,paddingTop:3,paddingBottom:3,hasRadius:!0,background:"neutral0",width:(0,h.Q1)(300)},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(ya,{type:"button"},t.createElement(w.k,null,t.createElement(ha,{background:"neutral200"},t.createElement(ga.Z,null)),t.createElement(w.k,{gap:2,paddingLeft:6,maxWidth:(0,h.Q1)(150)},t.createElement(G.Z,{textColor:"neutral700",ellipsis:!0},e)))),t.createElement(S.x,{paddingLeft:3},t.createElement(w.k,null,t.createElement(ge.h,{noBorder:!0},t.createElement(Se.Z,null)),t.createElement(S.x,{paddingLeft:2},t.createElement(ge.h,{noBorder:!0},t.createElement($e.Z,null)))))));Nr.propTypes={displayedValue:n().string.isRequired};var jr=Nr,tn=f(41234),Br=f(99140),ba=f(99381),Me=f.n(ba),It=(e,r,o)=>{if(Array.isArray(e)&&r>=0&&o>=0&&r<=e.length-1&&o<=e.length-1){const s=Me()(e),a=s.splice(r,1);return s.splice(o,0,a[0]),s}return e},Ea=f(59578),Wr=f.n(Ea),zr=e=>{const r=e.type;return r==="relation"?!Wr()(e.relationType).includes("morph"):!["json","dynamiczone","richtext","password"].includes(r)&&!!r};const Ca=(e,r)=>{typeof e=="function"?e(r):e!=null&&(e.current=r)},Lt=(...e)=>r=>e.forEach(o=>Ca(o,r));var va=f(33795),I=f.n(va);const Vr=(e,r)=>Object.keys(e).reduce((o,s)=>{const a=I()(e,[s],{}),{default:l,component:i,type:c,required:u,min:d,repeatable:m}=a;if(l!==void 0&&(o[s]=l),c==="component"){const g=r?.[i]?.attributes??{},p=Vr(g,r);if(u===!0&&(o[s]=m===!0?[]:p),d&&m===!0&&u){o[s]=[];for(let y=0;y<d;y+=1)o[s].push(p)}}return c==="dynamiczone"&&u===!0&&(o[s]=[]),o},{});var xt=Vr,Ra=f(9086),Ur=f.n(Ra),Pt=({layouts:e,metadatas:r,...o})=>{const s=e.list.map(i=>i.name?i.name:i),a=Object.keys(r).reduce((i,c)=>{const u=I()(r,[c],{});let d=u.edit;return d.mainField&&(d={...d,mainField:u.edit.mainField.name}),{...i,[c]:{edit:d,list:Ur()(u.list,["mainField"])}}},{}),l=e.edit.map(i=>i.map(({name:c,size:u})=>({name:c,size:u})));return{...o,layouts:{edit:l,list:s},metadatas:a}};const Ta=(e,r)=>e.map(o=>({...o,subject:r}));var Hr=e=>{const r={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(r).reduce((o,s)=>(o[s]=Ta(r[s],e),o),{})},Ma=f(95919),Gr=f.n(Ma),Qr=e=>e.split(".").filter(r=>Gr()(parseInt(r,10))),nn=e=>{if(e.length===0)return-1;const r=Math.max.apply(Math,e.map(o=>o.__temp_key__??0));return Number.isNaN(r)?-1:r},de=e=>`/content-manager/${e}`,Da=f(3040),J=f.n(Da),Kr=(e,r,o)=>{const s=c=>r.find(u=>u.uid===c),a=Object.assign({},e),l=e[o].uid,i=s(l);return J()(a,[o],{...e[o],...i}),Object.keys(e.components).forEach(c=>{const u=s(c);J()(a,["components",c],{...e.components[c],...u})}),a},Yr=(e,r,o)=>{const s=(a,l)=>Object.keys(a).reduce((i,c)=>{const u=(0,h.UN)(l,c),d=I()(a,c),m=(0,h.k2)(l,[c,"component"]),g=(0,h.k2)(l,[c,"repeatable"]);return u==="dynamiczone"?(i[c]=d.map(p=>s(p,o[p.__component])),i):u==="component"?(g?i[c]=d&&d.map(p=>s(p,o[m])):i[c]=d&&s(d,o[m]),i):(u!=="password"&&(i[c]=d),i)},{});return s(e,r)};const Ve={DRAFT:"draft",PUBLISHED:"published"},rn=5,ka=10;var ct=f(51968);const Ia=(e,r,{onCancel:o,onDropItem:s,onGrabItem:a,onMoveItem:l})=>{const[i,c]=(0,t.useState)(!1),u=p=>{i&&(p==="UP"?l(r-1,r):p==="DOWN"&&l(r+1,r))},d=()=>{i?(s&&s(r),c(!1)):(a&&a(r),c(!0))},m=()=>{i&&(c(!1),o&&o(r))};return p=>{if(e&&!(p.key==="Tab"&&!i))switch(p.preventDefault(),p.key){case" ":case"Enter":d();break;case"Escape":m();break;case"ArrowDown":case"ArrowRight":u("DOWN");break;case"ArrowUp":case"ArrowLeft":u("UP");break;default:}}},on=(e,{type:r="STRAPI_DND",index:o,item:s={},onStart:a,onEnd:l,onGrabItem:i,onDropItem:c,onCancel:u,onMoveItem:d,dropSensitivity:m="regular"})=>{const g=(0,t.useRef)(null),[{handlerId:p},y]=(0,ze.useDrop)({accept:r,collect(E){return{handlerId:E.getHandlerId()}},hover(E,P){if(!g.current)return;const F=E.index,T=o;if(F!==T){if(m==="regular"){const D=g.current.getBoundingClientRect(),x=(D.bottom-D.top)/2,z=P.getClientOffset().y-D.top;if(F<T&&z<x||F>T&&z>x)return}d(T,F),E.index=T}}}),[{isDragging:b},C,k]=(0,ze.useDrag)({type:r,item(){a&&a();const{width:E}=g.current?.getBoundingClientRect()??{};return{index:o,width:E,...s}},end(){l&&l()},canDrag:e,isDragging:s.id?E=>s.id===E.getItem().id:void 0,collect:E=>({isDragging:E.isDragging()})}),M=Ia(e,o,{onGrabItem:i,onDropItem:c,onCancel:u,onMoveItem:d});return[{handlerId:p,isDragging:b,handleKeyDown:M},g,y,C,k]},wt=50,Xe=4,Xr=(0,q.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`,Jr=(0,q.ZP)(w.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`,sn=({ariaDescribedBy:e,children:r,displayValue:o,canDrag:s,disabled:a,endAction:l,iconButtonAriaLabel:i,style:c,id:u,index:d,name:m,onCancel:g,onDropItem:p,onGrabItem:y,status:b,updatePositionOfRelation:C,...k})=>{const[{handlerId:M,isDragging:E,handleKeyDown:P},F,T,D,x]=on(s&&!a,{type:`${Ce.RELATION}_${m}`,index:d,item:{displayedValue:o,status:b,id:u},onGrabItem:y,onDropItem:p,onCancel:g,onMoveItem:C,dropSensitivity:"immediate"}),N=Lt(F,D);return(0,t.useEffect)(()=>{x((0,ct.rX)())},[x]),t.createElement(S.x,{style:c,as:"li",ref:T,"aria-describedby":e,cursor:s?"all-scroll":"default"},E?t.createElement(La,null):t.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:s?2:4,paddingRight:4,hasRadius:!0,borderSize:1,borderColor:"neutral200",background:a?"neutral150":"neutral0",justifyContent:"space-between",ref:s?N:void 0,"data-handler-id":M,...k},t.createElement(Xr,{gap:1},s?t.createElement(ge.h,{forwardedAs:"div",role:"button",tabIndex:0,"aria-label":i,noBorder:!0,onKeyDown:P,disabled:a},t.createElement($e.Z,null)):null,t.createElement(Jr,{justifyContent:"space-between"},r)),l&&t.createElement(S.x,{paddingLeft:4},l)))},La=()=>t.createElement(S.x,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",background:"primary100",height:`calc(100% - ${Xe}px)`});sn.defaultProps={ariaDescribedBy:"",canDrag:!1,displayValue:"",disabled:!1,endAction:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,style:void 0,status:void 0,updatePositionOfRelation:void 0},sn.propTypes={ariaDescribedBy:n().string,canDrag:n().bool,children:n().node.isRequired,displayValue:n().string,disabled:n().bool,endAction:n().node,iconButtonAriaLabel:n().string.isRequired,id:n().number.isRequired,index:n().number.isRequired,name:n().string.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,status:n().string,style:n().shape({height:n().number,left:n().number,position:n().string,right:n().number,width:n().string}),updatePositionOfRelation:n().func};var xa=f(41044),Pa=f(50428),wa=f(87107),Fa=f(28847),_r=f(7563),Je=f(3685),Sa=f(67014),Aa=f(47851),Ft=f(63919),eo=f(44647);const an=({children:e,loadMore:r,search:o,totalNumberOfRelations:s,size:a,...l})=>t.createElement(t.Fragment,null,t.createElement(w.k,{paddingBottom:s>0?3:0,gap:2,justifyContent:"space-between",alignItems:"end",wrap:"wrap"},t.createElement(w.k,{direction:"column",alignItems:"stretch",basis:a<=6?"100%":"70%",gap:1,...l},o),r),e);an.defaultProps={search:void 0,loadMore:void 0,totalNumberOfRelations:0},an.propTypes={children:n().node.isRequired,search:n().node,loadMore:n().node,size:n().number.isRequired,totalNumberOfRelations:n().number};const Oa=(0,q.ZP)(S.x)`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({overflowDirection:e})=>e==="top-bottom"||e==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({overflowDirection:e})=>e==="top-bottom"||e==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`,ln=({children:e,overflow:r,...o})=>t.createElement(Oa,{overflowDirection:r,...o},e);ln.defaultProps={overflow:""},ln.propTypes={children:n().node.isRequired,overflow:n().oneOf(["top-bottom","bottom","top",""])};var $a=f(88994);const Za=q.ZP.div`
  flex-shrink: 0;
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  margin-right: ${({theme:e})=>e.spaces[2]};
  background-color: ${({theme:e,isDraft:r})=>e.colors[r?"secondary600":"success600"]};
  border-radius: 50%;
`,to=e=>{const{formatMessage:r}=(0,Q.Z)(),o=$a.c.Option,{publicationState:s,mainField:a,id:l}=e.data;if(s){const i=s==="draft",c={id:v("components.Select.draft-info-title"),defaultMessage:"State: Draft"},u={id:v("components.Select.publish-info-title"),defaultMessage:"State: Published"},d=r(i?c:u);return t.createElement(o,{...e},t.createElement(w.k,null,t.createElement(Za,{title:d,isDraft:i}),t.createElement(G.Z,{ellipsis:!0},a??l)))}return t.createElement(o,{...e},a??l)};to.propTypes={isFocused:n().bool.isRequired,data:n().shape({id:n().number.isRequired,isDraft:n().bool,mainField:n().string,publicationState:n().oneOfType([n().string,n().bool])}).isRequired};var le=f(15062),no=e=>e["content-manager_editViewLayoutManager"].currentLayout,Ze=()=>{const e=(0,le.v9)(no),r=(0,t.useCallback)(o=>e?.components?.[o]??{},[e]);return{...e,getComponentLayout:r}},ve=f(84306);const ro=(e,r)=>r.find(o=>o.uid===e),qa=(e,r)=>{const o=Na(e,r),s=oo(o.contentType,r),a=ja(o.contentType,o.components);return J()(o,["contentType","layouts","edit"],s),J()(o,["contentType","layouts","list"],a),Object.keys(o.components).forEach(l=>{const i=oo(o.components[l],r);J()(o,["components",l,"layouts","edit"],i)}),o},Na=(e,r)=>{const o=Kr(Me()(e),r,"contentType"),{components:s,contentType:a}=o,l=i=>Object.keys(i.metadatas).reduce((c,u)=>{const d=I()(i,["attributes",u],{});let m=i.metadatas[u];if(d.type==="relation"){const g=ro(d.targetModel,r),p=m.edit.mainField,y={name:p,schema:I()(g,["attributes",p])};m={list:{...m.list,mainField:y},edit:{...m.edit,mainField:y}}}return c[u]=m,c},{});return J()(o,["contentType","metadatas"],l(a)),Object.keys(s).forEach(i=>{const c=s[i],u=l(c);J()(o,["components",i,"metadatas"],u)}),o},oo=(e,r)=>e.layouts.edit.reduce((o,s)=>{const a=s.map(l=>{const i=I()(e,["attributes",l.name],{}),c={...l,fieldSchema:i,metadatas:I()(e,["metadatas",l.name,"edit"],{})};if(i.type==="relation"){const d=ro(i.targetModel,r).pluginOptions||{};J()(c,"targetModelPluginOptions",d),J()(c,"queryInfos",{shouldDisplayRelationLink:Ba(e,l.name,r)})}return c});return o.push(a),o},[]),ja=(e,r)=>e.layouts.list.reduce((s,a)=>{const l=I()(e,["attributes",a],{}),i=I()(e,["metadatas",a,"list"],{}),c=l.type;if(c==="relation")return s.push({key:`__${a}_key__`,name:a,fieldSchema:l,metadatas:i}),s;if(c==="component"){const u=r[l.component],d=u.settings.mainField,m=u.attributes[d];return s.push({key:`__${a}_key__`,name:a,fieldSchema:l,metadatas:{...i,mainField:{...m,name:d}}}),s}return s.push({key:`__${a}_key__`,name:a,fieldSchema:l,metadatas:i}),s},[]),Ba=(e,r,o)=>{const s=I()(e,["attributes",r,"targetModel"],"");return Wa(o).includes(s)},Wa=e=>e.filter(r=>r.isDisplayed).map(({uid:r})=>r);var so=qa,St=f(97889);const za={error:null,isLoading:!0,layout:{},layouts:{}};var Va=(e,r)=>(0,St.ZP)(e,o=>{switch(r.type){case"GET_DATA":{o.isLoading=!0,o.error=null,o.layout={};break}case"GET_DATA_SUCCEEDED":{const s=r.data.contentType.uid;o.layout=r.data,o.layouts[s]=r.data,o.isLoading=!1;break}case"GET_DATA_ERROR":{o.isLoading=!1,o.error=r.error;break}case"SET_LAYOUT_FROM_STATE":{o.error=null,o.layout=e.layouts[r.uid];break}case"UPDATE_LAYOUT":{const s=e.layout;o.layout={...s,contentType:{uid:s.contentType.uid,...r.newLayout.contentType}},o.layouts[s.contentType.uid]={...s,contentType:{uid:s.contentType.uid,...r.newLayout.contentType}};break}default:return o}}),_e=f(98178),Ua=f(34947);const et=()=>e=>e["content-manager_app"]||Ua.E,Zp=()=>createSelector(et(),e=>e),qp=()=>createSelector(et(),e=>e.models),Ha=()=>(0,_e.P1)(et(),e=>({collectionTypeLinks:e.collectionTypeLinks,singleTypeLinks:e.singleTypeLinks})),cn=()=>(0,_e.P1)(et(),({components:e,models:r})=>({schemas:[...e,...r]})),ao=(0,_e.P1)(et(),e=>e.fieldSizes);var Np=null,io=e=>{const[{error:r,isLoading:o,layout:s,layouts:a},l]=(0,t.useReducer)(Va,za),i=(0,t.useMemo)(cn,[]),{schemas:c}=(0,le.v9)(p=>i(p),le.wU),u=(0,t.useRef)(!0),{get:d}=(0,h.kY)(),m=(0,t.useCallback)(async(p,y)=>{if(a[p]){l({type:"SET_LAYOUT_FROM_STATE",uid:p});return}l({type:"GET_DATA"});try{const b=de(`content-types/${p}/configuration`),{data:{data:C}}=await d(b,{cancelToken:y.token});l({type:"GET_DATA_SUCCEEDED",data:so(C,c)})}catch(b){if(ve.Z.isCancel(b))return;u.current&&console.error(b),u.current&&l({type:"GET_DATA_ERROR",error:b})}},[a,c,d]);(0,t.useEffect)(()=>()=>{u.current=!1},[]),(0,t.useEffect)(()=>{const y=ve.Z.CancelToken.source();return m(e,y),()=>{y.cancel("Operation canceled by the user.")}},[e,m]);const g=(0,t.useCallback)(p=>{l({type:"UPDATE_LAYOUT",newLayout:so(p,c)})},[c]);return{error:r,isLoading:o,layout:s,updateLayout:g}},Ga=e=>e["content-manager_app"].collectionTypeLinks,Ae=f(33348),Qa=f(85973),lo=f.n(Qa);const co=(e,r)=>Object.keys(e).reduce((o,s)=>{const a=e[s],l=I()(r,[s],a);return lo()(a)?{...o,[s]:co(a,l)}:(o[s]=l,o)},{});var Ka=(e,r,o)=>{const s=e.find(({to:m})=>m.includes(r));if(!s)return"/";const{to:a,search:l}=s,i=(0,Ae.parse)(l),c=(0,Ae.parse)(o.substring(1)),u=co(i,c);return`${a}?${(0,Ae.stringify)(u,{encode:!1})}`},uo=e=>{const[{rawQuery:r}]=(0,h.Kx)(),o=(0,le.v9)(Ga);return Ka(o,e,r)},Ue=()=>(0,t.useContext)(Or),mo=()=>{const{search:e}=(0,ie.TH)(),r=e?(0,Ae.parse)(e.substring(1)):{};return r.plugins?(0,Ae.stringify)({plugins:r.plugins},{encode:!1}):""},po=f(89334);const Ya=(e,r,o)=>({type:po.m,permissions:e,__meta__:{plugins:r,containerName:o}}),Xa=()=>({type:po.Q}),Ja=e=>e["content-manager_rbacManager"].permissions,_a=e=>e.rbacProvider.collectionTypesRelatedPermissions;var go=(e,r,o="listView")=>{const s=(0,le.v9)(_a),a=(0,le.v9)(Ja),l=(0,le.I0)(),i=s[r];return(0,t.useEffect)(()=>i?(l(Ya(i,e?e.plugins:null,o)),()=>{l(Xa())}):()=>{},[i,l,e,o]),a};const Gp=(0,t.createContext)();var Qp=null;const Kp=()=>useContext(WysiwygContext);var Yp=null;const fo=e=>{const r=(0,t.useRef)();return(0,t.useEffect)(()=>{r.current=e},[e]),r.current},ho=(0,q.ZP)(Pa.r)`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,yo=q.ZP.button`
  svg path {
    fill: ${({theme:e,disabled:r})=>r?e.colors.neutral600:e.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:e,disabled:r})=>!r&&e.colors.neutral600};
  }
`,dn=({canReorder:e,description:r,disabled:o,error:s,iconButtonAriaLabel:a,id:l,name:i,numberOfRelationsToDisplay:c,label:u,labelAction:d,labelLoadMore:m,labelDisconnectRelation:g,listAriaDescription:p,liveText:y,loadingMessage:b,onCancel:C,onDropItem:k,onGrabItem:M,noRelationsMessage:E,onRelationConnect:P,onRelationLoadMore:F,onRelationDisconnect:T,onRelationReorder:D,onSearchNextPage:x,onSearch:N,placeholder:z,publicationStateTranslations:$,required:H,relations:j,searchResults:Y,size:B})=>{const[X,Z]=(0,t.useState)(null),[W,R]=(0,t.useState)(""),A=(0,t.useRef)(),U=(0,t.useRef)(),{data:K}=Y,L=j.data,O=L.length??0,re=(0,t.useMemo)(()=>O>c?Math.min(O,c)*(wt+Xe)+wt/2:Math.min(O,c)*(wt+Xe),[O,c]),ee=!!m&&j.hasNextPage,oe=(0,t.useMemo)(()=>K.flat().filter(Boolean).map(te=>({...te,value:te.id,label:te.mainField})),[K]);(0,t.useEffect)(()=>{if(O<=c)return R("");const te=Ie=>{const Fr=Ie.target.parentNode.scrollHeight,We=Ie.target.scrollHeight-Ie.target.scrollTop;return Ie.target.scrollTop===0?R("bottom"):R(We===Fr?"top":"top-bottom")},pe=U?.current;return!j.isLoading&&L.length>0&&pe&&U.current.addEventListener("scroll",te),()=>{pe&&pe.removeEventListener("scroll",te)}},[j,L,c,O]);const[V,se]=(0,t.useState)(!1),be=(0,t.useRef)(),Oe=(0,t.useRef)([]);(0,t.useEffect)(()=>(oe.length>0&&Oe.current.length===0&&se(te=>(te&&(be.current=setTimeout(()=>{se(!0)},10)),!1)),()=>{Oe.current=oe||[]}),[oe]),(0,t.useEffect)(()=>()=>{be.current&&clearTimeout(be.current)},[]);const Ct=()=>{se(!1)},vt=()=>{se(!0),N()},Rt=(te,pe)=>{D&&te>=0&&te<L.length&&D(pe,te)},Re=fo(L.length),ke=(0,t.useRef)(),Tt=()=>{ke.current="loadMore",F()};(0,t.useEffect)(()=>{ke.current==="onChange"&&L.length!==Re?A.current.scrollToItem(L.length,"end"):ke.current==="loadMore"&&L.length!==Re&&A.current.scrollToItem(0,"start"),ke.current=void 0},[Re,L]);const Be=`${i}-item-instructions`;return t.createElement(wa.g,{error:s,name:i,hint:r,id:l,required:H},t.createElement(an,{totalNumberOfRelations:O,size:B,search:t.createElement(t.Fragment,null,t.createElement(Fa.Q,{action:d},u),t.createElement(h.JV,{menuPosition:"absolute",menuPlacement:"auto",components:{Option:to},options:oe,isDisabled:o,isLoading:Y.isLoading,error:s,inputId:l,isSearchable:!0,isClear:!0,loadingMessage:()=>b,onChange:te=>{Z(null),P(te),ke.current="onChange"},onInputChange:te=>{Z(te),N(te)},onMenuClose:Ct,onMenuOpen:vt,menuIsOpen:V,noOptionsMessage:()=>E,onMenuScrollToBottom:()=>{Y.hasNextPage&&x()},placeholder:z,name:i,value:X})),loadMore:ee&&t.createElement(_r.A,{disabled:j.isLoading||j.isFetchingNextPage,onClick:Tt,loading:j.isLoading||j.isFetchingNextPage,startIcon:t.createElement(eo.Z,null)},m)},L.length>0&&t.createElement(ln,{overflow:W},t.createElement(Je.T,{id:Be},p),t.createElement(Je.T,{"aria-live":"assertive"},y),t.createElement(xa.t7,{height:re,ref:A,outerRef:U,itemCount:O,itemSize:wt+Xe,itemData:{name:i,ariaDescribedBy:Be,canDrag:e,disabled:o,handleCancel:C,handleDropItem:k,handleGrabItem:M,iconButtonAriaLabel:a,labelDisconnectRelation:g,onRelationDisconnect:T,publicationStateTranslations:$,relations:L,updatePositionOfRelation:Rt},itemKey:te=>`${L[te].mainField}_${L[te].id}`,innerElementType:"ol"},un)),(r||s)&&t.createElement(S.x,{paddingTop:2},t.createElement(Sa.J,null),t.createElement(Aa.c,null))))},ei=n().shape({data:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),hasNextPage:n().bool,isFetchingNextPage:n().bool.isRequired,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired}),ti=n().shape({data:n().arrayOf(n().shape({id:n().number.isRequired,href:n().string,mainField:n().oneOfType([n().string,n().number]),publicationState:n().oneOfType([n().string,n().bool])})),hasNextPage:n().bool,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired});dn.defaultProps={canReorder:!1,description:void 0,disabled:!1,error:void 0,labelAction:null,labelLoadMore:null,liveText:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,required:!1,relations:{data:[]},searchResults:{data:[]}},dn.propTypes={error:n().string,canReorder:n().bool,description:n().string,disabled:n().bool,iconButtonAriaLabel:n().string.isRequired,id:n().string.isRequired,label:n().string.isRequired,labelAction:n().element,labelLoadMore:n().string,labelDisconnectRelation:n().string.isRequired,listAriaDescription:n().string.isRequired,liveText:n().string,loadingMessage:n().string.isRequired,name:n().string.isRequired,noRelationsMessage:n().string.isRequired,numberOfRelationsToDisplay:n().number.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,onRelationConnect:n().func.isRequired,onRelationDisconnect:n().func.isRequired,onRelationLoadMore:n().func.isRequired,onRelationReorder:n().func.isRequired,onSearch:n().func.isRequired,onSearchNextPage:n().func.isRequired,placeholder:n().string.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,required:n().bool,searchResults:ti,size:n().number.isRequired,relations:ei};const un=({data:e,index:r,style:o})=>{const{ariaDescribedBy:s,canDrag:a,disabled:l,handleCancel:i,handleDropItem:c,handleGrabItem:u,iconButtonAriaLabel:d,name:m,labelDisconnectRelation:g,onRelationDisconnect:p,publicationStateTranslations:y,relations:b,updatePositionOfRelation:C}=e,{publicationState:k,href:M,mainField:E,id:P}=b[r],F=k==="draft"?"secondary":"success";return t.createElement(sn,{ariaDescribedBy:s,canDrag:a,disabled:l,displayValue:String(E??P),iconButtonAriaLabel:d,id:P,index:r,name:m,endAction:t.createElement(yo,{"data-testid":`remove-relation-${P}`,disabled:l,type:"button",onClick:()=>p(b[r]),"aria-label":g},t.createElement(Br.J,{width:"12px",as:kt.Z})),onCancel:i,onDropItem:c,onGrabItem:u,status:k||void 0,style:{...o,bottom:o.bottom??0+Xe,height:o.height??0-Xe},updatePositionOfRelation:C},t.createElement(S.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},t.createElement(Ft.u,{description:E??`${P}`},M?t.createElement(ho,{to:M},E??P):t.createElement(G.Z,{textColor:l?"neutral600":"primary600",ellipsis:!0},E??P))),k&&t.createElement(tn.q,{variant:F,showBullet:!1,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${F}700`},y[k])))};un.defaultProps={data:{}},un.propTypes={data:n().shape({ariaDescribedBy:n().string.isRequired,canDrag:n().bool.isRequired,disabled:n().bool.isRequired,handleCancel:n().func,handleDropItem:n().func,handleGrabItem:n().func,iconButtonAriaLabel:n().string.isRequired,labelDisconnectRelation:n().string.isRequired,name:n().string.isRequired,onRelationDisconnect:n().func.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,relations:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),updatePositionOfRelation:n().func.isRequired}),index:n().number.isRequired,style:n().object.isRequired};var ni=dn;const bo=({status:e,displayedValue:r,width:o})=>{const{formatMessage:s}=(0,Q.Z)(),a={[Ve.DRAFT]:s({id:v("relation.publicationState.draft"),defaultMessage:"Draft"}),[Ve.PUBLISHED]:s({id:v("relation.publicationState.published"),defaultMessage:"Published"})},l=e===Ve.DRAFT?"secondary":"success";return t.createElement(S.x,{style:{width:o}},t.createElement(w.k,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderSize:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between"},t.createElement(Xr,{gap:1},t.createElement(ge.h,{noBorder:!0},t.createElement($e.Z,null)),t.createElement(Jr,{maxWidth:"100%",justifyContent:"space-between"},t.createElement(S.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},t.createElement(ho,null,t.createElement(G.Z,{textColor:"primary600",ellipsis:!0},r))),e&&t.createElement(tn.q,{variant:l,showBullet:!1,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${l}700`},a[e])))),t.createElement(S.x,{paddingLeft:4},t.createElement(yo,{type:"button"},t.createElement(Br.J,{width:"12px",as:kt.Z})))))};bo.propTypes={status:n().string.isRequired,displayedValue:n().string.isRequired,width:n().number.isRequired};const ri={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};function oi(e,r,o){if(!e||!r)return{display:"none"};const{x:s,y:a}=o,l=`translate(${s}px, ${a}px)`;return{transform:l,WebkitTransform:l}}var si=()=>{const{itemType:e,isDragging:r,item:o,initialOffset:s,currentOffset:a,mouseOffset:l}=(0,ze.useDragLayer)(c=>({item:c.getItem(),itemType:c.getItemType(),initialOffset:c.getInitialSourceClientOffset(),currentOffset:c.getSourceClientOffset(),isDragging:c.isDragging(),mouseOffset:c.getClientOffset()}));if(!r)return null;const[i]=e.split("_");return t.createElement($r,null,t.createElement("div",{style:ri},t.createElement("div",{style:oi(s,a,l),className:"col-md-2"},[Ce.EDIT_FIELD,Ce.FIELD].includes(e)&&t.createElement(en,{labelField:o.labelField}),i===Ce.COMPONENT&&t.createElement(jr,{displayedValue:o.displayedValue}),i===Ce.DYNAMIC_ZONE&&t.createElement(jr,{displayedValue:o.displayedValue}),i===Ce.RELATION&&t.createElement(bo,{displayedValue:o.displayedValue,status:o.status,width:o.width}))))},Eo=(0,t.createContext)(),ai=f(47533),Co=(0,t.createContext)(),At=f(46339),vo=f(4460);const ii=()=>({type:vo.c}),li=(e,r)=>({type:vo.O,layout:e,query:r});var ci=f(8266),qe=f.n(ci),tt=f(17e3),De=f(15335),fe=f(5803),di=f(2669),ui=f(66694),mi=()=>(0,t.useContext)(ui.ux),Ro=e=>{const{getAdminInjectedComponents:r}=mi(),[o,s,a]=e.split(".");return r(o,s,a)};const To=({area:e,...r})=>Ro(e).map(s=>t.createElement(s.Component,{key:s.name,...r}));To.propTypes={area:n().string.isRequired};var Ot=To;function pi(e,r){return o=>{const s=r(o.name);return t.createElement(e,{...o,...s})}}var gi=pi;function fi(e){const{addComponentToDynamicZone:r,createActionAllowedFields:o,isCreatingEntry:s,formErrors:a,modifiedData:l,moveComponentField:i,removeComponentFromDynamicZone:c,readActionAllowedFields:u,updateActionAllowedFields:d}=(0,h.Wq)(),m=(0,t.useMemo)(()=>I()(l,[e],[]).map(y=>({componentUid:y.__component,id:y.id??y.__temp_key__})),[l,e]),g=(0,t.useMemo)(()=>(s?o:d).includes(e),[e,s,o,d]),p=(0,t.useMemo)(()=>(s?[]:u).includes(e),[e,s,u]);return{addComponentToDynamicZone:r,formErrors:a,isCreatingEntry:s,isFieldAllowed:g,isFieldReadable:p,moveComponentField:i,removeComponentFromDynamicZone:c,dynamicDisplayedComponents:m}}var hi=fi,mn=f(83828),pn=f(61762),gn=f(89966),yi=f(61868),bi=f.n(yi);function Ei(e,r){return o=>{const s=r(o);return t.createElement(e,{...o,...s})}}var Ci=Ei,vi=f(88708),dt=f.n(vi);function Ri({isFromDynamicZone:e,name:r}){const{addNonRepeatableComponentToField:o,createActionAllowedFields:s,isCreatingEntry:a,modifiedData:l,removeComponentFromField:i,readActionAllowedFields:c,updateActionAllowedFields:u,formErrors:d}=(0,h.Wq)(),{contentType:m}=Ze(),g=(0,t.useMemo)(()=>{const E=I()(m,["attributes"],{});return Object.keys(E).filter(F=>I()(E,[F,"type"],"")==="dynamiczone")},[m]),p=(0,t.useMemo)(()=>a?s:u,[a,s,u]),y=I()(l,r,null),b=(0,t.useMemo)(()=>Qr(r),[r]),C=(0,t.useMemo)(()=>e&&a||p.filter(F=>F===b[0]).length>0?!0:p.map(F=>F.split(".")).filter(F=>F.length<b.length?!1:dt()(F,b.length).join(".")===b.join(".")).length>0,[e,a,p,b]),k=(0,t.useMemo)(()=>e||g.includes(b[0])?!0:(a?[]:c).map(F=>F.split(".")).filter(F=>F.length<b.length?!1:dt()(F,b.length).join(".")===b.join(".")).length>0,[e,g,b,a,c]),M=(0,t.useMemo)(()=>a||C?!1:k,[C,k,a]);return{addNonRepeatableComponentToField:o,formErrors:d,hasChildrenAllowedFields:C,hasChildrenReadableFields:k,isCreatingEntry:a,isReadOnly:M,removeComponentFromField:i,componentValue:y}}var Ti=Ri;const Mi=(0,q.ZP)(S.x)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,fn=({intlLabel:e,id:r,labelAction:o,name:s,numberOfEntries:a,showNumberOfEntries:l,required:i})=>{const{formatMessage:c}=(0,Q.Z)(),u=e?.id?c(e):s;return t.createElement(S.x,{paddingBottom:1},t.createElement(w.k,null,t.createElement(G.Z,{textColor:"neutral800",htmlFor:r||s,variant:"pi",fontWeight:"bold",as:"label"},u,l&&t.createElement(t.Fragment,null,"\xA0(",a,")"),i&&t.createElement(G.Z,{textColor:"danger600"},"*")),o&&t.createElement(Mi,{paddingLeft:1},o)))};fn.defaultProps={id:void 0,labelAction:void 0,numberOfEntries:0,required:!1,showNumberOfEntries:!1},fn.propTypes={id:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,numberOfEntries:n().number,required:n().bool,showNumberOfEntries:n().bool};var Di=fn,Mo=f(86308);const ki=q.ZP.span`
  > svg {
    width: ${(0,h.Q1)(24)};
    height: ${(0,h.Q1)(24)};
    > circle {
      fill: ${({theme:e})=>e.colors.primary200};
    }
    > path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,hn=({error:e,isReadOnly:r,onClick:o})=>{const{formatMessage:s}=(0,Q.Z)();return t.createElement(t.Fragment,null,t.createElement(S.x,{as:"button",background:"neutral100",borderColor:e?"danger600":"neutral200",disabled:r,hasRadius:!0,onClick:o,paddingTop:9,paddingBottom:9,type:"button"},t.createElement(w.k,{direction:"column",gap:2},t.createElement(w.k,{justifyContent:"center",style:{cursor:r?"not-allowed":"inherit"}},t.createElement(ki,null,t.createElement(Mo.Z,null))),t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{textColor:"primary600",variant:"pi",fontWeight:"bold"},s({id:v("components.empty-repeatable"),defaultMessage:"No entry yet. Click on the button below to add one."}))))),e?.id&&t.createElement(G.Z,{textColor:"danger600",variant:"pi"},s(e,{...e.values})))};hn.defaultProps={error:void 0,isReadOnly:!1},hn.propTypes={error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),isReadOnly:n().bool,onClick:n().func.isRequired};var Do=hn,Ii=f(87702),yn=f.n(Ii),ng=f(27217),Li=f(88591),xi=f.n(Li),bn=f(59845),Pi=f(20871),wi=f.n(Pi),Fi=f(48375),ko=f.n(Fi),Si=f(31089),Ai=f.n(Si),Oi=f(16043),$i=f.n(Oi),Zi=f(5109),qi=f.n(Zi),Ni=f(47955),ji=f.n(Ni),Bi=f(95706),Wi=f.n(Bi),zi=f(6658),Vi=f.n(zi),Ui=f(36407),Hi=f.n(Ui);(async()=>{await f.e(7347).then(f.bind(f,74194))})();const nt=new(xi())({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(e,r){if(r&&r!=="auto"&&(0,bn.getLanguage)(r))return'<pre class="hljs language-'+nt.utils.escapeHtml(r.toLowerCase())+'"><code>'+(0,bn.highlight)(r,e,!0).value+"</code></pre>";if(r==="auto"){const o=(0,bn.highlightAuto)(e);return'<pre class="hljs language-'+nt.utils.escapeHtml(o.language)+'"><code>'+o.value+"</code></pre>"}return'<pre class="hljs"><code>'+nt.utils.escapeHtml(e)+"</code></pre>"}}).use(wi()).use(ko(),"warning").use(ko(),"tip").use(Ai()).use($i()).use(qi()).use(ji()).use(Wi()).use(Vi()).use(Hi());nt.renderer.rules.footnote_ref=(e,r,o,s,a)=>'<sup class="footnote-ref"><span>'+a.rules.footnote_caption(e,r,o,s,a)+"</span></sup>",nt.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">\u21A9\uFE0E</span>';var Gi=nt,Qi=f(13993),Io=f.n(Qi);const Ki={...Io().defaults,allowedTags:!1,allowedAttributes:{"*":["href","align","alt","center","width","height","type","controls","target"],img:["src","alt"],source:["src","type"]}};var Yi=e=>Io()(e,Ki),Xi=q.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
  font-size: ${14/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral0};
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: ${({theme:e})=>e.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({theme:e})=>e.spaces[2]};
    margin-block-end: ${({theme:e})=>e.spaces[2]};
  }

  p {
    margin-bottom: ${({theme:e})=>e.spaces[2]};
  }

  h1 {
    font-size: ${36/16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30/16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24/16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20/16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({theme:e})=>e.spaces[8]};
    margin-bottom: ${({theme:e})=>e.spaces[7]};
    font-size: ${14/16}rem;
    font-weight: 400;
    border-left: 4px solid ${({theme:e})=>e.colors.neutral150};
    font-style: italic;
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({theme:e})=>e.colors.neutral150};

      th {
        padding: ${({theme:e})=>e.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
    }
    th,
    td {
      padding: ${({theme:e})=>e.spaces[4]};
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14/16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({theme:e})=>e.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;const En=({data:e})=>{const r=(0,t.useMemo)(()=>Yi(Gi.render(e.replaceAll("\\n",`
`)||"")),[e]);return t.createElement(Xi,null,t.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))};En.defaultProps={data:""},En.propTypes={data:n().string};var Lo=(0,t.memo)(En);const Ji=q.ZP.div`
  cursor: ${({disabled:e})=>e?"not-allowed !important":"auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({theme:e})=>e.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14/16}rem;
    height: ${({isExpandMode:e})=>e?"100%":"290px"};
    color: ${({theme:e})=>e.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({theme:e})=>`${e.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({theme:e})=>e.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({theme:e})=>e.colors.neutral800} !important;
  }
`;var Cn=f(69783);const Ee=(0,q.ZP)(ge.h)`
  padding: ${({theme:e})=>e.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,_i=(0,q.ZP)(Ee)`
  svg {
    width: ${8/16}rem;
    height: ${8/16}rem;
  }
`,xo=(0,q.ZP)(ge.o)`
  margin-left: ${({theme:e})=>e.spaces[4]};
`,Po=(0,q.ZP)(ge.h)`
  margin: ${({theme:e})=>`0 ${e.spaces[2]}`};
  padding: ${({theme:e})=>e.spaces[2]};

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,el=(0,q.ZP)(ge.o)`
  margin-right: ${({theme:e})=>`${e.spaces[2]}`};
`,tl=q.ZP.div`
  position: relative;
  height: calc(100% - 48px);
`,nl=(0,q.ZP)(Cn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`;var $t=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,rl=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,ol=/[*+-]\s/;function sl(e){if(e.getOption("disableInput"))return yn().Pass;for(var r=e.listSelections(),o=[],s=0;s<r.length;s++){var a=r[s].head,l=e.getStateAfter(a.line),i=l.list!==!1,c=l.quote!==0,u=e.getLine(a.line),d=$t.exec(u),m=/^\s*$/.test(u.slice(0,a.ch));if(!r[s].empty()||!i&&!c||!d||m){e.execCommand("newlineAndIndent");return}if(rl.test(u)){var g=c&&/>\s*$/.test(u),p=!/>\s*$/.test(u);(g||p)&&e.replaceRange("",{line:a.line,ch:0},{line:a.line,ch:a.ch+1}),o[s]=`
`}else{var y=d[1],b=d[5],C=!(ol.test(d[2])||d[2].indexOf(">")>=0),k=C?parseInt(d[3],10)+1+d[4]:d[2].replace("x"," ");o[s]=`
`+y+k+b,C&&al(e,a)}}e.replaceSelections(o)}function al(e,r){var o=r.line,s=0,a=0,l=$t.exec(e.getLine(o)),i=l[1];do{s+=1;var c=o+s,u=e.getLine(c),d=$t.exec(u);if(d){var m=d[1],g=parseInt(l[3],10)+s-a,p=parseInt(d[3],10),y=p;if(i===m&&!isNaN(p))g===p&&(y=p+1),g>p&&(y=g+1),e.replaceRange(u.replace($t,m+y+d[4]+d[5]),{line:c,ch:0},{line:c,ch:u.length});else{if(i.length>m.length||i.length<m.length&&s===1)return;a+=1}}}while(d)}var il=sl;const vn=({disabled:e,editorRef:r,error:o,isPreviewMode:s,isExpandMode:a,name:l,onChange:i,placeholder:c,textareaRef:u,value:d})=>{const m=(0,t.useRef)(i);return(0,t.useEffect)(()=>{r.current=yn().fromTextArea(u.current,{lineWrapping:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList",Tab:!1,"Shift-Tab":!1},readOnly:!1,smartIndent:!1,placeholder:c,spellcheck:!0,inputStyle:"contenteditable"}),yn().commands.newlineAndIndentContinueMarkdownList=il,r.current.on("change",g=>{m.current({target:{name:l,value:g.getValue(),type:"wysiwyg"}})})},[r,u,l,c]),(0,t.useEffect)(()=>{d&&!r.current.hasFocus()&&r.current.setValue(d)},[r,d]),(0,t.useEffect)(()=>{s||e?r.current.setOption("readOnly","nocursor"):r.current.setOption("readOnly",!1)},[e,s,r]),(0,t.useEffect)(()=>{o?r.current.setOption("screenReaderLabel",o):r.current.setOption("screenReaderLabel","Editor")},[r,o]),t.createElement(tl,null,t.createElement(Ji,{isExpandMode:a,disabled:e||s},t.createElement("textarea",{ref:u})),s&&t.createElement(Lo,{data:d}))};vn.defaultProps={disabled:!1,error:void 0,isPreviewMode:!1,isExpandMode:!1,placeholder:"",value:""},vn.propTypes={disabled:n().bool,editorRef:n().shape({current:n().any}).isRequired,error:n().string,isPreviewMode:n().bool,isExpandMode:n().bool,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().string,textareaRef:n().shape({current:n().any}).isRequired,value:n().string};var ll=vn,Pe=f(80084),he=f(84967),ue=f(41415),cl=f(4101),wo=f(67563),Fo=f(73906),So=f(49844),Ao=f(99283),Oo=f(49825),dl=f(83139),ul=f(35635),ml=f(20063),pl=f(80601),gl=f(11417),fl=f(43231),hl=f(65663);const Rn=({disabled:e,editorRef:r,isExpandMode:o,isPreviewMode:s,onActionClick:a,onToggleMediaLib:l,onTogglePreviewMode:i})=>{const[c,u]=(0,t.useState)(!1),{formatMessage:d}=(0,Q.Z)(),m=d({id:"components.Wysiwyg.selectOptions.title",defaultMessage:"Add a title"}),g=(0,t.useRef)(),p=()=>{u(y=>!y)};return e||s?t.createElement(S.x,{padding:2,background:"neutral100"},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(w.k,null,t.createElement(Pe.P,{disabled:!0,id:"selectTitle",placeholder:m,size:"S","aria-label":m},t.createElement(he.W,{value:"h1"},"h1"),t.createElement(he.W,{value:"h2"},"h2"),t.createElement(he.W,{value:"h3"},"h3"),t.createElement(he.W,{value:"h4"},"h4"),t.createElement(he.W,{value:"h5"},"h5"),t.createElement(he.W,{value:"h6"},"h6")),t.createElement(xo,null,t.createElement(Ee,{disabled:!0,id:"Bold",label:"Bold",name:"Bold",icon:t.createElement(Fo.Z,null)}),t.createElement(Ee,{disabled:!0,id:"Italic",label:"Italic",name:"Italic",icon:t.createElement(So.Z,null)}),t.createElement(Ee,{disabled:!0,id:"Underline",label:"Underline",name:"Underline",icon:t.createElement(Ao.Z,null)})),t.createElement(Po,{disabled:!0,id:"more",label:"More",icon:t.createElement(Oo.Z,null)})),!o&&t.createElement(ue.z,{onClick:i,variant:"tertiary",id:"preview"},d({id:"components.Wysiwyg.ToggleMode.markdown-mode",defaultMessage:"Markdown mode"})))):t.createElement(S.x,{padding:2,background:"neutral100"},t.createElement(w.k,{justifyContent:"space-between"},t.createElement(w.k,null,t.createElement(Pe.P,{id:"selectTitle",placeholder:m,size:"S",onChange:y=>a(y,r)},t.createElement(he.W,{value:"h1"},"h1"),t.createElement(he.W,{value:"h2"},"h2"),t.createElement(he.W,{value:"h3"},"h3"),t.createElement(he.W,{value:"h4"},"h4"),t.createElement(he.W,{value:"h5"},"h5"),t.createElement(he.W,{value:"h6"},"h6")),t.createElement(xo,null,t.createElement(Ee,{onClick:()=>a("Bold",r),id:"Bold",label:"Bold",name:"Bold",icon:t.createElement(Fo.Z,null)}),t.createElement(Ee,{onClick:()=>a("Italic",r),id:"Italic",label:"Italic",name:"Italic",icon:t.createElement(So.Z,null)}),t.createElement(Ee,{onClick:()=>a("Underline",r),id:"Underline",label:"Underline",name:"Underline",icon:t.createElement(Ao.Z,null)})),t.createElement(Po,{ref:g,onClick:p,id:"more",label:"More",icon:t.createElement(Oo.Z,null)}),c&&t.createElement(cl.J2,{centered:!0,source:g,spacing:4,id:"popover"},t.createElement(wo.i,{onEscape:p,restoreFocus:!1},t.createElement(w.k,null,t.createElement(el,null,t.createElement(Ee,{onClick:()=>a("Strikethrough",r,p),id:"Strikethrough",label:"Strikethrough",name:"Strikethrough",icon:t.createElement(dl.Z,null)}),t.createElement(Ee,{onClick:()=>a("BulletList",r,p),id:"BulletList",label:"BulletList",name:"BulletList",icon:t.createElement(ul.Z,null)}),t.createElement(Ee,{onClick:()=>a("NumberList",r,p),id:"NumberList",label:"NumberList",name:"NumberList",icon:t.createElement(ml.Z,null)})),t.createElement(ge.o,null,t.createElement(Ee,{onClick:()=>a("Code",r,p),id:"Code",label:"Code",name:"Code",icon:t.createElement(pl.Z,null)}),t.createElement(Ee,{onClick:()=>{p(),l()},id:"Image",label:"Image",name:"Image",icon:t.createElement(gl.Z,null)}),t.createElement(_i,{onClick:()=>a("Link",r,p),id:"Link",label:"Link",name:"Link",icon:t.createElement(fl.Z,null)}),t.createElement(Ee,{onClick:()=>a("Quote",r,p),id:"Quote",label:"Quote",name:"Quote",icon:t.createElement(hl.Z,null)})))))),i&&t.createElement(ue.z,{onClick:i,variant:"tertiary",id:"preview"},d({id:"components.Wysiwyg.ToggleMode.preview-mode",defaultMessage:"Preview mode"}))))};Rn.defaultProps={isPreviewMode:!1,onActionClick(){},onToggleMediaLib(){},onTogglePreviewMode:void 0},Rn.propTypes={disabled:n().bool.isRequired,editorRef:n().shape({current:n().any}).isRequired,isExpandMode:n().bool.isRequired,isPreviewMode:n().bool,onActionClick:n().func,onToggleMediaLib:n().func,onTogglePreviewMode:n().func};var yl=Rn,bl=f(18070);const Tn=({onToggleExpand:e})=>{const{formatMessage:r}=(0,Q.Z)();return t.createElement(S.x,{padding:2,background:"neutral100",hasRadius:!0},t.createElement(w.k,{justifyContent:"flex-end",alignItems:"flex-end"},t.createElement(nl,{id:"expand",onClick:e},t.createElement(G.Z,null,r({id:"components.WysiwygBottomControls.fullscreen",defaultMessage:"Expand"})),t.createElement(bl.Z,null))))};Tn.defaultProps={onToggleExpand(){}},Tn.propTypes={onToggleExpand:n().func};var El=Tn;const Mn=({id:e,error:r,name:o,hint:s})=>s.length===0||r?null:t.createElement(G.Z,{as:"p",variant:"pi",id:`${e||o}-hint`,textColor:"neutral600"},s);Mn.defaultProps={id:void 0,error:void 0,hint:""},Mn.propTypes={hint:n().oneOfType([n().string,n().array]),error:n().string,id:n().string,name:n().string.isRequired};var Cl=Mn;const $o=(e,r)=>{let o;switch(e){case"Strikethrough":o=`~~${r}~~`;break;case"Bold":o=`**${r}**`;break;case"Italic":o=`_${r}_`;break;case"Underline":o=`<u>${r}</u>`;break;case"Code":o=`\`\`\`
${r}
\`\`\``;break;case"Link":o=`[${r}](link)`;break;case"Quote":o=`>${r}`;break;default:o=r}return o},Zo=e=>{let r,o={start:e.length,end:0};switch(e){case"Strikethrough":r=`~~${e}~~`,o.end=2;break;case"Bold":r=`**${e}**`,o.end=2;break;case"Italic":r=`_${e}_`,o.end=1;break;case"alt":r=`[${e}]()`,o.end=3;break;case"Underline":r=`<u>${e}</u>`,o.end=4;break;case"Code":r=`\`\`\`
${e}
\`\`\``,o.end=3;break;case"Link":r=`[${e}](link)`,o.end=7;break;case"Quote":r=`>${e}`,o.end=0;break;default:r=""}return{editedText:r,selection:o}},qo=e=>{let r;switch(e){case"BulletList":r="- ";break;case"NumberList":r="1. ";break;case"h1":r="# ";break;case"h2":r="## ";break;case"h3":r="### ";break;case"h4":r="#### ";break;case"h5":r="##### ";break;case"h6":r="###### ";break;default:return""}return r},No=(e,r)=>{const o=e.current.getSelection();let s;if(o){const a=$o(r,o);e.current.replaceSelection(a),e.current.focus()}else{s=Zo(r),e.current.replaceSelection(s.editedText),e.current.focus();const{line:a,ch:l}=e.current.getCursor(),i=l-s.selection.end,c=l-s.selection.end-s.selection.start;e.current.setSelection({line:a,ch:c},{line:a,ch:i})}},vl=(e,r)=>{const o=e.current.getDoc(),s=r==="BulletList"?"- ":"1. ";if(o.somethingSelected()){const a=o.listSelections();let l=null;e.current.operation(function(){a.forEach(function(i){const c=[i.head.line,i.anchor.line].sort();l==null&&(l=o.getLine(c[0]).startsWith(s));for(let u=c[0];u<=c[1];u++)if(l)o.getLine(u).startsWith(s)&&o.replaceRange("",{line:u,ch:0},{line:u,ch:s.length});else{const d=r==="BulletList"?"- ":`${u+1}. `;o.replaceRange(d,{line:u,ch:0})}})})}else{let{line:a}=o.getCursor();const l=qo(r),i=e.current.getLine(a),c=l+i;e.current.setSelection({line:a,ch:0},{line:a,ch:i.length}),e.current.replaceSelection(c)}e.current.focus()},Rl=(e,r)=>{let{line:o}=e.current.getCursor();const s=qo(r),a=e.current.getLine(o),l=a.replace(/#{1,6}\s/g,"").trim(),i=s+l;e.current.setSelection({line:o,ch:0},{line:o,ch:a.length}),e.current.replaceSelection(i),setTimeout(()=>{const c=e.current.getLine(o).length;e.current.focus(),e.current.setCursor({line:o,ch:c})},0)},Tl=(e,r)=>{let{line:o,ch:s}=e.current.getCursor();r.forEach((a,l)=>{let i=e.current.getLine(o).length;e.current.setCursor({line:o,ch:i}),(l>0||l===0&&s!==0)&&(i=e.current.getLine(o).length,e.current.setCursor({line:o,ch:i}),o++,e.current.replaceSelection(`
`)),a.mime.includes("image")?e.current.replaceSelection(`![${a.alt}](${a.url})`):e.current.replaceSelection(`[${a.alt}](${a.url})`)}),setTimeout(()=>e.current.focus(),0)},Ml=(e,r,o,s,a)=>{const l=$o(r,a),i=e.current.getRange({line:o+1,ch:0},{line:1/0,ch:1/0});if(e.current.replaceRange("",{line:o+1,ch:0},{line:1/0,ch:1/0}),e.current.replaceSelection(""),e.current.setCursor({line:o,ch:s}),e.current.replaceSelection(`
`),e.current.replaceSelection(l),r==="Code"){let{line:c}=e.current.getCursor();e.current.setCursor({line:c-1,ch:a.length})}e.current.replaceRange(i,{line:o+4,ch:0},{line:1/0,ch:1/0}),e.current.focus()},Dl=(e,r,o,s)=>{const a=Zo(r),l=e.current.getRange({line:o+1,ch:0},{line:1/0,ch:1/0});if(e.current.replaceRange("",{line:o+1,ch:0},{line:1/0,ch:1/0}),e.current.setCursor({line:o,ch:s}),e.current.replaceSelection(`
`),e.current.replaceSelection(a.editedText),r==="Code")o+=2,e.current.setSelection({line:o,ch:0},{line:o,ch:4});else{o+=1;let{ch:i}=e.current.getCursor(),c=i-a.selection.end,u=i-a.selection.end-a.selection.start;e.current.setSelection({line:o,ch:u},{line:o,ch:c})}e.current.replaceRange(l,{line:o+2,ch:0},{line:1/0,ch:1/0}),e.current.focus()},kl=(e,r)=>{const o=e.current.getSelection();let{line:s}=e.current.getCursor(),a=e.current.getLine(s).length;o?Ml(e,r,s,a,o):Dl(e,r,s,a)};var Il=f(71933),Ll=f(74464);const xl=(e,r)=>`${e}${Math.floor(r*255).toString(16).padStart(2,0)}`,Pl=(0,q.ZP)(w.k)`
  background: ${({theme:e})=>xl(e.colors.neutral800,.2)};
`,wl=(0,q.ZP)(S.x)`
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,Fl=(0,q.ZP)(Cn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};

    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`,Dn=({children:e,isExpandMode:r,error:o,previewContent:s,onCollapse:a})=>{const{formatMessage:l}=(0,Q.Z)();return(0,h.F5)(r),r?t.createElement(Il.h,{role:"dialog","aria-modal":!1},t.createElement(wo.i,{onEscape:a},t.createElement(Pl,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:4,justifyContent:"center",onClick:a},t.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"popupShadow",overflow:"hidden",width:"70%",height:"70%",onClick:i=>i.stopPropagation()},t.createElement(w.k,{height:"100%",alignItems:"flex-start"},t.createElement(wl,{flex:"1",height:"100%"},e),t.createElement(w.k,{alignItems:"start",direction:"column",flex:1,height:"100%",width:"100%"},t.createElement(w.k,{height:(0,h.Q1)(48),background:"neutral100",justifyContent:"flex-end",shrink:0,width:"100%"},t.createElement(Fl,{onClick:a},t.createElement(G.Z,null,l({id:"components.Wysiwyg.collapse",defaultMessage:"Collapse"})),t.createElement(Ll.Z,null))),t.createElement(S.x,{position:"relative",height:"100%",width:"100%"},t.createElement(Lo,{data:s})))))))):t.createElement(S.x,{borderColor:o?"danger600":"neutral200",borderStyle:"solid",borderWidth:"1px",hasRadius:!0},e)};Dn.defaultProps={error:void 0,previewContent:""},Dn.propTypes={children:n().node.isRequired,error:n().string,isExpandMode:n().bool.isRequired,previewContent:n().string,onCollapse:n().func.isRequired};const Sl=(0,q.ZP)(S.x)`
  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Al=(0,q.ZP)(G.Z)`
  line-height: 0;
`,kn=({hint:e,disabled:r,error:o,intlLabel:s,labelAction:a,name:l,onChange:i,placeholder:c,value:u,required:d})=>{const{formatMessage:m}=(0,Q.Z)(),g=(0,t.useRef)(null),p=(0,t.useRef)(null),[y,b]=(0,t.useState)(!1),[C,k]=(0,t.useState)(!1),[M,E]=(0,t.useState)(!1),{components:P}=(0,h.yX)(),F=P["media-library"],T=()=>k(j=>!j),D=()=>b(j=>!j),x=()=>{b(!1),E(j=>!j)},N=(j,Y,B)=>{switch(j){case"Link":case"Strikethrough":{No(Y,j),B();break}case"Code":case"Quote":{kl(Y,j),B();break}case"Bold":case"Italic":case"Underline":{No(Y,j);break}case"BulletList":case"NumberList":{vl(Y,j),B();break}case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":{Rl(Y,j);break}default:}},z=j=>{const Y=j.map(B=>({alt:B.alternativeText||B.name,url:(0,h.CR)(B.url),mime:B.mime}));Tl(p,Y),k(!1)},$=c?m({id:c.id,defaultMessage:c.defaultMessage},{...c.values}):"",H=s.id?m({id:s.id,defaultMessage:s.defaultMessage},{...s.values}):l;return t.createElement(t.Fragment,null,t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(w.k,{gap:1},t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800"},H,d&&t.createElement(Al,{textColor:"danger600"},"*")),a&&t.createElement(Sl,{paddingLeft:1},a)),t.createElement(Dn,{isExpandMode:M,error:o,previewContent:u,onCollapse:x},t.createElement(yl,{isExpandMode:M,editorRef:p,isPreviewMode:y,onActionClick:N,onToggleMediaLib:T,onTogglePreviewMode:M?void 0:D,disabled:r}),t.createElement(ll,{disabled:r,isExpandMode:M,editorRef:p,error:o,isPreviewMode:y,name:l,onChange:i,placeholder:$,textareaRef:g,value:u}),!M&&t.createElement(El,{onToggleExpand:x})),t.createElement(Cl,{hint:e,name:l,error:o})),o&&t.createElement(S.x,{paddingTop:1},t.createElement(G.Z,{variant:"pi",textColor:"danger600","data-strapi-field-error":!0},o)),C&&t.createElement(F,{onClose:T,onSelectAssets:z}))};kn.defaultProps={disabled:!1,error:"",labelAction:void 0,placeholder:null,required:!1,value:"",hint:""},kn.propTypes={hint:n().oneOfType([n().string,n().array]),disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,value:n().string};var Ol=kn,In=f(10369),$l=f(38705),ut=f(69932),Zl=f(27169),jo=f(75536),ql=/^[A-Za-z0-9-_.~]*$/,Nl=f(63642);const jl=(0,q.ZP)(Nl.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Bo=(0,q.ZP)(w.k)`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;

    path {
      fill: ${({theme:e,available:r})=>r?e.colors.success600:e.colors.danger600};
    }
  }
`,Bl=q.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Wl=(0,q.ZP)(w.k)`
  animation: ${Bl} 2s infinite linear;
`,Ln=({attribute:e,contentTypeUID:r,hint:o,disabled:s,error:a,intlLabel:l,labelAction:i,name:c,onChange:u,value:d,placeholder:m,required:g})=>{const{modifiedData:p,initialData:y,layout:b}=(0,h.Wq)(),[C,k]=(0,t.useState)(!1),[M,E]=(0,t.useState)(null),P=(0,jo.Z)(d,300),F=(0,t.useRef)(),T=(0,h.lm)(),{formatAPIError:D}=(0,h.So)(),x=y[c],{formatMessage:N}=(0,Q.Z)(),z=b?.options?.timestamps??0,$=!y[z],H=(0,jo.Z)(p[e.targetField],300),[j,Y]=(0,t.useState)(!1),[B,X]=(0,t.useState)(null),{post:Z}=(0,h.kY)(),W=l.id?N({id:l.id,defaultMessage:l.defaultMessage},{...l.values}):c,R=m?N({id:m.id,defaultMessage:m.defaultMessage},{...m.values}):"";F.current=async(O=!1)=>{k(!0);try{const{data:{data:re}}=await Z(de("uid/generate"),{contentTypeUID:r,field:c,data:p});u({target:{name:c,value:re,type:"text"}},O),k(!1)}catch(re){k(!1),T({type:"warning",message:D(re)})}};const A=async()=>{if(d){k(!0);try{const{data:O}=await Z(de("uid/check-availability"),{contentTypeUID:r,field:c,value:d?d.trim():""});k(!1),E(O)}catch(O){k(!1),T({type:"warning",message:D(O)})}}};(0,t.useEffect)(()=>{!d&&e.required&&F.current(!0)},[e.required,F,d]),(0,t.useEffect)(()=>{P?.trim().match(ql)&&P!==x&&A(),P||E(null)},[x,P]),(0,t.useEffect)(()=>{let O;return M?.isAvailable&&(O=setTimeout(()=>{E(null)},4e3)),()=>{O&&clearTimeout(O)}},[M]),(0,t.useEffect)(()=>{!j&&$&&H&&p[e.targetField]&&!d&&F.current(!0)},[H,j,$]);const U=()=>{X(N({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}))},K=()=>{X(null)},L=O=>{O.target.value&&$&&Y(!0),u(O)};return t.createElement(In.o,{disabled:s,error:a,endAction:t.createElement(w.k,{position:"relative",gap:1},M&&!B&&t.createElement(Bo,{alignItems:"center",gap:1,justifyContent:"flex-end",available:!!M?.isAvailable,"data-not-here-outer":!0,position:"absolute",pointerEvents:"none",right:6,width:"100px"},M?.isAvailable?t.createElement($l.Z,null):t.createElement(ut.Z,null),t.createElement(G.Z,{textColor:M.isAvailable?"success600":"danger600",variant:"pi"},N(M.isAvailable?{id:"content-manager.components.uid.available",defaultMessage:"Available"}:{id:"content-manager.components.uid.unavailable",defaultMessage:"Unavailable"}))),!s&&t.createElement(t.Fragment,null,B&&t.createElement(Bo,{alignItems:"center",justifyContent:"flex-end",gap:1},t.createElement(G.Z,{textColor:"primary600",variant:"pi"},B)),t.createElement(jl,{onClick:()=>F.current(),label:N({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}),onMouseEnter:U,onMouseLeave:K},C?t.createElement(Wl,{"data-testid":"loading-wrapper"},t.createElement(Zl.Z,null)):t.createElement(eo.Z,null)))),hint:o,label:W,labelAction:i,name:c,onChange:L,placeholder:R,value:d||"",required:g})};Ln.propTypes={attribute:n().shape({targetField:n().string,required:n().bool}).isRequired,contentTypeUID:n().string.isRequired,disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,value:n().string,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,hint:n().oneOfType([n().string,n().array])},Ln.defaultProps={disabled:!1,error:void 0,labelAction:void 0,placeholder:void 0,value:"",required:!1,hint:""};var zl=Ln,Vl=f(88423),xn=f.n(Vl),He=f(20108);function Ul(e,r){return o=>{const s=r(o);return t.createElement(e,{...o,...s})}}var Hl=Ul;function Gl({componentUid:e,isUserAllowedToEditField:r,isUserAllowedToReadField:o,name:s,queryInfos:a}){const{isCreatingEntry:l,createActionAllowedFields:i,readActionAllowedFields:c,updateActionAllowedFields:u,slug:d,modifiedData:m}=(0,h.Wq)(),g=(0,t.useMemo)(()=>r===!0?!0:(l?i:u).includes(s),[l,i,s,r,u]),p=(0,t.useMemo)(()=>o?!0:(l?[]:c).includes(s),[l,o,s,c]),y=s.split(".");let b;e&&(b=I()(m,y.slice(0,-1))?.id);const C=(0,t.useMemo)(()=>l?null:e?b?de(`relations/${e}/${b}/${y.at(-1)}`):null:de(`relations/${d}/${m.id}/${s.split(".").at(-1)}`),[l,e,d,m.id,s,b,y]),k=(0,t.useMemo)(()=>de(e?`relations/${e}/${s.split(".").at(-1)}`:`relations/${d}/${s.split(".").at(-1)}`),[e,d,s]);return{componentId:b,isComponentRelation:Boolean(e),queryInfos:{...a,endpoints:{search:k,relation:C}},isCreatingEntry:l,isFieldAllowed:g,isFieldReadable:p}}var Ql=Gl;function Kl(e,r){return`${de(`collectionType/${e}/${r??""}`)}`}const Pn=(e,{shouldAddLink:r,mainFieldName:o,targetModel:s})=>{const a={...e};return r&&(a.href=Kl(s,a.id)),a.publicationState=!1,a?.publishedAt!==void 0&&(a.publicationState=a.publishedAt?Ve.PUBLISHED:Ve.DRAFT),a.mainField=a[o],a},Yl=(e,{shouldAddLink:r=!1,mainFieldName:o,targetModel:s}={})=>[...e].map(a=>Pn(a,{shouldAddLink:r,mainFieldName:o,targetModel:s})),Xl=(e,{mainFieldName:r})=>{const{data:o}=e,{pages:s=[]}=o??{};return{...e,data:s.map(a=>a?.results.map(l=>Pn(l,{mainFieldName:r}))).filter(Boolean).flat()}},Jl=(e=[],r=[])=>{const o=e.reduce((a,l)=>r.find(i=>i.id===l.id)?a:[...a,l.id],[]),s=r.reduce((a,l)=>e.find(i=>i.id===l.id)?a:[...a,l.id],[]);return[o,s]},_l=e=>{const r=t.useRef(e);return t.useEffect(()=>{r.current=e}),t.useMemo(()=>(...o)=>r.current?.(...o),[])},ec=(e,{relation:r,search:o})=>{const[s,a]=(0,t.useState)({}),[l,i]=(0,t.useState)(0),{get:c}=(0,h.kY)(),u=async({pageParam:T=1})=>{try{const{data:D}=await c(r?.endpoint,{params:{...r.pageParams??{},page:T}});return i(T),D}catch{return null}},d=async({pageParam:T=1})=>{try{const{data:D}=await c(o.endpoint,{params:{...o.pageParams??{},...s,page:T}});return D}catch{return null}},{onLoad:m,normalizeArguments:g={}}=r,p=(0,He.useInfiniteQuery)(["relation",...e],u,{cacheTime:0,enabled:r.enabled,getNextPageParam(T){const D=!T?.pagination;if(!(!T||D||T?.pagination.page>=T?.pagination.pageCount))return T.pagination.page+1},select:T=>({...T,pages:T.pages.map(D=>{if(!D)return D;const{data:x,results:N,pagination:z}=D,$=!!x;let H=[];return $?H=[x]:N&&(H=[...N].reverse()),{pagination:z,results:H}})})}),{pageGoal:y}=r,{status:b,data:C,fetchNextPage:k,hasNextPage:M}=p;(0,t.useEffect)(()=>{y>l&&M&&b==="success"&&k({pageParam:l+1})},[y,l,k,M,b]);const E=_l(m);(0,t.useEffect)(()=>{if(b==="success"&&C&&C.pages?.at(-1)?.results&&E){const T=Yl(C.pages.at(-1).results,g);E(T)}},[b,E,C]);const P=(0,He.useInfiniteQuery)(["relation",...e,"search",JSON.stringify(s)],d,{enabled:Object.keys(s).length>0,getNextPageParam(T){if(!(!T?.pagination||T.pagination.page>=T.pagination.pageCount))return T.pagination.page+1}});return{relations:p,search:P,searchFor:(T,D={})=>{a({...D,_q:T})}}},Wo=(e,r)=>o=>{const s=o.split(".");return s.reduce((a,l,i)=>{const c=I()(e,a),u=I()(r,[...s.slice(0,i),l,"__temp_key__"]);if(Array.isArray(c)&&typeof u=="number"){const d=c.findIndex(m=>m.__temp_key__===u);return a.push(d.toString()),a}return a.push(l),a},[])},wn=({error:e,componentId:r,isComponentRelation:o,editable:s,description:a,intlLabel:l,isCreatingEntry:i,isFieldAllowed:c,isFieldReadable:u,labelAction:d,mainField:m,name:g,queryInfos:{endpoints:p,defaultParams:y,shouldDisplayRelationLink:b},placeholder:C,required:k,relationType:M,size:E,targetModel:P})=>{const[F,T]=(0,t.useState)(""),{formatMessage:D}=(0,Q.Z)(),{slug:x,initialData:N,modifiedData:z,relationConnect:$,relationDisconnect:H,relationLoad:j,relationReorder:Y}=(0,h.Wq)(),B=g.split("."),X=Wo(N,z)(g),Z=I()(z,g,[]),W=Math.ceil(I()(N,g,[]).length/rn),{relations:R,search:A,searchFor:U}=ec([x,X.join("."),z.id,y],{relation:{enabled:!!p.relation,endpoint:p.relation,pageGoal:W,pageParams:{...y,pageSize:rn},onLoad(te){j({target:{initialDataPath:["initialData",...X],modifiedDataPath:["modifiedData",...B],value:te}})},normalizeArguments:{mainFieldName:m.name,shouldAddLink:b,targetModel:P}},search:{endpoint:p.search,pageParams:{...y,entityId:i?void 0:o?r:N.id,pageSize:ka}}}),K=(0,t.useMemo)(()=>M.toLowerCase().includes("morph"),[M]),L=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(M),O=(0,t.useMemo)(()=>K?!0:i?!s:!c&&u||!s,[K,i,s,c,u]),re=te=>{const pe=Pn(te,{mainFieldName:m.name,shouldAddLink:b,targetModel:P});$({name:g,value:pe,toOneRelation:L})},ee=te=>{H({name:g,id:te.id})},oe=()=>{R.fetchNextPage()},V=(te="")=>{const[pe,Ie]=Jl(Z,I()(N,g));U(te,{idsToInclude:Ie,idsToOmit:pe})},se=()=>{A.fetchNextPage()},be=te=>`${te+1} of ${Z.length}`,Oe=(te,pe)=>{const Ie=Z[te];T(D({id:v("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:Ie.mainField??Ie.id,position:be(pe)})),Y({name:g,newIndex:pe,oldIndex:te})},Ct=te=>{const pe=Z[te];T(D({id:v("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:pe.mainField??pe.id,position:be(te)}))},vt=te=>{const pe=Z[te];T(D({id:v("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:pe.mainField??pe.id,position:be(te)}))},Rt=te=>{const pe=Z[te];T(D({id:v("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:pe.mainField??pe.id}))};if(!c&&i||!i&&!c&&!u)return t.createElement(h.X0,{name:g,intlLabel:l,labelAction:d});const Re=Z.length,ke=(I()(N,X)??[]).length,Tt=R.data?.pages[0]?.pagination?.total??0,Be=!R.data&&Re===ke?Re:Re-ke+Tt;return t.createElement(ni,{error:e,canReorder:!L,description:a,disabled:O,iconButtonAriaLabel:D({id:v("components.RelationInput.icon-button-aria-label"),defaultMessage:"Drag"}),id:g,label:`${D({id:l.id,defaultMessage:l.defaultMessage})} ${Be>0?`(${Be})`:""}`,labelAction:d,labelLoadMore:i?null:D({id:v("relation.loadMore"),defaultMessage:"Load More"}),labelDisconnectRelation:D({id:v("relation.disconnect"),defaultMessage:"Remove"}),listAriaDescription:D({id:v("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"}),listHeight:320,liveText:F,loadingMessage:D({id:v("relation.isLoading"),defaultMessage:"Relations are loading"}),name:g,noRelationsMessage:D({id:v("relation.notAvailable"),defaultMessage:"No relations available"}),numberOfRelationsToDisplay:rn,onDropItem:vt,onGrabItem:Ct,onCancel:Rt,onRelationConnect:re,onRelationDisconnect:ee,onRelationLoadMore:oe,onRelationReorder:Oe,onSearch:te=>V(te),onSearchNextPage:()=>se(),placeholder:D(C||{id:v("relation.add"),defaultMessage:"Add relation"}),publicationStateTranslations:{[Ve.DRAFT]:D({id:v("relation.publicationState.draft"),defaultMessage:"Draft"}),[Ve.PUBLISHED]:D({id:v("relation.publicationState.published"),defaultMessage:"Published"})},relations:xn()({...R,data:Z},"data","hasNextPage","isFetchingNextPage","isLoading","isSuccess"),required:k,searchResults:Xl(A,{mainFieldName:m.name}),size:E})};wn.defaultProps={componentId:void 0,editable:!0,error:void 0,description:"",labelAction:null,isComponentRelation:!1,isFieldAllowed:!0,placeholder:null,required:!1},wn.propTypes={componentId:n().number,editable:n().bool,error:n().string,description:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,isCreatingEntry:n().bool.isRequired,isComponentRelation:n().bool,isFieldAllowed:n().bool,isFieldReadable:n().bool.isRequired,mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired}).isRequired,name:n().string.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,relationType:n().string.isRequired,size:n().number.isRequired,targetModel:n().string.isRequired,queryInfos:n().shape({defaultParams:n().shape({locale:n().string}),endpoints:n().shape({relation:n().string,search:n().string.isRequired}).isRequired,shouldDisplayRelationLink:n().bool.isRequired}).isRequired};const tc=(0,t.memo)(wn);var nc=Hl(tc,Ql);function rc(e,r){return o=>{const s=r(o.keys);return t.createElement(e,{...o,...s})}}var oc=rc,sc=(e,r=!1)=>[{metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},disabled:r,hidden:r},key:"__enum_option_null",value:""},...e.map(o=>({metadatas:{intlLabel:{id:o,defaultMessage:o},hidden:!1,disabled:!1},key:o,value:o}))],ac=(e="")=>{switch(Wr()(e)){case"boolean":return"bool";case"biginteger":return"text";case"decimal":case"float":case"integer":return"number";case"date":case"datetime":case"time":return e;case"email":return"email";case"enumeration":return"select";case"password":return"password";case"string":return"text";case"text":return"textarea";case"media":case"file":case"files":return"media";case"json":return"json";case"wysiwyg":case"WYSIWYG":case"richtext":return"wysiwyg";case"uid":return"uid";default:return e||"text"}},ic=e=>{let r;return e==="float"||e==="decimal"?r=.01:r=1,r};function lc(e){const{createActionAllowedFields:r,formErrors:o,isCreatingEntry:s,modifiedData:a,onChange:l,readActionAllowedFields:i,shouldNotRunValidations:c,updateActionAllowedFields:u}=(0,h.Wq)(),d=(0,t.useMemo)(()=>s?r:u,[s,r,u]),m=(0,t.useMemo)(()=>s?[]:i,[s,i]),g=I()(a,e,null);return{allowedFields:d,formErrors:o,isCreatingEntry:s,onChange:l,readableFields:m,shouldNotRunValidations:c,value:g}}var cc=lc,zo=["type","model","via","collection","default","plugin","enum","regex","pluginOptions"];function Fn({allowedFields:e,componentUid:r,fieldSchema:o,formErrors:s,isCreatingEntry:a,keys:l,labelAction:i,metadatas:c,onChange:u,readableFields:d,shouldNotRunValidations:m,queryInfos:g,value:p,size:y,customFieldInputs:b}){const{fields:C}=(0,h.yX)(),{formatMessage:k}=(0,Q.Z)(),{contentType:M}=Ze(),E=(0,t.useMemo)(()=>!I()(c,"editable",!0),[c]),{type:P,customField:F}=o,T=I()(s,[l],null),D=(0,t.useMemo)(()=>Qr(l),[l]),x=(0,t.useMemo)(()=>{const re=Ur()(o,m?[...zo,"required","minLength"]:zo),ee=o.regex||null;if(ee){const oe=new RegExp(ee);oe&&(re.regex=oe)}return re},[o,m]),N=(0,t.useMemo)(()=>I()(x,["required"],!1),[x]),z=(0,t.useMemo)(()=>{const re=I()(M,["attributes"],{});return I()(re,[D[0],"type"],null)==="dynamiczone"},[M,D]),$=(0,t.useMemo)(()=>ac(P),[P]),H=(0,t.useMemo)(()=>P==="media"&&!p?[]:p,[P,p]),j=(0,t.useMemo)(()=>ic(P),[P]),Y=(0,t.useMemo)(()=>{const re=D.join(".");if(e.includes(re))return!0;if(z)return e.includes(D[0]);if(D.length>1){const oe=dt()(D,D.length-1).join(".");return e.includes(oe)}return!1},[e,D,z]),B=(0,t.useMemo)(()=>{const re=D.join(".");if(d.includes(re))return!0;if(z)return d.includes(D[0]);if(D.length>1){const oe=dt()(D,D.length-1).join(".");return d.includes(oe)}return!1},[d,D,z]),X=(0,t.useMemo)(()=>B||Y,[Y,B]),Z=(0,t.useMemo)(()=>a?E:B&&!Y?!0:E,[E,a,Y,B]),W=(0,t.useMemo)(()=>sc(o.enum||[],N),[o,N]),{label:R,description:A,placeholder:U,visible:K}=c,L=(0,t.useMemo)(()=>{if(!c.step||$!=="datetime"&&$!=="time")return j;if(!H)return c.step;let re;return $==="datetime"?re=parseInt(H.substr(14,2),10):$==="time"&&(re=parseInt(H.slice(-2),10)),re%c.step===0?c.step:j},[$,H,c.step,j]);if(K===!1)return null;if(!X)return t.createElement(h.X0,{description:A?{id:A,defaultMessage:A}:null,intlLabel:{id:R,defaultMessage:R},labelAction:i,error:T&&k(T),name:l,required:N});if(P==="relation")return t.createElement(nc,{...c,...o,componentUid:r,description:c.description?k({id:c.description,defaultMessage:c.description}):void 0,intlLabel:{id:c.label,defaultMessage:c.label},labelAction:i,isUserAllowedToEditField:Y,isUserAllowedToReadField:B,name:l,placeholder:c.placeholder?{id:c.placeholder,defaultMessage:c.placeholder}:null,queryInfos:g,size:y,value:p,error:T&&k(T)});const O={uid:zl,media:C.media,wysiwyg:Ol,...C,...b};return t.createElement(h.jm,{attribute:o,autoComplete:"new-password",intlLabel:{id:R,defaultMessage:R},isNullable:$==="bool"&&[null,void 0].includes(o.default),description:A?{id:A,defaultMessage:A}:null,disabled:Z,error:T,labelAction:i,contentTypeUID:M.uid,customInputs:O,multiple:o.multiple||!1,name:l,onChange:u,options:W,placeholder:U?{id:U,defaultMessage:U}:null,required:o.required||!1,step:L,type:F||$,value:H,withDefaultValue:!1})}Fn.defaultProps={componentUid:void 0,formErrors:{},labelAction:void 0,size:void 0,value:null,queryInfos:{},customFieldInputs:{}},Fn.propTypes={allowedFields:n().array.isRequired,componentUid:n().string,fieldSchema:n().object.isRequired,formErrors:n().object,keys:n().string.isRequired,isCreatingEntry:n().bool.isRequired,labelAction:n().element,metadatas:n().object.isRequired,onChange:n().func.isRequired,readableFields:n().array.isRequired,size:n().number,shouldNotRunValidations:n().bool.isRequired,value:n().any,queryInfos:n().shape({containsKey:n().string,defaultParams:n().object,endPoint:n().string}),customFieldInputs:n().object};const dc=(0,t.memo)(Fn,qe());var Sn=oc(dc,cc);const mt=new Map;var An=(e=[])=>{const[r,o]=(0,t.useState)(Object.fromEntries(mt)),s=e.filter(u=>!mt.get(u)),[a,l]=(0,t.useState)(()=>!!s.length),i=(0,h.mZ)();(0,t.useEffect)(()=>{const u=m=>{o(m),l(!1)},d=async(m,g)=>{const p=await Promise.all(g);m.forEach((y,b)=>{mt.set(y,p[b].default)}),u(Object.fromEntries(mt))};if(s.length>0){l(!0);const m=s.map(g=>i.get(g).components.Input());m.length>0&&d(s,m)}},[s,i]);const c=(0,t.useCallback)(()=>{mt.clear(),o({})},[]);return{isLazyLoading:a,lazyComponentStore:r,cleanup:c}};const On=({componentUid:e,isFromDynamicZone:r,isNested:o,name:s})=>{const{getComponentLayout:a}=Ze(),i=(0,t.useMemo)(()=>a(e),[e,a]).layouts.edit,{lazyComponentStore:c}=An();return t.createElement(S.x,{background:r?"":"neutral100",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,hasRadius:o,borderColor:o?"neutral200":""},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},i.map((u,d)=>t.createElement(De.r,{gap:4,key:d},u.map(({name:m,size:g,metadatas:p,fieldSchema:y,queryInfos:b})=>{const C=y.type==="component",k=`${s}.${m}`;if(C){const M=y.component;return t.createElement(fe.P,{col:g,s:12,xs:12,key:m},t.createElement(Zt,{componentUid:M,intlLabel:{id:p.label,defaultMessage:p.label},isNested:!0,isRepeatable:y.repeatable,max:y.max,min:y.min,name:k,required:y.required||!1}))}return t.createElement(fe.P,{col:g,key:m,s:12,xs:12},t.createElement(Sn,{componentUid:e,keys:k,fieldSchema:y,metadatas:p,queryInfos:b,size:g,customFieldInputs:c}))})))))};On.defaultProps={isFromDynamicZone:!1,isNested:!1},On.propTypes={componentUid:n().string.isRequired,isFromDynamicZone:n().bool,isNested:n().bool,name:n().string.isRequired};var uc=On,pt=f(19406),mc=f(41119),Vo=f.n(mc);const pc=q.ZP.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`;var gc=()=>t.createElement(pc,{padding:6,background:"primary100"});const fc=(0,q.ZP)(ge.h)`
  background-color: transparent;

  svg {
    path {
      fill: ${({theme:e,expanded:r})=>r?e.colors.primary600:e.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }
`,hc=(0,q.ZP)(w.k)`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({theme:e,expanded:r})=>r?e.colors.primary600:void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`,$n=({componentFieldName:e,componentUid:r,fields:o,index:s,isOpen:a,isReadOnly:l,mainField:i,moveComponentField:c,onClickToggle:u,toggleCollapses:d,onGrabItem:m,onDropItem:g,onCancel:p})=>{const{modifiedData:y,removeRepeatableField:b,triggerFormValidation:C}=(0,h.Wq)(),k=Vo()(I()(y,[...e.split("."),i],"")),M=(0,t.useRef)(null),{formatMessage:E}=(0,Q.Z)(),[P]=e.split("."),[{handlerId:F,isDragging:T,handleKeyDown:D},x,N,z,$]=on(!l,{type:`${Ce.COMPONENT}_${P}`,index:s,item:{displayedValue:k},onMoveItem:c,onStart(){d()},onEnd(){C()},onGrabItem:m,onDropItem:g,onCancel:p});(0,t.useEffect)(()=>{$((0,ct.rX)(),{captureDraggingState:!1})},[$,s]);const H=Lt(M,z),j=Lt(x,N),{lazyComponentStore:Y}=An();return t.createElement(S.x,{ref:j},T?t.createElement(gc,null):t.createElement(mn.U,{expanded:a,onToggle:u,id:e,size:"S"},t.createElement(pn.B,{action:l?null:t.createElement(hc,{gap:0,expanded:a},t.createElement(fc,{expanded:a,noBorder:!0,onClick:()=>{b(e),d()},label:E({id:v("containers.Edit.delete"),defaultMessage:"Delete"}),icon:t.createElement(Se.Z,null)}),t.createElement(ge.h,{className:"drag-handle",ref:H,forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:B=>B.stopPropagation(),"data-handler-id":F,label:E({id:v("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:D},t.createElement($e.Z,null))),title:k,togglePosition:"left"}),t.createElement(gn.v,null,t.createElement(w.k,{direction:"column",alignItems:"stretch",background:"neutral100",padding:6,gap:6},o.map((B,X)=>t.createElement(De.r,{gap:4,key:X},B.map(({name:Z,fieldSchema:W,metadatas:R,queryInfos:A,size:U})=>{const K=W.type==="component",L=`${e}.${Z}`;if(K){const O=W.component;return t.createElement(fe.P,{col:U,s:12,xs:12,key:Z},t.createElement(Zt,{componentUid:O,intlLabel:{id:R.label,defaultMessage:R.label},isRepeatable:W.repeatable,isNested:!0,name:L,max:W.max,min:W.min,required:W.required}))}return t.createElement(fe.P,{key:L,col:U,s:12,xs:12},t.createElement(Sn,{componentUid:r,fieldSchema:W,keys:L,metadatas:R,queryInfos:A,size:U,customFieldInputs:Y}))})))))))};$n.defaultProps={componentUid:void 0,fields:[],isReadOnly:!1,isOpen:!1,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0,toggleCollapses(){}},$n.propTypes={componentFieldName:n().string.isRequired,componentUid:n().string,fields:n().array,index:n().number.isRequired,isOpen:n().bool,isReadOnly:n().bool,mainField:n().string.isRequired,moveComponentField:n().func.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onClickToggle:n().func.isRequired,toggleCollapses:n().func};var yc=(0,t.memo)($n),Uo=f(861);const bc=(0,q.ZP)(S.x)`
  overflow: hidden;
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
`,Ec=(0,q.ZP)(S.x)`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({theme:e})=>e.colors.primary600};
  }
`,Zn=({children:e,error:r})=>{const{formatMessage:o}=(0,Q.Z)();return t.createElement(Uo.k,{attributeName:"data-strapi-accordion-toggle"},e,r&&t.createElement(S.x,{paddingTop:1},t.createElement(G.Z,{variant:"pi",textColor:"danger600"},o({id:r.id,defaultMessage:r.defaultMessage},{...r.values}))))};Zn.defaultProps={error:void 0},Zn.propTypes={children:n().node.isRequired,error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object})};function Cc(e,r={}){return Object.keys(r).filter(o=>o.startsWith(e)).map(o=>o.split(".").slice(0,e.split(".").length+1).join("."))}const vc=(0,q.ZP)(_r.A)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`,qn=({componentUid:e,componentValue:r,componentValueLength:o,isReadOnly:s,max:a,min:l,name:i})=>{const{addRepeatableComponentToField:c,formErrors:u,moveComponentField:d}=(0,h.Wq)(),m=(0,h.lm)(),{formatMessage:g}=(0,Q.Z)(),[p,y]=(0,t.useState)(""),[b,C]=(0,t.useState)(""),{getComponentLayout:k,components:M}=Ze(),E=(0,t.useMemo)(()=>k(e),[e,k]),P=(0,t.useMemo)(()=>nn(r||[])+1,[r]),F=Cc(i,u),T=l-o,D=I()(u,i,{id:""}).id.includes("min"),x=()=>{y("")},N=()=>{s||(o<a?(c(i,E,M,D),y(P)):o>=a&&m({type:"info",message:{id:v("components.notification.info.maximum-requirement")}}))},z=(R,A)=>{C(g({id:v("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${i}.${A}`,position:j(R)})),d({name:i,newIndex:R,currentIndex:A})},$=I()(E,["settings","mainField"],"id"),H=R=>()=>{y(p===R?"":R)},j=R=>`${R+1} of ${o}`,Y=R=>{C(g({id:v("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${i}.${R}`}))},B=R=>{C(g({id:v("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${i}.${R}`,position:j(R)}))},X=R=>{C(g({id:v("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${i}.${R}`,position:j(R)}))};let Z=u[i];if(D?Z={id:v("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",values:{number:T}}:F.some(R=>R.split(".").length>1)&&!D&&(Z={id:v("components.RepeatableComponent.error-message"),defaultMessage:"The component(s) contain error(s)"}),o===0)return t.createElement(Do,{error:Z,isReadOnly:s,onClick:N});const W=`${i}-item-instructions`;return t.createElement(S.x,{hasRadius:!0},t.createElement(Je.T,{id:W},g({id:v("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),t.createElement(Je.T,{"aria-live":"assertive"},b),t.createElement(Zn,{error:Z,ariaDescribedBy:W},t.createElement(Ec,{"aria-describedby":W},r.map(({__temp_key__:R},A)=>t.createElement(yc,{componentFieldName:`${i}.${A}`,componentUid:e,fields:E.layouts.edit,key:R,index:A,isOpen:p===R,isReadOnly:s,mainField:$,moveComponentField:z,onClickToggle:H(R),toggleCollapses:x,onCancel:Y,onDropItem:X,onGrabItem:B}))),t.createElement(bc,null,t.createElement(w.k,{justifyContent:"center",height:"48px",background:"neutral0"},t.createElement(vc,{disabled:s,onClick:N,startIcon:t.createElement(pt.Z,null)},g({id:v("containers.EditView.add.new-entry"),defaultMessage:"Add an entry"}))))))};qn.defaultProps={componentValue:null,componentValueLength:0,isReadOnly:!1,max:1/0,min:0},qn.propTypes={componentUid:n().string.isRequired,componentValue:n().oneOfType([n().array,n().object]),componentValueLength:n().number,isReadOnly:n().bool,max:n().number,min:n().number,name:n().string.isRequired};var Rc=(0,t.memo)(qn);const Nn=({addNonRepeatableComponentToField:e,componentUid:r,intlLabel:o,isCreatingEntry:s,isFromDynamicZone:a,isRepeatable:l,isNested:i,labelAction:c,max:u,min:d,name:m,hasChildrenAllowedFields:g,hasChildrenReadableFields:p,isReadOnly:y,componentValue:b,removeComponentFromField:C,required:k})=>{const{formatMessage:M}=(0,Q.Z)(),E=bi()(b),P=b!==null||a,F=!l&&P&&!a&&g,{getComponentLayout:T,components:D}=Ze(),x=(0,t.useMemo)(()=>T(r),[r,T]);if(!g&&s)return t.createElement(h.X0,{labelAction:c,intlLabel:o,name:m});if(!g&&!s&&!p)return t.createElement(h.X0,{labelAction:c,intlLabel:o,name:m});const N=()=>{e(m,x,D)};return t.createElement(S.x,null,t.createElement(w.k,{justifyContent:"space-between"},o&&t.createElement(Di,{intlLabel:o,labelAction:c,name:m,numberOfEntries:E,showNumberOfEntries:l,required:k}),F&&t.createElement(ge.h,{label:M({id:v("components.reset-entry"),defaultMessage:"Reset Entry"}),icon:t.createElement(Se.Z,null),noBorder:!0,onClick:()=>{C(m,r)}})),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:1},!l&&!P&&t.createElement(Do,{isReadOnly:y,onClick:N}),!l&&P&&t.createElement(uc,{componentUid:r,isFromDynamicZone:a,isNested:i,name:m}),l&&t.createElement(Rc,{componentValue:b,componentValueLength:E,componentUid:r,isReadOnly:y,max:u,min:d,name:m})))};Nn.defaultProps={componentValue:null,hasChildrenAllowedFields:!1,hasChildrenReadableFields:!1,intlLabel:void 0,isFromDynamicZone:!1,isReadOnly:!1,isRepeatable:!1,isNested:!1,labelAction:void 0,max:1/0,min:-1/0,required:!1},Nn.propTypes={addNonRepeatableComponentToField:n().func.isRequired,componentUid:n().string.isRequired,componentValue:n().oneOfType([n().object,n().array]),hasChildrenAllowedFields:n().bool,hasChildrenReadableFields:n().bool,isCreatingEntry:n().bool.isRequired,isFromDynamicZone:n().bool,isReadOnly:n().bool,isRepeatable:n().bool,isNested:n().bool,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),labelAction:n().element,max:n().number,min:n().number,name:n().string.isRequired,removeComponentFromField:n().func.isRequired,required:n().bool};const Tc=(0,t.memo)(Nn,qe());var Zt=Ci(Tc,Ti);const Mc=(0,q.ZP)(w.k)`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`,Dc=(0,q.ZP)(ge.h)`
  background-color: transparent;

  svg path {
    fill: ${({theme:e,expanded:r})=>r?e.colors.primary600:e.colors.neutral600};
  }
`,kc=(0,q.ZP)(S.x)`
  > div:first-child {
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  }
`,Ic=(0,q.ZP)(S.x)`
  border-radius: 0 0 ${({theme:e})=>e.spaces[1]} ${({theme:e})=>e.spaces[1]};
`,Lc=(0,q.ZP)(S.x)`
  width: ${({theme:e})=>e.spaces[2]};
  height: ${({theme:e})=>e.spaces[4]};
`,xc=q.ZP.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`,Pc=(0,q.ZP)(S.x)`
  list-style: none;
  padding: 0;
  margin: 0;
`,jn=({componentUid:e,formErrors:r,index:o,isFieldAllowed:s,name:a,onRemoveComponentClick:l,onMoveComponent:i,onGrabItem:c,onDropItem:u,onCancel:d})=>{const[m,g]=(0,t.useState)(!0),{formatMessage:p}=(0,Q.Z)(),{getComponentLayout:y}=Ze(),{modifiedData:b}=(0,h.Wq)(),{icon:C,friendlyName:k,mainValue:M}=(0,t.useMemo)(()=>{const B=y(e),{info:{icon:X,displayName:Z}}=B,W=I()(B,["settings","mainField"],"id"),R=I()(b,[a,o,W])??"",A=W==="id"?"":String(R).trim(),U=A.length>0?` - ${A}`:A;return{friendlyName:Z,icon:X,mainValue:U}},[e,y,b,a,o]),E=Object.keys(r).filter(B=>{const X=B.split(".");return`${X[0]}.${X[1]}`==`${a}.${o}`});let P;E.length>0&&(P=p({id:v("components.DynamicZone.error-message"),defaultMessage:"The component contains error(s)"}));const F=()=>{g(B=>!B)},[{handlerId:T,isDragging:D,handleKeyDown:x},N,z,$,H]=on(s,{type:`${Ce.DYNAMIC_ZONE}_${a}`,index:o,item:{displayedValue:`${k}${M}`,icon:C},onMoveItem:i,onGrabItem:c,onDropItem:u,onCancel:d});(0,t.useEffect)(()=>{H((0,ct.rX)(),{captureDraggingState:!1})},[H,o]);const j=Lt(N,z),Y=s?t.createElement(Mc,{gap:0,expanded:m},t.createElement(Dc,{noBorder:!0,label:p({id:v("components.DynamicZone.delete-label"),defaultMessage:"Delete {name}"},{name:k}),onClick:l},t.createElement(Se.Z,null)),t.createElement(ge.h,{forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:B=>B.stopPropagation(),"data-handler-id":T,ref:$,label:p({id:v("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:x},t.createElement($e.Z,null))):null;return t.createElement(Pc,{as:"li"},t.createElement(w.k,{justifyContent:"center"},t.createElement(Lc,{background:"neutral200"})),t.createElement(kc,{ref:j,hasRadius:!0},D?t.createElement(xc,{padding:6,background:"primary100"}):t.createElement(mn.U,{expanded:m,onToggle:F,size:"S",error:P},t.createElement(pn.B,{action:Y,title:`${k}${M}`,togglePosition:"left"}),t.createElement(gn.v,null,t.createElement(Ic,{background:"neutral0"},t.createElement(Zt,{componentUid:e,icon:C,name:`${a}.${o}`,isFromDynamicZone:!0}))))))};jn.defaultProps={formErrors:{},index:0,isFieldAllowed:!0,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0},jn.propTypes={componentUid:n().string.isRequired,formErrors:n().object,index:n().number,isFieldAllowed:n().bool,name:n().string.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onMoveComponent:n().func.isRequired,onRemoveComponentClick:n().func.isRequired};var wc=jn;const Bn=(0,q.ZP)(Mo.Z)`
  transform: ${({$isOpen:e})=>e?"rotate(45deg)":"rotate(0deg)"};
  > circle {
    fill: ${({theme:e,$hasError:r})=>r?e.colors.danger200:e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e,$hasError:r})=>r?e.colors.danger600:e.colors.neutral600};
  }
`,Fc=(0,q.ZP)(Cn.Y)`
  border-radius: 26px;
  border-color: ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-top: ${({theme:e})=>e.spaces[3]};
  padding-right: ${({theme:e})=>e.spaces[4]};
  padding-bottom: ${({theme:e})=>e.spaces[3]};
  padding-left: ${({theme:e})=>e.spaces[4]};

  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};
    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }
  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${Bn} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
  &:active {
    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    ${Bn} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,Sc=(0,q.ZP)(S.x)`
  height: 100%;
`,Wn=({hasError:e,hasMaxError:r,hasMinError:o,isDisabled:s,isOpen:a,label:l,missingComponentNumber:i,name:c,onClick:u})=>{const{formatMessage:d}=(0,Q.Z)(),m=d({id:v("components.DynamicZone.add-component"),defaultMessage:"Add a component to {componentName}"},{componentName:l||c}),g=d({id:"app.utils.close-label",defaultMessage:"Close"});let p=a?g:m;return r&&!a&&(p=d({id:"components.Input.error.validation.max",defaultMessage:"The value is too high."})),o&&!a&&(p=d({id:v("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"},{number:i})),t.createElement(w.k,{justifyContent:"center"},t.createElement(S.x,{style:{cursor:s?"not-allowed":"pointer"}},t.createElement(Fc,{type:"button",onClick:u,disabled:s,hasError:e},t.createElement(w.k,null,t.createElement(Sc,{"aria-hidden":!0,paddingRight:2},t.createElement(Bn,{$isOpen:a,$hasError:e&&!a})),t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:e&&!a?"danger600":"neutral500"},p)))))};Wn.defaultProps={hasError:!1,hasMaxError:!1,hasMinError:!1,isDisabled:!1,isOpen:!1,label:"",missingComponentNumber:0},Wn.propTypes={label:n().string,hasError:n().bool,hasMaxError:n().bool,hasMinError:n().bool,isDisabled:n().bool,isOpen:n().bool,missingComponentNumber:n().number,name:n().string.isRequired,onClick:n().func.isRequired};var Ac=Wn;const Oc=(0,q.ZP)(S.x)`
  border-radius: ${(0,h.Q1)(26)};
`,zn=({label:e,labelAction:r,name:o,numberOfComponents:s,required:a,intlDescription:l})=>{const{formatMessage:i}=(0,Q.Z)(),c=i({id:e||o,defaultMessage:e||o});return t.createElement(w.k,{justifyContent:"center"},t.createElement(S.x,null,t.createElement(Oc,{paddingTop:3,paddingBottom:3,paddingRight:4,paddingLeft:4,background:"neutral0",shadow:"filterShadow",color:"neutral500"},t.createElement(w.k,{direction:"column",justifyContent:"center"},t.createElement(w.k,{maxWidth:(0,h.Q1)(356)},t.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold",ellipsis:!0},c,"\xA0"),t.createElement(G.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold"},"(",s,")"),a&&t.createElement(G.Z,{textColor:"danger600"},"*"),r&&t.createElement(S.x,{paddingLeft:1},r)),l&&t.createElement(S.x,{paddingTop:1,maxWidth:(0,h.Q1)(356)},t.createElement(G.Z,{variant:"pi",textColor:"neutral600",ellipsis:!0},i(l)))))))};zn.defaultProps={intlDescription:void 0,label:"",labelAction:void 0,numberOfComponents:0,required:!1},zn.propTypes={intlDescription:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired}),label:n().string,labelAction:n().element,name:n().string.isRequired,numberOfComponents:n().number,required:n().bool};var $c=zn,Zc=f(81346),Ho=f.n(Zc);const qt=5,Nt=8,qc=(0,q.ZP)(w.k)`
  border-radius: ${({showBackground:e})=>e?"50%":0};
  color: ${({theme:e})=>e.colors.neutral600};
  height: ${({theme:e,size:r})=>e.spaces[r==="S"?qt:Nt]};
  width: ${({theme:e,size:r})=>e.spaces[r==="S"?qt:Nt]};

  svg {
    height: ${({theme:e,size:r})=>e.spaces[r==="S"?qt-2:Nt-3]};
    width: ${({theme:e,size:r})=>e.spaces[r==="S"?qt-2:Nt-3]};
  }
`;function jt({showBackground:e=!0,size:r="M"}){return t.createElement(qc,{alignItems:"center",background:e?"neutral200":null,justifyContent:"center",size:r,showBackground:e},t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},t.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}jt.defaultProps={showBackground:!0,size:"M"},jt.propTypes={showBackground:n().bool,size:n().string};const Nc=(0,q.ZP)(S.x)`
  flex-shrink: 0;
  height: ${(0,h.Q1)(84)};
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`;function Vn({children:e,onClick:r}){return t.createElement(Nc,{as:"button",type:"button",onClick:r,hasRadius:!0},t.createElement(w.k,{direction:"column",gap:1,alignItems:"center",justifyContent:"center"},t.createElement(jt,null),t.createElement(G.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral600"},e)))}Vn.defaultProps={onClick(){}},Vn.propTypes={children:n().node.isRequired,onClick:n().func};const jc=q.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140/16}rem);
  grid-gap: ${({theme:e})=>e.spaces[1]};
`,Un=({category:e,components:r,variant:o,isOpen:s,onAddComponent:a,onToggle:l})=>{const{formatMessage:i}=(0,Q.Z)(),c=()=>{l(e)};return t.createElement(mn.U,{expanded:s,onToggle:c,size:"S"},t.createElement(pn.B,{variant:o,title:i({id:e,defaultMessage:e}),togglePosition:"left"}),t.createElement(gn.v,null,t.createElement(S.x,{paddingTop:4,paddingBottom:4,paddingLeft:3,paddingRight:3},t.createElement(jc,null,r.map(({componentUid:u,info:{displayName:d}})=>t.createElement(Vn,{key:u,onClick:a(u)},i({id:d,defaultMessage:d})))))))};Un.defaultProps={components:[],isOpen:!1,variant:"primary"},Un.propTypes={category:n().string.isRequired,components:n().array,isOpen:n().bool,onAddComponent:n().func.isRequired,onToggle:n().func.isRequired,variant:n().oneOf(["primary","secondary"])};var Bc=Un;const Hn=({components:e,isOpen:r,onClickAddComponent:o})=>{const{formatMessage:s}=(0,Q.Z)(),{getComponentLayout:a}=Ze(),[l,i]=(0,t.useState)(""),c=(0,t.useMemo)(()=>{const m=e.map(p=>{const{category:y,info:b}=a(p);return{componentUid:p,category:y,info:b}}),g=Ho()(m,"category");return Object.keys(g).reduce((p,y)=>(p.push({category:y,components:g[y]}),p),[])},[e,a]);(0,t.useEffect)(()=>{r&&c.length>0&&i(c[0].category)},[r,c]);const u=m=>()=>{o(m),i("")},d=m=>{i(g=>g===m?"":m)};return r?t.createElement(S.x,{paddingBottom:6},t.createElement(S.x,{paddingTop:6,paddingBottom:6,paddingLeft:5,paddingRight:5,background:"neutral0",shadow:"tableShadow",borderColor:"neutral150",hasRadius:!0},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral600"},s({id:v("components.DynamicZone.ComponentPicker-label"),defaultMessage:"Pick one component"}))),t.createElement(S.x,{paddingTop:2},t.createElement(Uo.k,{attributeName:"data-strapi-accordion-toggle"},c.map(({category:m,components:g},p)=>t.createElement(Bc,{key:m,category:m,components:g,onAddComponent:u,isOpen:m===l,onToggle:d,variant:p%2===1?"primary":"secondary"})))))):null};Hn.defaultProps={components:[],isOpen:!1},Hn.propTypes={components:n().array,isOpen:n().bool,onClickAddComponent:n().func.isRequired};var Wc=Hn;const Gn=({name:e,addComponentToDynamicZone:r,formErrors:o,isCreatingEntry:s,isFieldAllowed:a,isFieldReadable:l,labelAction:i,moveComponentField:c,removeComponentFromDynamicZone:u,dynamicDisplayedComponents:d,fieldSchema:m,metadatas:g})=>{const[p,y]=(0,t.useState)(!1),[b,C]=(0,t.useState)(""),{formatMessage:k}=(0,Q.Z)(),M=(0,h.lm)(),{getComponentLayout:E,components:P}=Ze(),F=d.length,T=g.description?{id:g.description,defaultMessage:g.description}:null,{max:D=1/0,min:x=-1/0}=m,N=(0,t.useMemo)(()=>Object.keys(o).filter(L=>L===e).map(L=>o[L]),[o,e]),z=x-F,$=N.length>0,H=N.length>0&&I()(N,[0,"id"],"").includes("min"),j=$&&I()(N,[0,"id"],"")==="components.Input.error.validation.max",Y=L=>{y(!1);const O=E(L);r(e,O,P,$)},B=()=>{F<D?y(L=>!L):M({type:"info",message:{id:v("components.notification.info.maximum-requirement")}})},X=(L,O)=>{C(k({id:v("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${e}.${O}`,position:Z(L)})),c({name:e,newIndex:L,currentIndex:O})},Z=L=>`${L+1} of ${d.length}`,W=L=>{C(k({id:v("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${e}.${L}`}))},R=L=>{C(k({id:v("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${e}.${L}`,position:Z(L)}))},A=L=>{C(k({id:v("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${e}.${L}`,position:Z(L)}))},U=(L,O)=>()=>{u(L,O)};if(!a&&(s||!l&&!s))return t.createElement(h.X0,{description:T,intlLabel:{id:g.label,defaultMessage:g.label},labelAction:i,name:e});const K=`${e}-item-instructions`;return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},F>0&&t.createElement(S.x,null,t.createElement($c,{intlDescription:T,label:g.label,labelAction:i,name:e,numberOfComponents:F,required:m.required||!1}),t.createElement(Je.T,{id:K},k({id:v("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),t.createElement(Je.T,{"aria-live":"assertive"},b),t.createElement("ol",{"aria-describedby":K},d.map(({componentUid:L,id:O},re)=>t.createElement(wc,{componentUid:L,formErrors:o,key:`${L}-${O}`,index:re,isFieldAllowed:a,name:e,onMoveComponent:X,onRemoveComponentClick:U(e,re),onCancel:W,onDropItem:A,onGrabItem:R})))),t.createElement(Ac,{hasError:$,hasMaxError:j,hasMinError:H,isDisabled:!a,label:g.label,missingComponentNumber:z,isOpen:p,name:e,onClick:B}),t.createElement(Wc,{isOpen:p,components:m.components??[],onClickAddComponent:Y}))};Gn.defaultProps={dynamicDisplayedComponents:[],fieldSchema:{max:1/0,min:-1/0},labelAction:null},Gn.propTypes={addComponentToDynamicZone:n().func.isRequired,dynamicDisplayedComponents:n().arrayOf(n().shape({componentUid:n().string.isRequired,id:n().number.isRequired})),fieldSchema:n().shape({components:n().array.isRequired,max:n().number,min:n().number,required:n().bool}),formErrors:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isFieldAllowed:n().bool.isRequired,isFieldReadable:n().bool.isRequired,labelAction:n().element,metadatas:n().shape({description:n().string,label:n().string}).isRequired,moveComponentField:n().func.isRequired,name:n().string.isRequired,removeComponentFromDynamicZone:n().func.isRequired};const zc=(0,t.memo)(Gn,qe());var Vc=gi(zc,hi),Ne=f(41578);const Bt=()=>({type:Ne.ZA}),Qn=e=>({type:Ne.Id,data:e}),Kn=(e,r=!1)=>({type:Ne.TP,rawQuery:e,isSingleType:r}),Go=()=>({type:Ne.c2}),Qo=(e,r)=>({type:Ne.w7,componentsDataStructure:e,contentTypeDataStructure:r}),ce=e=>({type:Ne.d0,status:e}),je=e=>({type:Ne.t9,data:e}),Uc=()=>({type:Ne.tE});var Yn=e=>e["content-manager_editViewCrudReducer"];const Xn=({allLayoutData:e,children:r,slug:o,id:s,origin:a})=>{const l=(0,He.useQueryClient)(),i=(0,h.lm)(),{setCurrentStep:c}=(0,h.c1)(),{trackUsage:u}=(0,h.rS)(),{push:d,replace:m}=(0,ie.k6)(),[{rawQuery:g}]=(0,h.Kx)(),p=(0,le.I0)(),{componentsDataStructure:y,contentTypeDataStructure:b,data:C,isLoading:k,status:M}=(0,le.v9)(Yn),E=uo(o),{formatAPIError:P}=(0,h.So)(v),F=(0,t.useRef)(!0),T=(0,t.useRef)(u),D=(0,t.useRef)(e),x=(0,h.kY)(),{put:N,post:z,del:$}=x,H=s===null,j=(0,t.useMemo)(()=>H&&!a?null:de(`collection-types/${o}/${a||s}`),[o,s,H,a]),Y=(0,t.useCallback)(L=>a?(0,h.w6)(L,D.current.contentType,D.current.components):L,[a]),B=(0,t.useCallback)(L=>{const O=Yr(L,D.current.contentType,D.current.components);return(0,h.dU)(O,D.current.contentType,D.current.components)},[]);(0,t.useEffect)(()=>{const L=Object.keys(e.components).reduce((ee,oe)=>{const V=xt(I()(e,["components",oe,"attributes"],{}),e.components);return ee[oe]=(0,h.dU)(V,e.components[oe],e.components),ee},{}),O=xt(e.contentType.attributes,e.components),re=(0,h.dU)(O,e.contentType,e.components);p(Qo(L,re))},[e,p]),(0,t.useEffect)(()=>()=>{p(Go())},[p]),(0,t.useEffect)(()=>{const O=ve.Z.CancelToken.source(),re=async oe=>{p(Bt());try{const{data:V}=await x.get(j,{cancelToken:oe.token});p(Qn(B(Y(V))))}catch(V){if(ve.Z.isCancel(V))return;const se=I()(V,"response.status",null);if(se===404){d(E);return}se===403&&(i({type:"info",message:{id:v("permissions.not-allowed.update")}}),d(E))}},ee=async()=>{await p(Bt()),await p(Kn(g))};return F.current?(j?re(O):ee(),()=>{O.cancel("Operation canceled by the user.")}):()=>{}},[x,Y,B,d,j,p,g,E,i]);const X=(0,t.useCallback)(L=>{i({type:"warning",message:P(L)})},[i,P]),Z=(0,t.useCallback)(async L=>{try{T.current("willDeleteEntry",L);const{data:O}=await $(de(`collection-types/${o}/${s}`));return i({type:"success",message:{id:v("success.record.delete")}}),T.current("didDeleteEntry",L),m(E),Promise.resolve(O)}catch(O){return T.current("didNotDeleteEntry",{error:O,...L}),Promise.reject(O)}},[s,o,i,$,E,m]),W=(0,t.useCallback)(async(L,O)=>{const re=`${de(`collection-types/${o}`)}${g}`;try{p(ce("submit-pending"));const{data:ee}=await z(re,L);return T.current("didCreateEntry",O),i({type:"success",message:{id:v("success.record.save")}}),c("contentManager.success"),l.invalidateQueries(["relation"]),p(je(B(ee))),p(ce("resolved")),m(`/content-manager/collectionType/${o}/${ee.id}${g}`),Promise.resolve(ee)}catch(ee){return X(ee),T.current("didNotCreateEntry",{error:ee,trackerProperty:O}),p(ce("resolved")),Promise.reject(ee)}},[B,X,m,o,p,g,i,c,l,z]),R=(0,t.useCallback)(async()=>{try{T.current("willCheckDraftRelations");const L=de(`collection-types/${o}/${s}/actions/numberOfDraftRelations`);p(ce("draft-relation-check-pending"));const O=await x.get(L);return T.current("didCheckDraftRelations"),p(ce("resolved")),O.data.data}catch(L){return X(L),p(ce("resolved")),Promise.reject(L)}},[X,s,o,p,x]),A=(0,t.useCallback)(async()=>{try{T.current("willPublishEntry");const L=de(`collection-types/${o}/${s}/actions/publish`);p(ce("publish-pending"));const{data:O}=await z(L);return T.current("didPublishEntry"),p(je(B(O))),p(ce("resolved")),i({type:"success",message:{id:v("success.record.publish")}}),Promise.resolve(O)}catch(L){return X(L),p(ce("resolved")),Promise.reject(L)}},[B,X,s,o,p,i,z]),U=(0,t.useCallback)(async(L,O)=>{const re=de(`collection-types/${o}/${s}`);try{T.current("willEditEntry",O),p(ce("submit-pending"));const{data:ee}=await N(re,L);return T.current("didEditEntry",{trackerProperty:O}),i({type:"success",message:{id:v("success.record.save")}}),l.invalidateQueries(["relation"]),p(je(B(ee))),p(ce("resolved")),Promise.resolve(ee)}catch(ee){return T.current("didNotEditEntry",{error:ee,trackerProperty:O}),X(ee),p(ce("resolved")),Promise.reject(ee)}},[B,X,o,s,p,i,l,N]),K=(0,t.useCallback)(async()=>{const L=de(`collection-types/${o}/${s}/actions/unpublish`);p(ce("unpublish-pending"));try{T.current("willUnpublishEntry");const{data:O}=await z(L);return T.current("didUnpublishEntry"),i({type:"success",message:{id:v("success.record.unpublish")}}),p(je(B(O))),p(ce("resolved")),Promise.resolve(O)}catch(O){return p(ce("resolved")),X(O),Promise.reject(O)}},[B,X,s,o,p,i,z]);return r({componentsDataStructure:y,contentTypeDataStructure:b,data:C,isCreatingEntry:H,isLoadingForData:k,onDelete:Z,onPost:W,onPublish:A,onDraftRelationCheck:R,onPut:U,onUnpublish:K,status:M,redirectionLink:E})};Xn.defaultProps={id:null,origin:null},Xn.propTypes={allLayoutData:n().exact({components:n().object.isRequired,contentType:n().shape({apiID:n().string.isRequired,attributes:n().object.isRequired,info:n().object.isRequired,isDisplayed:n().bool.isRequired,kind:n().string.isRequired,layouts:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,pluginOptions:n().object,settings:n().object.isRequired,uid:n().string.isRequired}).isRequired}).isRequired,children:n().func.isRequired,id:n().string,origin:n().string,slug:n().string.isRequired};var Hc=(0,t.memo)(Xn,qe()),Gc=f(86834),ye=f.n(Gc),Qc=f(89793),gt=f.n(Qc),Kc=f(56236),Yc=f.n(Kc),Xc=f(10268),Ko=f.n(Xc),Jn=f(99526),Yo=(e,r,o,s)=>{const a=e.slice();return a.splice(r,1),a.splice(o,0,s),a},Jc=f(77236),_c=f.n(Jc);const ed=({browserState:e,serverState:r},o,s)=>{const a=r,l=e,i=(d,m)=>I()(d,["attributes",m,"type"],""),c=(d,m)=>I()(d,["attributes",...m],""),u=(d,m,g,p)=>Object.keys(d).reduce((y,b)=>{const C=p?`${p}.${b}`:b,k=i(g,b),M=I()(d,b),E=I()(m,b),P=c(g,[b,"component"]),F=c(g,[b,"repeatable"]);let T;switch(k){case"json":T=JSON.parse(M);break;case"time":{T=M,M&&M.split(":").length<3&&(T=`${M}:00`);break}case"media":c(g,[b,"multiple"])===!0?T=M?M.filter(D=>!(D instanceof File)):null:T=I()(M,0)instanceof File?null:I()(M,"id",null);break;case"component":F?T=M&&M.map((D,x)=>u(D,(E??[])[x],s[P],`${C}.${x}`)):T=M&&u(M,E,s[P],C);break;case"relation":{const D=Wo(a,l)(C).join(".");let x=I()(a,D,[]);const N=M.reduce(($,H,j,Y)=>{const B=x.find(Z=>Z.id===H.id),X=Y[j+1];if(!B||B.__temp_key__!==H.__temp_key__){const Z=X?{before:X.id}:{end:!0};return[...$,{id:H.id,position:Z}]}return $},[]);T={disconnect:x.reduce(($,H)=>M.find(j=>j.id===H.id)?$:[...$,{id:H.id}],[]),connect:N.reverse()};break}case"dynamiczone":T=M.map((D,x)=>u(D,(E??[])[x],s[D.__component],`${C}.${x}`));break;default:T=td(M,"id")}return y[b]=T,y},{});return u(e,r,o,"")},td=(e,r)=>_c()(e)?e.map(o=>o[r]?o[r]:o):lo()(e)?e[r]:e;var nd=ed,rd=f(51355),od=f.n(rd),sd=f(78746),rt=f.n(sd),me=f(24346);function ft(e){return["integer","biginteger","decimal","float","number"].includes(e)}me.kM(me.nK,"defined",function(){return this.test("defined",h.I0.required,e=>e!==void 0)}),me.kM(me.IX,"notEmptyMin",function(e){return this.test("notEmptyMin",h.I0.min,r=>ye()(r)?!0:r.length>=e)}),me.kM(me.Z_,"isInferior",function(e,r){return this.test("isInferior",e,function(o){return!o||Number.isNaN(rt()(o))?!0:rt()(r)>=rt()(o)})}),me.kM(me.Z_,"isSuperior",function(e,r){return this.test("isSuperior",e,function(o){return!o||Number.isNaN(rt()(o))?!0:rt()(o)>=rt()(r)})});const ad=e=>I()(e,["attributes"],{}),_n=(e,{components:r},o={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const s=ad(e);return me.Ry().shape(Object.keys(s).reduce((a,l)=>{const i=s[l];if(i.type!=="relation"&&i.type!=="component"&&i.type!=="dynamiczone"){const c=id(i.type,i,o);a[l]=c}if(i.type==="relation"&&(a[l]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(i.relationType)?me.Ry().nullable():me.IX().nullable()),i.type==="component"){const c=_n(r[i.component],{components:r},{...o,isFromComponent:!0});if(i.repeatable===!0){const{min:d,max:m,required:g}=i;let p=me.Vo(y=>{let b=me.IX().of(c);return d?g?b=b.min(d,h.I0.min):g!==!0&&ye()(y)?b=b.nullable():b=b.min(d,h.I0.min):g&&!o.isDraft&&(b=b.min(1,h.I0.required)),m&&(b=b.max(m,h.I0.max)),b});return a[l]=p,a}const u=me.Vo(d=>d!==void 0?i.required===!0&&!o.isDraft?c.defined():c.nullable():i.required===!0?me.Ry().defined():me.Ry().nullable());return a[l]=u,a}if(i.type==="dynamiczone"){let c=me.IX().of(me.Vo(({__component:m})=>_n(r[m],{components:r},{...o,isFromComponent:!0})));const{max:u,min:d}=i;d?i.required?c=c.test("min",h.I0.min,m=>o.isCreatingEntry?m&&m.length>=d:m===void 0?!0:m!==null&&m.length>=d).test("required",h.I0.required,m=>o.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null):c=c.notEmptyMin(d):i.required&&!o.isDraft&&(c=c.test("required",h.I0.required,m=>o.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null)),u&&(c=c.max(u,h.I0.max)),a[l]=c}return a},{}))},id=(e,r,o)=>{let s=me.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(e)&&(s=me.Z_()),e==="json"&&(s=me.nK(h.I0.json).test("isJSON",h.I0.json,a=>{if(!a||!a.length)return!0;try{return JSON.parse(a),!0}catch{return!1}}).nullable().test("required",h.I0.required,a=>!(r.required&&(!a||!a.length)))),e==="email"&&(s=s.email(h.I0.email)),["number","integer","float","decimal"].includes(e)&&(s=me.Rx().transform(a=>Gr()(a)?void 0:a).typeError()),e==="biginteger"&&(s=me.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(e)&&(s=me.hT()),Object.keys(r).forEach(a=>{const l=r[a];if(l||!od()(l)&&Number.isInteger(Math.floor(l))||l===0)switch(a){case"required":{o.isDraft||(e==="password"&&o.isCreatingEntry&&(s=s.required(h.I0.required)),e!=="password"&&(o.isCreatingEntry?s=s.required(h.I0.required):s=s.test("required",h.I0.required,i=>i===void 0&&!o.isFromComponent?!0:ft(e)?i===0?!0:!!i:e==="boolean"?i!=null:e==="date"||e==="datetime"?typeof i=="string"?!ye()(i):!ye()(i?.toString()):!ye()(i))));break}case"max":{e==="biginteger"?s=s.isInferior(h.I0.max,l):s=s.max(l,h.I0.max);break}case"maxLength":s=s.max(l,h.I0.maxLength);break;case"min":{e==="biginteger"?s=s.isSuperior(h.I0.min,l):s=s.min(l,h.I0.min);break}case"minLength":{o.isDraft||(s=s.min(l,h.I0.minLength));break}case"regex":s=s.matches(new RegExp(l),{message:h.I0.regex,excludeEmptyString:!r.required});break;case"lowercase":["text","textarea","email","string"].includes(e)&&(s=s.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(e)&&(s=s.strict().uppercase());break;case"positive":ft(e)&&(s=s.positive());break;case"negative":ft(e)&&(s=s.negative());break;default:s=s.nullable()}}),s};var Xo=_n;const Wt=(e,r=()=>!1,o=void 0)=>{const s=(a,l,{ignoreFalseyValues:i=!1,path:c=[],parent:u=l}={})=>Object.entries(l).reduce((d,[m,g])=>{if(i&&(d==null||d[m]===void 0||d[m]===null))return d;if(r(g,{path:[...c,m],parent:u})&&(d[m]=typeof o=="function"?o(d[m],{path:[...c,m],parent:d}):o),g.type==="component"){const p=e[g.component].attributes;!g.repeatable&&d[m]&&typeof d[m]=="object"?d[m]=s(d[m],p,{ignoreFalseyValues:i,path:[...c,m],parent:l[m]}):g.repeatable&&Array.isArray(d[m])&&(d[m]=d[m].map((y,b)=>s(y,p,{ignoreFalseyValues:i,path:[...c,m,b],parent:l[m]})))}else g.type==="dynamiczone"&&Array.isArray(d[m])&&(d[m]=d[m].map((p,y)=>{const b=e[p.__component].attributes;return s(p,b,{ignoreFalseyValues:i,path:[...c,m,y],parent:l[m]})}));return d},{...a});return s},ld={componentsDataStructure:{},contentTypeDataStructure:{},formErrors:{},initialData:{},modifiedData:null,shouldCheckErrors:!1,modifiedDZName:null,publishConfirmation:{show:!1,draftCount:0}};var cd=(e,r)=>(0,St.ZP)(e,o=>{switch(r.type){case"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD":{const{componentLayoutData:s,allComponents:a}=r,l={...e.componentsDataStructure[s.uid]},c=Wt(a,u=>u.type==="relation",[])(l,s.attributes);J()(o,["modifiedData",...r.keys],c);break}case"ADD_COMPONENT_TO_DYNAMIC_ZONE":case"ADD_REPEATABLE_COMPONENT_TO_FIELD":{const{keys:s,allComponents:a,componentLayoutData:l,shouldCheckErrors:i}=r;i&&(o.shouldCheckErrors=!e.shouldCheckErrors),r.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"&&(o.modifiedDZName=s[0]);const c=I()(e,["modifiedData",...s],[]),u=r.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"?{...e.componentsDataStructure[l.uid],__component:l.uid,__temp_key__:nn(c)+1}:{...e.componentsDataStructure[l.uid],__temp_key__:nn(c)+1},m=Wt(a,p=>p.type==="relation",[])(u,l.attributes),g=Array.isArray(c)?[...c,m]:[m];J()(o,["modifiedData",...s],g);break}case"LOAD_RELATION":{const{initialDataPath:s,modifiedDataPath:a,value:l}=r,i=I()(e,s),c=I()(e,a),u=i?l.filter(g=>!i.some(p=>p.id===g.id)):l,d=(0,Jn.zJ)(null,c[0]?.__temp_key__,u.length),m=u.map((g,p)=>({...g,__temp_key__:d[p]}));J()(o,s,Ko()([...m,...i],"id")),J()(o,a,Ko()([...m,...c],"id"));break}case"CONNECT_RELATION":{const s=["modifiedData",...r.keys],{value:a,toOneRelation:l}=r;if(l)J()(o,s,[a]);else{const i=I()(e,s),[c]=(0,Jn.zJ)(i.at(-1)?.__temp_key__,null,1),u=[...i,{...a,__temp_key__:c}];J()(o,s,u)}break}case"DISCONNECT_RELATION":{const s=["modifiedData",...r.keys],{id:a}=r,i=I()(e,[...s]).filter(c=>c.id!==a);J()(o,s,i);break}case"MOVE_COMPONENT_FIELD":case"REORDER_RELATION":{const{oldIndex:s,newIndex:a,keys:l}=r,i=["modifiedData",...l],c=I()(e,[...i]),u=c[s],d=[...c];if(r.type==="REORDER_RELATION"){const m=s>a?c[a-1]?.__temp_key__:c[a]?.__temp_key__,g=s>a?c[a]?.__temp_key__:c[a+1]?.__temp_key__,[p]=(0,Jn.zJ)(m,g,1);d.splice(s,1),d.splice(a,0,{...u,__temp_key__:p})}else d.splice(s,1),d.splice(a,0,u);J()(o,i,d);break}case"INIT_FORM":{const{initialValues:s,components:a={},attributes:l={},setModifiedDataOnly:i}=r,c=Me()(s),d=Wt(a,p=>p.type==="relation",(p,{path:y})=>e.modifiedData?.id===c.id&&I()(e.modifiedData,y)?I()(e.modifiedData,y):[])(c,l),g=Wt(a,p=>p.type==="dynamiczone"||p.type==="component"&&!p.repeatable,p=>Array.isArray(p)?p.map((y,b)=>({...y,__temp_key__:b})):{...p,__temp_key__:0})(d,l,{ignoreFalseyValues:!0});i||(o.initialData=g),o.modifiedData=g,o.formErrors={},o.modifiedDZName=null,o.shouldCheckErrors=!1;break}case"MOVE_COMPONENT_UP":case"MOVE_COMPONENT_DOWN":{const{currentIndex:s,dynamicZoneName:a,shouldCheckErrors:l}=r;l&&(o.shouldCheckErrors=!e.shouldCheckErrors);const i=e.modifiedData[a],c=r.type==="MOVE_COMPONENT_UP"?s-1:s+1,u=e.modifiedData[a][s],d=Yo(i,s,c,u);J()(o,["modifiedData",r.dynamicZoneName],d);break}case"MOVE_FIELD":{const s=I()(e,["modifiedData",...r.keys],[]).slice(),a=I()(e,["modifiedData",...r.keys,r.dragIndex]),l=Yo(s,r.dragIndex,r.overIndex,a);J()(o,["modifiedData",...r.keys],l);break}case"ON_CHANGE":{const[s]=r.keys;if(r.shouldSetInitialValue&&J()(o,["initialData",...r.keys],r.value),r.keys.length===2&&I()(e,["modifiedData",s])===null){J()(o,["modifiedData",s],{[r.keys[1]]:r.value});break}J()(o,["modifiedData",...r.keys],r.value);break}case"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE":{r.shouldCheckErrors&&(o.shouldCheckErrors=!e.shouldCheckErrors),o.modifiedData[r.dynamicZoneName].splice(r.index,1);break}case"REMOVE_COMPONENT_FROM_FIELD":{const s=["modifiedData",...r.keys];J()(o,s,null);break}case"REMOVE_PASSWORD_FIELD":{Yc()(o,["modifiedData",...r.keys]);break}case"REMOVE_REPEATABLE_FIELD":{const s=r.keys.length-1,a=["modifiedData",...dt()(r.keys,s)];Object.keys(e.formErrors).length>0&&(o.shouldCheckErrors=!e.shouldCheckErrors);const i=I()(e,a).slice();i.splice(parseInt(r.keys[s],10),1),J()(o,a,i);break}case"SET_DEFAULT_DATA_STRUCTURES":{o.componentsDataStructure=r.componentsDataStructure,o.contentTypeDataStructure=r.contentTypeDataStructure;break}case"SET_FORM_ERRORS":{o.modifiedDZName=null,o.formErrors=r.errors;break}case"TRIGGER_FORM_VALIDATION":{Object.keys(e.formErrors).length>0&&(o.shouldCheckErrors=!e.shouldCheckErrors);break}case"SET_PUBLISH_CONFIRMATION":{o.publishConfirmation={...r.publishConfirmation};break}case"RESET_PUBLISH_CONFIRMATION":{o.publishConfirmation={...e.publishConfirmation,show:!1};break}default:return o}});const er=({allLayoutData:e,allowedActions:{canRead:r,canUpdate:o},children:s,componentsDataStructure:a,contentTypeDataStructure:l,createActionAllowedFields:i,from:c,initialValues:u,isCreatingEntry:d,isLoadingForData:m,isSingleType:g,onPost:p,onPublish:y,onDraftRelationCheck:b,onPut:C,onUnpublish:k,readActionAllowedFields:M,redirectToPreviousPage:E,slug:P,status:F,updateActionAllowedFields:T})=>{const[D,x]=(0,t.useReducer)(cd,ld),{formErrors:N,initialData:z,modifiedData:$,modifiedDZName:H,shouldCheckErrors:j,publishConfirmation:Y}=D,{setModifiedDataOnly:B}=(0,le.v9)(Yn),X=(0,le.I0)(),Z=(0,h.lm)(),{lockApp:W,unlockApp:R}=(0,h.o1)(),A=I()(e,["contentType"],{}),U=(0,t.useMemo)(()=>I()(A,["options","draftAndPublish"],!1),[A]),K=(0,t.useMemo)(()=>U&&!z.publishedAt,[U,z.publishedAt]),{trackUsage:L}=(0,h.rS)(),{formatMessage:O}=(0,Q.Z)(),re=(0,t.useRef)(L),ee=(0,t.useMemo)(()=>m||d?!1:r===!1&&o===!1,[m,d,r,o]);(0,t.useEffect)(()=>{F==="resolved"?R():W()},[W,R,F]),(0,t.useEffect)(()=>{m||ke()},[j]),(0,t.useEffect)(()=>{const ne=Object.keys(N);if(ne.length>0){const _=ne[0],ae=document.getElementById(_);ae&&ae.focus()}},[N]),(0,t.useEffect)(()=>{ee&&Z({type:"info",message:{id:v("permissions.not-allowed.update")}})},[ee,Z]),(0,t.useEffect)(()=>{x({type:"SET_DEFAULT_DATA_STRUCTURES",componentsDataStructure:a,contentTypeDataStructure:l})},[a,l]);const{components:oe}=e,V=fo(u);(0,t.useEffect)(()=>{u&&A?.attributes&&!gt()(V,u)&&(x({type:"INIT_FORM",initialValues:u,components:oe,attributes:A.attributes,setModifiedDataOnly:B}),B&&X(Uc()))},[u,A,oe,B,X,V]);const se=(0,t.useCallback)(ne=>(_,ae,Le,Qe=!1)=>{re.current("didAddComponentToDynamicZone"),x({type:ne,keys:_.split("."),componentLayoutData:ae,allComponents:Le,shouldCheckErrors:Qe})},[]),be=se("ADD_COMPONENT_TO_DYNAMIC_ZONE"),Oe=(0,t.useCallback)((ne,_,ae)=>{x({type:"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",keys:ne.split("."),componentLayoutData:_,allComponents:ae})},[]),Ct=(0,t.useCallback)(({name:ne,value:_,toOneRelation:ae})=>{x({type:"CONNECT_RELATION",keys:ne.split("."),value:_,toOneRelation:ae})},[]),vt=(0,t.useCallback)(({target:{initialDataPath:ne,modifiedDataPath:_,value:ae}})=>{x({type:"LOAD_RELATION",modifiedDataPath:_,initialDataPath:ne,value:ae})},[]),Rt=se("ADD_REPEATABLE_COMPONENT_TO_FIELD"),Re=(0,t.useMemo)(()=>{const ne={isCreatingEntry:d,isDraft:K,isFromComponent:!1};return Xo(A,{components:e.components||{}},ne)},[e.components,A,d,K]),ke=(0,t.useCallback)(async(ne={})=>{let _={};const ae=Me()($);ye()(ae)||J()(ae,ne.path,ne.value);try{await Re.validate(ae,{abortEarly:!1})}catch(Le){_=(0,h.CJ)(Le),H&&(_=Object.keys(_).reduce((Qe,Sr)=>(Sr.split(".")[0]!==H&&(Qe[Sr]=_[Sr]),Qe),{}))}x({type:"SET_FORM_ERRORS",errors:_})},[H,$,Re]),Tt=(0,t.useCallback)(({target:{name:ne,value:_,type:ae}},Le=!1)=>{let Qe=_;if(["text","textarea","string","email","uid","select","select-one","number"].includes(ae)&&!_&&_!==0&&(Qe=null),ae==="password"&&!_){x({type:"REMOVE_PASSWORD_FIELD",keys:ne.split(".")});return}x({type:"ON_CHANGE",keys:ne.split("."),value:Qe,shouldSetInitialValue:Le})},[]),Be=(0,t.useCallback)((ne,_)=>nd({browserState:ne,serverState:_},A,e.components),[e.components,A]),te=(0,t.useMemo)(()=>U?K?{status:"draft"}:{}:{},[U,K]),pe=(0,t.useCallback)(async ne=>(ne.preventDefault(),x({type:"RESET_PUBLISH_CONFIRMATION"})),[]),Ie=(0,t.useCallback)(async ne=>{ne.preventDefault();let _={};try{await Re.validate($,{abortEarly:!1})}catch(ae){_=(0,h.CJ)(ae)}try{if(ye()(_)){const ae=Be($,z);d?await p(ae,te):await C(ae,te)}}catch(ae){_={..._,...(0,h.nn)(ae,{getTrad:v})}}x({type:"SET_FORM_ERRORS",errors:_})},[Be,d,$,z,p,C,te,Re]),Fr=(0,t.useCallback)(async()=>{const ne=Xo(A,{components:I()(e,"components",{})},{isCreatingEntry:d,isDraft:!1,isFromComponent:!1}),_=await b();if(!Y.show&&_>0){x({type:"SET_PUBLISH_CONFIRMATION",publishConfirmation:{show:!0,draftCount:_}});return}x({type:"RESET_PUBLISH_CONFIRMATION"});let ae={};try{await ne.validate($,{abortEarly:!1})}catch(Le){ae=(0,h.CJ)(Le)}try{ye()(ae)&&await y()}catch(Le){ae={...ae,...(0,h.nn)(Le,{getTrad:v})}}x({type:"SET_FORM_ERRORS",errors:ae})},[e,A,d,$,Y.show,y,b]),We=(0,t.useCallback)(ne=>{const _=Object.keys(N).some(Le=>Le.split(".")[0]===ne);return!ye()(N)&&_},[N]),pp=(0,t.useCallback)((ne,_)=>{re.current("changeComponentsOrder"),x({type:"MOVE_COMPONENT_DOWN",dynamicZoneName:ne,currentIndex:_,shouldCheckErrors:We(ne)})},[We]),gp=(0,t.useCallback)((ne,_)=>{re.current("changeComponentsOrder"),x({type:"MOVE_COMPONENT_UP",dynamicZoneName:ne,currentIndex:_,shouldCheckErrors:We(ne)})},[We]),fp=(0,t.useCallback)(({name:ne,newIndex:_,currentIndex:ae})=>{x({type:"MOVE_COMPONENT_FIELD",keys:ne.split("."),newIndex:_,oldIndex:ae})},[]),hp=(0,t.useCallback)(({name:ne,id:_})=>{x({type:"DISCONNECT_RELATION",keys:ne.split("."),id:_})},[]),yp=(0,t.useCallback)(({name:ne,oldIndex:_,newIndex:ae})=>{x({type:"REORDER_RELATION",keys:ne.split("."),oldIndex:_,newIndex:ae})},[]),bp=(0,t.useCallback)((ne,_)=>{re.current("removeComponentFromDynamicZone"),x({type:"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",dynamicZoneName:ne,index:_,shouldCheckErrors:We(ne)})},[We]),Ep=(0,t.useCallback)((ne,_)=>{x({type:"REMOVE_COMPONENT_FROM_FIELD",keys:ne.split("."),componentUid:_})},[]),Cp=(0,t.useCallback)((ne,_)=>{x({type:"REMOVE_REPEATABLE_FIELD",keys:ne.split("."),componentUid:_})},[]),vp=(0,t.useCallback)(()=>{x({type:"TRIGGER_FORM_VALIDATION"})},[]);return ee?t.createElement(ie.l_,{to:c}):$?t.createElement(h.W1.Provider,{value:{addComponentToDynamicZone:be,addNonRepeatableComponentToField:Oe,addRepeatableComponentToField:Rt,allLayoutData:e,checkFormErrors:ke,createActionAllowedFields:i,formErrors:N,hasDraftAndPublish:U,initialData:z,isCreatingEntry:d,isSingleType:g,shouldNotRunValidations:K,status:F,layout:A,modifiedData:$,moveComponentField:fp,moveComponentDown:pp,moveComponentUp:gp,onChange:Tt,onPublish:Fr,onUnpublish:k,readActionAllowedFields:M,redirectToPreviousPage:E,removeComponentFromDynamicZone:bp,removeComponentFromField:Ep,removeRepeatableField:Cp,relationConnect:Ct,relationDisconnect:hp,relationLoad:vt,relationReorder:yp,slug:P,triggerFormValidation:vp,updateActionAllowedFields:T,onPublishPromptDismissal:pe,publishConfirmation:Y}},m||!d&&!z.id?t.createElement(xe.o,{"aria-busy":"true"},t.createElement(h.dO,null)):t.createElement(t.Fragment,null,t.createElement(ie.NL,{when:!gt()($,z),message:O({id:"global.prompt.unsaved"})}),t.createElement("form",{noValidate:!0,onSubmit:Ie},s))):null};er.defaultProps={from:"/",initialValues:null,redirectToPreviousPage(){}},er.propTypes={allLayoutData:n().object.isRequired,allowedActions:n().object.isRequired,children:n().node.isRequired,componentsDataStructure:n().object.isRequired,contentTypeDataStructure:n().object.isRequired,createActionAllowedFields:n().array.isRequired,from:n().string,initialValues:n().object,isCreatingEntry:n().bool.isRequired,isLoadingForData:n().bool.isRequired,isSingleType:n().bool.isRequired,onPost:n().func.isRequired,onPublish:n().func.isRequired,onDraftRelationCheck:n().func.isRequired,onPut:n().func.isRequired,onUnpublish:n().func.isRequired,readActionAllowedFields:n().array.isRequired,redirectToPreviousPage:n().func,slug:n().string.isRequired,status:n().string.isRequired,updateActionAllowedFields:n().array.isRequired};var dd=er,Ge=e=>de(`single-types/${e}`),ud=e=>Object.values(e||{}).reduce((r,o)=>Object.assign(r,o),{}),Jo=(e={})=>{const{plugins:r,_q:o,...s}={...e,...ud(e.plugins)};return o&&J()(s,"_q",encodeURIComponent(o)),`${(0,Ae.stringify)(s,{encode:!1,addQueryPrefix:!0})}`};const _o=({allLayoutData:e,children:r,slug:o})=>{const s=(0,He.useQueryClient)(),{trackUsage:a}=(0,h.rS)(),{push:l}=(0,ie.k6)(),{setCurrentStep:i}=(0,h.c1)(),c=(0,t.useRef)(a),[u,d]=(0,t.useState)(!0),[{query:m,rawQuery:g}]=(0,h.Kx)(),p=Jo(m),y=(0,h.lm)(),b=(0,le.I0)(),{formatAPIError:C}=(0,h.So)(v),k=(0,h.kY)(),{post:M,put:E,del:P}=k,{componentsDataStructure:F,contentTypeDataStructure:T,data:D,isLoading:x,status:N}=(0,le.v9)(Yn),z=(0,t.useCallback)(W=>{const R=Yr(W,e.contentType,e.components);return(0,h.dU)(R,e.contentType,e.components)},[e]);(0,t.useEffect)(()=>()=>{b(Go())},[b]),(0,t.useEffect)(()=>{const W=Object.keys(e.components).reduce((U,K)=>{const L=xt(I()(e,["components",K,"attributes"],{}),e.components);return U[K]=(0,h.dU)(L,e.components[K],e.components),U},{}),R=xt(e.contentType.attributes,e.components),A=(0,h.dU)(R,e.contentType,e.components);b(Qo(W,A))},[e,b]),(0,t.useEffect)(()=>{const R=ve.Z.CancelToken.source();return(async U=>{b(Bt()),d(!0);try{const{data:K}=await k.get(Ge(`${o}${p}`),{cancelToken:U.token});b(Qn(z(K))),d(!1)}catch(K){if(ve.Z.isCancel(K))return;const L=I()(K,"response.status",null);L===404&&b(Kn(g,!0)),L===403&&(y({type:"info",message:{id:v("permissions.not-allowed.update")}}),l("/"))}})(R),()=>R.cancel("Operation canceled by the user.")},[k,z,l,o,b,p,g,y]);const $=(0,t.useCallback)(W=>{y({type:"warning",message:C(W)})},[y,C]),H=(0,t.useCallback)(async W=>{try{c.current("willDeleteEntry",W);const{data:R}=await P(Ge(`${o}${p}`));return y({type:"success",message:{id:v("success.record.delete")}}),c.current("didDeleteEntry",W),d(!0),b(Kn(g,!0)),Promise.resolve(R)}catch(R){return c.current("didNotDeleteEntry",{error:R,...W}),$(R),Promise.reject(R)}},[P,o,$,y,p,b,g]),j=(0,t.useCallback)(async(W,R)=>{const A=Ge(`${o}${g}`);try{b(ce("submit-pending"));const{data:U}=await E(A,W);return c.current("didCreateEntry",R),y({type:"success",message:{id:v("success.record.save")}}),i("contentManager.success"),s.invalidateQueries(["relation"]),b(je(z(U))),d(!1),b(ce("resolved")),Promise.resolve(U)}catch(U){return c.current("didNotCreateEntry",{error:U,trackerProperty:R}),$(U),b(ce("resolved")),Promise.reject(U)}},[E,z,$,o,b,g,y,i,s]),Y=(0,t.useCallback)(async()=>{try{c.current("willCheckDraftRelations");const W=Ge(`${o}/actions/numberOfDraftRelations`);b(ce("draft-relation-check-pending"));const R=await k.get(W);return c.current("didCheckDraftRelations"),b(ce("resolved")),R.data.data}catch(W){return $(W),b(ce("resolved")),Promise.reject(W)}},[k,$,o,b]),B=(0,t.useCallback)(async()=>{try{c.current("willPublishEntry");const W=Ge(`${o}/actions/publish${p}`);b(ce("publish-pending"));const{data:R}=await M(W);return c.current("didPublishEntry"),y({type:"success",message:{id:v("success.record.publish")}}),b(je(z(R))),b(ce("resolved")),Promise.resolve(R)}catch(W){return $(W),b(ce("resolved")),Promise.reject(W)}},[M,z,$,o,p,b,y]),X=(0,t.useCallback)(async(W,R)=>{const A=Ge(`${o}${g}`);try{c.current("willEditEntry",R),b(ce("submit-pending"));const{data:U}=await E(A,W);return y({type:"success",message:{id:v("success.record.save")}}),c.current("didEditEntry",{trackerProperty:R}),s.invalidateQueries(["relation"]),b(je(z(U))),b(ce("resolved")),Promise.resolve(U)}catch(U){return $(U),c.current("didNotEditEntry",{error:U,trackerProperty:R}),b(ce("resolved")),Promise.reject(U)}},[E,z,$,o,b,g,y,s]),Z=(0,t.useCallback)(async()=>{const W=Ge(`${o}/actions/unpublish${p}`);b(ce("unpublish-pending"));try{c.current("willUnpublishEntry");const{data:R}=await M(W);c.current("didUnpublishEntry"),y({type:"success",message:{id:v("success.record.unpublish")}}),b(je(z(R))),b(ce("resolved"))}catch(R){b(ce("resolved")),$(R)}},[M,z,y,$,o,b,p]);return r({componentsDataStructure:F,contentTypeDataStructure:T,data:D,isCreatingEntry:u,isLoadingForData:x,onDelete:H,onPost:j,onDraftRelationCheck:Y,onPublish:B,onPut:X,onUnpublish:Z,redirectionLink:"/",status:N})};_o.propTypes={allLayoutData:n().shape({components:n().object.isRequired,contentType:n().object.isRequired}).isRequired,children:n().func.isRequired,slug:n().string.isRequired};var md=(0,t.memo)(_o),pd=f(56243);function gd(e,r){return o=>{const s=r();return t.createElement(e,{...o,...s})}}var fd=gd;function hd(){const{initialData:e,hasDraftAndPublish:r}=(0,h.Wq)(),o=e.publishedAt!==void 0&&e.publishedAt!==null;return{hasDraftAndPublish:r,isPublished:o}}var yd=hd;const bd=(0,q.ZP)(pd.Z)`
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  * {
    fill: ${({theme:e,$bulletColor:r})=>e.colors[r]};
  }
`,es=({hasDraftAndPublish:e,isPublished:r})=>{const{formatMessage:o}=(0,Q.Z)();if(!e)return null;const s={draft:{textColor:"secondary700",bulletColor:"secondary600",box:{background:"secondary100",borderColor:"secondary200"}},published:{textColor:"success700",bulletColor:"success600",box:{background:"success100",borderColor:"success200"}}},a=r?s.published:s.draft;return t.createElement(S.x,{hasRadius:!0,as:"aside",paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,...a.box},t.createElement(S.x,{as:w.k},t.createElement(bd,{$bulletColor:a.bulletColor}),t.createElement(S.x,{paddingLeft:3},t.createElement(G.Z,{textColor:a.textColor},o({id:v("containers.Edit.information.editing"),defaultMessage:"Editing"}),"\xA0"),t.createElement(G.Z,{fontWeight:"bold",textColor:a.textColor},r&&o({id:v("containers.Edit.information.publishedVersion"),defaultMessage:"published version"}),!r&&o({id:v("containers.Edit.information.draftVersion"),defaultMessage:"draft version"})))))};es.propTypes={hasDraftAndPublish:n().bool.isRequired,isPublished:n().bool.isRequired};var Ed=fd(es,yd),tr=f(9026);const nr=60*1e3,rr=nr*60,zt=rr*24,ts=zt*30,ns=zt*365;var Cd=e=>e<nr?{unit:"second",value:-Math.round(e/1e3)}:e<rr?{unit:"minute",value:-Math.round(e/nr)}:e<zt?{unit:"hour",value:-Math.round(e/rr)}:e<ts?{unit:"day",value:-Math.round(e/zt)}:e<ns?{unit:"month",value:-Math.round(e/ts)}:{unit:"year",value:-Math.round(e/ns)},rs=f(8997);const ht=({label:e,value:r})=>t.createElement(w.k,{justifyContent:"space-between"},t.createElement(G.Z,{as:"dt",fontWeight:"bold",textColor:"neutral600"},e),t.createElement(G.Z,{as:"dd"},r));ht.propTypes={label:n().string.isRequired,value:n().string.isRequired};var vd=()=>{const{formatMessage:e,formatRelativeTime:r}=(0,Q.Z)(),{initialData:o,isCreatingEntry:s}=(0,h.Wq)(),a=(0,t.useRef)(Date.now()),l=(u,d)=>{const{firstname:m,lastname:g,username:p}=o[d]??{},y=m??"",b=g??"",C=p??(0,rs.Pp)(y,b),M=(o[u]?new Date(o[u]).getTime():Date.now())-a.current,{unit:E,value:P}=Cd(-M);return{at:r(P,E,{numeric:"auto"}),by:s?"-":C}},i=l("updatedAt","updatedBy"),c=l("createdAt","createdBy");return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(G.Z,{variant:"sigma",textColor:"neutral600",id:"additional-information"},e({id:v("containers.Edit.information"),defaultMessage:"Information"})),t.createElement(S.x,{paddingBottom:4},t.createElement(tr.i,null)),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},t.createElement(ht,{label:e({id:v("containers.Edit.information.created"),defaultMessage:"Created"}),value:c.at}),t.createElement(ht,{label:e({id:v("containers.Edit.information.by"),defaultMessage:"By"}),value:c.by})),t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},t.createElement(ht,{label:e({id:v("containers.Edit.information.lastUpdate"),defaultMessage:"Last update"}),value:i.at}),t.createElement(ht,{label:e({id:v("containers.Edit.information.by"),defaultMessage:"By"}),value:i.by}))))},ot=f(66456),Vt=f(29439),Ut=f(22342),Ht=f(96166),Gt=f(88693);function Rd(e,r){return o=>{const s=r();return t.createElement(e,{...o,...s})}}var Td=Rd;function Md(){const{initialData:e,isCreatingEntry:r,isSingleType:o,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:u,publishConfirmation:d,onPublishPromptDismissal:m}=(0,h.Wq)();return{initialData:e,isCreatingEntry:r,isSingleType:o,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:u,publishConfirmation:d,onPublishPromptDismissal:m}}var Dd=Md;const os=(0,q.ZP)(w.k)`
  text-align: center;
`,ss=({allowedActions:{canUpdate:e,canCreate:r,canPublish:o},initialData:s,isCreatingEntry:a,isSingleType:l,hasDraftAndPublish:i,layout:c,modifiedData:u,onPublish:d,onUnpublish:m,status:g,publishConfirmation:{show:p,draftCount:y},onPublishPromptDismissal:b})=>{const{goBack:C}=(0,ie.k6)(),[k,M]=(0,t.useState)(!1),{formatMessage:E}=(0,Q.Z)(),P=I()(c,["settings","mainField"],"id"),F=I()(c,["info","displayName"],"NOT FOUND"),T=!gt()(s,u)||a&&!ye()(u);let x=E({id:v("containers.Edit.pluginHeader.title.new"),defaultMessage:"Create an entry"});!a&&!l&&(x=s[P]||F),l&&(x=F);let N=null;if(a&&r&&(N=t.createElement(w.k,{gap:2},i&&t.createElement(ue.z,{disabled:!0,startIcon:t.createElement(ot.Z,null),variant:"secondary"},E({id:"app.utils.publish",defaultMessage:"Publish"})),t.createElement(ue.z,{disabled:!T,loading:g==="submit-pending",type:"submit"},E({id:v("containers.Edit.submit"),defaultMessage:"Save"})))),!a&&e){const j=i&&o,Y=!ye()(s.publishedAt),B=Y?g==="unpublish-pending":g==="publish-pending",X=Y?{id:"app.utils.unpublish",defaultMessage:"Unpublish"}:{id:"app.utils.publish",defaultMessage:"Publish"},Z=Y?()=>M(!0):()=>d();N=t.createElement(w.k,null,j&&t.createElement(ue.z,{disabled:T,loading:B,onClick:Z,startIcon:t.createElement(ot.Z,null),variant:"secondary"},E(X)),t.createElement(S.x,{paddingLeft:j?2:0},t.createElement(ue.z,{disabled:!T,loading:g==="submit-pending",type:"submit"},E({id:v("containers.Edit.submit"),defaultMessage:"Save"}))))}const z=()=>M(j=>!j),$=()=>{z(),m()},H=`${E({id:v("api.id"),defaultMessage:"API ID "})} : ${c.apiID}`;return t.createElement(t.Fragment,null,t.createElement(Fe.T,{title:x.toString(),primaryAction:N,subtitle:H,navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Vt.Z,null),onClick:j=>{j.preventDefault(),C()},to:"/"},E({id:"global.back",defaultMessage:"Back"}))}),t.createElement(Ut.V,{onClose:z,title:"Confirmation",labelledBy:"confirmation",describedBy:"confirm-description",isOpen:k},t.createElement(Ht.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},t.createElement(G.Z,{id:"confirm-description"},E({id:v("popUpWarning.warning.unpublish"),defaultMessage:"Unpublish this content will automatically change it to a draft."},{br:()=>t.createElement("br",null)}))),t.createElement(w.k,{justifyContent:"center",style:{textAlign:"center"}},t.createElement(G.Z,{id:"confirm-description"},E({id:v("popUpWarning.warning.unpublish-question"),defaultMessage:"Are you sure you want to unpublish it?"}))))),t.createElement(Gt.c,{startAction:t.createElement(ue.z,{onClick:z,variant:"tertiary"},E({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{variant:"danger-light",onClick:$},E({id:"components.popUpWarning.button.confirm",defaultMessage:"Confirm"}))})),t.createElement(Ut.V,{onClose:b,title:E({id:v("popUpWarning.warning.has-draft-relations.title"),defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:p},t.createElement(Ht.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(os,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},y,E({id:v("popUpwarning.warning.has-draft-relations.message"),defaultMessage:"<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."},{b:j=>t.createElement(G.Z,{fontWeight:"bold"},j),count:y}))),t.createElement(os,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},E({id:v("popUpWarning.warning.publish-question"),defaultMessage:"Do you still want to publish?"}))))),t.createElement(Gt.c,{startAction:t.createElement(ue.z,{onClick:b,variant:"tertiary"},E({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{variant:"success",onClick:d},E({id:v("popUpwarning.warning.has-draft-relations.button-confirm"),defaultMessage:"Publish"}))})))};ss.propTypes={allowedActions:n().shape({canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canPublish:n().bool.isRequired}).isRequired,initialData:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isSingleType:n().bool.isRequired,status:n().string.isRequired,layout:n().object.isRequired,hasDraftAndPublish:n().bool.isRequired,modifiedData:n().object.isRequired,onPublish:n().func.isRequired,onUnpublish:n().func.isRequired,publishConfirmation:n().shape({show:n().bool.isRequired,draftCount:n().number.isRequired}).isRequired,onPublishPromptDismissal:n().func.isRequired};const kd=(0,t.memo)(ss,qe());var Id=Td(kd,Dd),Ld=e=>{if(!e.layouts)return[];const r=e.layouts.edit,o=e.attributes,s=i=>I()(o,[i,"type"],"");let a=0;const l=[];return r.forEach(i=>{const c=i.some(({name:u})=>s(u)==="dynamiczone");l[a]||(l[a]=[]),c?(a=a===0&&ye()(l[0])?0:a+1,l[a]||(l[a]=[]),l[a].push(i),a+=1):l[a].push(i)}),l.filter(i=>i.length>0)},xd=f(91815),Pd=f.n(xd),wd=f(3704),as=f.n(wd),Fd=(e,r)=>{const o=s=>{const a=(0,h.ZT)(e,[{action:`plugin::content-manager.explorer.${s}`,subject:r}]);return Pd()(as()(a,"properties.fields"))};return{createActionAllowedFields:o("create"),readActionAllowedFields:o("read"),updateActionAllowedFields:o("update")}},Sd=e=>{if(!e)return[];const o=[...e.contentType.layouts.edit,...Object.values(e.components).flatMap(a=>a.layouts.edit)].flat().filter(a=>a.fieldSchema.customField).map(a=>a.fieldSchema.customField);return[...new Set(o)]};function Ad(e,r){return o=>{const s=r();return t.createElement(e,{...o,...s})}}var Od=Ad;function $d(){const{hasDraftAndPublish:e,modifiedData:r}=(0,h.Wq)();let o={};return e&&(o=ye()(r.publishedAt)?{status:"draft"}:{status:"published"}),{hasDraftAndPublish:e,trackerProperty:o}}var Zd=$d;const is=({onDelete:e,trackerProperty:r})=>{const[o,s]=(0,t.useState)(!1),[a,l]=(0,t.useState)(!1),{formatMessage:i}=(0,Q.Z)(),{formatAPIError:c}=(0,h.So)(v),u=(0,h.lm)(),d=()=>s(g=>!g),m=async()=>{try{l(!0),await e(r),l(!1),d()}catch(g){l(!1),d(),u({type:"warning",message:c(g)})}};return t.createElement(t.Fragment,null,t.createElement(ue.z,{onClick:d,size:"S",startIcon:t.createElement(Se.Z,null),variant:"danger-light"},i({id:v("containers.Edit.delete-entry"),defaultMessage:"Delete this entry"})),t.createElement(h.QH,{isConfirmButtonLoading:a,isOpen:o,onConfirm:m,onToggleDialog:d}))};is.propTypes={onDelete:n().func.isRequired,trackerProperty:n().object.isRequired};const qd=(0,t.memo)(is,qe());var Nd=Od(qd,Zd);const or=({columns:e,customFieldInputs:r})=>t.createElement(De.r,{gap:4},e.map(({fieldSchema:o,labelAction:s,metadatas:a,name:l,size:i,queryInfos:c})=>{if(o.type==="component"){const{component:d,max:m,min:g,repeatable:p=!1,required:y=!1}=o;return t.createElement(fe.P,{col:i,s:12,xs:12,key:d},t.createElement(Zt,{componentUid:d,labelAction:s,isRepeatable:p,intlLabel:{id:a.label,defaultMessage:a.label},max:m,min:g,name:l,required:y}))}return t.createElement(fe.P,{col:i,key:l,s:12,xs:12},t.createElement(Sn,{size:i,fieldSchema:o,keys:l,labelAction:s,metadatas:a,queryInfos:c,customFieldInputs:r}))}));or.defaultProps={customFieldInputs:{}},or.propTypes={columns:n().array.isRequired,customFieldInputs:n().object};var jd=or;const sr=e=>e["content-manager_editViewLayoutManager"].currentLayout,Bd=(0,_e.P1)(sr,e=>Ld(e?.contentType??{})),Wd=(0,_e.P1)(sr,e=>Sd(e)),ls=Ke.Z.contentManager,zd=[{action:"plugin::content-type-builder.read",subject:null}],ar=({allowedActions:e,isSingleType:r,goBack:o,slug:s,id:a,origin:l,userPermissions:i})=>{const{trackUsage:c}=(0,h.rS)(),{formatMessage:u}=(0,Q.Z)(),{layout:d,formattedContentTypeLayout:m,customFieldUids:g}=(0,le.v9)(T=>({layout:sr(T),formattedContentTypeLayout:Bd(T),customFieldUids:Wd(T)})),{isLazyLoading:p,lazyComponentStore:y}=An(g),{createActionAllowedFields:b,readActionAllowedFields:C,updateActionAllowedFields:k}=Fd(i,s),M=r?ls.singleTypesConfigurations:ls.collectionTypesConfigurations,E=`/content-manager/${r?"singleType":"collectionType"}/${s}/configurations/edit`,P=r?md:Hc,F=T=>T.every(D=>D.every(x=>x.fieldSchema.type==="dynamiczone"));return p?t.createElement(h.dO,null):t.createElement(P,{allLayoutData:d,slug:s,id:a,origin:l},({componentsDataStructure:T,contentTypeDataStructure:D,data:x,isCreatingEntry:N,isLoadingForData:z,onDelete:$,onPost:H,onPublish:j,onDraftRelationCheck:Y,onPut:B,onUnpublish:X,redirectionLink:Z,status:W})=>t.createElement(dd,{allowedActions:e,allLayoutData:d,createActionAllowedFields:b,componentsDataStructure:T,contentTypeDataStructure:D,from:Z,initialValues:x,isCreatingEntry:N,isLoadingForData:z,isSingleType:r,onPost:H,onPublish:j,onDraftRelationCheck:Y,onPut:B,onUnpublish:X,readActionAllowedFields:C,redirectToPreviousPage:o,slug:s,status:W,updateActionAllowedFields:k},t.createElement(xe.o,{"aria-busy":W!=="resolved"},t.createElement(Id,{allowedActions:e}),t.createElement(tt.D,null,t.createElement(De.r,{gap:4},t.createElement(fe.P,{col:9,s:12},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},m.map((R,A)=>{if(F(R)){const{0:{0:{name:U,fieldSchema:K,metadatas:L,labelAction:O}}}=R;return t.createElement(S.x,{key:A},t.createElement(De.r,{gap:4},t.createElement(fe.P,{col:12,s:12,xs:12},t.createElement(Vc,{name:U,fieldSchema:K,labelAction:O,metadatas:L}))))}return t.createElement(S.x,{key:A,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:6},R.map((U,K)=>t.createElement(jd,{columns:U,customFieldInputs:y,key:K}))))}))),t.createElement(fe.P,{col:3,s:12},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(Ed,null),t.createElement(S.x,{as:"aside","aria-labelledby":"additional-information",background:"neutral0",borderColor:"neutral150",hasRadius:!0,paddingBottom:4,paddingLeft:4,paddingRight:4,paddingTop:6,shadow:"tableShadow"},t.createElement(vd,null),t.createElement(Ot,{area:"contentManager.editView.informations"})),t.createElement(S.x,{as:"aside","aria-labelledby":"links"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(Ot,{area:"contentManager.editView.right-links",slug:s}),s!=="strapi::administrator"&&t.createElement(h.jW,{permissions:zd},t.createElement(h.Qj,{onClick:()=>{c("willEditEditLayout")},size:"S",startIcon:t.createElement(Ye.Z,null),style:{width:"100%"},to:`/plugins/content-type-builder/content-types/${s}`,variant:"secondary"},u({id:v("link-to-ctb"),defaultMessage:"Edit the model"}))),t.createElement(h.jW,{permissions:M},t.createElement(h.Qj,{size:"S",startIcon:t.createElement(di.Z,null),style:{width:"100%"},to:E,variant:"secondary"},u({id:"app.links.configure-view",defaultMessage:"Configure the view"}))),e.canDelete&&!N&&t.createElement(Nd,{onDelete:$}))))))))))};ar.defaultProps={id:null,isSingleType:!1,origin:null,userPermissions:[]},ar.propTypes={allowedActions:n().shape({canRead:n().bool.isRequired,canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canDelete:n().bool.isRequired}).isRequired,id:n().string,isSingleType:n().bool,goBack:n().func.isRequired,origin:n().string,slug:n().string.isRequired,userPermissions:n().array};var Vd=(0,t.memo)(ar);const ir=e=>{const r=(0,t.useMemo)(()=>Hr(e.slug),[e.slug]),{isLoading:o,allowedActions:s}=(0,h.ss)(r,e.userPermissions);return o?t.createElement(h.dO,null):t.createElement(Vd,{...e,allowedActions:s})};ir.defaultProps={permissions:[]},ir.propTypes={permissions:n().array,slug:n().string.isRequired,userPermissions:n().array.isRequired};var Ud=(0,t.memo)(ir,qe());const cs=({layout:e,...r})=>{const o=(0,le.v9)(no),s=(0,le.I0)(),[{query:a}]=(0,h.Kx)(),{runHookWaterfall:l}=(0,h.j1)(),i=go(a,r.slug,"editView");return(0,t.useEffect)(()=>{const c=l(At.Eo,{layout:e,query:a});return s(li(c.layout,a)),()=>{s(ii())}},[e,s,a,l]),!o||!i?t.createElement(h.dO,null):t.createElement(Ud,{...r,userPermissions:i})};cs.propTypes={layout:n().shape({components:n().object.isRequired,contentType:n().shape({uid:n().string.isRequired,settings:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().object.isRequired}).isRequired}).isRequired};var Qt=cs,Hd=f(23940),yt=f.n(Hd);const lr=e=>e.reduce((r,o)=>r+o.size,0),Gd=e=>e.reduce((r,o,s)=>{const a={rowId:s,rowContent:o};return r.concat(a)},[]),st=e=>e.reduce((r,o)=>{let s=[];const a=o.rowContent.reduce((c,u)=>{const d=lr(c);return u.name==="_TEMP_"||(d+u.size<=12?c.push(u):s.push(u)),c},[]),l=r.length===0?0:Math.max.apply(Math,r.map(c=>c.rowId))+1,i=lr(a);if(i<12&&a.push({name:"_TEMP_",size:12-i}),r.push({rowId:l,rowContent:a}),s.length>0){const c=lr(s);c<12&&s.push({name:"_TEMP_",size:12-c}),r.push({rowId:l+1,rowContent:s}),s=[]}return r},[]).filter(r=>r.rowContent.length>0).filter(r=>r.rowContent.length===1?r.rowContent[0].name!=="_TEMP_":!0),Qd=e=>e.reduce((r,o)=>{const s=o.rowContent.filter(a=>a.name!=="_TEMP_");return r.concat([s])},[]),Kd=(e,r=[])=>r.reduce((o,{rowContent:s})=>{const a=s.find(l=>l.name===e)?.size??null;return a&&(o=a),o},null),Yd=(e,r,o=[])=>o.map(s=>(s.rowContent=s.rowContent.map(a=>a.name===e?{...a,size:r}:a),s)),ds=6,cr={fieldForm:{},componentLayouts:{},metaToEdit:"",initialData:{},metaForm:{},modifiedData:{}};var Xd=(e=cr,r)=>(0,St.ZP)(e,o=>{const s=["modifiedData","layouts","edit"];switch(r.type){case"MOVE_ROW":{const a=I()(e,s,[]),{fromIndex:l,toIndex:i}=r;J()(o,s,It(a,l,i));break}case"ON_ADD_FIELD":{const a=Me()(e),l=I()(a,["modifiedData","attributes",r.name,"type"],""),i=r.fieldSizes[l]?.default??ds,c=I()(a,s,[]).length,u=[...s,c-1,"rowContent"],d=I()(a,u,[]);let m=I()(a,s,[]);Array.isArray(d)?J()(m,[c>0?c-1:0,"rowContent"],[...d,{name:r.name,size:i}]):J()(m,[c>0?c-1:0,"rowContent"],[{name:r.name,size:i}]);const g=st(m);J()(o,s,g);break}case"ON_CHANGE":{J()(o,["modifiedData",...r.keys],r.value);break}case"ON_CHANGE_META":{J()(o,["metaForm","metadata",...r.keys],r.value);break}case"ON_CHANGE_SIZE":{J()(o,["metaForm","size"],r.value);break}case"ON_RESET":{o.modifiedData=e.initialData;break}case"REMOVE_FIELD":{const a=I()(e,[...s,r.rowIndex,"rowContent"],[]);let l=Me()(e);if(a.length===1||a.length===2&&I()(a,[1,"name"],"")==="_TEMP_"){const c=I()(e,s,[]);J()(l,s,c.filter((u,d)=>r.rowIndex!==d))}else J()(l,[...s,r.rowIndex,"rowContent"],a.filter((c,u)=>u!==r.fieldIndex));const i=st(I()(l,s,[]));J()(o,s,i);break}case"REORDER_DIFF_ROW":{const a=I()(e,[...s,r.dragRowIndex,"rowContent"],[]),l=I()(e,[...s,r.hoverRowIndex,"rowContent"],[]),i=I()(e,[...s,r.dragRowIndex,"rowContent",r.dragIndex],{}),c=[...l,i];let u=Me()(e);J()(u,[...s,r.dragRowIndex,"rowContent"],a.filter((m,g)=>r.dragIndex!==g)),J()(u,[...s,r.hoverRowIndex,"rowContent"],It(c,c.length-1,r.hoverIndex));const d=st(I()(u,s,[]));J()(o,s,d);break}case"REORDER_ROW":{const a=Me()(e),l=I()(a,[...s,r.dragRowIndex,"rowContent"],[]);J()(a,[...s,r.dragRowIndex,"rowContent"],It(l,r.dragIndex,r.hoverIndex));const i=st(I()(a,s,[]));J()(o,s,i);break}case"SET_FIELD_TO_EDIT":{o.metaToEdit=r.name,o.metaForm={metadata:I()(e,["modifiedData","metadatas",r.name,"edit"],{}),size:Kd(r.name,e.modifiedData?.layouts?.edit)??ds};break}case"SUBMIT_META_FORM":{J()(o,["modifiedData","metadatas",e.metaToEdit,"edit"],e.metaForm.metadata);const a=Me()(I()(e,s,[])),l=Yd(e.metaToEdit,e.metaForm.size,a);l.length>0&&J()(o,s,st(l));break}case"SUBMIT_SUCCEEDED":{o.initialData=e.modifiedData;break}case"UNSET_FIELD_TO_EDIT":{o.metaToEdit="",o.metaForm={};break}default:return o}}),Jd=(e,r,o)=>{let s=Me()(r);return J()(s,["layouts","edit"],st(Gd(r.layouts.edit))),{...e,initialData:s,modifiedData:s,componentLayouts:o}},we=f(34853),us=f(45112);const ms=({componentUid:e})=>{const{componentLayouts:r}=Ue(),{formatMessage:o}=(0,Q.Z)(),s=I()(r,[e],{}),a=I()(s,["layouts","edit"],[]);return t.createElement(S.x,{padding:3},a.map((l,i)=>t.createElement(De.r,{gap:4,key:i},l.map(c=>t.createElement(fe.P,{key:c.name,col:c.size},t.createElement(S.x,{paddingTop:2},t.createElement(w.k,{alignItems:"center",background:"neutral0",paddingLeft:3,paddingRight:3,height:`${32/16}rem`,hasRadius:!0,borderColor:"neutral200"},t.createElement(G.Z,{textColor:"neutral800"},c.name))))))),t.createElement(S.x,{paddingTop:2},t.createElement(h.rU,{startIcon:t.createElement(us.Z,null),to:`/content-manager/components/${e}/configurations/edit`},o({id:v("components.FieldItem.linkToComponentLayout"),defaultMessage:"Set the component's layout"}))))};ms.propTypes={componentUid:n().string.isRequired};var _d=ms,at=f(14911);const eu=(0,q.ZP)(w.k)`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-color: ${e.colors.primary200};

      ${G.Z} {
          color: ${e.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,ps=({components:e})=>{const{componentLayouts:r}=Ue();return t.createElement(w.k,{gap:2,overflow:"scroll hidden",padding:3},e.map(o=>t.createElement(eu,{hasRadius:!0,background:"neutral0",justifyContent:"center",alignItems:"center",height:`${84/16}rem`,minWidth:`${140/16}rem`,key:o,padding:2,direction:"column",borderColor:"neutral200",as:at.rU,to:`/content-manager/components/${o}/configurations/edit`},t.createElement(jt,null),t.createElement(S.x,{paddingTop:1},t.createElement(G.Z,{fontSize:1,textColor:"neutral600",fontWeight:"bold"},r?.[o]?.info?.displayName??"")))))};ps.propTypes={components:n().arrayOf(n().string).isRequired};var tu=ps;const gs=(0,q.ZP)(ge.h)`
  background-color: transparent;
  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,dr=({attribute:e,onEditField:r,onDeleteField:o,children:s})=>{const{formatMessage:a}=(0,Q.Z)();return t.createElement(S.x,{overflow:"hidden",width:"100%"},t.createElement(w.k,{paddingLeft:3,alignItems:"center",justifyContent:"space-between"},t.createElement(G.Z,{fontWeight:"semiBold",textColor:"neutral800",ellipsis:!0},s),t.createElement(w.k,null,t.createElement(gs,{label:a({id:v("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:s}),onClick:r,icon:t.createElement(Ye.Z,null),noBorder:!0}),t.createElement(gs,{label:a({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:s}),"data-testid":"delete-field",onClick:o,icon:t.createElement(Se.Z,null),noBorder:!0}))),e?.type==="component"&&t.createElement(_d,{componentUid:e.component}),e?.type==="dynamiczone"&&t.createElement(tu,{components:e.components}))};dr.defaultProps={attribute:void 0},dr.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),onEditField:n().func.isRequired,onDeleteField:n().func.isRequired,children:n().string.isRequired};var nu=dr;const ru=(0,q.ZP)(w.k)`
  position: relative;
  ${({isFirst:e,isLast:r,hasHorizontalPadding:o})=>e?`
        padding-right: 4px;
      `:r?`
        padding-left: 4px;
      `:o?`
        padding: 0 4px;
      `:""}
  ${({showRightCarret:e,showLeftCarret:r,theme:o})=>e?`
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${o.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:r?`
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${o.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:""};
`,ou=(0,q.ZP)($e.Z)`
  height: ${12/16}rem;
  width: ${12/16}rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,su=(0,q.ZP)(w.k)`
  display: ${({dragStart:e})=>e?"none":"flex"};
  opacity: ${({isDragging:e,isFullSize:r,isHidden:o})=>e&&!r?.2:e&&r||o?0:1};
`,au=(0,q.ZP)(w.k)`
  cursor: all-scroll;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`,ur=({attribute:e,children:r,index:o,lastIndex:s,moveItem:a,moveRow:l,name:i,onDeleteField:c,onEditField:u,rowIndex:d,size:m})=>{const[g,p]=(0,t.useState)(!1),y=i==="_TEMP_",{setIsDraggingSibling:b}=Ue(),C=m===12,k=(0,t.useRef)(null),M=(0,t.useRef)(null),[{clientOffset:E,isOver:P},F]=(0,ze.useDrop)({accept:Ce.EDIT_FIELD,hover(Z,W){if(!M.current||Z.size!==12)return;const R=W.getItem().index,A=o,U=W.getItem().rowIndex,K=d;if(R===A&&U===K)return;const L=M.current.getBoundingClientRect(),O=(L.bottom-L.top)/2,ee=W.getClientOffset().y-L.top;U<K&&ee<O||U>K&&ee>O||(l(U,K),Z.rowIndex=K,Z.itemIndex=A)},drop(Z,W){if(!M.current)return;const R=W.getItem().index,A=o,U=W.getItem().rowIndex,K=d;if(Z.size===12||R===A&&U===K)return;const L=M.current.getBoundingClientRect();if(Math.abs(W.getClientOffset().x-L.left)>L.width/1.8){a(R,A+1,U,K),Z.itemIndex=A+1,Z.rowIndex=K;return}a(R,A,U,K),Z.itemIndex=A,Z.rowIndex=K},collect:Z=>({canDrop:Z.canDrop(),clientOffset:Z.getClientOffset(),isOver:Z.isOver(),isOverCurrent:Z.isOver({shallow:!0}),itemType:Z.getItemType()})}),[{isDragging:T,getItem:D},x,N]=(0,ze.useDrag)({type:Ce.EDIT_FIELD,item(){return b(!0),{index:o,labelField:r,rowIndex:d,name:i,size:m}},canDrag(){return i!=="_TEMP_"},collect:Z=>({isDragging:Z.isDragging(),getItem:Z.getItem()}),end(){b(!1)}});(0,t.useEffect)(()=>{N((0,ct.rX)(),{captureDraggingState:!0})},[N]);const z={dragRef:x(k),dropRef:F(M)};let $=!1,H=!1;if(M.current&&E){const Z=M.current.getBoundingClientRect();$=P&&D.size!==12&&Math.abs(E.x-Z.left)<Z.width/2,H=P&&D.size!==12&&Math.abs(E.x-Z.left)>Z.width/2,i==="_TEMP_"&&($=P&&D.size!==12,H=!1)}const j=()=>e&&C?`${74/16}rem`:`${32/16}rem`,Y=o===0&&!C,B=o===s&&!C,X=o!==0&&!C;return t.createElement(fe.P,{col:m},t.createElement(ru,{ref:z.dropRef,showLeftCarret:$,showRightCarret:H,isFirst:Y,isLast:B,hasHorizontalPadding:X,onDrag:()=>{C&&!g&&p(!0)},onDragEnd:()=>{C&&p(!1)}},g&&C&&t.createElement(S.x,{width:"100%",height:"2px",background:"primary600"}),t.createElement(su,{width:C&&g?0:"100%",borderColor:"neutral150",hasRadius:!0,background:"neutral100",minHeight:j(),alignItems:"stretch",isDragging:T,dragStart:g,isFullSize:C,isHidden:y},t.createElement(au,{as:"span",type:"button",ref:z.dragRef,onClick:Z=>Z.stopPropagation(),alignItems:"center",paddingLeft:3,paddingRight:3,tabIndex:-1},t.createElement(ou,null)),!y&&t.createElement(nu,{attribute:e,onEditField:u,onDeleteField:c},r))))};ur.defaultProps={attribute:void 0},ur.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),children:n().string.isRequired,index:n().number.isRequired,moveItem:n().func.isRequired,moveRow:n().func.isRequired,name:n().string.isRequired,onDeleteField:n().func.isRequired,onEditField:n().func.isRequired,rowIndex:n().number.isRequired,lastIndex:n().number.isRequired,size:n().number.isRequired};var iu=ur;const fs=({rowItem:e,onRemoveField:r,rowId:o,rowIndex:s,index:a,lastIndex:l})=>{const{setEditFieldToSelect:i,attributes:c,modifiedData:u,moveRow:d,moveItem:m}=Ue(),g=I()(c,[e.name],{}),p=I()(u,["metadatas",e.name,"edit","label"],"");return t.createElement(iu,{onEditField:()=>i(e.name),onDeleteField:()=>r(o,a),attribute:g,index:a,lastIndex:l,rowIndex:s,name:e.name,size:e.size,moveRow:d,moveItem:m},p||e.name)};fs.propTypes={index:n().number.isRequired,lastIndex:n().number.isRequired,onRemoveField:n().func.isRequired,rowId:n().number.isRequired,rowIndex:n().number.isRequired,rowItem:n().object.isRequired};var lu=fs;const hs=({row:e,onRemoveField:r,rowIndex:o})=>t.createElement(De.r,null,e.rowContent.map((s,a)=>t.createElement(lu,{key:s.name,rowItem:s,index:a,rowId:e.rowId,onRemoveField:r,rowIndex:o,lastIndex:e.rowContent.length-1})));hs.propTypes={onRemoveField:n().func.isRequired,row:n().object.isRequired,rowIndex:n().number.isRequired};var cu=hs;const du=[{action:"plugin::content-type-builder.read",subject:null}];var uu=()=>{const{trackUsage:e}=(0,h.rS)(),{formatMessage:r}=(0,Q.Z)(),{slug:o,modifiedData:s,isContentTypeView:a}=Ue(),l=a?"content-types":"components",i=`/plugins/content-type-builder/${l==="content-types"?l:"component-categories"}`,c=I()(s,"category",""),u=l==="content-types"?o:`${c}/${o}`,d=()=>{e("willEditEditLayout")};return o==="strapi::administrator"?null:t.createElement(h.jW,{permissions:du},t.createElement(h.Qj,{to:`${i}/${u}`,onClick:d,size:"S",startIcon:t.createElement(Ye.Z,null),variant:"secondary"},r({id:v(`edit-settings-view.link-to-ctb.${l}`),defaultMessage:"Edit the content type"})))};const ys=({editLayout:e,fields:r,onRemoveField:o,onAddField:s})=>{const{formatMessage:a}=(0,Q.Z)();return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(w.k,{justifyContent:"space-between"},t.createElement("div",null,t.createElement(S.x,null,t.createElement(G.Z,{fontWeight:"bold"},a({id:v("containers.ListPage.displayedFields"),defaultMessage:"Displayed fields"}))),t.createElement(S.x,null,t.createElement(G.Z,{variant:"pi",textColor:"neutral600"},a({id:"containers.SettingPage.editSettings.description",defaultMessage:"Drag & drop the fields to build the layout"})))),t.createElement(uu,null)),t.createElement(S.x,{padding:4,hasRadius:!0,borderStyle:"dashed",borderWidth:"1px",borderColor:"neutral300"},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},e.map((l,i)=>t.createElement(cu,{key:l.rowId,row:l,rowIndex:i,onRemoveField:o})),t.createElement(we.O,{id:"label",label:a({id:v("containers.SettingPage.add.field"),defaultMessage:"Insert another field"}),as:ue.z,"data-testid":"add-field",fullWidth:!0,startIcon:t.createElement(pt.Z,null),endIcon:null,variant:"secondary",disabled:r.length===0},r.map(l=>t.createElement(we.s,{key:l,onClick:()=>s(l)},l))))))};ys.propTypes={editLayout:n().array.isRequired,fields:n().array.isRequired,onAddField:n().func.isRequired,onRemoveField:n().func.isRequired};var mu=ys,bs=f(85025),Es=f(55225),Cs=f(31600),vs=f(11406),bt=f(32031),pu=f(73779),Kt=f(88675),gu=f(22348),Rs=f(7184),mr=f(43475),fu=f(82512),pr=f(83218),hu=f(872),yu=f(17757),bu=f(1176),Eu=f(15431);const Ts={biginteger:t.createElement(bt.Z,null),boolean:t.createElement(pu.Z,null),date:t.createElement(Kt.Z,null),datetime:t.createElement(Kt.Z,null),decimal:t.createElement(bt.Z,null),email:t.createElement(gu.Z,null),enum:t.createElement(Rs.Z,null),enumeration:t.createElement(Rs.Z,null),file:t.createElement(mr.Z,null),files:t.createElement(mr.Z,null),float:t.createElement(bt.Z,null),integer:t.createElement(bt.Z,null),media:t.createElement(mr.Z,null),number:t.createElement(bt.Z,null),relation:t.createElement(fu.Z,null),string:t.createElement(pr.Z,null),text:t.createElement(pr.Z,null),richtext:t.createElement(pr.Z,null),time:t.createElement(Kt.Z,null),timestamp:t.createElement(Kt.Z,null),json:t.createElement(hu.Z,null),uid:t.createElement(yu.Z,null),component:t.createElement(bu.Z,null),dynamiczone:t.createElement(Eu.Z,null)},gr=({type:e,customFieldUid:r})=>{const o=(0,h.mZ)();let s=Ts[e];if(r){const l=o.get(r).icon;l&&(s=t.createElement(S.x,{marginRight:3,width:7,height:6},t.createElement(l,null)))}return Ts[e]?s:null};gr.defaultProps={customFieldUid:null},gr.propTypes={type:n().string.isRequired,customFieldUid:n().string};var Ms=gr,Cu=e=>e.reduce((r,o)=>{const s=o?.attributes??{},a=Object.keys(s).filter(l=>!["boolean","component","dynamiczone","json","media","password","relation","text","richtext"].includes(s?.[l]?.type??""));return r[o.uid]=a,r},{}),Ds=e=>{let r;switch(e){case"description":case"label":case"placeholder":r="text";break;case"mainField":r="select";break;case"editable":r="bool";break;default:r=""}const o=v(e==="mainField"?"containers.SettingPage.editSettings.entry.title":`form.Input.${e}`);return{type:r,label:{id:o}}},Et=f(9139);const fr=({type:e,options:r,onChange:o,value:s,name:a,...l})=>{const{formatMessage:i}=(0,Q.Z)();switch(e){case"text":return t.createElement(In.o,{onChange:o,value:s,name:a,...l});case"bool":return t.createElement(Et.s,{onChange:c=>{o({target:{name:a,value:c.target.checked}})},checked:s,name:a,onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),...l});case"select":return t.createElement(Pe.P,{value:s,name:a,onChange:c=>o({target:{name:a,value:c}}),...l},r.map(c=>t.createElement(he.W,{key:c,value:c},c)));default:return null}};fr.defaultProps={options:void 0},fr.propTypes={type:n().string.isRequired,options:n().arrayOf(n().string),onChange:n().func.isRequired,value:n().oneOfType([n().string,n().bool]).isRequired,name:n().string.isRequired};var vu=fr;const Ru=[[4,"33%"],[6,"50%"],[8,"66%"],[12,"100%"]],Tu=[1,5,10,15,30,60],Mu=["datetime","time"],ks=({onMetaChange:e,onSizeChange:r})=>{const{formatMessage:o}=(0,Q.Z)(),{modifiedData:s,selectedField:a,attributes:l,fieldForm:i}=Ue(),c=(0,t.useMemo)(cn,[]),{schemas:u}=(0,le.v9)(E=>c(E),le.wU),d=(0,le.v9)(ao),m=(0,t.useMemo)(()=>{if(!a)return[];const E=I()(s,["metadatas",a,"edit"],{});return Object.keys(E).filter(P=>P!=="visible")},[a,s]),g=(0,t.useMemo)(()=>Cu(u),[u]),p=(0,t.useCallback)(E=>{if(E!=="relation"&&E!=="component")return[];const P=E==="component"?"component":"targetModel",F=I()(s,["attributes",a,P],"");return I()(g,[F],[])},[a,g,s]),y=m.map(E=>{const P=I()(l,[a,"type"]);return["component","dynamiczone"].includes(P)&&!["label","description"].includes(E)||P==="component"&&E!=="label"||["media","json","boolean"].includes(P)&&E==="placeholder"||E==="step"?null:t.createElement(fe.P,{col:6,key:E},t.createElement(vu,{type:Ds(E).type,hint:E==="mainField"?o({id:v("containers.SettingPage.editSettings.relation-field.description")}):"",label:o({id:I()(Ds(E),"label.id","app.utils.defaultMessage")}),name:E,onChange:e,value:I()(i,["metadata",E],""),options:p(P)}))}),{isResizable:b}=d[l[a].type],C=t.createElement(fe.P,{col:6,key:"size"},t.createElement(Pe.P,{value:i?.size,name:"size",onChange:E=>{r({name:a,value:E})},label:o({id:v("containers.SettingPage.editSettings.size.label"),defaultMessage:"Size"})},Ru.map(([E,P])=>t.createElement(he.W,{key:E,value:E},P)))),k=Mu.includes(l[a].type),M=t.createElement(fe.P,{col:6,key:"step"},t.createElement(Pe.P,{value:I()(i,["metadata","step"],1),name:"step",onChange:E=>e({target:{name:"step",value:E}}),label:o({id:v("containers.SettingPage.editSettings.step.label"),defaultMessage:"Time interval (minutes)"})},Tu.map(E=>t.createElement(he.W,{key:E,value:E},E))));return t.createElement(t.Fragment,null,y,b&&C,k&&M)};ks.propTypes={onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired};var Du=ks;const ku=(0,q.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:e})=>e.spaces[3]};
  }
`,hr=({onToggle:e,onMetaChange:r,onSizeChange:o,onSubmit:s,type:a,customFieldUid:l})=>{const{selectedField:i}=Ue(),{formatMessage:c}=(0,Q.Z)(),u=()=>a==="timestamp"?"date":["decimal","float","integer","biginter"].includes(a)?"number":a;return t.createElement(bs.P,{onClose:e,labelledBy:"title"},t.createElement("form",{onSubmit:s},t.createElement(Es.x,null,t.createElement(ku,null,t.createElement(Ms,{type:u(),customFieldUid:l}),t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:v("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:yt()(i)})))),t.createElement(Cs.f,null,t.createElement(De.r,{gap:4},t.createElement(Du,{onMetaChange:r,onSizeChange:o}))),t.createElement(vs.m,{startActions:t.createElement(ue.z,{onClick:e,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ue.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};hr.defaultProps={customFieldUid:null},hr.propTypes={customFieldUid:n().string,onSubmit:n().func.isRequired,onToggle:n().func.isRequired,onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired,type:n().string.isRequired};var Iu=hr,Lu=(e,r,o)=>{const{put:s}=(0,h.tg)();return s(de(o?`content-types/${r}/configuration`:`components/${r}/configuration`),e)};const yr=({mainLayout:e,components:r,isContentTypeView:o,slug:s,updateLayout:a})=>{const[l,i]=(0,t.useReducer)(Xd,cr,()=>Jd(cr,e,r)),[c,u]=(0,t.useState)(!1),{trackUsage:d}=(0,h.rS)(),m=(0,h.lm)(),{goBack:g}=(0,ie.k6)(),[p,y]=(0,t.useState)(!1),[b,C]=(0,t.useState)(!1),{componentLayouts:k,initialData:M,modifiedData:E,metaToEdit:P,metaForm:F}=l,{formatMessage:T}=(0,Q.Z)(),D=I()(e,["info","displayName"],""),x=I()(E,["attributes"],{}),N=(0,le.v9)(ao),z=Object.keys(x).filter(V=>{const se=I()(x,[V,"type"],"");return!["dynamiczone","json","text","relation","component","boolean","media","password","richtext","timestamp"].includes(se)&&!!se}),$=I()(E,["layouts","edit"],[]),H=as()($,"rowContent"),j=Object.keys(E.attributes).filter(V=>I()(E,["metadatas",V,"edit","visible"],!1)===!0).filter(V=>H.findIndex(se=>se.name===V)===-1).sort(),Y=({target:{name:V,value:se}})=>{i({type:"ON_CHANGE",keys:V.split("."),value:se})},B=()=>{y(V=>!V)},X=()=>{C(V=>!V)},Z=({target:{name:V,value:se}})=>{i({type:"ON_CHANGE_META",keys:V.split("."),value:se})},W=({name:V,value:se})=>{i({type:"ON_CHANGE_SIZE",name:V,value:se})},R=V=>{V.preventDefault(),i({type:"SUBMIT_META_FORM"}),B()},A=V=>{V.preventDefault(),X()},U=(0,He.useMutation)(V=>Lu(V,s,o),{onSuccess({data:V}){a&&a(V.data),i({type:"SUBMIT_SUCCEEDED"}),X(),d("didEditEditSettings")},onError(){m({type:"warning",message:{id:"notification.error"}})}}),{isLoading:K}=U,L=()=>{const V=xn()(Me()(E),["layouts","metadatas","settings"]);J()(V,"layouts.edit",Qd(V.layouts.edit)),U.mutate(V)},O=(V,se)=>{i({type:"MOVE_RELATION",fromIndex:V,toIndex:se})},re=(V,se)=>{i({type:"MOVE_FIELD",fromIndex:V,toIndex:se})},ee=(V,se,be,Oe)=>{i(be===Oe?{type:"REORDER_ROW",dragRowIndex:be,dragIndex:V,hoverIndex:se}:{type:"REORDER_DIFF_ROW",dragIndex:V,hoverIndex:se,dragRowIndex:be,hoverRowIndex:Oe})},oe=(V,se)=>{i({type:"MOVE_ROW",fromIndex:V,toIndex:se})};return t.createElement($r,{isContentTypeView:o,attributes:x,modifiedData:E,slug:s,componentLayouts:k,selectedField:P,fieldForm:F,onMoveRelation:O,onMoveField:re,moveRow:oe,moveItem:ee,setEditFieldToSelect:V=>{i({type:"SET_FIELD_TO_EDIT",name:V}),B()},isDraggingSibling:c,setIsDraggingSibling:u},t.createElement(xe.o,null,t.createElement("form",{onSubmit:A},t.createElement(Fe.T,{title:T({id:v("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:`Configure the view - ${yt()(D)}`},{name:yt()(D)}),subtitle:T({id:v("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),defaultMessage:"Customize how the edit view will look like."}),navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Vt.Z,null),onClick:V=>{V.preventDefault(),g()},to:"/"},T({id:"global.back",defaultMessage:"Back"})),primaryAction:t.createElement(ue.z,{disabled:gt()(M,E),startIcon:t.createElement(ot.Z,null),type:"submit"},T({id:"global.save",defaultMessage:"Save"}))}),t.createElement(tt.D,null,t.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},T({id:v("containers.SettingPage.settings"),defaultMessage:"Settings"})),t.createElement(De.r,null,t.createElement(fe.P,{col:6,s:12},t.createElement(Pe.P,{label:T({id:v("containers.SettingPage.editSettings.entry.title"),defaultMessage:"Entry title"}),hint:T({id:v("containers.SettingPage.editSettings.entry.title.description"),defaultMessage:"Set the display field of your entry"}),onChange:V=>{Y({target:{name:"settings.mainField",value:V===""?null:V}})},value:E.settings.mainField},z.map(V=>t.createElement(he.W,{key:V,value:V},V))))),t.createElement(S.x,{paddingTop:2,paddingBottom:2},t.createElement(tr.i,null)),t.createElement(G.Z,{variant:"delta",as:"h3"},T({id:v("containers.SettingPage.view"),defaultMessage:"View"})),t.createElement(mu,{attributes:x,editLayout:$,fields:j,onAddField:V=>{i({type:"ON_ADD_FIELD",name:V,fieldSizes:N})},onRemoveField:(V,se)=>{i({type:"REMOVE_FIELD",rowIndex:V,fieldIndex:se})}})))),t.createElement(h.QH,{bodyText:{id:v("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:t.createElement(ot.Z,null),isConfirmButtonLoading:K,isOpen:b,onToggleDialog:X,onConfirm:L,variantRightButton:"success-light"})),p&&t.createElement(Iu,{onSubmit:R,onToggle:B,onMetaChange:Z,onSizeChange:W,type:I()(x,[P,"type"],""),customFieldUid:I()(x,[P,"customField"],"")})))};yr.defaultProps={isContentTypeView:!1,updateLayout:null},yr.propTypes={components:n().object.isRequired,isContentTypeView:n().bool,mainLayout:n().shape({attributes:n().object.isRequired,info:n().object.isRequired,layouts:n().shape({list:n().array.isRequired,edit:n().array.isRequired}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired}).isRequired,slug:n().string.isRequired,updateLayout:n().func};var br=yr,it=f(37617);const xu=()=>({type:it.ZA}),Pu=(e,r)=>({type:it.Id,pagination:e,data:r}),wu=()=>({type:it.MP});function Fu(){return{type:it.c2}}const Su=({components:e,contentType:r})=>{const{layouts:o}=r;return{contentType:r,components:e,displayedHeaders:o.list,type:it.Zz}},Er=e=>({type:it.Rp,target:e});var Is=f(6680),Cr=f(94638),Ls=f(99223),Au=f(70664);const Ou=()=>e=>e["content-manager_listView"]||Au.E,$u=()=>(0,_e.P1)(Ou(),e=>e),xs=e=>{const{displayedHeaders:r}=e["content-manager_listView"];return r};var Zu=$u,qu=f(35658),Nu=f(94547),vr=f(19786),ju=f(44426),Bu=f(47765),Wu=f(69033);const zu=(0,q.ZP)(w.k)`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`,Ps=({children:e,...r})=>t.createElement(zu,{justifyContent:"center",alignItems:"center",as:"span",...r},t.createElement(G.Z,{variant:"sigma",textColor:"neutral600"},e));Ps.propTypes={children:n().string.isRequired};var ws=Ps;const Rr=({url:e,mime:r,alternativeText:o,name:s,ext:a,formats:l})=>{const i=(0,h.CR)(e);if(r.includes("image")){const d=l?.thumbnail?.url||null,m=(0,h.CR)(d)||i;return t.createElement(Wu.q,{src:m,alt:o||s,preview:!0})}const c=(0,h.mD)(a),u=s.length>100?`${s.substring(0,100)}...`:s;return t.createElement(Ft.u,{description:u},t.createElement(ws,null,c))};Rr.defaultProps={alternativeText:null,formats:null},Rr.propTypes={alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired};var Fs=Rr,Vu=f(25898);const Ss=({value:e})=>t.createElement(Vu.H,null,e.map((r,o)=>{const s=`${r.id}${o}`;if(o===3){const a=`+${e.length-3}`;return t.createElement(ws,{key:s,preview:!1},a)}return o>3?null:t.createElement(Fs,{key:s,...r})}));Ss.propTypes={value:n().arrayOf(n().shape({alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired})).isRequired};var Uu=Ss,As=f(6518),Hu=f(97405),Gu=f(96315);const Os=({type:e,value:r})=>{const{formatDate:o,formatTime:s,formatNumber:a}=(0,Q.Z)();let l=r;if(e==="date"&&(l=o((0,Gu.Z)(r),{dateStyle:"full"})),e==="datetime"&&(l=o(r,{dateStyle:"full",timeStyle:"short"})),e==="time"){const[i,c,u]=r.split(":"),d=new Date;d.setHours(i),d.setMinutes(c),d.setSeconds(u),l=s(d,{numeric:"auto",style:"short"})}return["float","decimal"].includes(e)&&(l=a(r,{maximumFractionDigits:20})),["integer","biginteger"].includes(e)&&(l=a(r,{maximumFractionDigits:0})),Vo()(l)};Os.propTypes={type:n().string.isRequired,value:n().any.isRequired};var lt=Os;const Qu=(0,q.ZP)(G.Z)`
  max-width: 500px;
`,Ku=async(e,r,o)=>{const{data:{results:s,pagination:a}}=await o(e);return r(),{results:s,pagination:a}},$s=({fieldSchema:e,metadatas:r,name:o,entityId:s,value:a,contentType:l})=>{const{formatMessage:i}=(0,Q.Z)(),{notifyStatus:c}=(0,Cr.G)(),u=(0,t.useMemo)(()=>de(`relations/${l.uid}/${s}/${o.split(".")[0]}`),[s,o,l]),[d,m]=(0,t.useState)(!1),{get:g}=(0,h.kY)(),p=t.createElement(w.k,{gap:1,wrap:"nowrap"},t.createElement(As.C,null,a.count),i({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:a.count})),y=()=>{const k=i({id:v("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"});c(k)},{data:b,status:C}=(0,He.useQuery)([e.targetModel,s],()=>Ku(u,y,g),{enabled:d,staleTime:0,select:k=>({...k,results:[...k.results].reverse()})});return t.createElement(S.x,{...h.UW},t.createElement(we.O,{label:p,size:"S",onOpen:()=>m(!0),onClose:()=>m(!1)},C!=="success"&&t.createElement(we.s,{"aria-disabled":!0},t.createElement(Hu.a,{small:!0},i({id:v("DynamicTable.relation-loading"),defaultMessage:"Relations are loading"}))),C==="success"&&t.createElement(t.Fragment,null,b?.results.map(k=>t.createElement(we.s,{key:k.id,"aria-disabled":!0},t.createElement(Qu,{ellipsis:!0},t.createElement(lt,{type:r.mainField.schema.type,value:k[r.mainField.name]||k.id})))),b?.pagination.total>10&&t.createElement(we.s,{"aria-disabled":!0,"aria-label":i({id:v("DynamicTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"})},t.createElement(G.Z,null,"\u2026")))))};$s.propTypes={contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({relation:n().string,targetModel:n().string,type:n().string.isRequired}).isRequired,metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,name:n().string.isRequired,entityId:n().oneOfType([n().string,n().number]).isRequired,value:n().object.isRequired};var Yu=$s;const Xu=(0,q.ZP)(G.Z)`
  max-width: 500px;
`,Zs=({metadatas:e,value:r})=>t.createElement(Xu,{textColor:"neutral800",ellipsis:!0},t.createElement(lt,{type:e.mainField.schema.type,value:r[e.mainField.name]??r.id}));Zs.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,value:n().object.isRequired};var Ju=Zs;const _u=(0,q.ZP)(G.Z)`
  max-width: 500px;
`,qs=({value:e,metadatas:r})=>{const{formatMessage:o}=(0,Q.Z)(),{mainField:{type:s,name:a}}=r,l=t.createElement(t.Fragment,null,t.createElement(As.C,null,e.length)," ",o({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:e.length}));return t.createElement(S.x,{...h.UW},t.createElement(we.O,{label:l,size:"S"},e.map(i=>t.createElement(we.s,{key:i.id,"aria-disabled":!0},t.createElement(_u,{ellipsis:!0},t.createElement(lt,{type:s,value:i[a]||i.id}))))))};qs.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().array.isRequired};var em=qs;const tm=(0,q.ZP)(G.Z)`
  max-width: 250px;
`,Ns=({value:e,metadatas:r})=>{const{mainField:o}=r,s=e[o.name];return t.createElement(Ft.u,{label:s},t.createElement(tm,{textColor:"neutral800",ellipsis:!0},t.createElement(lt,{type:o.type,value:s})))};Ns.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().object.isRequired};var nm=Ns,rm=f(80022),js=f.n(rm);function Bs(e){return["oneToOne","manyToOne","oneToOneMorph"].includes(e)}function om(e,r,o,s){if(e==="component"){const{mainField:{name:a,type:l}}=o;if(s?.repeatable)return r.length>0;const i=r?.[a];return a==="id"&&![void 0,null].includes(i)?!0:ft(l)&&l!=="biginteger"&&a!=="id"?js()(i):!ye()(i)}return e==="relation"?Bs(s.relation)?!ye()(r):r?.count>0:ft(e)&&e!=="biginteger"?js()(r):e==="boolean"?r!==null:!ye()(r)}const Ws=(0,q.ZP)(G.Z)`
  max-width: 300px;
`,Tr=({content:e,fieldSchema:r,metadatas:o,name:s,rowId:a,contentType:l})=>{const{type:i}=r;if(!om(i,e,o,r))return t.createElement(G.Z,{textColor:"neutral800"},"-");switch(i){case"media":return r.multiple?t.createElement(Uu,{value:e}):t.createElement(Fs,{...e});case"relation":return Bs(r.relation)?t.createElement(Ju,{metadatas:o,value:e}):t.createElement(Yu,{fieldSchema:r,metadatas:o,value:e,name:s,entityId:a,contentType:l});case"component":return r.repeatable===!0?t.createElement(em,{value:e,metadatas:o}):t.createElement(nm,{value:e,metadatas:o});case"string":return t.createElement(Ft.u,{description:e},t.createElement(Ws,{ellipsis:!0,textColor:"neutral800"},t.createElement(lt,{type:i,value:e})));default:return t.createElement(Ws,{ellipsis:!0,textColor:"neutral800"},t.createElement(lt,{type:i,value:e}))}};Tr.defaultProps={content:void 0},Tr.propTypes={content:n().any,contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({component:n().string,multiple:n().bool,type:n().string.isRequired,repeatable:n().bool,relation:n().string}).isRequired,metadatas:n().object.isRequired,name:n().string.isRequired,rowId:n().oneOfType([n().string,n().number]).isRequired};var sm=Tr;const Mr=({canCreate:e,canDelete:r,contentType:o,headers:s,entriesToDelete:a,onClickDelete:l,onSelectRow:i,withMainAction:c,withBulkActions:u,rows:d})=>{const{push:m,location:{pathname:g}}=(0,ie.k6)(),{formatMessage:p}=(0,Q.Z)(),{trackUsage:y}=(0,h.rS)(),b=mo();return t.createElement(qu.p,null,d.map((C,k)=>{const M=a.findIndex(P=>P===C.id)!==-1,E=p({id:"content-manager.components.DynamicTable.row-line",defaultMessage:"item line {number}"},{number:k});return t.createElement(Nu.Tr,{key:C.id,...(0,h.X7)({fn(){y("willEditEntryFromList"),m({pathname:`${g}/${C.id}`,state:{from:g},search:b})},condition:u})},c&&t.createElement(vr.Td,{...h.UW},t.createElement(ju.C,{"aria-label":p({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,rs.Pp)(C.firstname,C.lastname)}),checked:M,onChange:()=>{i({name:C.id,value:!M})}})),s.map(({key:P,cellFormatter:F,name:T,...D})=>t.createElement(vr.Td,{key:P},typeof F=="function"?F(C,{key:P,name:T,...D}):t.createElement(sm,{content:C[T.split(".")[0]],name:T,contentType:o,...D,rowId:C.id}))),u&&t.createElement(vr.Td,null,t.createElement(w.k,{justifyContent:"end",...h.UW},t.createElement(ge.h,{forwardedAs:at.rU,onClick:()=>{y("willEditEntryFromButton")},to:{pathname:`${g}/${C.id}`,state:{from:g},search:b},label:p({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:E}),noBorder:!0,icon:t.createElement(Ye.Z,null)}),e&&t.createElement(S.x,{paddingLeft:1},t.createElement(ge.h,{forwardedAs:at.rU,to:{pathname:`${g}/create/clone/${C.id}`,state:{from:g},search:b},label:p({id:"app.component.table.duplicate",defaultMessage:"Duplicate {target}"},{target:E}),noBorder:!0,icon:t.createElement(Bu.Z,null)})),r&&t.createElement(S.x,{paddingLeft:1},t.createElement(ge.h,{onClick:()=>{y("willDeleteEntryFromList"),l(C.id)},label:p({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:E}),noBorder:!0,icon:t.createElement(Se.Z,null)})))))}))};Mr.defaultProps={canCreate:!1,canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},Mr.propTypes={canCreate:n().bool,canDelete:n().bool,contentType:n().shape({uid:n().string.isRequired}).isRequired,entriesToDelete:n().array,headers:n().array.isRequired,onClickDelete:n().func,onSelectRow:n().func,rows:n().array,withBulkActions:n().bool,withMainAction:n().bool};var am=Mr;const zs=({area:e,...r})=>{const o=Ro(e);return o?t.createElement("ul",null,o.map(s=>s.Component(r)?t.createElement(S.x,{key:s.name,padding:3,style:{textAlign:"center"}},t.createElement(s.Component,{...r})):null)):null};zs.propTypes={area:n().string.isRequired};var Vs=zs;const Us=({isConfirmButtonLoading:e,isOpen:r,onToggleDialog:o,onConfirm:s})=>{const{formatMessage:a}=(0,Q.Z)();return t.createElement(Ut.V,{onClose:o,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:r},t.createElement(Ht.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},a({id:v("popUpWarning.bodyMessage.contentType.delete.all"),defaultMessage:"Are you sure you want to delete these entries?"}))),t.createElement(w.k,null,t.createElement(Vs,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),t.createElement(Gt.c,{startAction:t.createElement(ue.z,{onClick:o,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{onClick:s,variant:"danger-light",startIcon:t.createElement(Se.Z,null),id:"confirm-delete",loading:e},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Us.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};var im=Us;const Hs=({isConfirmButtonLoading:e,isOpen:r,onToggleDialog:o,onConfirm:s})=>{const{formatMessage:a}=(0,Q.Z)();return t.createElement(Ut.V,{onClose:o,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:r},t.createElement(Ht.a,{icon:t.createElement(ut.Z,null)},t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(w.k,{justifyContent:"center"},t.createElement(G.Z,{id:"confirm-description"},a({id:"components.popUpWarning.message",defaultMessage:"Are you sure you want to delete this?"}))),t.createElement(w.k,null,t.createElement(Vs,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),t.createElement(Gt.c,{startAction:t.createElement(ue.z,{onClick:o,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:t.createElement(ue.z,{onClick:s,variant:"danger-light",startIcon:t.createElement(Se.Z,null),id:"confirm-delete",loading:e},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Hs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};var lm=Hs;const cm=(0,q.ZP)(tn.q)`
  width: min-content;
`,Dr=({canCreate:e,canDelete:r,contentTypeName:o,action:s,isBulkable:a,isLoading:l,onConfirmDelete:i,onConfirmDeleteAll:c,layout:u,rows:d})=>{const{runHookWaterfall:m}=(0,h.j1)(),g=u.contentType.options.draftAndPublish||!1,{formatMessage:p}=(0,Q.Z)(),y=(0,le.v9)(xs),b=(0,t.useMemo)(()=>{const k=m(At.No,{displayedHeaders:y,layout:u}).displayedHeaders.map(M=>{const{metadatas:E}=M;if(M.fieldSchema.type==="relation"){const P=`${M.name}.${M.metadatas.mainField.name}`;return{...M,metadatas:{...E,label:p({id:v(`containers.ListPage.table-headers.${M.name}`),defaultMessage:E.label})},name:P}}return{...M,metadatas:{...E,label:p({id:v(`containers.ListPage.table-headers.${M.name}`),defaultMessage:E.label})}}});return g?[...k,{key:"__published_at_temp_key__",name:"publishedAt",fieldSchema:{type:"custom"},metadatas:{label:p({id:v("containers.ListPage.table-headers.publishedAt"),defaultMessage:"publishedAt"}),searchable:!1,sortable:!0},cellFormatter(M){const E=M.publishedAt,P=E?"success":"secondary";return t.createElement(cm,{showBullet:!1,variant:P,size:"S"},t.createElement(G.Z,{fontWeight:"bold",textColor:`${P}700`},p({id:v(`containers.List.${E?"published":"draft"}`),defaultMessage:E?"Published":"Draft"})))}}]:k},[m,y,u,g,p]);return t.createElement(h.tM,{components:{ConfirmDialogDelete:lm,ConfirmDialogDeleteAll:im},contentType:o,action:s,isLoading:l,headers:b,onConfirmDelete:i,onConfirmDeleteAll:c,onOpenDeleteAllModalTrackedEvent:"willBulkDeleteEntries",rows:d,withBulkActions:!0,withMainAction:r&&a},t.createElement(am,{canCreate:e,canDelete:r,contentType:u.contentType,headers:b,rows:d,withBulkActions:!0,withMainAction:r&&a}))};Dr.defaultProps={action:void 0},Dr.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,contentTypeName:n().string.isRequired,action:n().node,isBulkable:n().bool.isRequired,isLoading:n().bool.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,onConfirmDelete:n().func.isRequired,onConfirmDeleteAll:n().func.isRequired,rows:n().array.isRequired};var dm=Dr;const um=["json","component","media","richtext","dynamiczone","password"],mm=["createdAt","updatedAt"];var pm=(e,r)=>{const{allPermissions:o}=(0,h.vn)(),s=(0,h.ZT)(o,[{action:"plugin::content-manager.explorer.read",subject:r}]),a=I()(s,["0","properties","fields"],[]);return Object.keys(I()(e,["attributes"]),{}).filter(c=>{const u=I()(e,["attributes",c],{});return!(!u.type||um.includes(u.type)||!a.includes(c)&&c!=="id"&&!mm.includes(c))}).sort()},gm=f(5644);const Gs=({displayedFilters:e})=>{const[r,o]=(0,t.useState)(!1),{formatMessage:s}=(0,Q.Z)(),a=(0,t.useRef)(),{trackUsage:l}=(0,h.rS)(),i=()=>{r||l("willFilterEntries"),o(c=>!c)};return t.createElement(t.Fragment,null,t.createElement(S.x,{paddingTop:1,paddingBottom:1},t.createElement(ue.z,{variant:"tertiary",ref:a,startIcon:t.createElement(gm.Z,null),onClick:i,size:"S"},s({id:"app.utils.filters",defaultMessage:"Filters"})),r&&t.createElement(h.J5,{displayedFilters:e,isVisible:r,onToggle:i,source:a})),t.createElement(h.W$,{filtersSchema:e}))};Gs.propTypes={displayedFilters:n().arrayOf(n().shape({name:n().string.isRequired,metadatas:n().shape({label:n().string}),fieldSchema:n().shape({type:n().string})})).isRequired};var fm=Gs;const Qs=({contentType:e,slug:r,metadatas:o})=>{const{formatMessage:s}=(0,Q.Z)(),l=pm(e,r).map(i=>{const c=e.attributes[i],{type:u,enum:d}=c,m={name:"didFilterEntries",properties:{useRelation:u==="relation"}},{mainField:g,label:p}=o[i].list;return{name:i,metadatas:{label:s({id:p,defaultMessage:p})},fieldSchema:{type:u,options:d,mainField:g},trackedEvent:m}});return t.createElement(fm,{displayedFilters:l})};Qs.propTypes={contentType:n().object.isRequired,metadatas:n().object.isRequired,slug:n().string.isRequired};var hm=Qs,ym=e=>Object.keys(e).reduce((o,s)=>{const a=e[s];return zr(a)&&o.push(s),o},[]).sort();const Ks=({layout:e})=>{const r=(0,le.I0)(),o=(0,le.v9)(xs),{trackUsage:s}=(0,h.rS)(),{formatMessage:a}=(0,Q.Z)(),l=ym(e.contentType.attributes).map(u=>{const d=e.contentType.metadatas[u].list;return{name:u,intlLabel:{id:d.label,defaultMessage:d.label}}}),i=o.map(({name:u})=>u),c=u=>{if(s("didChangeDisplayedFields"),u.length<i.length){const d=i.filter(m=>u.indexOf(m)===-1);r(Er({name:d[0],value:!0}))}else{const d=u.filter(m=>i.indexOf(m)===-1);r(Er({name:d[0],value:!1}))}};return t.createElement(S.x,{paddingTop:1,paddingBottom:1},t.createElement(Pe.P,{"aria-label":"change displayed fields",value:i,onChange:c,customizeContent:u=>a({id:v("select.currently.selected"),defaultMessage:"{count} currently selected"},{count:u.length}),multi:!0,size:"S"},l.map(u=>t.createElement(he.W,{key:u.name,value:u.name},a({id:u.intlLabel.id||u.name,defaultMessage:u.intlLabel.defaultMessage||u.name})))))};Ks.propTypes={layout:n().shape({contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired};var bm=(0,t.memo)(Ks);const kr=({pagination:e})=>t.createElement(S.x,{paddingTop:4},t.createElement(w.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(h.v4,{trackedEvent:"willChangeNumberOfEntriesPerPage"}),t.createElement(h.tU,{pagination:e})));kr.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},kr.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};var Em=kr;const Cm=Ke.Z.contentManager,vm=(0,q.ZP)(S.x)`
  svg {
    path {
      fill: ${({theme:e})=>e.colors.neutral900};
    }
  }
`;function Ys({canCreate:e,canDelete:r,canRead:o,data:s,getData:a,getDataSucceeded:l,isLoading:i,layout:c,pagination:u,slug:d}){const{total:m}=u,{contentType:{metadatas:g,settings:{bulkable:p,filterable:y,searchable:b}}}=c,C=(0,h.lm)(),{trackUsage:k}=(0,h.rS)(),{refetchPermissions:M}=(0,h.vn)(),E=(0,t.useRef)(k),P=(0,t.useRef)(M),{notifyStatus:F}=(0,Cr.G)(),{formatAPIError:T}=(0,h.So)(v);(0,h.go)();const[{query:D}]=(0,h.Kx)(),x=Jo(D),N=(0,Ae.stringify)({plugins:D.plugins},{encode:!1}),{pathname:z}=(0,ie.TH)(),{push:$}=(0,ie.k6)(),{formatMessage:H}=(0,Q.Z)(),j=c.contentType,Y=I()(j,"options.draftAndPublish",!1),B=(0,h.kY)(),{post:X,del:Z}=B,W=(0,t.useRef)(""),R=(0,t.useCallback)(async(ee,oe)=>{a();try{const V=oe?{cancelToken:oe.token}:null,{data:{results:se,pagination:be}}=await B.get(ee,V);F(H({id:v("utils.data-loaded"),defaultMessage:"{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"},{number:be.count})),l(be,se)}catch(V){if(ve.Z.isCancel(V))return;if(I()(V,"response.status",null)===403){await P.current(),C({type:"info",message:{id:v("permissions.not-allowed.update")}}),$("/");return}C({type:"warning",message:{id:v("error.model.fetch")}})}},[H,a,l,F,$,C,B]),A=(0,t.useCallback)(async ee=>{try{await X(de(`collection-types/${d}/actions/bulkDelete`),{ids:ee});const oe=de(`collection-types/${d}${x}`);R(oe),E.current("didBulkDeleteEntries")}catch(oe){C({type:"warning",message:T(oe)})}},[R,x,d,C,T,X]),U=(0,t.useCallback)(async ee=>{try{await Z(de(`collection-types/${d}/${ee}`));const oe=de(`collection-types/${d}${x}`);R(oe),C({type:"success",message:{id:v("success.record.delete")}})}catch(oe){C({type:"warning",message:T(oe)})}},[d,x,R,C,T,Z]);(0,t.useEffect)(()=>{const oe=ve.Z.CancelToken.source(),V=o,se=de(`collection-types/${d}${x}`);return V&&se.includes(W.current)&&R(se,oe),()=>{W.current=d,oe.cancel("Operation canceled by the user.")}},[o,a,d,x,l,R]);const K=H({id:v("header.name"),defaultMessage:"Content"}),L=H({id:j.info.displayName,defaultMessage:j.info.displayName||K}),O=o?H({id:v("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:m}):null,re=ee=>e?t.createElement(ue.z,{...ee,forwardedAs:at.rU,onClick:()=>{const oe=Y?{status:"draft"}:{};E.current("willCreateEntry",oe)},to:{pathname:`${z}/create`,search:D.plugins?N:""},startIcon:t.createElement(pt.Z,null),style:{textDecoration:"none"}},H({id:v("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})):null;return t.createElement(xe.o,{"aria-busy":i},t.createElement(Fe.T,{primaryAction:re(),subtitle:O,title:L,navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Vt.Z,null),to:"/content-manager/"},H({id:"global.back",defaultMessage:"Back"}))}),!o&&t.createElement(Ls.Z,{endActions:t.createElement(Ot,{area:"contentManager.listView.actions"})}),o&&t.createElement(Ls.Z,{endActions:t.createElement(t.Fragment,null,t.createElement(Ot,{area:"contentManager.listView.actions"}),t.createElement(bm,{layout:c}),t.createElement(h.jW,{permissions:Cm.collectionTypesConfigurations},t.createElement(vm,{paddingTop:1,paddingBottom:1},t.createElement(ge.h,{onClick:()=>{k("willEditListLayout")},forwardedAs:at.rU,to:{pathname:`${d}/configurations/list`,search:N},icon:t.createElement(us.Z,null),label:H({id:"app.links.configure-view",defaultMessage:"Configure the view"})})))),startActions:t.createElement(t.Fragment,null,b&&t.createElement(h.m,{label:H({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:L}),placeholder:H({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),y&&t.createElement(hm,{contentType:j,slug:d,metadatas:g}))}),t.createElement(tt.D,null,o?t.createElement(t.Fragment,null,t.createElement(dm,{canCreate:e,canDelete:r,contentTypeName:L,onConfirmDeleteAll:A,onConfirmDelete:U,isBulkable:p,isLoading:i,layout:c,rows:s,action:re({variant:"secondary"})}),t.createElement(Em,{pagination:{pageCount:u?.pageCount||1}})):t.createElement(h.ZF,null)))}Ys.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,canRead:n().bool.isRequired,data:n().array.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,info:n().shape({displayName:n().string.isRequired}).isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,isLoading:n().bool.isRequired,getData:n().func.isRequired,getDataSucceeded:n().func.isRequired,pagination:n().shape({total:n().number.isRequired,pageCount:n().number}).isRequired,slug:n().string.isRequired};const Rm=Zu();function Tm(e){return(0,Is.bindActionCreators)({getData:xu,getDataSucceeded:Pu,onChangeListHeaders:Er,onResetListHeaders:wu},e)}const Mm=(0,le.$j)(Rm,Tm);var Dm=(0,Is.compose)(Mm)((0,t.memo)(Ys,qe()));const Ir=e=>{const r=(0,t.useMemo)(()=>Hr(e.slug),[e.slug]),{isLoading:o,allowedActions:s}=(0,h.ss)(r,e.permissions);return o?t.createElement(h.dO,null):t.createElement(Dm,{...e,...s})};Ir.defaultProps={permissions:[]},Ir.propTypes={permissions:n().array,slug:n().string.isRequired};var km=(0,t.memo)(Ir,(e,r)=>{const o=(0,h.e5)(e,r);return Object.keys(o).filter(a=>a!=="state").length>0});const Xs=({layout:e,...r})=>{const o=(0,le.I0)(),{replace:s}=(0,ie.k6)(),[{query:a,rawQuery:l}]=(0,h.Kx)(),i=go(a,r.slug,"listView"),c=uo(r.slug);return(0,t.useEffect)(()=>{l||s(c)},[l,s,c]),(0,t.useEffect)(()=>{o(Su(e))},[o,e]),(0,t.useEffect)(()=>()=>{o(Fu())},[o]),i?t.createElement(km,{...r,layout:e,permissions:i}):null};Xs.propTypes={layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired,pluginOptions:n().object}).isRequired}).isRequired,slug:n().string.isRequired};var Im=Xs,Lm=(e,r)=>{const{put:o}=(0,h.tg)();return o(de(`content-types/${r}/configuration`),e)};const Lr=({modifiedData:e,onChange:r,sortOptions:o})=>{const{formatMessage:s}=(0,Q.Z)(),{settings:a,metadatas:l}=e;return t.createElement(w.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(G.Z,{variant:"delta",as:"h2"},s({id:v("containers.SettingPage.settings"),defaultMessage:"Settings"})),t.createElement(w.k,{justifyContent:"space-between",gap:4},t.createElement(S.x,{width:"100%"},t.createElement(Et.s,{label:s({id:v("form.Input.search"),defaultMessage:"Enable search"}),onChange:i=>{r({target:{name:"settings.searchable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.searchable",checked:a.searchable})),t.createElement(S.x,{width:"100%"},t.createElement(Et.s,{label:s({id:v("form.Input.filters"),defaultMessage:"Enable filters"}),onChange:i=>{r({target:{name:"settings.filterable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.filterable",checked:a.filterable})),t.createElement(S.x,{width:"100%"},t.createElement(Et.s,{label:s({id:v("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"}),onChange:i=>{r({target:{name:"settings.bulkable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.bulkable",checked:a.bulkable}))),t.createElement(De.r,{gap:4},t.createElement(fe.P,{s:12,col:6},t.createElement(Pe.P,{label:s({id:v("form.Input.pageEntries"),defaultMessage:"Entries per page"}),hint:s({id:v("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."}),onChange:i=>r({target:{name:"settings.pageSize",value:i}}),name:"settings.pageSize",value:e.settings.pageSize||""},[10,20,50,100].map(i=>t.createElement(he.W,{key:i,value:i},i)))),t.createElement(fe.P,{s:12,col:3},t.createElement(Pe.P,{label:s({id:v("form.Input.defaultSort"),defaultMessage:"Default sort attribute"}),onChange:i=>r({target:{name:"settings.defaultSortBy",value:i}}),name:"settings.defaultSortBy",value:e.settings.defaultSortBy||""},o.map(i=>t.createElement(he.W,{key:i,value:i},l[i].list.label||i)))),t.createElement(fe.P,{s:12,col:3},t.createElement(Pe.P,{label:s({id:v("form.Input.sort.order"),defaultMessage:"Default sort order"}),onChange:i=>r({target:{name:"settings.defaultSortOrder",value:i}}),name:"settings.defaultSortOrder",value:e.settings.defaultSortOrder||""},["ASC","DESC"].map(i=>t.createElement(he.W,{key:i,value:i},i))))))};Lr.defaultProps={modifiedData:{},sortOptions:[]},Lr.propTypes={modifiedData:n().object,onChange:n().func.isRequired,sortOptions:n().array};var xm=Lr;const xr=q.ZP.button`
  display: flex;
  align-items: center;
  height: ${({theme:e})=>e.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:e})=>e.spaces[3]};
  }
`,Js=(0,q.ZP)(xr)`
  padding: 0 ${({theme:e})=>e.spaces[3]};
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Pm=(0,q.ZP)(w.k)`
  max-height: ${32/16}rem;
  cursor: pointer;

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    border-color: ${({theme:e})=>e.colors.primary200};

    svg {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }

    ${G.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${Js} {
      border-right: 1px solid ${({theme:e})=>e.colors.primary200};
    }
  }
`,wm=(0,q.ZP)(S.x)`
  &:last-child {
    padding-right: ${({theme:e})=>e.spaces[3]};
  }
`,_s=({index:e,isDraggingSibling:r,labelField:o,onClickEditField:s,onMoveField:a,onRemoveField:l,name:i,setIsDraggingSibling:c})=>{const{formatMessage:u}=(0,Q.Z)(),d=(0,t.useRef)(null),m=(0,t.useRef)(null),[,g]=(0,t.useState)(!1),p=(0,t.useRef)(),y=Zr(o),b=()=>{p.current&&p.current.click()},[,C]=(0,ze.useDrop)({accept:Ce.FIELD,hover(F,T){if(!m.current)return;const D=F.index,x=e;if(D===x)return;const N=m.current.getBoundingClientRect(),z=(N.right-N.left)/2,H=T.getClientOffset().x-N.left;D>x&&H>z||D<x&&H<z||(a(D,x),F.index=x)}}),[{isDragging:k},M,E]=(0,ze.useDrag)({type:Ce.FIELD,item(){return{index:e,labelField:o,name:i}},collect:F=>({isDragging:F.isDragging()}),end(){c(!1)}});(0,t.useEffect)(()=>{E((0,ct.rX)(),{captureDraggingState:!1})},[E]),(0,t.useEffect)(()=>{k&&c(!0)},[k,c]),(0,t.useEffect)(()=>{r||g(F=>!F)},[r]);const P={dragRef:M(d),dropRef:C(m)};return t.createElement(wm,{ref:P?P.dropRef:null},k&&t.createElement(en,{transparent:!0,labelField:y}),!k&&r&&t.createElement(en,{isSibling:!0,labelField:y}),!k&&!r&&t.createElement(Pm,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:b,isDragging:k},t.createElement(w.k,{gap:3},t.createElement(Js,{as:"span","aria-label":u({id:v("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:o}),onClick:F=>F.stopPropagation(),ref:P.dragRef,type:"button"},t.createElement($e.Z,null)),t.createElement(G.Z,{fontWeight:"bold"},y)),t.createElement(w.k,{paddingLeft:3},t.createElement(xr,{ref:p,onClick:F=>{F.stopPropagation(),s(i)},"aria-label":u({id:v("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:o}),type:"button"},t.createElement(Ye.Z,null)),t.createElement(xr,{onClick:l,"data-testid":`delete-${i}`,"aria-label":u({id:v("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:o}),type:"button"},t.createElement(kt.Z,null)))))};_s.propTypes={index:n().number.isRequired,isDraggingSibling:n().bool.isRequired,labelField:n().string.isRequired,name:n().string.isRequired,onClickEditField:n().func.isRequired,onMoveField:n().func.isRequired,onRemoveField:n().func.isRequired,setIsDraggingSibling:n().func.isRequired};var Fm=_s;const ea=(0,q.ZP)(S.x)`
  flex: ${({size:e})=>e};
`,Sm=(0,q.ZP)(ea)`
  overflow-x: scroll;
  overflow-y: hidden;
`,Am=(0,q.ZP)(ea)`
  max-width: ${32/16}rem;
`,ta=({displayedFields:e,listRemainingFields:r,metadatas:o,onAddField:s,onClickEditField:a,onMoveField:l,onRemoveField:i})=>{const{formatMessage:c}=(0,Q.Z)(),[u,d]=(0,t.useState)(!1),[m,g]=(0,t.useState)(null),p=(0,t.useRef)();function y(...C){g("add"),s(...C)}function b(...C){g("remove"),i(...C)}return(0,t.useEffect)(()=>{m==="add"&&p?.current&&(p.current.scrollLeft=p.current.scrollWidth)},[e,m]),t.createElement(t.Fragment,null,t.createElement(S.x,{paddingBottom:4},t.createElement(G.Z,{variant:"delta",as:"h2"},c({id:v("containers.SettingPage.view"),defaultMessage:"View"}))),t.createElement(w.k,{paddingTop:4,paddingLeft:4,paddingRight:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0},t.createElement(Sm,{size:"1",paddingBottom:4,ref:p},t.createElement(w.k,{gap:3},e.map((C,k)=>t.createElement(Fm,{key:C,index:k,isDraggingSibling:u,onMoveField:l,onClickEditField:a,onRemoveField:M=>b(M,k),name:C,labelField:o[C].list.label||C,setIsDraggingSibling:d})))),t.createElement(Am,{size:"auto",paddingBottom:4},t.createElement(we.O,{label:c({id:v("components.FieldSelect.label"),defaultMessage:"Add a field"}),as:ge.h,icon:t.createElement(pt.Z,null),disabled:r.length<=0,"data-testid":"add-field"},r.map(C=>t.createElement(we.s,{key:C,onClick:()=>y(C)},o[C].list.label||C))))))};ta.propTypes={displayedFields:Te.PropTypes.array.isRequired,listRemainingFields:Te.PropTypes.array.isRequired,metadatas:Te.PropTypes.objectOf(Te.PropTypes.shape({list:Te.PropTypes.shape({label:Te.PropTypes.string})})).isRequired,onAddField:Te.PropTypes.func.isRequired,onClickEditField:Te.PropTypes.func.isRequired,onMoveField:Te.PropTypes.func.isRequired,onRemoveField:Te.PropTypes.func.isRequired};var Om=ta;const $m=(0,q.ZP)(w.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:e})=>e.spaces[3]};
  }
`,na=({attributes:e,fieldForm:r,fieldToEdit:o,onCloseModal:s,onChangeEditLabel:a,onSubmit:l,type:i})=>{const{formatMessage:c}=(0,Q.Z)(),u=e[o].relationType;let d=!["media","relation"].includes(i);return["oneWay","oneToOne","manyToOne"].includes(u)&&(d=!0),t.createElement(bs.P,{onClose:s,labelledBy:"title"},t.createElement("form",{onSubmit:l},t.createElement(Es.x,null,t.createElement($m,null,t.createElement(Ms,{type:i}),t.createElement(G.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:v("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:yt()(o)})))),t.createElement(Cs.f,null,t.createElement(De.r,{gap:4},t.createElement(fe.P,{s:12,col:6},t.createElement(In.o,{id:"label-input",label:c({id:v("form.Input.label"),defaultMessage:"Label"}),name:"label",onChange:m=>a(m),value:r.label,hint:c({id:v("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"})})),d&&t.createElement(fe.P,{s:12,col:6},t.createElement(Et.s,{"data-testid":"Enable sort on this field",checked:r.sortable,label:c({id:v("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",onChange:m=>a({target:{name:"sortable",value:m.target.checked}}),onLabel:c({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:c({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"})})))),t.createElement(vs.m,{startActions:t.createElement(ue.z,{onClick:s,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:t.createElement(ue.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};na.propTypes={attributes:n().objectOf(n().shape({relationType:n().string})).isRequired,fieldForm:n().shape({label:n().string,sortable:n().bool}).isRequired,fieldToEdit:n().string.isRequired,onChangeEditLabel:n().func.isRequired,onCloseModal:n().func.isRequired,onSubmit:n().func.isRequired,type:n().string.isRequired};var Zm=na,qm=(e,r)=>({...e,initialData:r,modifiedData:r});const Pr={fieldForm:{},fieldToEdit:"",initialData:{},modifiedData:{}};var Nm=(e=Pr,r)=>(0,St.ZP)(e,o=>{const s=["modifiedData","layouts","list"];switch(r.type){case"ADD_FIELD":{const a=I()(e,s,[]);J()(o,s,[...a,r.item]);break}case"MOVE_FIELD":{const a=I()(e,s,[]),{originalIndex:l,atIndex:i}=r;J()(o,s,It(a,l,i));break}case"ON_CHANGE":{J()(o,["modifiedData",...r.keys.split(".")],r.value);break}case"ON_CHANGE_FIELD_METAS":{J()(o,["fieldForm",r.name],r.value);break}case"REMOVE_FIELD":{const a=I()(e,s,[]);J()(o,s,a.filter((l,i)=>r.index!==i));break}case"SET_FIELD_TO_EDIT":{const{fieldToEdit:a}=r;o.fieldToEdit=a,o.fieldForm.label=I()(o,["modifiedData","metadatas",a,"list","label"],""),o.fieldForm.sortable=I()(o,["modifiedData","metadatas",a,"list","sortable"],"");break}case"UNSET_FIELD_TO_EDIT":{o.fieldForm={},o.fieldToEdit="";break}case"SUBMIT_FIELD_FORM":{const a=["modifiedData","metadatas",e.fieldToEdit,"list"];J()(o,[...a,"label"],e.fieldForm.label),J()(o,[...a,"sortable"],e.fieldForm.sortable);break}default:return o}});const jm=["media","richtext","dynamiczone","relation","component","json"],ra=({layout:e,slug:r})=>{const{formatMessage:o}=(0,Q.Z)(),{trackUsage:s}=(0,h.rS)(),a=mo(),l=(0,h.lm)(),{refetchData:i}=(0,t.useContext)(Eo),[c,u]=(0,t.useState)(!1),d=()=>u(R=>!R),[m,g]=(0,t.useReducer)(Nm,Pr,()=>qm(Pr,e)),{fieldToEdit:p,fieldForm:y,initialData:b,modifiedData:C}=m,k=!ye()(y),{attributes:M}=e,E=C.layouts.list,P=()=>{const{settings:{pageSize:R,defaultSortBy:A,defaultSortOrder:U},kind:K,uid:L}=b,O=`${A}:${U}`,re=`${(0,Ae.stringify)({page:1,pageSize:R,sort:O},{encode:!1})}${a?`&${a}`:""}`;return`/content-manager/${K}/${L}?${re}`},F=({target:{name:R,value:A}})=>{g({type:"ON_CHANGE",keys:R,value:R==="settings.pageSize"?parseInt(A,10):A})},T=async()=>{const R=xn()(C,["layouts","settings","metadatas"]);j.mutate(R)},D=R=>{g({type:"ADD_FIELD",item:R})},x=(R,A)=>{R.stopPropagation(),E.length===1?l({type:"info",message:{id:v("notification.info.minimumFields")}}):g({type:"REMOVE_FIELD",index:A})},N=R=>{R.preventDefault(),d(),s("willSaveContentTypeLayout")},z=R=>{g({type:"SET_FIELD_TO_EDIT",fieldToEdit:R})},$=()=>{g({type:"UNSET_FIELD_TO_EDIT"})},H=R=>{R.preventDefault(),g({type:"SUBMIT_FIELD_FORM"}),$()},j=(0,He.useMutation)(R=>Lm(R,r),{onSuccess(){s("didEditListSettings"),i()},onError(){l({type:"warning",message:{id:"notification.error"}})}}),{isLoading:Y}=j,B=({target:{name:R,value:A}})=>{g({type:"ON_CHANGE_FIELD_METAS",name:R,value:A})},X=Object.entries(M).reduce((R,A)=>{const[U,K]=A,L=zr(K),O=E.includes(U);return L&&!O&&R.push(U),R},[]).sort(),Z=Object.entries(M).reduce((R,A)=>{const[U,{type:K}]=A;return jm.includes(K)||R.push(U),R},[]),W=(R,A)=>{g({type:"MOVE_FIELD",originalIndex:R,atIndex:A})};return t.createElement(Dt.A,null,t.createElement(xe.o,{"aria-busy":Y},t.createElement("form",{onSubmit:N},t.createElement(Fe.T,{navigationAction:t.createElement(h.rU,{startIcon:t.createElement(Vt.Z,null),to:P,id:"go-back"},o({id:"global.back",defaultMessage:"Back"})),primaryAction:t.createElement(ue.z,{size:"S",startIcon:t.createElement(ot.Z,null),disabled:gt()(C,b),type:"submit"},o({id:"global.save",defaultMessage:"Save"})),subtitle:o({id:v("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:o({id:v("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:yt()(C.info.displayName)})}),t.createElement(tt.D,null,t.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(xm,{modifiedData:C,onChange:F,sortOptions:Z}),t.createElement(S.x,{paddingTop:6,paddingBottom:6},t.createElement(tr.i,null)),t.createElement(Om,{listRemainingFields:X,displayedFields:E,onAddField:D,onClickEditField:z,onMoveField:W,onRemoveField:x,metadatas:C.metadatas}))),t.createElement(h.QH,{bodyText:{id:v("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:t.createElement(ot.Z,null),isConfirmButtonLoading:Y,isOpen:c,onToggleDialog:d,onConfirm:T,variantRightButton:"success-light"})),k&&t.createElement(Zm,{attributes:M,fieldForm:y,fieldToEdit:p,onChangeEditLabel:B,onCloseModal:$,onSubmit:H,type:I()(M,[p,"type"],"text")})))};ra.propTypes={layout:n().shape({uid:n().string.isRequired,settings:n().shape({bulkable:n().bool,defaultSortBy:n().string,defaultSortOrder:n().string,filterable:n().bool,pageSize:n().number,searchable:n().bool}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().objectOf(n().shape({type:n().string})).isRequired}).isRequired,slug:n().string.isRequired};var Bm=(0,t.memo)(ra),Wm=()=>t.createElement(S.x,{padding:8},t.createElement(h.Hn,null));const oa=Ke.Z.contentManager,sa=({match:{params:{slug:e},url:r}})=>{const{isLoading:o,layout:s,updateLayout:a}=io(e),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,t.useMemo)(()=>{let m={},g={};return s.contentType&&(m=Pt(s.contentType)),s.components&&(g=Object.keys(s.components).reduce((p,y)=>(p[y]=Pt(s.components[y]),p),{})),{rawContentTypeLayout:m,rawComponentsLayouts:g}},[s]);if((s?.contentType?.uid??null)!==e||o)return t.createElement(h.dO,null);const u=({location:{state:m},history:{goBack:g},match:{params:{id:p,origin:y}}},b)=>t.createElement(b,{slug:e,layout:s,state:m,goBack:g,id:p,origin:y}),d=[{path:"create/clone/:origin",comp:Qt},{path:"create",comp:Qt},{path:":id",comp:Qt},{path:"",comp:Im}].map(({path:m,comp:g})=>t.createElement(ie.AW,{key:m,path:`${r}/${m}`,render:p=>u(p,g)}));return t.createElement(ai.ErrorBoundary,{FallbackComponent:Wm},t.createElement(Co.Provider,{value:s},t.createElement(ie.rs,null,t.createElement(ie.AW,{path:`${r}/configurations/list`},t.createElement(h.O4,{permissions:oa.collectionTypesConfigurations},t.createElement(Bm,{layout:l,slug:e,updateLayout:a}))),t.createElement(ie.AW,{path:`${r}/configurations/edit`},t.createElement(h.O4,{permissions:oa.collectionTypesConfigurations},t.createElement(br,{components:i,isContentTypeView:!0,mainLayout:l,slug:e,updateLayout:a}))),d)))};sa.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};var zm=(0,t.memo)(sa),aa=f(57678);const Vm=Ke.Z.contentManager,Um=()=>{const[{isLoading:e,data:r},o]=(0,t.useReducer)(aa.Z,aa.q),s=(0,t.useMemo)(cn,[]),{schemas:a}=(0,le.v9)(c=>s(c),le.wU),{uid:l}=(0,ie.UO)(),{get:i}=(0,h.kY)();return(0,t.useEffect)(()=>{const u=ve.Z.CancelToken.source();return(async m=>{try{o(Bt());const{data:{data:g}}=await i(de(`components/${l}/configuration`),{cancelToken:m.token});o(Qn(Kr(g,a,"component")))}catch(g){if(ve.Z.isCancel(g))return;console.error(g)}})(u),()=>{u.cancel("Operation canceled by the user.")}},[l,a,i]),e?t.createElement(h.dO,null):t.createElement(h.O4,{permissions:Vm.componentsConfigurations},t.createElement(br,{components:r.components,mainLayout:r.component,slug:l}))};var Hm=(0,t.memo)(Um),Gm=f(9695),Qm=f(54725),Km=()=>{const{formatMessage:e}=(0,Q.Z)();return(0,h.go)(),t.createElement(xe.o,null,t.createElement(Fe.T,{title:e({id:v("header.name"),defaultMessage:"Content"})}),t.createElement(tt.D,null,t.createElement(Gm.x,{action:t.createElement(h.Qj,{variant:"secondary",startIcon:t.createElement(pt.Z,null),to:"/plugins/content-type-builder/content-types/create-content-type"},e({id:"app.components.HomePage.create",defaultMessage:"Create your first Content-type"})),content:e({id:"content-manager.pages.NoContentType.text",defaultMessage:"You don't have any content yet, we recommend you to create your first Content-Type."}),hasRadius:!0,icon:t.createElement(Qm.Z,{width:"10rem"}),shadow:"tableShadow"})))},Ym=()=>{const{formatMessage:e}=(0,Q.Z)();return(0,h.go)(),t.createElement(xe.o,null,t.createElement(Fe.T,{title:e({id:v("header.name"),defaultMessage:"Content"})}),t.createElement(tt.D,null,t.createElement(h.ZF,null)))};const Xm=Ke.Z.contentManager,ia=({match:{params:{slug:e},url:r}})=>{const{isLoading:o,layout:s,updateLayout:a}=io(e),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,t.useMemo)(()=>{let c={},u={};return s.contentType&&(u=Pt(s.contentType)),s.components&&(c=Object.keys(s.components).reduce((d,m)=>(d[m]=Pt(s.components[m]),d),{})),{rawContentTypeLayout:u,rawComponentsLayouts:c}},[s]);return o?t.createElement(h.dO,null):t.createElement(Co.Provider,{value:s},t.createElement(ie.rs,null,t.createElement(ie.AW,{path:`${r}/configurations/edit`},t.createElement(h.O4,{permissions:Xm.singleTypesConfigurations},t.createElement(br,{components:i,isContentTypeView:!0,mainLayout:l,slug:e,updateLayout:a}))),t.createElement(ie.AW,{path:r,render:({location:{state:c},history:{goBack:u}})=>t.createElement(Qt,{layout:s,slug:e,isSingleType:!0,state:c,goBack:u})})))};ia.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};var Jm=(0,t.memo)(ia),_m=f(90700),ep=f(78090),tp=f(77013),np=f(79318),rp=f(66618),op=()=>{const[e,r]=(0,t.useState)(""),{formatMessage:o,locale:s}=(0,Q.Z)(),a=(0,t.useMemo)(Ha,[]),{collectionTypeLinks:l,singleTypeLinks:i}=(0,le.v9)(a,le.wU),{startsWith:c}=(0,h.L0)(s,{sensitivity:"base"}),u=(0,h.Xe)(s,{sensitivity:"base"}),d=(0,t.useMemo)(()=>[{id:"collectionTypes",title:{id:v("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"},searchable:!0,links:l},{id:"singleTypes",title:{id:v("components.LeftMenu.single-types"),defaultMessage:"Single Types"},searchable:!0,links:i}].map(y=>({...y,links:y.links.filter(b=>c(b.title,e)).sort((b,C)=>u.compare(b.title,C.title)).map(b=>({...b,title:o({id:b.title,defaultMessage:b.title})}))})),[l,e,i,c,o,u]),m=()=>{r("")},g=({target:{value:y}})=>{r(y)},p=o({id:v("header.name"),defaultMessage:"Content"});return t.createElement(_m.m,{ariaLabel:p},t.createElement(ep.p,{label:p,searchable:!0,value:e,onChange:g,onClear:m,searchLabel:o({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),t.createElement(tp.Z,null,d.map(y=>{const b=o({id:y.title.id,defaultMessage:y.title.defaultMessage},y.title.values);return t.createElement(np.D,{key:y.id,label:b,badgeLabel:y.links.length.toString()},y.links.map(C=>{const k=C.search?`?${C.search}`:"";return t.createElement(rp.E,{as:at.OL,key:C.uid,to:`${C.to}${k}`},C.title)}))})))},wr=f(92886);const sp=()=>({type:wr.fn}),ap=()=>({type:wr.sZ}),ip=({authorizedCollectionTypeLinks:e,authorizedSingleTypeLinks:r,contentTypeSchemas:o,components:s,fieldSizes:a})=>({type:wr.IX,data:{authorizedCollectionTypeLinks:e,authorizedSingleTypeLinks:r,components:s,contentTypeSchemas:o,fieldSizes:a}}),la=(e,r,o=[])=>e.filter(s=>s.isDisplayed).map(s=>{const a=[{action:"plugin::content-manager.explorer.create",subject:s.uid},{action:"plugin::content-manager.explorer.read",subject:s.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:s.uid}],i=r==="collectionTypes"?a:l,c=o.find(({uid:d})=>d===s.uid);let u=null;if(c){const d={page:1,pageSize:c.settings.pageSize,sort:`${c.settings.defaultSortBy}:${c.settings.defaultSortOrder}`};u=(0,Ae.stringify)(d,{encode:!1})}return{permissions:i,search:u,kind:s.kind,title:s.info.displayName,to:`/content-manager/${s.kind}/${s.uid}`,uid:s.uid,name:s.uid,isDisplayed:s.isDisplayed}});var lp=(e,r)=>{const o=Object.entries(Ho()(e,"kind")).map(([l,i])=>({name:l,links:i})),[s,a]=Ar()(o,"name");return{collectionTypeSectionLinks:la(s?.links||[],"collectionTypes",r),singleTypeSectionLinks:la(a?.links??[],"singleTypes")}},ca=(e,r)=>r.map(({permissions:o})=>(0,h.qX)(e,o)),cp=async({models:e,userPermissions:r,toggleNotification:o})=>{const{get:s}=(0,h.tg)();try{const{data:{data:a}}=await s(de("content-types-settings")),{collectionTypeSectionLinks:l,singleTypeSectionLinks:i}=lp(e,a),c=await Promise.all(ca(r,l)),u=l.filter((g,p)=>c[p]),d=await Promise.all(ca(r,i)),m=i.filter((g,p)=>d[p]);return{authorizedCollectionTypeLinks:u,authorizedSingleTypeLinks:m}}catch(a){return console.error(a),o({type:"warning",message:{id:"notification.error"}}),{authorizedCollectionTypeLinks:[],authorizedSingleTypeLinks:[]}}},dp=()=>{const e=(0,le.I0)(),r=(0,h.lm)(),o=(0,le.v9)(et()),s=(0,t.useRef)(),{allPermissions:a}=(0,h.vn)(),{runHookWaterfall:l}=(0,h.j1)(),c=ve.Z.CancelToken.source(),{notifyStatus:u}=(0,Cr.G)(),{formatMessage:d}=(0,Q.Z)(),{get:m}=(0,h.kY)(),g=async()=>{e(sp());try{const{data:{data:{components:p,contentTypes:y,fieldSizes:b}}}=await m(de("init"),{cancelToken:c.token});u(d({id:v("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}));const C=await cp({models:y,userPermissions:a,toggleNotification:r}),{ctLinks:k}=l(At.LK,{ctLinks:C.authorizedCollectionTypeLinks,models:y}),{stLinks:M}=l(At.dV,{stLinks:C.authorizedSingleTypeLinks,models:y}),E=ip({authorizedCollectionTypeLinks:k,authorizedSingleTypeLinks:M,contentTypeSchemas:y,components:p,fieldSizes:b});e(E)}catch(p){if(ve.Z.isCancel(p))return;console.error(p),r({type:"warning",message:{id:"notification.error"}})}};return s.current=g,(0,t.useEffect)(()=>(s.current(),()=>{c.cancel("Operation canceled by the user."),e(ap())}),[e,r]),{...o,refetchData:s.current}};const up=Ke.Z.contentManager,da=()=>{const e=(0,ie.$B)("/content-manager/:kind/:uid"),{status:r,collectionTypeLinks:o,singleTypeLinks:s,models:a,refetchData:l}=dp(),i=Ar()([...o,...s],p=>p.title.toLowerCase()),{pathname:c}=(0,ie.TH)(),{formatMessage:u}=(0,Q.Z)(),{startSection:d}=(0,h.c1)(),m=(0,t.useRef)(d);if((0,t.useEffect)(()=>{m.current&&m.current("contentManager")},[]),r==="loading")return t.createElement(xe.o,{"aria-busy":"true"},t.createElement(Fe.T,{title:u({id:v("header.name"),defaultMessage:"Content"})}),t.createElement(h.dO,null));const g=a.filter(({isDisplayed:p})=>p);return i.length===0&&g.length>0&&c!=="/content-manager/403"?t.createElement(ie.l_,{to:"/content-manager/403"}):g.length===0&&c!=="/content-manager/no-content-types"?t.createElement(ie.l_,{to:"/content-manager/no-content-types"}):!e&&i.length>0?t.createElement(ie.l_,{to:`${i[0].to}${i[0].search?`?${i[0].search}`:""}`}):t.createElement(Dt.A,{sideNav:t.createElement(op,null)},t.createElement(si,null),t.createElement(Eo.Provider,{value:{refetchData:l}},t.createElement(ie.rs,null,t.createElement(ie.AW,{path:"/content-manager/components/:uid/configurations/edit"},t.createElement(h.O4,{permissions:up.componentsConfigurations},t.createElement(Hm,null))),t.createElement(ie.AW,{path:"/content-manager/collectionType/:slug",component:zm}),t.createElement(ie.AW,{path:"/content-manager/singleType/:slug",component:Jm}),t.createElement(ie.AW,{path:"/content-manager/403"},t.createElement(Ym,null)),t.createElement(ie.AW,{path:"/content-manager/no-content-types"},t.createElement(Km,null)),t.createElement(ie.AW,{path:"",component:h.Hn}))))};function mp(){const{formatMessage:e}=(0,Q.Z)();return t.createElement(t.Fragment,null,t.createElement(Yt.q,{title:e({id:v("plugin.name"),defaultMessage:"Content Manager"})}),t.createElement(da,null))}},75536:function(ua,Mt,f){"use strict";var t=f(32735);const Yt=(ie,h)=>{const[xe,Fe]=(0,t.useState)(ie);return(0,t.useEffect)(()=>{const Dt=setTimeout(()=>{Fe(ie)},h);return()=>{clearTimeout(Dt)}},[ie,h]),xe};Mt.Z=Yt},57544:function(){},59599:function(){},42310:function(){},33842:function(){},85695:function(){}}]);
