export class Stack{
    constructor(private _data?: any[] | null){}
    push(item: any): void{
        if(!this._data){
            this._data = [item];
        }else{
            this._data.push(item);
        }
    }

    pushMany(items: any[]): void{
        if(items.length > 0){
            items.forEach((item: any) => this._data?.push(item));
        }else{
            throw new Error("Cannot push empty Array")
        }
    }

    pop(amount: number = 1): never | any{
        if(!this._data){
            throw new Error("Cannot pop an empty stack");
        }else if(amount < 1){
            throw new Error("Cannot push less than one Item");
        }else if(amount > 1){
            let popArray: any[] = [];
            if(amount > this._data?.length){
                throw new Error("Number of items to pop is too big.");
            }
            else{
                for(let i = 0; i < amount; i++){
                    popArray.push(this._data.pop());
                }
                return popArray;
            }
        }
        
        else{
            return this._data.pop();
        }
    }

    getLength(): number | undefined{
        return this._data?.length;
    }

    peek(): any{
       if(this._data && this._data.length > 0){
            return this._data[this.getLength() as number - 1];
       }else{
            return undefined;
       }
    }

    isItemIn(item: any): boolean{
        if(this._data && this._data.length > 0){
            let stackCopy: any[] = this._data;
            while(stackCopy?.length > 0){
                if(stack.pop() === item){
                    return true;
                }
            }
        }else{
            throw new Error("Stack is empty")
        }
        return false;
    }
}


let stack: Stack = new Stack();
stack.push('First Item');
stack.push('Second Item');
stack.push(new Stack(['1', 2, 3, '4']));
console.log(stack.pop());
