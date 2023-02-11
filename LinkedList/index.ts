export class Node<T>{
    data: T;
    next: Node<T> | null = null;
    constructor(data: T){
        this.data = data;
    }
}

export default class LinkedList<T>{
    head: Node<T> | null = null;
    comparator: (a: T, b: T) => boolean;
    constructor(comparator: (a: T, b: T) => boolean) {
        this.comparator = comparator;
    }
    append(data: T): void {
        if(!this.head){
            this.head = new Node(data);
        }else{
            let current: Node<T> | null = this.head;
            while(current?.next !== null){
                current = current.next;
            }
            current.next = new Node(data);
        }
    }
    deleteTail(): void{
        let current: Node<T> | null = this.head;
        let prev: Node<T> | null = null;
        while(current?.next){
            prev = current;
            current = current.next;
        }
        if(prev){
            prev.next = null;
        }
    }

    delete(data: T): void{
        if(!this.head) return;

        if(this.comparator(this.head.data, data)){
            this.head = this.head.next;
            return
        }

        let current: Node<T> | null = this.head;
        let prev: Node<T> | null = null;
        while(current){
            if(this.comparator(current.data, data)){
                current = null;
            }else{
                prev = current;
                current = current.next;
            }
        }
        if(prev){
            prev.next = prev.next ? prev.next.next : null;
        }
    }

    search(data: T): Node<T> | null{
        if(!this.head) return null;
        let current = this.head;
        while(current.next){
            if (this.comparator(current.data, data)) return current;
            current = current.next;
        }
        return null;
    }

    traverse(): void{
        let current = this.head;
        while(current?.next){
            console.log(current.data);
            current = current.next;
        }
    }
}