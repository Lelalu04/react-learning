export class Item {
    constructor(title, boolean, category) {
    return (this.title = title,
            this.inStock = boolean,
            this.category = category)
    }
    boolChange(){
        this.boolean = !this.boolean
    }
}