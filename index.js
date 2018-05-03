// doc for vue.js https://vuejs.org/v2/guide/

var app = new Vue({
	el:'#app',
	data : {
		message:'Hey there' 																							// just a simple message which p tag will use
	}
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString() // tooltip / title for that span
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true 																												// a boolean variable to fulfill v-if
  },
  // methods : { 																											// not needed check the html , v-on:click of button
  // 	toggleSeen:function(){
  // 		this.seen = ! this.seen
  // 	}
  // }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn Scala' },
      { text: 'Learn Play' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    texttoadd : '' 																										// v-model for handle input
  },
  methods : {
  	addTodo : function(){ 																						//handling v-on:click of button to add in above todos
  		this.todos.push({ text : this.texttoadd })
  	}
  }
})


var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('') 				// copied from doc 
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!' 																						//yes used above , go see that , v-model
  }
})