export class TreeElement{
    leftChild: null | TreeElement;
    rightChild: null | TreeElement;
    data: any;
    key: number;
    constructor(leftChild: null | TreeElement, rightChild: null | TreeElement, data: any, key: number){
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.data = data;
        this.key = key;
    }
}

export default class BinarySearchTree{
    root: null | TreeElement;
    constructor(root: null | TreeElement){
        this.root = root;
    }

    search(key: number){
        if(this.root){
            return this._search(key, this.root);
        }
        else{
            return null;
        }
    }

    _search(key: number, node: TreeElement): any{
        if(node.key === key){
            return node.data;
        }
        else if (node.key > key && node.leftChild){
            return this._search(key, node.leftChild);
        }
        else if(node.key < key && node.rightChild){
            return this._search(key, node.rightChild);
        }
        else{
            return null;
        }
    }

    // delete(key: number){
    //     if(this.root){
    //         return this._delete(key, this.root);
    //     }
    //     else{
    //         return false;
    //     }
    // }

    // _delete(key: number, node: TreeElement, parent: TreeElement | null = null){
    //     if(node.key === key){
    //         if(!parent){
    //             if(!node.leftChild && !node.rightChild){
    //                 this.root = null;
    //             }
    //             else if(!node.leftChild && node.rightChild){
    //                 this.root = node.rightChild;
    //             }
    //             else if(node.leftChild && !node.rightChild){
    //                 this.root = node.leftChild;
    //             }
    //             else{
    //                 this.root = node.leftChild;
    //                 let help_node = node.leftChild;
    //                 let flag: number = 0;
    //                 while(help_node?.rightChild){
    //                     flag += 1;
    //                     help_node = help_node.rightChild;
    //                 }
    //                 if(flag > 0 && help_node?.rightChild){
    //                     help_node.rightChild = node.rightChild;
    //                 }
    //                 else{
    //                     if(node.leftChild){
    //                         node.leftChild.rightChild = node.rightChild;
    //                     }
    //                 }
    //             }
    //         }
    //         else{
    //             if(!node.leftChild && !node.rightChild){
    //                 if(node.key > parent.key){
    //                     parent.rightChild = null;
    //                 }
    //                 else{
    //                     parent.leftChild = null;
    //                 }
    //             }
    //             else if(node.leftChild && node.rightChild){
    //                 if(parent.key > node.key){
    //                     parent.leftChild = node.leftChild;

    //                 }
    //             }
    //         }
    //     }
    //     else if(node.key > key && node.leftChild){
    //         this._delete(key, node.leftChild, node)
    //     }
    //     else if(node.key < key && node.rightChild){
    //         this._delete(key, node.rightChild, node)
    //     }
    //     else{
    //         return null;
    //     }
    // }

    insert(data: any, key: number){
        if(this.root){
            this._insert(data, key, this.root);
        }
        else{
            this.root = new TreeElement(null, null, data, key);
        }
    }

    _insert(data: any, key: number, node: TreeElement){
        if(key < node.key){ 
            if(node.leftChild){
                this._insert(data, key, node.leftChild);
            }
            else{
                node.leftChild = new TreeElement(null, null, data, key);
            }
        }
        else if(key > node.key){
            if(node.rightChild){
                this._insert(data, key, node.rightChild);
            }
            else{
                node.rightChild = new TreeElement(null, null, data, key);
            }
        }
        else{
            throw new Error('Two Tree Elements with the same key.')
        }
    }

    height(w: number){
        if(this.root){
            return this._height(this.root) - w;
        }
        else{
            return 0;
        }
    }

    _height(node: TreeElement | null): number{
        if(!node){
            return 0;
        }
        else{
            const right = this._height(node.rightChild);
            const left = this._height(node.leftChild);
            if(right > left){
                return right + 1;
            }
            else{
                return left + 1;
            }
        }
    }

    get_min(): number | undefined{
        let current = this.root;
        while(current?.leftChild){
            current = current.leftChild;
        }
        return current?.data;
    }

    get_max(): number | undefined{
        let current = this.root;
        while(current?.rightChild){
            current = current.rightChild;
        }
        return current?.data;
    }

    inOrder(){

    }

    preOrder(){

    }

    postOrder(){

    }

}


