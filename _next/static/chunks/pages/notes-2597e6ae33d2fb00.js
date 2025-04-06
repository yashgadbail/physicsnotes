(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{3477:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes",function(){return t(707)}])},707:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return _}});var n=t(5893),a=t(7294),i=t(7021),o=t.n(i),r=t(1341),l=t(1163),c=t(8885),d=t(9015),p=t.n(d),h=e=>{let{pdfUrl:s,onClose:t}=e,[i,o]=(0,a.useState)([]),[d,h]=(0,a.useState)(""),[u,_]=(0,a.useState)(!1),[f,m]=(0,a.useState)(!1),[g,C]=(0,a.useState)(0),[x,N]=(0,a.useState)(null),j=(0,a.useRef)(null),v=(0,l.useRouter)(),w=new r.$D("AIzaSyB5XbgFLtRN87yekbvViH1QOYvm3zksYik").getGenerativeModel({model:"gemini-1.5-pro"});(0,a.useEffect)(()=>{P()},[i]);let P=()=>{var e;null===(e=j.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},y=async()=>{if(!d.trim())return;let e="true"===localStorage.getItem("isAuthenticated"),t="true"===localStorage.getItem("isPremium");if(!e&&g>=1||!t&&g>=5){m(!0);return}let n=d.trim();h(""),o(e=>[...e,{role:"user",content:n}]),_(!0),N(null);try{let e="You are a physics tutor. The user is viewing a PDF document. Please help them understand the physics concepts in the document. Current page: ".concat(s,". User's question: ").concat(n),t=await w.generateContent(e),a=(await t.response).text();o(e=>[...e,{role:"assistant",content:a}]),C(e=>e+1)}catch(e){N("Failed to generate response. Please try again."),console.error("Error generating response:",e)}finally{_(!1)}};return(0,n.jsxs)("div",{className:p().chatContainer,children:[(0,n.jsxs)("div",{className:p().chatHeader,children:[(0,n.jsx)("h2",{children:"Physics Assistant"}),(0,n.jsx)("button",{onClick:t,className:p().closeButton,children:"\xd7"})]}),(0,n.jsxs)("div",{className:p().messagesContainer,children:[0===i.length&&(0,n.jsxs)("div",{className:p().welcomeMessage,children:[(0,n.jsx)("h3",{children:"Welcome to Physics Assistant!"}),(0,n.jsx)("p",{children:"Ask me anything about the physics concepts in your PDF. I can help you understand:"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Formulas and their derivations"}),(0,n.jsx)("li",{children:"Problem-solving techniques"}),(0,n.jsx)("li",{children:"Conceptual explanations"}),(0,n.jsx)("li",{children:"Real-world applications"})]})]}),i.map((e,s)=>(0,n.jsx)("div",{className:"".concat(p().message," ").concat("user"===e.role?p().userMessage:p().assistantMessage),children:(0,n.jsx)("div",{className:p().messageContent,children:(0,n.jsx)(c.UG,{children:e.content})})},s)),u&&(0,n.jsxs)("div",{className:p().loadingMessage,children:[(0,n.jsx)("div",{className:p().spinner}),(0,n.jsx)("span",{children:"Thinking..."})]}),x&&(0,n.jsx)("div",{className:p().errorMessage,children:x}),(0,n.jsx)("div",{ref:j})]}),(0,n.jsxs)("div",{className:p().inputContainer,children:[(0,n.jsx)("input",{type:"text",value:d,onChange:e=>h(e.target.value),onKeyPress:e=>"Enter"===e.key&&y(),placeholder:"Ask a question about the physics concepts...",className:p().input}),(0,n.jsx)("button",{onClick:y,disabled:u||!d.trim(),className:p().sendButton,children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),(0,n.jsx)("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})]}),f&&(0,n.jsxs)("div",{className:p().loginPrompt,children:[(0,n.jsx)("h3",{children:"Continue Learning"}),(0,n.jsx)("p",{children:"Sign up or log in to continue asking questions about physics concepts."}),(0,n.jsxs)("div",{className:p().loginButtons,children:[(0,n.jsx)("button",{onClick:()=>{v.push("/login")},className:p().loginButton,children:"Log In"}),(0,n.jsx)("button",{onClick:()=>{v.push("/signup")},className:p().signupButton,children:"Sign Up"})]})]})]})};let u=[{class:"11",chapters:[{id:"units",title:"Units and Measurements",pdfUrl:"/pdfs/class11/units.pdf",description:"Fundamental and derived units, dimensional analysis, and measurement techniques."},{id:"motion",title:"Motion in a Straight Line",pdfUrl:"/pdfs/class11/motion.pdf",description:"Kinematics, equations of motion, and graphical analysis."},{id:"laws",title:"Laws of Motion",pdfUrl:"/pdfs/class11/laws.pdf",description:"Newton's laws, friction, and applications."},{id:"work",title:"Work, Energy and Power",pdfUrl:"/pdfs/class11/work.pdf",description:"Work-energy theorem, conservation of energy, and power."}]},{class:"12",chapters:[{id:"electrostatics",title:"Electrostatics",pdfUrl:"/pdfs/class12/electrostatics.pdf",description:"Electric charges, Coulomb's law, and electric fields."},{id:"current",title:"Current Electricity",pdfUrl:"/pdfs/class12/current.pdf",description:"Ohm's law, Kirchhoff's laws, and electrical circuits."},{id:"magnetism",title:"Magnetism",pdfUrl:"/pdfs/class12/magnetism.pdf",description:"Magnetic fields, Biot-Savart law, and electromagnetic induction."},{id:"optics",title:"Ray Optics",pdfUrl:"/pdfs/class12/optics.pdf",description:"Reflection, refraction, and optical instruments."}]}];var _=()=>{var e;let[s,t]=(0,a.useState)("11"),[i,r]=(0,a.useState)(null),[l,c]=(0,a.useState)(!1);(0,a.useRef)(null);let d=e=>{r(e),c(!0)};return(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("h1",{children:"Physics Notes"}),(0,n.jsx)("p",{className:o().description,children:"Comprehensive notes for Class 11 and 12 Physics"}),(0,n.jsxs)("div",{className:o().classSelector,children:[(0,n.jsx)("button",{className:"".concat(o().classButton," ").concat("11"===s?o().active:""),onClick:()=>t("11"),children:"Class 11"}),(0,n.jsx)("button",{className:"".concat(o().classButton," ").concat("12"===s?o().active:""),onClick:()=>t("12"),children:"Class 12"})]}),(0,n.jsx)("div",{className:o().chaptersGrid,children:null===(e=u.find(e=>e.class===s))||void 0===e?void 0:e.chapters.map(e=>(0,n.jsxs)("div",{className:o().chapterCard,children:[(0,n.jsx)("h3",{children:e.title}),(0,n.jsx)("p",{children:e.description}),(0,n.jsx)("button",{onClick:()=>d(e.pdfUrl),className:o().downloadButton,children:"View PDF"})]},e.id))}),i&&l&&(0,n.jsxs)("div",{className:o().pdfChatOverlay,children:[(0,n.jsx)("div",{className:o().pdfViewerContainer,children:(0,n.jsx)("object",{data:i,type:"application/pdf",className:o().pdfViewer,onContextMenu:e=>e.preventDefault(),children:(0,n.jsxs)("div",{className:o().pdfError,children:[(0,n.jsx)("p",{children:"Unable to display PDF file. Please try again later."}),(0,n.jsx)("button",{onClick:()=>c(!1),className:o().closeButton,children:"Close"})]})})}),(0,n.jsx)("div",{className:o().chatContainer,children:(0,n.jsx)(h,{pdfUrl:i,onClose:()=>c(!1)})})]})]})}},7021:function(e){e.exports={container:"Notes_container__wlWYG",description:"Notes_description__WeANx",classSelector:"Notes_classSelector__DG_tH",classButton:"Notes_classButton__au3aG",active:"Notes_active__OKYkr",chaptersGrid:"Notes_chaptersGrid__AtV_z",chapterCard:"Notes_chapterCard__ygChp",downloadButton:"Notes_downloadButton__r6EQt",pdfChatOverlay:"Notes_pdfChatOverlay__3SRF_",pdfViewerContainer:"Notes_pdfViewerContainer__BjarS",pdfViewer:"Notes_pdfViewer__ROgQQ",pdfError:"Notes_pdfError__3bXmn",closeButton:"Notes_closeButton__SoRPc",chatContainer:"Notes_chatContainer__1p9Lw"}},9015:function(e){e.exports={container:"PdfChat_container__UWqNE",pdfContainer:"PdfChat_pdfContainer__k3pEA",uploadSection:"PdfChat_uploadSection__qw_lY",fileInput:"PdfChat_fileInput__GWp0e",pdfViewer:"PdfChat_pdfViewer__J_Qo3",placeholder:"PdfChat_placeholder__ncvjO",chatContainer:"PdfChat_chatContainer__X82NH",chatHeader:"PdfChat_chatHeader__xGUfv",closeButton:"PdfChat_closeButton__Hws6B",messagesContainer:"PdfChat_messagesContainer__p89v1",welcomeMessage:"PdfChat_welcomeMessage__FTiiX",message:"PdfChat_message__BMA6d",userMessage:"PdfChat_userMessage__pciZ_",assistantMessage:"PdfChat_assistantMessage__moFYF",messageContent:"PdfChat_messageContent__ei9S7",loadingMessage:"PdfChat_loadingMessage__RhFAf",spinner:"PdfChat_spinner__cnC3n",spin:"PdfChat_spin__zzNkN",errorMessage:"PdfChat_errorMessage__BfXyu",inputContainer:"PdfChat_inputContainer__qiGnn",input:"PdfChat_input__mJtCV",sendButton:"PdfChat_sendButton__oTpUc",loginPrompt:"PdfChat_loginPrompt__eAlrL",loginButtons:"PdfChat_loginButtons__tI4b3",loginButton:"PdfChat_loginButton__SVBOg",signupButton:"PdfChat_signupButton__6_KUw"}}},function(e){e.O(0,[341,885,888,774,179],function(){return e(e.s=3477)}),_N_E=e.O()}]);