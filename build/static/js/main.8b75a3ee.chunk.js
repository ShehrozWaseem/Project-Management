(this["webpackJsonpthe-dojo"]=this["webpackJsonpthe-dojo"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(22),s=n.n(r),i=(n(44),n(45),n(12)),l=n(20),u=n(6),o=(n(46),n(10)),j=n(29),d=n(21);n(82),n(48),n(81);d.a.initializeApp({apiKey:"AIzaSyA_v7pAsSwcgRVVegm-BkKA03jgMQC0GrI",authDomain:"projectmanagement-e812f.firebaseapp.com",projectId:"projectmanagement-e812f",storageBucket:"projectmanagement-e812f.appspot.com",messagingSenderId:"371124313552",appId:"1:371124313552:web:70eb4b6635a623459fadd5"});var b=d.a.firestore(),O=d.a.auth(),p=d.a.storage(),h=d.a.firestore.Timestamp,m=function(e,t){var n=Object(c.useState)(),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(),l=Object(u.a)(i,2),d=l[0],O=l[1],p=Object(c.useRef)(t).current;return Object(c.useEffect)((function(){var t,n=b.collection(e);p&&(n=(t=n).where.apply(t,Object(j.a)(p)));var c=n.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),s(t),O(null)}),(function(e){console.log(e),O("could not fetch the data")}));return function(){return c()}}),[e,p]),{error:d,documents:r}},x=(n(50),n(51),n(2));function f(e){var t=e.src;return Object(x.jsx)("div",{className:"avatar",children:t&&Object(x.jsx)("img",{src:t,alt:"user"})})}var v=function(e){var t=e.projects;return Object(x.jsxs)("div",{className:"project-list",children:[0===t.length&&Object(x.jsx)("p",{children:"No Projects yet!"}),t.map((function(e){return Object(x.jsxs)(i.b,{to:"/projects/".concat(e.id),children:[Object(x.jsx)("h4",{children:e.name}),Object(x.jsxs)("p",{children:["Due by ",e.dueDate.toDate().toDateString()]}),Object(x.jsxs)("div",{className:"assigned-to",children:[Object(x.jsx)("ul",{children:e.assignedUsersList.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(f,{src:e.photoURL})},e.id)}))}),Object(x.jsxs)("p",{children:["Created By: ",e.createdBy.displayName]})]})]},e.id)}))]})},g=n(16),y=(n(57),["all","mine","development","design","marketing","sales"]);var N=function(e){var t=e.new_filter,n=e.ChangeFilter;return Object(x.jsx)("div",{className:"project-filter",children:Object(x.jsx)("nav",{children:y.map((function(e){return Object(x.jsx)("button",{onClick:function(){return function(e){n(e)}(e)},className:t===e?"active":"",children:e},e)}))})})},D=Object(c.createContext)(),S=function(e,t){switch(t.type){case"LOGIN":return Object(o.a)(Object(o.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{user:null});case"AUTH_IS_READY":return Object(o.a)(Object(o.a)({},e),{},{user:t.payload,authisReady:!0});default:return e}},w=function(e){var t=e.children,n=Object(c.useReducer)(S,{user:null,authisReady:!1}),a=Object(u.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=O.onAuthStateChanged((function(t){s({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log("context state",r),Object(x.jsx)(D.Provider,{value:Object(o.a)(Object(o.a)({},r),{},{dispatch:s}),children:t})},E=function(){var e=Object(c.useContext)(D);if(!e)throw Error("Context not avaialble for this component");return e};function C(){var e=m("project"),t=e.documents,n=e.error,a=E().user,r=Object(c.useState)("all"),s=Object(u.a)(r,2),i=s[0],l=s[1],o=t?t.filter((function(e){switch(i){case"all":return!0;case"mine":var t=!1;return e.assignedUsersList.forEach((function(e){a.uid===e.id&&(t=!0)})),t;case"development":case"design":case"sales":case"marketing":return e.category===i;default:return!0}})):null;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"page-title",children:"Dashboard"}),n&&Object(x.jsx)("p",{className:"error",children:n}),!t&&Object(x.jsx)(g.a,{color:"#00BFFF",height:80,width:80}),t&&Object(x.jsx)(N,{new_filter:i,ChangeFilter:function(e){l(e)}}),o&&Object(x.jsx)(v,{projects:o})]})}n(58);var R=n(7),k=n.n(R),P=n(11);var L=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],o=E().dispatch,j=Object(c.useState)(!1),d=Object(u.a)(j,2),h=d[0],m=d[1],x=function(){var e=Object(P.a)(k.a.mark((function e(t,n,c,r){var s,i,u,j;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(null),l(!0),e.prev=2,e.next=5,O.createUserWithEmailAndPassword(t,n);case 5:if(s=e.sent){e.next=8;break}throw new Error("Could not create this user");case 8:return i="thumbnails/".concat(s.user.uid,"/").concat(r.name),e.next=11,p.ref(i).put(r);case 11:return u=e.sent,e.next=14,u.ref.getDownloadURL();case 14:return j=e.sent,e.next=17,s.user.updateProfile({displayName:c,photoURL:j});case 17:return e.next=19,b.collection("users").doc(s.user.uid).set({online:!0,displayName:c,photoURL:j});case 19:o({type:"LOGIN",payload:s.user}),h||(l(!1),a(null)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),h||(console.log(e.t0.message),a(e.t0.message),l(!1));case 26:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(t,n,c,a){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return m(!0)}}),[]),{error:n,pending:i,signup:x}};function U(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],l=s[1],o=Object(c.useState)(""),j=Object(u.a)(o,2),d=j[0],b=j[1],O=Object(c.useState)(""),p=Object(u.a)(O,2),h=p[0],m=p[1],f=Object(c.useState)(null),v=Object(u.a)(f,2),y=v[0],N=v[1],D=L(),S=D.error,w=D.pending,E=D.signup;return Object(x.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),E(n,d,i,h)},children:[Object(x.jsx)("h2",{children:"Signup"}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Email: "}),Object(x.jsx)("input",{type:"email",required:!0,onChange:function(e){return a(e.target.value)},value:n})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Password: "}),Object(x.jsx)("input",{type:"password",required:!0,onChange:function(e){return b(e.target.value)},value:d})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Display Name: "}),Object(x.jsx)("input",{type:"text",required:!0,onChange:function(e){return l(e.target.value)},value:i})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Upload Image: "}),Object(x.jsx)("input",{type:"file",onChange:function(e){m(null);var t=e.target.files[0];t?t.type.includes("image")?t.size>1e5?N("Please select an image of less than 100 KB"):(N(""),m(t)):N("Please select valid image format"):N("Please select an image to be uploaded")}}),y&&Object(x.jsx)("div",{className:"error",children:y})]}),!w&&Object(x.jsx)("button",{className:"btn",children:"Signup"}),w&&Object(x.jsxs)("button",{className:"btn",disabled:!0,children:["Loading ",Object(x.jsx)(g.b,{color:"#8d69f1",height:20,width:20})]}),S&&Object(x.jsx)("div",{className:"error",children:S})]})}n(60);function A(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],l=s[1],o=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],o=E().dispatch,j=Object(c.useState)(!1),d=Object(u.a)(j,2),p=d[0],h=d[1],m=function(){var e=Object(P.a)(k.a.mark((function e(t,n){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(null),l(!0),e.prev=2,e.next=5,O.signInWithEmailAndPassword(t,n);case 5:return c=e.sent,e.next=8,b.collection("users").doc(c.user.uid).update({online:!0});case 8:o({type:"LOGIN",payload:c.user}),p||(l(!1),a(null)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0.message),p||(a(e.t0.message),l(!1));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return h(!0)}}),[]),{error:n,pending:i,login:m}}(),j=o.error,d=o.pending,p=o.login;return Object(x.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),p(n,i)},children:[Object(x.jsx)("h2",{children:"Login"}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Email: "}),Object(x.jsx)("input",{type:"email",required:!0,onChange:function(e){return a(e.target.value)},value:n})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Password: "}),Object(x.jsx)("input",{type:"password",required:!0,onChange:function(e){return l(e.target.value)},value:i})]}),!d&&Object(x.jsx)("button",{className:"btn",children:"Login"}),d&&Object(x.jsxs)("button",{className:"btn",disabled:!0,children:[" ",Object(x.jsx)(g.b,{color:"#8d69f1",height:20,width:20})]}),j&&Object(x.jsx)("div",{className:"error",children:j})]})}n(61);var I=n(34),_={document:null,isPending:null,isError:null,success:null},F=function(e,t){switch(t.type){case"IS_PENDING":return{isPending:!0,isError:null,document:null,success:null};case"DOC_ADDED":case"DLETED_DOC":return{isPending:!1,isError:null,document:t.payload,success:!0};case"UPDATED_DOCUMENT":return{isPending:!1,error:null,document:t.payload,success:!0};case"ERROR":return{isPending:!1,error:t.payload,document:null,success:null};default:return e}},B=function(e){var t=Object(c.useReducer)(F,_),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),i=Object(u.a)(s,2),l=i[0],o=i[1],j=b.collection(e),d=function(e){l||r(e)},O=function(){var e=Object(P.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"IS_PENDING"}),e.prev=1,h.fromDate(new Date),e.next=5,j.add(t);case 5:n=e.sent,d({type:"ADDED_DOC",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),d({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(P.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"IS_PENDING"}),e.prev=1,e.next=4,j.doc(t).delete();case 4:n=e.sent,d({type:"DLETED_DOC",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d({type:"ERROR",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(P.a)(k.a.mark((function e(t,n){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"IS_PENDING"}),e.prev=1,e.next=4,j.doc(t).update(n);case 4:return c=e.sent,d({type:"UPDATED_DOCUMENT",payload:c}),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),d({type:"ERROR",payload:e.t0.emssage}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return o(!0)}}),[]),{addDocument:O,remDocument:p,updateDocument:m,response:a}},T=[{value:"development",label:"Development"},{value:"design",label:"Design"},{value:"sales",label:"Sales"},{value:"marketing",label:"Marketing"}];function G(){var e=Object(l.g)(),t=B("project"),n=t.addDocument,a=t.response,r=E().user,s=m("users").documents,i=Object(c.useState)([]),o=Object(u.a)(i,2),j=o[0],d=o[1],b=Object(c.useState)(""),O=Object(u.a)(b,2),p=O[0],f=O[1],v=Object(c.useState)(""),g=Object(u.a)(v,2),y=g[0],N=g[1],D=Object(c.useState)(""),S=Object(u.a)(D,2),w=S[0],C=S[1],R=Object(c.useState)(""),L=Object(u.a)(R,2),U=L[0],A=L[1],_=Object(c.useState)([]),F=Object(u.a)(_,2),G=F[0],q=F[1],M=Object(c.useState)(null),z=Object(u.a)(M,2),H=z[0],K=z[1];Object(c.useEffect)((function(){if(s){var e=s.map((function(e){return{value:e,label:e.displayName}}));d(e)}}),[s]);var J=function(){var t=Object(P.a)(k.a.mark((function t(c){var s,i,l;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),U){t.next=4;break}return K("Please select a category"),t.abrupt("return");case 4:if(!(G.length<1)){t.next=7;break}return K("Please select a user"),t.abrupt("return");case 7:return s={id:r.uid,displayName:r.displayName,photoURL:r.photoURL},i=G.map((function(e){return{displayName:e.value.displayName,id:e.value.id,photoURL:e.value.photoURL}})),l={name:p,details:y,category:U.value,dueDate:h.fromDate(new Date(w)),comments:[],createdBy:s,assignedUsersList:i},t.next=12,n(l);case 12:a.isError||e.push("/"),console.log(l),K(null);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"create-form",children:[Object(x.jsx)("h2",{className:"page-title",children:"Create a new Project"}),Object(x.jsxs)("form",{onSubmit:J,children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Project name:"}),Object(x.jsx)("input",{required:!0,type:"text",onChange:function(e){return f(e.target.value)},value:p})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Project Details:"}),Object(x.jsx)("textarea",{required:!0,onChange:function(e){return N(e.target.value)},value:y})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Set due date:"}),Object(x.jsx)("input",{required:!0,type:"date",onChange:function(e){return C(e.target.value)},value:w})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Project category:"}),Object(x.jsx)(I.a,{options:T,onChange:function(e){return A(e)}})]}),Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Assign to:"}),Object(x.jsx)(I.a,{options:j,onChange:function(e){return q(e)},isMulti:!0})]}),Object(x.jsx)("button",{className:"btn",children:"Add Project"}),H&&Object(x.jsx)("p",{className:"error",children:H})]})]})}n(76);function q(e){var t=e.project,n=B("project").remDocument,c=E().user,a=Object(l.g)(),r=function(e){n(t.id),a.push("/")};return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"project-summary",children:[Object(x.jsx)("h2",{className:"page-title",children:t.name}),Object(x.jsxs)("p",{className:"due-date",children:["Project due by ",t.dueDate.toDate().toDateString()]}),Object(x.jsx)("p",{className:"details",children:t.details}),Object(x.jsx)("h4",{children:"Project assigned to:"}),Object(x.jsx)("div",{className:"assigned-users",children:t.assignedUsersList.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(f,{classname:"avatar",src:e.photoURL}),Object(x.jsx)("p",{className:"two",children:e.displayName})]},e.id)}))}),Object(x.jsxs)("p",{className:"comment-para",children:["Created By: ",t.createdBy.displayName]})]}),c.uid===t.createdBy.id?Object(x.jsx)("button",{className:"btn",onClick:r,children:"Mark as Complete"}):Object(x.jsx)("button",{className:"errorr",disabled:!0,onClick:r,children:"Only the owner can mark it as completed"})]})}var M=n(39);var z=function(e){var t=e.project,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],s=a[1],i=E().user,l=B("project"),o=l.updateDocument,d=l.response,b=function(){var e=Object(P.a)(k.a.mark((function e(n){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t.comments),c={displayName:i.displayName,photoURL:i.photoURL,content:r,createdAt:h.fromDate(new Date),id:Math.random()},e.next=5,o(t.id,{comments:[].concat(Object(j.a)(t.comments),[c])});case 5:d.error||s("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"project-comments",children:[Object(x.jsx)("h4",{children:"Project Comments"}),Object(x.jsx)("ul",{children:t.comments.length>0&&t.comments.map((function(e){return Object(x.jsxs)("li",{children:[Object(x.jsxs)("div",{className:"comment-author",children:[Object(x.jsx)(f,{src:e.photoURL}),Object(x.jsx)("p",{children:e.displayName})]}),Object(x.jsx)("div",{className:"comment-date",children:Object(x.jsx)("p",{children:Object(M.a)(e.createdAt.toDate(),{addSuffix:!0})})}),Object(x.jsx)("div",{className:"comment-content",children:Object(x.jsx)("p",{children:e.content})})]},e.id)}))}),Object(x.jsxs)("form",{className:"add-comment",onSubmit:b,children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("span",{children:"Add new Comment:"}),Object(x.jsx)("textarea",{required:!0,onChange:function(e){return s(e.target.value)},value:r})]}),Object(x.jsx)("button",{className:"btn",children:"Add Comment"})]})]})};function H(){var e=function(e,t){var n=Object(c.useState)(null),a=Object(u.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(null),l=Object(u.a)(i,2),j=l[0],d=l[1];return Object(c.useEffect)((function(){var n=b.collection(e).doc(t).onSnapshot((function(e){e.data()?(s(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})),d(null)):d("failed to fetch the document for id: "+t)}),(function(e){console.log(e.message),d("failed to fetch the document")}));return function(){return n()}}),[e,t]),{document:r,error:j}}("project",Object(l.h)().id),t=e.error,n=e.document;return t?Object(x.jsx)("div",{className:"error",children:t}):n?Object(x.jsxs)("div",{className:"project-details",children:[Object(x.jsx)(q,{project:n}),Object(x.jsx)(z,{project:n})]}):Object(x.jsx)(g.a,{color:"#00BFFF",height:80,width:80})}n(77);var K=n.p+"static/media/temple.c57f882d.svg",J=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],o=E(),j=o.dispatch,d=o.user,p=Object(c.useState)(!1),h=Object(u.a)(p,2),m=h[0],x=h[1],f=function(){var e=Object(P.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(null),l(!0),e.prev=2,t=d.uid,e.next=6,b.collection("users").doc(t).update({online:!1});case 6:return e.next=8,O.signOut();case 8:j({type:"LOGOUT"}),m||(l(!1),a(null)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0.message),m||(a(e.t0.message),l(!1));case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return x(!0)}}),[]),{error:n,pending:i,logout:f}};function V(){var e=J(),t=e.pending,n=e.logout,c=E().user;return Object(x.jsx)("nav",{className:"navbar",children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{className:"logo",children:[Object(x.jsx)("img",{src:K,alt:"nav logo"}),Object(x.jsx)("span",{children:"Manager.com"})]}),!c&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{to:"/login",children:"Login"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{to:"/signup",children:"Signup"})})]}),c&&Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("li",{children:[!t&&Object(x.jsx)("button",{className:"btn",onClick:n,children:"Logout"}),t&&Object(x.jsx)("button",{className:"btn",disabled:!0,onClick:n,children:Object(x.jsx)(g.b,{color:"#8d69f1",height:20,width:20})})]})})]})})}n(78);var W=n.p+"static/media/dashboard_icon.bc800f3b.svg",Y=n.p+"static/media/add_icon.376e9b6a.svg";function Q(){var e=E().user;return Object(x.jsx)("div",{className:"sidebar",children:Object(x.jsxs)("div",{className:"sidebar-content",children:[Object(x.jsxs)("div",{className:"user",children:[Object(x.jsx)(f,{src:e.photoURL}),Object(x.jsxs)("p",{children:["Hey ",e.displayName]})]}),Object(x.jsx)("nav",{className:"links",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsxs)(i.c,{exact:!0,to:"/",children:[Object(x.jsx)("img",{src:W,alt:"dashboard icon"}),Object(x.jsx)("span",{children:"Dashboard"})]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(i.c,{to:"/create",children:[Object(x.jsx)("img",{src:Y,alt:"add project icon"}),Object(x.jsx)("span",{children:"New Project"})]})})]})})]})})}n(79);function X(){var e=m("users"),t=e.error,n=e.documents;return Object(x.jsxs)("div",{className:"user-list",children:[Object(x.jsx)("h2",{children:"All Users:"}),t&&Object(x.jsx)("div",{className:"error",children:t}),!n&&Object(x.jsxs)("span",{children:["Loading users ",Object(x.jsx)(g.b,{color:"#FFFFF",height:50,width:50})]}),n&&n.map((function(e){return Object(x.jsxs)("div",{className:"user-list-item",children:[e.online&&Object(x.jsx)("span",{className:"online-user"}),Object(x.jsx)("span",{children:e.displayName}),Object(x.jsx)(f,{src:e.photoURL})]},e.id)}))]})}var Z=function(){var e=E(),t=e.user,n=e.authisReady;return Object(x.jsx)("div",{className:"App",children:n&&Object(x.jsxs)(i.a,{children:[t&&Object(x.jsx)(Q,{}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(V,{}),Object(x.jsxs)(l.d,{children:[Object(x.jsxs)(l.b,{exact:!0,path:"/",children:[!t&&Object(x.jsx)(l.a,{to:"/login"}),t&&Object(x.jsx)(C,{})]}),Object(x.jsxs)(l.b,{path:"/create",children:[!t&&Object(x.jsx)(l.a,{to:"/login"}),t&&Object(x.jsx)(G,{})]}),Object(x.jsxs)(l.b,{path:"/projects/:id",children:[!t&&Object(x.jsx)(l.a,{to:"/login"}),t&&Object(x.jsx)(H,{})]}),Object(x.jsxs)(l.b,{path:"/login",children:[t&&Object(x.jsx)(l.a,{to:"/"}),!t&&Object(x.jsx)(A,{})]}),Object(x.jsxs)(l.b,{path:"/signup",children:[t&&Object(x.jsx)(l.a,{to:"/"}),!t&&Object(x.jsx)(U,{})]})]})]}),t&&Object(x.jsx)(X,{})]})})};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(w,{children:Object(x.jsx)(Z,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.8b75a3ee.chunk.js.map