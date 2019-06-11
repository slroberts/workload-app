(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,o){t.exports=o(29)},19:function(t,e,o){},20:function(t,e,o){},29:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),i=o(10),l=o.n(i),c=(o(19),o(1)),s=o(2),r=o(4),u=o(3),d=o(5),m=(o(20),o(6)),h=o(8),p=o(12),f=o(11),g=o.n(f),v=function(t){function e(t){var o;return Object(c.a)(this,e),(o=Object(r.a)(this,Object(u.a)(e).call(this,t))).handleChange=function(t){o.setState(Object(m.a)({},t.target.name,t.target.value))},o.handleSubmit=function(t){t.preventDefault(),o.state.input.length&&(o.props.onSubmit({id:g.a.generate(),input:o.state.input,completed:!1}),o.setState({input:""}))},o.state={placeholder:"ex. Company UI design",input:""},o}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{className:"todo-input",name:"input",placeholder:this.state.placeholder,value:this.state.input,onChange:this.handleChange}),a.a.createElement("button",{className:"todo-button",name:"button",onClick:this.handleSubmit},"Add to Queue"))}}]),e}(a.a.Component),b=function(t){function e(){var t,o;Object(c.a)(this,e);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(o=Object(r.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={meta:Date(),isInEditMode:!1},o.changeEditMode=function(){o.setState({isInEditMode:!o.state.isInEditMode})},o.handleEditUpdate=function(){o.setState({isInEditMode:!1,changedTodoText:o.refs.newTextInput.value})},o.editViewMode=function(){return a.a.createElement("input",{className:"is-editing",defaultValue:o.state.changedTodoText,ref:"newTextInput"})},o.defaultViewMode=function(){return a.a.createElement("div",{className:"list-title",onClick:o.props.toggleComplete,style:{opacity:o.props.todo.completed?.5:""}},o.state.changedTodoText)},o}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({changedTodoText:this.props.todo.input})}},{key:"render",value:function(){return a.a.createElement("li",{className:"todo-list-item"},this.state.isInEditMode?this.editViewMode():this.defaultViewMode(),!1===this.state.isInEditMode?a.a.createElement("button",{className:"edit",onClick:this.changeEditMode},"edit ",a.a.createElement("i",{className:"far fa-edit"})):a.a.createElement("button",{className:"save",onClick:this.handleEditUpdate},"save ",a.a.createElement("i",{className:"far fa-save"})),a.a.createElement("button",{className:"notes"},"notes ",a.a.createElement("i",{className:"far fa-sticky-note"})),a.a.createElement("button",{className:"delete",onClick:this.props.onDelete},"delete ",a.a.createElement("i",{className:"far fa-trash-alt"})),a.a.createElement("div",{className:"meta"},this.state.meta))}}]),e}(a.a.Component),S=function(t){function e(t){var o;return Object(c.a)(this,e),(o=Object(r.a)(this,Object(u.a)(e).call(this,t))).addTodo=function(t){o.setState(function(e){return{todos:[t].concat(Object(p.a)(e.todos))}})},o.updateTodoToShow=function(t){o.setState({todoToShow:t})},o.handleDelete=function(t){o.setState(function(e){return{todos:e.todos.filter(function(e){return e.id!==t})}})},o.toggleComplete=function(t){o.setState(function(e){return{todos:e.todos.map(function(e){return e.id===t?Object(h.a)({},e,{completed:!e.completed}):e})}})},o.removeAllComplete=function(){o.setState(function(t){return{todos:t.todos.filter(function(t){return!t.completed})}})},o.toggleAllComplete=function(){o.setState(function(t){return{todos:t.todos.map(function(e){return Object(h.a)({},e,{completed:t.toggleAllComplete})}),toggleAllComplete:!t.toggleAllComplete}})},o.state={todos:[],todoToShow:"all",toggleAllComplete:!0},o}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.hydrateStateWithLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage.bind(this)),this.saveStateToLocalStorage()}},{key:"hydrateStateWithLocalStorage",value:function(){for(var t in this.state)if(localStorage.hasOwnProperty(t)){var e=localStorage.getItem(t);try{e=JSON.parse(e),this.setState(Object(m.a)({},t,e))}catch(o){this.setState(Object(m.a)({},t,e))}}}},{key:"saveStateToLocalStorage",value:function(){for(var t in this.state)localStorage.setItem(t,JSON.stringify(this.state[t]))}},{key:"render",value:function(){var t=this,e=[];return"all"===this.state.todoToShow?e=this.state.todos:"active"===this.state.todoToShow?e=this.state.todos.filter(function(t){return!t.completed}):"completed"===this.state.todoToShow&&(e=this.state.todos.filter(function(t){return t.completed})),a.a.createElement("div",null,a.a.createElement(v,{onSubmit:this.addTodo}),a.a.createElement("ul",{className:"todo-list-container"},e.map(function(e){return a.a.createElement(b,{key:e.id,toggleComplete:function(){return t.toggleComplete(e.id)},onDelete:function(){return t.handleDelete(e.id)},todo:e})})),this.state.todos.some(function(t){return t})?a.a.createElement("div",{className:"notifications"},a.a.createElement("div",{className:"todo-counter"},"Todos left:"," ",this.state.todos.filter(function(t){return!t.completed}).length),a.a.createElement("div",{className:"filters"},a.a.createElement("button",{onClick:function(){return t.updateTodoToShow("all")}},"All"),a.a.createElement("button",{onClick:function(){return t.updateTodoToShow("active")}},"Active"),a.a.createElement("button",{onClick:function(){return t.updateTodoToShow("completed")}},"Completed"),this.state.todos.some(function(t){return t.completed})?a.a.createElement("button",{onClick:this.removeAllComplete},"Remove All Completed Items"):null)):null)}}]),e}(a.a.Component),E=function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"todo-container"},a.a.createElement("div",{className:"todo-input-container"},a.a.createElement("h1",null,"workload."),a.a.createElement("p",null,"Stay up-to-date with projects and their statuses."),a.a.createElement(S,null)))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.97bb2f0f.chunk.js.map