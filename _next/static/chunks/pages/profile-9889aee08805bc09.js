(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6896:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return s(9756)}])},5872:function(e,a,s){"use strict";var t=s(5893),i=s(1664),n=s.n(i),r=s(1163),o=s(3825),l=s.n(o),c=s(7294);a.Z=()=>{let e=(0,r.useRouter)(),[a,s]=(0,c.useState)(!1),[i,o]=(0,c.useState)(null),[d,m]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e="true"===localStorage.getItem("isAuthenticated"),a=localStorage.getItem("userRole");s(e),o(a)},[]),(0,t.jsxs)("nav",{className:l().navbar,children:[(0,t.jsx)("div",{className:l().logo,children:(0,t.jsx)(n(),{href:"/",children:"PhysicsNotes"})}),(0,t.jsxs)("div",{className:l().navLinks,children:[(0,t.jsx)(n(),{href:"/",className:l().navLink,children:"Home"}),(0,t.jsx)(n(),{href:"/notes",className:l().navLink,children:"Notes"}),(0,t.jsx)(n(),{href:"/dpp",className:l().navLink,children:"DPP"}),(0,t.jsx)(n(),{href:"/blogs",className:l().navLink,children:"Blogs"}),(0,t.jsx)(n(),{href:"/formula-handbook",className:l().navLink,children:"Formulas"}),(0,t.jsx)(n(),{href:"/exam-preparation",className:l().navLink,children:"Exam Prep"}),a?(0,t.jsxs)("div",{className:l().userSection,children:["admin"===i&&(0,t.jsx)(n(),{href:"/admin/dashboard",className:l().adminBadge,children:"Admin"}),(0,t.jsxs)("div",{className:l().profileButton,onClick:()=>m(!d),children:[(0,t.jsx)("div",{className:l().userAvatar,children:(null==i?void 0:i[0].toUpperCase())||"U"}),(0,t.jsx)("span",{className:l().userName,children:"admin"===i?"Admin User":"Student"}),(0,t.jsx)("span",{className:l().dropdownArrow,children:"▼"}),d&&(0,t.jsxs)("div",{className:l().dropdown,children:[(0,t.jsx)(n(),{href:"/dashboard",className:l().dropdownItem,children:"Dashboard"}),(0,t.jsx)(n(),{href:"/profile",className:l().dropdownItem,children:"Profile Settings"}),(0,t.jsx)("button",{onClick:()=>{localStorage.removeItem("isAuthenticated"),localStorage.removeItem("userRole"),s(!1),o(null),e.push("/")},className:l().dropdownItem,children:"Logout"})]})]})]}):(0,t.jsxs)(n(),{href:"/login",className:l().premiumButton,children:["Get Unlimited Access",(0,t.jsx)("span",{className:l().buttonSubtext,children:"Premium features"})]})]})]})}},9756:function(e,a,s){"use strict";s.r(a);var t=s(5893),i=s(7294),n=s(9008),r=s.n(n),o=s(5872),l=s(9075),c=s.n(l);a.default=()=>{let[e,a]=(0,i.useState)({name:"John Doe",email:"john@example.com",role:"Student",joinDate:"January 2024",avatar:"JD",stats:{notesRead:24,dppCompleted:12,formulasSaved:8,examsAttempted:3}}),[s,n]=(0,i.useState)("overview"),[l,d]=(0,i.useState)(!1),[m,v]=(0,i.useState)({name:e.name,email:e.email,currentPassword:"",newPassword:"",confirmPassword:""}),h=e=>{let{name:a,value:s}=e.target;v(e=>({...e,[a]:s}))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"Profile | PhysicsNotes"}),(0,t.jsx)("meta",{name:"description",content:"Manage your PhysicsNotes profile and settings"})]}),(0,t.jsx)(o.Z,{}),(0,t.jsxs)("div",{className:c().container,children:[(0,t.jsxs)("div",{className:c().sidebar,children:[(0,t.jsxs)("div",{className:c().profileCard,children:[(0,t.jsx)("div",{className:c().avatar,children:e.avatar}),(0,t.jsx)("h2",{children:e.name}),(0,t.jsx)("p",{className:c().role,children:e.role}),(0,t.jsxs)("p",{className:c().joinDate,children:["Member since ",e.joinDate]})]}),(0,t.jsxs)("nav",{className:c().sidebarNav,children:[(0,t.jsx)("button",{className:"".concat(c().navItem," ").concat("overview"===s?c().active:""),onClick:()=>n("overview"),children:"Overview"}),(0,t.jsx)("button",{className:"".concat(c().navItem," ").concat("settings"===s?c().active:""),onClick:()=>n("settings"),children:"Settings"}),(0,t.jsx)("button",{className:"".concat(c().navItem," ").concat("activity"===s?c().active:""),onClick:()=>n("activity"),children:"Activity"})]})]}),(0,t.jsxs)("main",{className:c().mainContent,children:["overview"===s&&(0,t.jsxs)("div",{className:c().overview,children:[(0,t.jsx)("h1",{children:"Profile Overview"}),(0,t.jsxs)("div",{className:c().statsGrid,children:[(0,t.jsxs)("div",{className:c().statCard,children:[(0,t.jsx)("h3",{children:"Notes Read"}),(0,t.jsx)("p",{children:e.stats.notesRead})]}),(0,t.jsxs)("div",{className:c().statCard,children:[(0,t.jsx)("h3",{children:"DPP Completed"}),(0,t.jsx)("p",{children:e.stats.dppCompleted})]}),(0,t.jsxs)("div",{className:c().statCard,children:[(0,t.jsx)("h3",{children:"Formulas Saved"}),(0,t.jsx)("p",{children:e.stats.formulasSaved})]}),(0,t.jsxs)("div",{className:c().statCard,children:[(0,t.jsx)("h3",{children:"Exams Attempted"}),(0,t.jsx)("p",{children:e.stats.examsAttempted})]})]})]}),"settings"===s&&(0,t.jsxs)("div",{className:c().settings,children:[(0,t.jsx)("h1",{children:"Account Settings"}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),a(e=>({...e,name:m.name,email:m.email})),d(!1)},className:c().settingsForm,children:[(0,t.jsxs)("div",{className:c().formGroup,children:[(0,t.jsx)("label",{htmlFor:"name",children:"Name"}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",value:m.name,onChange:h,disabled:!l})]}),(0,t.jsxs)("div",{className:c().formGroup,children:[(0,t.jsx)("label",{htmlFor:"email",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",value:m.email,onChange:h,disabled:!l})]}),l&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:c().formGroup,children:[(0,t.jsx)("label",{htmlFor:"currentPassword",children:"Current Password"}),(0,t.jsx)("input",{type:"password",id:"currentPassword",name:"currentPassword",value:m.currentPassword,onChange:h})]}),(0,t.jsxs)("div",{className:c().formGroup,children:[(0,t.jsx)("label",{htmlFor:"newPassword",children:"New Password"}),(0,t.jsx)("input",{type:"password",id:"newPassword",name:"newPassword",value:m.newPassword,onChange:h})]}),(0,t.jsxs)("div",{className:c().formGroup,children:[(0,t.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm New Password"}),(0,t.jsx)("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:m.confirmPassword,onChange:h})]})]}),(0,t.jsx)("div",{className:c().buttonGroup,children:l?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("button",{type:"submit",className:c().saveButton,children:"Save Changes"}),(0,t.jsx)("button",{type:"button",className:c().cancelButton,onClick:()=>d(!1),children:"Cancel"})]}):(0,t.jsx)("button",{type:"button",className:c().editButton,onClick:()=>d(!0),children:"Edit Profile"})})]})]}),"activity"===s&&(0,t.jsxs)("div",{className:c().activity,children:[(0,t.jsx)("h1",{children:"Recent Activity"}),(0,t.jsxs)("div",{className:c().activityList,children:[(0,t.jsxs)("div",{className:c().activityItem,children:[(0,t.jsx)("div",{className:c().activityIcon,children:"\uD83D\uDCDA"}),(0,t.jsxs)("div",{className:c().activityContent,children:[(0,t.jsx)("p",{children:"Read Chapter 3: Newton's Laws of Motion"}),(0,t.jsx)("span",{className:c().activityTime,children:"2 hours ago"})]})]}),(0,t.jsxs)("div",{className:c().activityItem,children:[(0,t.jsx)("div",{className:c().activityIcon,children:"\uD83D\uDCDD"}),(0,t.jsxs)("div",{className:c().activityContent,children:[(0,t.jsx)("p",{children:"Completed DPP Set #5"}),(0,t.jsx)("span",{className:c().activityTime,children:"1 day ago"})]})]}),(0,t.jsxs)("div",{className:c().activityItem,children:[(0,t.jsx)("div",{className:c().activityIcon,children:"\uD83D\uDCCA"}),(0,t.jsxs)("div",{className:c().activityContent,children:[(0,t.jsx)("p",{children:"Attempted JEE Mains Mock Test"}),(0,t.jsx)("span",{className:c().activityTime,children:"3 days ago"})]})]})]})]})]})]})]})}},3825:function(e){e.exports={navbar:"Navbar_navbar__zhZYq",logo:"Navbar_logo__YNqJh",navLinks:"Navbar_navLinks__fa9HS",navLink:"Navbar_navLink__VR3HP",active:"Navbar_active__v_AMp",userSection:"Navbar_userSection__HiELA",adminBadge:"Navbar_adminBadge___YNZ5",profileButton:"Navbar_profileButton__zYNnv",userAvatar:"Navbar_userAvatar__7Uhyy",userName:"Navbar_userName__seyTQ",dropdownArrow:"Navbar_dropdownArrow__NUtf1",dropdown:"Navbar_dropdown__BQP9B",dropdownItem:"Navbar_dropdownItem__fQJUN",premiumButton:"Navbar_premiumButton__qGLFB",buttonSubtext:"Navbar_buttonSubtext__HLK6M"}},9075:function(e){e.exports={container:"Profile_container__sLcJd",sidebar:"Profile_sidebar__o2o7w",profileCard:"Profile_profileCard__ke4ov",avatar:"Profile_avatar__QY1U5",role:"Profile_role__xCqHk",joinDate:"Profile_joinDate___HFYQ",sidebarNav:"Profile_sidebarNav__rZ5hW",navItem:"Profile_navItem__rDSF3",active:"Profile_active__NLVi_",mainContent:"Profile_mainContent__8HuB_",overview:"Profile_overview__voX7M",settings:"Profile_settings__sg6a7",activity:"Profile_activity__ZqrK5",statsGrid:"Profile_statsGrid__d4dn5",statCard:"Profile_statCard__bOO0l",settingsForm:"Profile_settingsForm__XUtZw",formGroup:"Profile_formGroup__m7aOt",buttonGroup:"Profile_buttonGroup__HLhR2",editButton:"Profile_editButton__d6zpM",saveButton:"Profile_saveButton___s5IK",cancelButton:"Profile_cancelButton__LkvSC",activityList:"Profile_activityList__F_ecc",activityItem:"Profile_activityItem__PcGup",activityIcon:"Profile_activityIcon__hg1Je",activityContent:"Profile_activityContent__G2u6s",activityTime:"Profile_activityTime__ti08T"}}},function(e){e.O(0,[996,888,774,179],function(){return e(e.s=6896)}),_N_E=e.O()}]);