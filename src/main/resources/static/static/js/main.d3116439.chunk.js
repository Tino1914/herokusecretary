(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),c=a.n(r),i=(a(38),a(6)),s=a(7),o=a(12),m=a(11),u=(a(39),a(14)),d=a(9),h=a(31),p=a.n(h).a.create({baseURL:"https://heroku-secretary.herokuapp.com/",headers:{"Content-type":"application/json"}}),b=new(function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"getAll",value:function(){return p.get("/clients/all")}},{key:"getClient",value:function(e){return p.get("/clients/".concat(e))}},{key:"postClient",value:function(e){return p.post("/clients/add",e)}},{key:"updateClient",value:function(e,t){return p.put("/clients/update/".concat(e),t)}},{key:"deleteClient",value:function(e){return p.delete("/clients/delete/".concat(e))}},{key:"deleteClients",value:function(){return p.delete("/clients/deleteAll")}},{key:"sendEmail",value:function(e){return p.post("/clients/sendmail/".concat(e))}}]),e}()),f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(u.a)({},e.target.id,e.target.value))},n.addClient=function(){var e={firstName:n.state.firstName,lastName:n.state.lastName,email:n.state.email,licensePlate:n.state.licensePlate,phoneNumber:n.state.phoneNumber};""!==n.state.currentClient.firstName||""!=n.state.currentClient.lastName||""!=n.state.currentClient.licencePlate||9==n.state.currentClient.phoneNumber.length?b.postClient(e).then((function(e){n.setState({currentClient:{firstName:e.data.firstName,lastName:e.data.lastName,email:e.data.email,licensePlate:e.data.licensePlate,phoneNumber:e.data.phoneNumber},message:"Client Added!"}),console.log(e.data)})).then((function(){n.props.history.push("/clients")})).catch((function(e){console.log(e)})):alert("there is an invalid data input")},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.addClient=n.addClient.bind(Object(d.a)(n)),n.state={currentClient:{firstName:"",lastName:"",email:"",licensePlate:"",phoneNumber:""},message:""},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("span",{className:"h3"},l.a.createElement("h1",null,"Register Client"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{className:"col-12 col-lg-4 mt-2 hv-center"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{onChange:this.handleChange,className:"form-control",id:"firstName",placeholder:"First Name"})),l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{onChange:this.handleChange,className:"form-control",id:"lastName",placeholder:"Last Name"})),l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{onChange:this.handleChange,className:"form-control",id:"licensePlate",placeholder:"License Plate"})),l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{onChange:this.handleChange,type:"tel",className:"form-control",id:"phoneNumber",placeholder:"Phone Number"})),l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{onChange:this.handleChange,type:"email",className:"form-control",id:"email",placeholder:"Email"})),l.a.createElement("a",{onClick:this.addClient,className:"btn btn-info",role:"button"},"Register Client"),l.a.createElement("br",null))))),l.a.createElement("br",null),l.a.createElement("p",null,this.state.message))}}]),a}(n.Component),E=a(10),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar navbar-dark bg-dark"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("img",{className:"imglogo",src:"images/sioux.png",alt:""})),l.a.createElement("a",{className:"navbar-brand",href:"/"},"Secretary App"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},l.a.createElement("ul",{className:"navbar-nav "},l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.b,{to:"/clients",className:"nav-link"},"Clients"))),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.b,{to:"/",className:"nav-link"},"Register Client")))))))}}]),a}(n.Component),C=a(1),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).deleteClient=function(e){window.confirm("Are you sure?")&&(b.deleteClient(e).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),n.retrieveClients(),window.location.reload())},n.emailClient=function(e){b.sendEmail(e).then((function(e){alert(e.data)})).catch((function(e){alert("Error sending email, check if the email is correct"),console.log(e)}))},n.state={clients:[]},n.retrieveClients=n.retrieveClients.bind(Object(d.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.retrieveClients()}},{key:"retrieveClients",value:function(){var e=this;b.getAll().then((function(t){e.setState({clients:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("center",null,l.a.createElement("table",{className:"tableClients"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"tableHeader"},"First Name"),l.a.createElement("th",{className:"tableHeader"},"Last Name"),l.a.createElement("th",{className:"tableHeader"},"License Plate"),l.a.createElement("th",{className:"tableHeader"},"Email"),l.a.createElement("th",{className:"tableHeader"},"Phone Number"))),l.a.createElement("tbody",null,this.state.clients.length>0?this.state.clients.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.firstName),l.a.createElement("td",null,t.lastName),l.a.createElement("td",null,t.licensePlate),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.phoneNumber),l.a.createElement("td",null,l.a.createElement("center",null,l.a.createElement("button",{onClick:function(){return e.emailClient(t.email)},className:"btn btn-info"},"Email"))),l.a.createElement("td",null,l.a.createElement("center",null,l.a.createElement("button",{className:"btn btn-warning"},l.a.createElement(E.b,{to:"/updateClient/"+t.id,className:"nav-btn"},"Update")))),l.a.createElement("td",null,l.a.createElement("center",null,l.a.createElement("button",{onClick:function(){return e.deleteClient(t.id)},className:"btn btn-danger"},"Delete"))))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"5"},"Loading...")))))}}]),a}(l.a.Component),v=a(16),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getClient=function(e){b.getClient(e).then((function(e){n.setState({currentClient:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))},n.handleChange=function(e){var t=e.target.value,a=e.target.id;n.setState((function(e){return{currentClient:Object(v.a)(Object(v.a)({},e.currentClient),{},Object(u.a)({},a,t))}})),console.log(t+" "+a)},n.updateClient=function(){""!=n.state.currentClient.firstName||""!=n.state.currentClient.lastName||""!=n.state.currentClient.licencePlate||9==n.state.currentClient.phoneNumber.length?b.updateClient(n.state.currentClient.id,n.state.currentClient).then((function(e){console.log(e.data),n.setState({alert:"The client was updated successfully!"})})).then((function(){n.props.history.push("/clients")})).catch((function(e){console.log(e)})):alert("The input you gave is inorrect")},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.getClient=n.getClient.bind(Object(d.a)(n)),n.updateClient=n.updateClient.bind(Object(d.a)(n)),n.state={currentClient:{id:null,firstName:"",lastName:"",email:"",licencePlate:"",phoneNumber:""},message:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getClient(this.props.match.params.id),this.setState((function(t){return{currentClient:Object(v.a)(Object(v.a)({},t.currentClient),{},{id:e.props.match.params.id})}}))}},{key:"render",value:function(){var e=this.state.currentClient;return l.a.createElement("div",null,l.a.createElement("span",{className:"h3"},l.a.createElement("h1",null,"Update Client"),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("center",null,l.a.createElement("div",{className:"col-12 col-lg-4 mt-2 hv-center"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"First Name",id:"firstName",value:e.firstName,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Last Name",id:"lastName",value:e.lastName,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"License Plate",id:"licensePlate",value:e.licensePlate,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Phone Number",id:"phoneNumber",value:e.phoneNumber,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group text-left"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Email",id:"email",value:e.email,onChange:this.handleChange})),l.a.createElement(E.b,{to:"/clients",className:"btn btn-danger"},"Cancel"),l.a.createElement("a",{onClick:this.updateClient,className:"btn btn-warning",role:"button"},"Update Client"),l.a.createElement("br",null))))),l.a.createElement("p",null,this.state.message))}}]),a}(n.Component),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={clients:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(C.a,{exact:!0,path:"/",component:f}),l.a.createElement(C.a,{exact:!0,path:"/clients",component:N}),l.a.createElement(C.a,{exact:!0,path:"/updateClient/:id",component:y}),l.a.createElement(C.a,{exact:!0,path:"/registerClient",component:f}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d3116439.chunk.js.map