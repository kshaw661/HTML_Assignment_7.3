function counter()
	{
		var count = 0;
		function incrmental_val(){
			return ++count;
		}
		return incrmental_val;
	}
var counter_val = counter();

console.log(counter_val());
console.log(counter_val());
console.log(counter_val());
console.log(counter_val());
console.log(counter_val());
console.log(counter_val());
console.log(counter_val());
console.log(counter_val());
console.log(counter_val());