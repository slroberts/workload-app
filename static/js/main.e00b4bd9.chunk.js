(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a(29)},19:function(t,e,a){},20:function(t,e,a){},29:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(11),l=a.n(i),s=(a(19),a(1)),c=a(2),r=a(4),u=a(3),d=a(5),m=(a(20),a(6)),h=a(9),p=a(12),f=a(8),v=a.n(f),g=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(r.a)(this,Object(u.a)(e).call(this,t))).handleChange=function(t){a.setState(Object(m.a)({},t.target.name,t.target.value))},a.handleSubmit=function(t){t.preventDefault(),a.state.input.length&&(a.props.onSubmit({id:v.a.generate(),input:a.state.input,completed:!1}),a.setState({input:""}))},a.state={placeholder:"ex. Company UI design",input:""},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{className:"todo-input",name:"input",placeholder:this.state.placeholder,value:this.state.input,onChange:this.handleChange}),o.a.createElement("button",{className:"todo-button",name:"button",onClick:this.handleSubmit},"Add to Queue"))}}]),e}(o.a.Component),b=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(r.a)(this,Object(u.a)(e).call(this,t))).handleStatus=function(t){a.setState({status:t.target.value})},a.state={status:"queued",id:v.a.generate()},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("ul",{className:"todo-status-container"},o.a.createElement("li",{className:"todo-status-item"},o.a.createElement("span",null,o.a.createElement("input",{className:"todo-status-input",type:"radio",onChange:this.handleStatus,checked:"completed"===this.state.status,value:"completed"}),"Completed"),o.a.createElement("span",null,o.a.createElement("input",{className:"todo-status-input",type:"radio",onChange:this.handleStatus,checked:"active"===this.state.status,value:"active"}),"Active"),o.a.createElement("span",null,o.a.createElement("input",{className:"todo-status-input",type:"radio",onChange:this.handleStatus,checked:"queued"===this.state.status,value:"queued"}),"Queued")))}}]),e}(o.a.Component),E=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(r.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={meta:Date(),isInEditMode:!1},a.changeEditMode=function(){a.setState({isInEditMode:!a.state.isInEditMode})},a.handleEditUpdate=function(){a.setState({isInEditMode:!1,changedTodoText:a.refs.newTextInput.value})},a.editViewMode=function(){return o.a.createElement("input",{className:"is-editing",defaultValue:a.state.changedTodoText,ref:"newTextInput"})},a.defaultViewMode=function(){return o.a.createElement("div",{className:"list-title",onClick:a.props.toggleComplete,style:{opacity:a.props.todo.completed?.5:""}},a.state.changedTodoText)},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.setState({changedTodoText:this.props.todo.input})}},{key:"render",value:function(){return o.a.createElement("li",{className:"todo-list-item"},this.state.isInEditMode?this.editViewMode():this.defaultViewMode(),!1===this.state.isInEditMode?o.a.createElement("button",{className:"edit",onClick:this.changeEditMode},"edit ",o.a.createElement("i",{className:"far fa-edit"})):o.a.createElement("button",{className:"save",onClick:this.handleEditUpdate},"save ",o.a.createElement("i",{className:"far fa-save"})),o.a.createElement("button",{className:"notes"},"notes ",o.a.createElement("i",{className:"far fa-sticky-note"})),o.a.createElement("button",{className:"delete",onClick:this.props.onDelete},"delete ",o.a.createElement("i",{className:"far fa-trash-alt"})),o.a.createElement("div",{className:"meta"},this.state.meta),o.a.createElement(b,null))}}]),e}(o.a.Component),S=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(r.a)(this,Object(u.a)(e).call(this,t))).addTodo=function(t){a.setState(function(e){return{todos:[t].concat(Object(p.a)(e.todos))}})},a.toggleComplete=function(t){a.setState(function(e){return{todos:e.todos.map(function(e){return e.id===t?Object(h.a)({},e,{completed:!e.completed}):e})}})},a.updateTodoToShow=function(t){a.setState({todoToShow:t})},a.handleDelete=function(t){a.setState(function(e){return{todos:e.todos.filter(function(e){return e.id!==t})}})},a.removeAllComplete=function(){a.setState(function(t){return{todos:t.todos.filter(function(t){return!t.completed})}})},a.toggleAllComplete=function(){a.setState(function(t){return{todos:t.todos.map(function(e){return Object(h.a)({},e,{completed:t.toggleAllComplete})}),toggleAllComplete:!t.toggleAllComplete}})},a.state={todos:[],todoToShow:"all",toggleAllComplete:!0},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.hydrateStateWithLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage.bind(this)),this.saveStateToLocalStorage()}},{key:"hydrateStateWithLocalStorage",value:function(){for(var t in this.state)if(localStorage.hasOwnProperty(t)){var e=localStorage.getItem(t);try{e=JSON.parse(e),this.setState(Object(m.a)({},t,e))}catch(a){this.setState(Object(m.a)({},t,e))}}}},{key:"saveStateToLocalStorage",value:function(){for(var t in this.state)localStorage.setItem(t,JSON.stringify(this.state[t]))}},{key:"render",value:function(){var t=this,e=[];return"all"===this.state.todoToShow?e=this.state.todos:"active"===this.state.todoToShow?e=this.state.todos.filter(function(t){return!t.completed}):"completed"===this.state.todoToShow&&(e=this.state.todos.filter(function(t){return t.completed})),o.a.createElement("div",null,o.a.createElement(g,{onSubmit:this.addTodo}),o.a.createElement("ul",{className:"todo-list-container"},e.map(function(e){return o.a.createElement(E,{key:e.id,toggleComplete:function(){return t.toggleComplete(e.id)},onDelete:function(){return t.handleDelete(e.id)},todo:e})})),this.state.todos.some(function(t){return t})?o.a.createElement("div",{className:"notifications"},o.a.createElement("div",{className:"todo-counter"},"Todos left:"," ",this.state.todos.filter(function(t){return!t.completed}).length),o.a.createElement("div",{className:"filters"},o.a.createElement("button",{onClick:function(){return t.updateTodoToShow("all")}},"All"),o.a.createElement("button",{onClick:function(){return t.updateTodoToShow("active")}},"Active"),o.a.createElement("button",{onClick:function(){return t.updateTodoToShow("completed")}},"Completed"),this.state.todos.some(function(t){return t.completed})?o.a.createElement("button",{onClick:this.removeAllComplete},"Remove All Completed Items"):null)):null)}}]),e}(o.a.Component),w=function(t){function e(){return Object(s.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-container"},o.a.createElement("div",{className:"todo-input-container"},o.a.createElement("h1",null,"workload."),o.a.createElement("p",null,"Stay up-to-date with projects and their statuses."),o.a.createElement(S,null)))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.e00b4bd9.chunk.js.map