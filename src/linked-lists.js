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
        const newNode = new Node(value);
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
    
      // Display all nodes
      printList() {
        let current = this.head;
        while (current) {
          console.log(current.value);
          current = current.next;
        }
      }
  }

  const firstList = new LinkedList();

  firstList.append(1);
  console.log("First List:")
  firstList.printList();