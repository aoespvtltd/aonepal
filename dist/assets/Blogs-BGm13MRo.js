import{j as e,L as o}from"./index-Zp5p5bte.js";import{b as c}from"./blogs-_SX4z95I.js";import{m as i}from"./proxy-rCUgtjAm.js";import{P as d}from"./PageBar-CI4JsExo.js";function m({post:t}){return e.jsx("article",{className:"group overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-xl",children:e.jsxs(o,{to:`/blog/${t.slug}`,className:"block",children:[e.jsx("div",{className:"relative aspect-[16/9] overflow-hidden",children:e.jsx("img",{src:t.featuredImage,alt:t.title,className:"h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"})}),e.jsxs("div",{className:"p-6",children:[e.jsx("div",{className:"mb-4",children:e.jsx("span",{className:"inline-block rounded-md bg-gray-700 px-3 py-1 text-xs text-gray-300",children:t.category})}),e.jsx("h2",{className:"mb-4 text-xl font-bold tracking-tight transition-colors",children:t.title}),e.jsx("p",{className:"mb-8 text-gray-600 line-clamp-2 text-md",children:t.description}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:t.author.image,alt:t.author.name,className:"h-10 w-10 rounded-full object-cover"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-medium ",children:t.author.name}),e.jsx("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:e.jsx("time",{dateTime:new Date(t.createdAt).toISOString(),children:new Date(t.createdAt).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})})})]})]})]})]})})}function x(){const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},s={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:50}}},r=c.sort((a,n)=>{const l=new Date(a.createdAt);return new Date(n.createdAt)-l});return e.jsxs("section",{className:"container mx-auto p-8 my-16",children:[e.jsx(i.h1,{className:"text-4xl font-bold mb-8 text-gray-900",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:1.5},children:"Latest Blog Posts"}),e.jsx(i.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",variants:t,initial:"hidden",animate:"visible",children:r.map(a=>e.jsx(i.div,{variants:s,children:e.jsx(m,{post:a})},a.slug))})]})}function y(){return e.jsxs("div",{children:[e.jsx(d,{leftText:"Blogs"}),e.jsx(x,{})]})}export{y as default};