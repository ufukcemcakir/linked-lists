// LinkedList.js

class Node {
    constructor(value = null, nextNode = null) {
      this.value = value;
      this.nextNode = nextNode;
    }
  }
  
  class LinkedList {
    constructor() {
      this.headNode = null;
    }
  
    append(value) {
      if (!this.headNode) {
        this.headNode = new Node(value);
        return;
      }
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
  
    prepend(value) {
      this.headNode = new Node(value, this.headNode);
    }
  
    get size() {
      let count = 0;
      let current = this.headNode;
      while (current) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  
    get head() {
      return this.headNode;
    }
  
    get tail() {
      if (!this.headNode) return null;
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  
    at(index) {
      if (index < 0) return null;
      let current = this.headNode;
      for (let i = 0; i < index; i++) {
        if (!current) return null;
        current = current.nextNode;
      }
      return current;
    }
  
    pop() {
      if (!this.headNode) return;
      if (!this.headNode.nextNode) {
        this.headNode = null;
        return;
      }
      let current = this.headNode;
      while (current.nextNode.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = null;
    }
  
    contains(value) {
      let current = this.headNode;
      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    }
  
    find(value) {
      let current = this.headNode;
      let index = 0;
      while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    toString() {
      let result = '';
      let current = this.headNode;
      while (current) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      return result + 'null';
    }
  
    insertAt(value, index) {
      if (index < 0) return;
      if (index === 0) {
        this.prepend(value);
        return;
      }
      const prevNode = this.at(index - 1);
      if (!prevNode) return;
      prevNode.nextNode = new Node(value, prevNode.nextNode);
    }
  
    removeAt(index) {
      if (index < 0 || !this.headNode) return;
      if (index === 0) {
        this.headNode = this.headNode.nextNode;
        return;
      }
      const prevNode = this.at(index - 1);
      if (!prevNode || !prevNode.nextNode) return;
      prevNode.nextNode = prevNode.nextNode.nextNode;
    }
  }
  
  module.exports = LinkedList;