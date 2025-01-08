class Node {
    constructor(value) {
      this.value = null; // The data stored in the node
      this.next = null;   // Reference to the next node
    }
  }

  class LinkedList {
    constructor() {
      this.head = null; // First node in the list
    }
    
    append(value) {
        const newNode = new Node();
        newNode.value = value;

        if (!this.head) {
          this.head = newNode;
        } else {
          let current = this.head;
          while (current.next) {
            current = current.next;
          }
          current.next = newNode;
        }
      }
    
    prepend(value) {
        const newNode = new Node();
        newNode.value = value;
        
        newNode.next = this.head;
        this.head = newNode;
    }
    
    size() {
        let current = this.head;
        let size = 0;

        while (current) {
            size++;
            current = current.next
        }

        return size
    }

    firstNode() {
        return this.head.value;
    }

    tail() {
        let current = this.head;

        while (current && current.next) {
            current = current.next;
        }
        return current.value
    }

    atIndex(index) {
        let current = this.head;
        let currentIndex = 0

        while (current){
            if (currentIndex === index) {
                return current.value;
            }
            current = current.next;
            currentIndex++;
        }
        return null;
    }

    pop() {

        if (!this.head) {
            console.log("List is empty");
            return; // If the list is empty, return early
        }
    
        // Special case: if there's only one node in the list
        if (!this.head.next) {
            this.head = null;
            return; // If there's one node, sets the first node to null
        }

        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next
        }
        current.next = null
    }

    contains(value) {
        let current = this.head;

        while(current){
            if (current.value === value) {
                console.log("True. This value was found.")
                return true
            }
            current = current.next;
        }
        console.log("False. This value was not found.")
        return false;
    }

    find(value){
        let current = this.head;
        let currentIndex = 0;

        while(current){
            if (current.value === value) {
                console.log("This is the index of the input value.", currentIndex)
                return currentIndex
            }
            current = current.next;
            currentIndex++;
        }
        console.log("This value was not found.")
        return null;
    }

    toString(){
        let current = this.head;
        let result = '';

        while(current){
            result += `(${current.value})`;
            if(current.next){
                result += ' ->'
            }
            current = current.next
        }
        result += ' -> null'
        return result;
    }
      
      printList() {
        let current = this.head;
        while (current) {
          console.log(current.value);
          current = current.next;
        }
      }
  }


  export default LinkedList;