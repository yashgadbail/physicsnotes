(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{2599:function(a,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return e(7348)}])},7348:function(a,s,e){"use strict";e.r(s);var t=e(5893),i=e(7294),n=e(1163),c=e(6183),d=e.n(c);s.default=()=>{let a=(0,n.useRouter)(),[s,e]=(0,i.useState)("overview"),[c]=(0,i.useState)({formulas:500,videos:100,blogs:50,examMaterials:1e3}),[o]=(0,i.useState)([{id:"1",type:"formula",title:"Newton's Second Law",action:"updated",timestamp:"2 hours ago",user:"Admin"},{id:"2",type:"video",title:"Quantum Mechanics Introduction",action:"created",timestamp:"5 hours ago",user:"Content Manager"},{id:"3",type:"blog",title:"Understanding Relativity",action:"created",timestamp:"1 day ago",user:"Writer"}]);return(0,t.jsxs)("div",{className:d().container,children:[(0,t.jsxs)("div",{className:d().header,children:[(0,t.jsx)("h1",{children:"Admin Dashboard"}),(0,t.jsxs)("div",{className:d().userInfo,children:[(0,t.jsx)("span",{className:d().username,children:"Admin"}),(0,t.jsx)("button",{className:d().logoutButton,onClick:()=>{localStorage.removeItem("adminToken"),a.replace("/")},children:"Logout"})]})]}),(0,t.jsxs)("div",{className:d().tabs,children:[(0,t.jsx)("button",{className:"".concat(d().tab," ").concat("overview"===s?d().active:""),onClick:()=>e("overview"),children:"Overview"}),(0,t.jsx)("button",{className:"".concat(d().tab," ").concat("formulas"===s?d().active:""),onClick:()=>e("formulas"),children:"Formulas"}),(0,t.jsx)("button",{className:"".concat(d().tab," ").concat("videos"===s?d().active:""),onClick:()=>e("videos"),children:"Videos"}),(0,t.jsx)("button",{className:"".concat(d().tab," ").concat("blogs"===s?d().active:""),onClick:()=>e("blogs"),children:"Blogs"}),(0,t.jsx)("button",{className:"".concat(d().tab," ").concat("exams"===s?d().active:""),onClick:()=>e("exams"),children:"Exam Materials"})]}),"overview"===s&&(0,t.jsxs)("div",{className:d().overview,children:[(0,t.jsxs)("div",{className:d().statsGrid,children:[(0,t.jsxs)("div",{className:d().statCard,children:[(0,t.jsx)("h3",{children:"Formulas"}),(0,t.jsx)("div",{className:d().statValue,children:c.formulas}),(0,t.jsx)("div",{className:d().statLabel,children:"Total Formulas"})]}),(0,t.jsxs)("div",{className:d().statCard,children:[(0,t.jsx)("h3",{children:"Videos"}),(0,t.jsx)("div",{className:d().statValue,children:c.videos}),(0,t.jsx)("div",{className:d().statLabel,children:"Total Videos"})]}),(0,t.jsxs)("div",{className:d().statCard,children:[(0,t.jsx)("h3",{children:"Blogs"}),(0,t.jsx)("div",{className:d().statValue,children:c.blogs}),(0,t.jsx)("div",{className:d().statLabel,children:"Total Blogs"})]}),(0,t.jsxs)("div",{className:d().statCard,children:[(0,t.jsx)("h3",{children:"Exam Materials"}),(0,t.jsx)("div",{className:d().statValue,children:c.examMaterials}),(0,t.jsx)("div",{className:d().statLabel,children:"Total Materials"})]})]}),(0,t.jsxs)("div",{className:d().recentActivity,children:[(0,t.jsx)("h2",{children:"Recent Activity"}),(0,t.jsx)("div",{className:d().activityList,children:o.map(a=>(0,t.jsxs)("div",{className:d().activityItem,children:[(0,t.jsxs)("div",{className:d().activityIcon,children:["formula"===a.type&&"\uD83D\uDCD0","video"===a.type&&"\uD83C\uDFA5","blog"===a.type&&"✍️","exam"===a.type&&"\uD83D\uDCDA"]}),(0,t.jsxs)("div",{className:d().activityContent,children:[(0,t.jsx)("div",{className:d().activityTitle,children:a.title}),(0,t.jsxs)("div",{className:d().activityMeta,children:[(0,t.jsx)("span",{className:d().activityAction,children:a.action}),(0,t.jsxs)("span",{className:d().activityUser,children:["by ",a.user]}),(0,t.jsx)("span",{className:d().activityTime,children:a.timestamp})]})]})]},a.id))})]})]}),"formulas"===s&&(0,t.jsx)("div",{className:d().contentSection,children:(0,t.jsxs)("div",{className:d().sectionHeader,children:[(0,t.jsx)("h2",{children:"Manage Formulas"}),(0,t.jsx)("button",{className:d().addButton,children:"Add New Formula"})]})}),"videos"===s&&(0,t.jsx)("div",{className:d().contentSection,children:(0,t.jsxs)("div",{className:d().sectionHeader,children:[(0,t.jsx)("h2",{children:"Manage Videos"}),(0,t.jsx)("button",{className:d().addButton,children:"Add New Video"})]})}),"blogs"===s&&(0,t.jsx)("div",{className:d().contentSection,children:(0,t.jsxs)("div",{className:d().sectionHeader,children:[(0,t.jsx)("h2",{children:"Manage Blogs"}),(0,t.jsx)("button",{className:d().addButton,children:"Add New Blog"})]})}),"exams"===s&&(0,t.jsx)("div",{className:d().contentSection,children:(0,t.jsxs)("div",{className:d().sectionHeader,children:[(0,t.jsx)("h2",{children:"Manage Exam Materials"}),(0,t.jsx)("button",{className:d().addButton,children:"Add New Material"})]})})]})}},6183:function(a){a.exports={container:"AdminDashboard_container__5Y4Z8",header:"AdminDashboard_header__bWPvL",userInfo:"AdminDashboard_userInfo__rFI_X",username:"AdminDashboard_username__YBkTa",logoutButton:"AdminDashboard_logoutButton__nZXYo",tabs:"AdminDashboard_tabs__mwUbz",tab:"AdminDashboard_tab__rgiRB",active:"AdminDashboard_active__CRzrg",overview:"AdminDashboard_overview__CEnTw",statsGrid:"AdminDashboard_statsGrid__Z4zKW",statCard:"AdminDashboard_statCard__UIj_W",statValue:"AdminDashboard_statValue__4jAIk",statLabel:"AdminDashboard_statLabel__TVXLy",recentActivity:"AdminDashboard_recentActivity__0kCCo",activityList:"AdminDashboard_activityList__XQ9zS",activityItem:"AdminDashboard_activityItem__q_e2b",activityIcon:"AdminDashboard_activityIcon__fbyxC",activityContent:"AdminDashboard_activityContent__WFmSO",activityTitle:"AdminDashboard_activityTitle__Omhpf",activityMeta:"AdminDashboard_activityMeta__DahNk",activityAction:"AdminDashboard_activityAction__yLFlV",contentSection:"AdminDashboard_contentSection__LZyKX",sectionHeader:"AdminDashboard_sectionHeader__0bJhs",addButton:"AdminDashboard_addButton__oRPm_"}},1163:function(a,s,e){a.exports=e(3035)}},function(a){a.O(0,[888,774,179],function(){return a(a.s=2599)}),_N_E=a.O()}]);