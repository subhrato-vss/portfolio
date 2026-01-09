import{g as C,a as x,r as k,u as w,j as i,s as R,c as S,b as $,m as j,d as m,k as g}from"./index-7Gm_tF37.js";import{C as U}from"./Container-DJNmYZeb.js";import"./getThemeProps-Dwut1I3x.js";function M(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function A(t){return parseFloat(t)}function X(t){return C("MuiSkeleton",t)}x("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=t=>{const{classes:e,variant:a,animation:n,hasChildren:s,width:r,height:o}=t;return $({root:["root",a,n,s&&"withChildren",s&&!r&&"fitContent",s&&!o&&"heightAuto"]},X,e)},p=g`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,d=g`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,E=typeof p!="string"?m`
        animation: ${p} 2s ease-in-out 0.5s infinite;
      `:null,K=typeof d!="string"?m`
        &::after {
          animation: ${d} 2s linear 0.5s infinite;
        }
      `:null,N=R("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(j(({theme:t})=>{const e=M(t.shape.borderRadius)||"px",a=A(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:E||{animation:`${p} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:K||{"&::after":{animation:`${d} 2s linear 0.5s infinite`}}}]}})),l=k.forwardRef(function(e,a){const n=w({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:r,component:o="span",height:h,style:f,variant:b="text",width:v,...u}=n,c={...n,animation:s,component:o,variant:b,hasChildren:!!u.children},y=B(c);return i.jsx(N,{as:o,ref:a,className:S(y.root,r),ownerState:c,...u,style:{width:v,height:h,...f}})});function F(){return i.jsxs(U,{sx:{py:10},children:[i.jsx(l,{variant:"text",width:220,height:50,sx:{bgcolor:"#1e293b"}}),i.jsx(l,{variant:"rectangular",height:120,sx:{mt:3,bgcolor:"#1e293b",borderRadius:2}}),i.jsx(l,{variant:"rectangular",height:120,sx:{mt:2,bgcolor:"#1e293b",borderRadius:2}})]})}export{F as default};
