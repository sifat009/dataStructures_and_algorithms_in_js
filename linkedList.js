
// implementing Linked list in javaScript

function linkedList() {
	let length = 0;
	let head = null;

	let Node = function(val) {
		this.value = val;
		this.next = null;
	}

	this.isEmpty = function() {
		return length === 0;
	}

	this.length = function() {
		return length;
	}

	// adding values to the end of the list

	this.append = function(val) {
		let node = new Node(val); 
		if(!head) {
			head = node;
		} else{
			let current = head;
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}

		length++;
	}

	// adding value to the starting of the list

	this.prepend = function(val) {
		let node = new Node(val);
		if(!head) {
			head = node;
		} else{
			let current = head;
			head = node;
			head.next = current;
		}
		length++;
	}

	// adding a value into a given position

	this.addAt = function(val, position) {
		if(position > length || position < 0){
			console.log("Invalid position");
			return false;
		}
		let node = new Node(val);
		let current = head;
		let previous;
		let count = 0;
		if(position === 0) {
			head = node;
			head.next = current;
		} else{
			while(count !== position) {
				previous = current;
				current = current.next;
				count++;
			}
			previous.next = node;
			node.next = current;
		}
		length++;
	}

	// checking if a value is in the list or not

	this.hasValue = function(val) {
		let current = head;
		while(current) {
			if(current.value === val)
				return true;
			current = current.next;
		}
		return false;
	}

	// removing first element of the list 

	this.removeFirst = function() {
		if(length === 0)
			return "Empty list";
		let val = head.value;
		head = head.next;
		length--;
		return val;
	}	


	// removing last element of the list

	this.removeLast = function() {
		if(length === 0)
			return "Empty list";
		let current = head;
		let previous;
		let val;
		while(current.next){
			previous = current;
			current = current.next;
		}
		val = current.value;
		previous.next = null;
		length--;
		return val;
	}	

	// removing an element from a given position

	this.removeAt = function(position) {
		if(position >= length || position < 0 ) 
			return 'Invalid Position';

		let count = 0;
		let current = head;
		let previous;

		if(position === 0){
			head = current.next;
		} else{
			while(count !== position) {
				previous = current;
				current = current.next;
				count++;
			}
			previous.next = current.next;
		}

		length--;
		return current.value;
		
	}

	// returning index of the given value

	this.indexOf = function(val) {
		if(!this.hasValue(val))
			return -1;
		let current = head;
		let count = 0;
		while(current) {
			if(current.value === val)
				return count;
			current = current.next;
			count++;
		}
	}

	// printing the values of the linked list

	this.show = function() {
		let store = "["; // storing the values
		let current = head;
		while(current) {
			store += current.value;
			if(current.next){
				store += " -> ";
			}
			current = current.next;
		}
		store += "]";
		return store;
	}
}

let list = new linkedList();
list.append(5);
list.append(10);
list.append(15);
list.prepend(20);
list.prepend(25);

console.log(list.show());
console.log("length: ",list.length());
console.log("Last element: ",list.removeLast());
console.log("First element: ",list.removeFirst());
console.log(list.show());
console.log("length: ",list.length());
list.addAt(10, 1);
console.log(list.show());
console.log("Index is : ",list.indexOf(15));
console.log("Removed element: ",list.removeAt(2));
console.log(list.show());

