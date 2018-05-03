var app = new Vue({
	el:'#app',
	data : {
		message:'Hey there'
	}
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  },
  // methods : {
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
    texttoadd : '' 
  },
  methods : {
  	addTodo : function(){
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
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})