(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={input:"Filter_input__2DoVp",label:"Filter_label__3DcZT"}},14:function(t,e,n){t.exports={container:"Container_container__3RIox"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=n(11),i=n(5),l=n(6),u=n(8),b=n(7),h=n(13),m=n.n(h),d=n(14),j=n.n(d),f=n(0),p=function(t){var e=t.children;return Object(f.jsx)("div",{className:j.a.container,children:e})},O=n(15),C=n(2),v=n.n(C),x=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.hendleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(O.a)({},a,c))},t.hendleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.addContact(a,c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:v.a.form,onSubmit:this.hendleSubmit,children:[Object(f.jsxs)("label",{children:["\u0418\u043c\u044f",Object(f.jsx)("input",{className:v.a.input,type:"text",name:"name",value:this.state.name,onChange:this.hendleChange,required:!0})]}),Object(f.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(f.jsx)("input",{className:v.a.input,type:"tel",pattern:"^[ 0-9]+$",name:"number",value:this.state.number,onChange:this.hendleChange,required:!0})]}),Object(f.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),_=n(10),g=n.n(_),y=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("p",{children:Object(f.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:g.a.input,type:"text",name:"filter",value:e,onChange:n})]})})},N=n(3),S=n.n(N),k=function(t){var e=t.filterContacts,n=t.deleteContact;return Object(f.jsx)("ul",{className:S.a.list,children:e.map((function(t){return Object(f.jsxs)("li",{className:S.a.item,children:[t.name,":",Object(f.jsx)("span",{className:S.a.phoneNumber,children:t.number}),Object(f.jsx)("button",{className:S.a.button,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a=t.state.contacts,c={id:m.a.generate(),name:e,number:n};a.find((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:Object(s.a)(t)})}},{key:"componentDidUpdate",value:function(t,e){var n=e.contacts,a=this.state.contacts;n!==a&&(console.log("\u043e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 "),localStorage.setItem("contacts",JSON.stringify(a)))}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(p,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(x,{addContact:this.addContact}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(y,{value:this.state.filter,onChange:this.changeFilter}),Object(f.jsx)(k,{filterContacts:this.filterContacts(),deleteContact:this.deleteContact})]})]})})}}]),n}(a.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",button:"ContactList_button__1RuFy",phoneNumber:"ContactList_phoneNumber__1oFI1"}}},[[29,1,2]]]);
//# sourceMappingURL=main.1c41e90c.chunk.js.map