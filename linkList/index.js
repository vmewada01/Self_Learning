class Node {
  constructor(value, next = null) {
     this.value = value,
     this.next = next;
  }
}



class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.lastNode = null;
  }

  addNode(val) {
    var node = new Node(val);
    if (this.size == 0) {
      this.head = node;
      this.lastNode = node;
    } else {
      this.lastNode.next = node;
      this.lastNode = node;
    }
    this.size++;
  }

  addNodeHead(val){
    var node = new Node(val)
    if(this.size ==0){
        this.head = node;
        this.lastNode = node;
    }
    else{
        node.next = this.head;
        this.head =node;

    }
    this.size++;
  }


  deleteLastNode(){
    if(this.size ==0)
    {
        console.log("Li is empty")
        return;
    }
    if(this.size ==1){
        this.head = null;
        this.size=0;
        this.lastNode = null;
    }
    else{
        var tempHead = this.head 
        while(tempHead.next.next){
            tempHead = tempHead.next
        }
        tempHead.next = null;
        this.lastNode= tempHead
        this.size--;
    }
  }

deleteHeadNode(){
    if(this.size ==0)
    {
        console.log("Li is empty")
        return;
    }
    if(this.size ==1){
        this.head = null;
        this.size=0;
        this.lastNode = null;
    }
    else{
      var temp = this.head 
      this.head = this.head.next;
       this.next = null;
    }
}


  traverseList()
  {
    var tempHead= this.head
    while(tempHead)
    {
    console.log(tempHead.value)
    tempHead = tempHead.next 
    }
    console.log("size", this.size)
  }
}

// var  LL1 = new LinkList();
// LL1.addNode(11)
// LL1.addNodeHead(1000)
// LL1.addNode(20)
// LL1.deleteLastNode()
// LL1.addNode(30)
// LL1.addNodeHead(500)
// LL1.addNode(40)
// LL1.deleteLastNode()
// LL1.deleteHeadNode()

// LL1.addNode(40)



// LL1.traverseList();


const user=[

  {firstname: "vishal",  lastname:"mewada", age:26},
  {firstname: "jatin",  lastname:"rajput", age:40},
  {firstname: "safal",  lastname:"patel", age:21},
  {firstname: "naresh",  lastname:"hero", age:30},
  {firstname: "vinod",  lastname:"villain", age:50}


]

const ans = user.reduce(function (acc, curr){
 if(curr.age <= 30){
  acc.push(curr.firstname)
  
 }
 return acc
 
},[])

console.log(ans)