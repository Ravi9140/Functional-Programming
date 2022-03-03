const _l = (msg) => console.log("Output ==> [" + msg + "]");

function sayHello() {
  return "Hello, ";
}

function sayBye(){
  return "Bye, ";
}
//Assignment -> TODO - for every one in names, say hello and Bye

const names = ['Namrata', 'Rishikesh', 'Anupama', 'Madhavan'];

//------pass functions as arguments
function Hello_Bye(Hello_Func,Bye_Func,name){
  console.log(Hello_Func() + name + ", "+Bye_Func() + name);
}

var newArr =[];
for(var i=0;i<names.length;i++){
  newArr.push(Hello_Bye(sayHello,sayBye ,names[i]));
}

//------pass functions as arguments
function greeting(/*function*/greetMessage, /*string*/name) {
  console.log(greetMessage() + name);
}

// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "Lovely folks!"); //separating out console io from computation
greeting(sayBye, "All of You!"); //separating out console io from computation
