"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[658],{3414:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294),a=o(941),s=o(4996);const r=e=>{let{alt:t,sources:o}=e;const[r,i]=(0,n.useState)(!1),c=e=>{"Escape"===e.key&&i(!1)};return(0,n.useEffect)((()=>(r?document.addEventListener("keydown",c):document.removeEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)})),[r]),n.createElement("div",{className:"zoomable-image "+(r?"fullscreen":""),onClick:()=>{i(!r)}},n.createElement(a.Z,{className:"zoomable-image-inner",alt:t,sources:{light:(0,s.Z)(o.light),dark:(0,s.Z)(o.dark)}}))}},4698:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var n=o(7462),a=(o(7294),o(3905)),s=(o(941),o(4996)),r=o(3414),i=o(2004);const c={},l="Component",p={unversionedId:"components",id:"components",title:"Component",description:"Components are the building blocks of the flows. They are made of inputs, outputs, and parameters that define their functionality, providing a convenient and straightforward way to compose LLM-based applications. Learn more about components and how they work in the LangChain documentation section.",source:"@site/docs/components.mdx",sourceDirName:".",slug:"/components",permalink:"/langflow/components",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\ud83c\udfa8 Creating Flows",permalink:"/langflow/creating-flows"},next:{title:"Features",permalink:"/langflow/features"}},m={},d=[{value:"Component&#39;s Features",id:"components-features",level:3},{value:"Component&#39;s Parameters",id:"components-parameters",level:3}],u={toc:d},h="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"component"},"Component"),(0,a.kt)("p",null,"Components are the building blocks of the flows. They are made of inputs, outputs, and parameters that define their functionality, providing a convenient and straightforward way to compose LLM-based applications. Learn more about components and how they work in the LangChain ",(0,a.kt)("a",{parentName:"p",href:"https://docs.langchain.com/docs/category/components"},"documentation")," section."),(0,a.kt)("h3",{id:"components-features"},"Component's Features"),(0,a.kt)("div",{style:{marginBottom:"20px"}},"During the flow creation process, you will notice handles (colored circles) attached to one or both sides of a component. These handles represent the availability to connect to other components, while their colors are type hints (hover over a handle to see connection details)."),(0,a.kt)("div",{style:{marginBottom:"20px"}},"For example, if you select a ",(0,a.kt)("code",null,"ConversationChain")," component, you will see orange  ",(0,a.kt)("span",{style:{color:"orange"}},"o"),"  and purple  ",(0,a.kt)("span",{style:{color:"purple"}},"o"),"  input handles. They indicate that this component accepts an LLM and a Memory component as inputs. The red asterisk ",(0,a.kt)("span",{style:{color:"red"}},"*")," means that at least one input of that type is required."),(0,a.kt)("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"center"}},(0,a.kt)(r.Z,{alt:"Docusaurus themed image",sources:{light:(0,s.Z)("img/single-compenent.png")},style:{width:"100%",maxWidth:"800px",margin:"0 auto"},mdxType:"ZoomableImage"})),(0,a.kt)("div",{style:{marginBottom:"20px"}},"On the top right corner, you will find the component status icon \ud83d\udd34. Make the necessary connections, build the flow (\u26a1 zap icon on the bottom right of the canvas) and once the validation is completed, the status of each validated component should light green \ud83d\udfe2. Hover over the component status to reveal the outputs going through it in case of success, or the detected error in case of failure."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"components-parameters"},"Component's Parameters"),(0,a.kt)("p",null,"LangFlow components can be edited in the component settings button. Hide parameters to reduce complexity and keep the canvas clean and intuitive for experimentation."),(0,a.kt)("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"center"}},(0,a.kt)(i.Z,{playing:!0,controls:!0,url:"videos/langflow_parameters.mp4",mdxType:"ReactPlayer"})))}f.isMDXComponent=!0}}]);