---
id: javascript
title: javascript
sidebar_label: javascript
---


## Nodes, linked lists

```javascript
const chalk = require('chalk')

class Node {

    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }

    add(node){
        let current = this;
        if (current.next)
            current = current.next;
        current.next=node;
    }

    print(){
        let current = this;
        console.log(chalk.green(this.value))
       while (current.next){
           current=current.next
           console.log(chalk.blue(current.value))
       }
    }
}

class LinkedNode extends Node {
    constructor(value,next=null){
        super(value, next)
        this.head=this;
        this.tail=null;
    }

    add(node){
        let current = this.head;
        if (current.next)
            current = current.next;
        current.next=node;
        this.tail=node
    }

}


let list = new Node(1);

list.add(new Node(2))
list.add(new Node(3))
list.print()


let DL = new LinkedNode(1)
DL.add(new LinkedNode(2))
DL.add(new LinkedNode(5))
DL.print()

console.log(chalk.cyan(DL.head.value))
console.log(chalk.cyan(DL.tail.value))
```

### output

```bash
➜  javascript-exercise node index.js 
1
2
3
1
2
5
1
5
```