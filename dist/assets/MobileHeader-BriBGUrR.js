import{e as f,r as n,j as e,g as i,l as u,L as l,B as g}from"./index-Zp5p5bte.js";import{R as y,b as j,O as d,C as c,a as b,X as N,T as m,D as x,P as w}from"./index-MEyqvQaH.js";import"./index-DThpbkYo.js";import"./index-C_Ql0qBr.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=f("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),k=y,S=j,C=w,p=n.forwardRef(({className:t,...s},a)=>e.jsx(d,{className:i("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s,ref:a}));p.displayName=d.displayName;const O=u("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"left"}}),h=n.forwardRef(({side:t="right",className:s,children:a,...r},o)=>e.jsxs(C,{children:[e.jsx(p,{}),e.jsxs(c,{ref:o,className:i(O({side:t}),s),...r,children:[a,e.jsxs(b,{className:"absolute right-8 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(N,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));h.displayName=c.displayName;const R=n.forwardRef(({className:t,...s},a)=>e.jsx(m,{ref:a,className:i("text-lg font-semibold text-foreground",t),...s}));R.displayName=m.displayName;const z=n.forwardRef(({className:t,...s},a)=>e.jsx(x,{ref:a,className:i("text-sm text-muted-foreground",t),...s}));z.displayName=x.displayName;function D(){const[t,s]=n.useState(!1),a=["Home","Projects","Blogs","Contacts","Services","About Us"],r=()=>{s(!1)};return e.jsx(e.Fragment,{children:e.jsx("header",{className:"sticky top-0 z-50 bg-background border-b md:hidden",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"flex items-center justify-between h-14",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(l,{to:"/",className:"flex items-center",children:e.jsx("img",{src:"https://files.catbox.moe/76j4ey.svg",alt:"Logo",className:"h-8 w-auto"})})}),e.jsxs(k,{open:t,onOpenChange:s,children:[e.jsx(S,{asChild:!0,children:e.jsxs(g,{variant:"ghost",size:"icon",className:"text-foreground w-8 py-0",children:[e.jsx(v,{className:"h-6 w-6 cursor-pointer"}),e.jsx("span",{className:"sr-only",children:"Open main menu"})]})}),e.jsx(h,{side:"left",className:"w-[300px] sm:w-[400px]",children:e.jsx("nav",{className:"mt-6",children:e.jsx("ul",{className:"space-y-4",children:a.map(o=>e.jsx("li",{children:e.jsx(l,{to:o==="Home"?"/":`/${o.toLowerCase().replace(" ","-")}`,className:"block py-2 text-foreground hover:text-primary transition duration-200",onClick:r,children:o})},o))})})})]})]})})})})}export{D as default};