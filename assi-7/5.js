// Product constructor function
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

// Inventory constructor function
function Inventory() {
    this.inventory = [];
}

// Method to add a product to the inventory
Inventory.prototype.addProduct = function(product) {
    if (product instanceof Product) {
        this.inventory.push(product);
        console.log(`Product ${product.name} added to the inventory.`);
    } else {
        console.log('Invalid product. Please provide a valid Product object.');
    }
};

// Method to delete a product from the inventory by name
Inventory.prototype.deleteProduct = function(productName) {
    const index = this.inventory.findIndex(product => product.name === productName);

    if (index !== -1) {
        this.inventory.splice(index, 1);
        console.log(`Product ${productName} deleted from the inventory.`);
    } else {
        console.log(`Product ${productName} not found in the inventory.`);
    }
};

// Example usage
const inventory = new Inventory();

const product1 = new Product('Laptop', 'Electronics', 1000, 50);
const product2 = new Product('Phone', 'Electronics', 500, 100);
const product3 = new Product('Shoes', 'Footwear', 100, 200);

inventory.addProduct(product3);
inventory.addProduct(product1); 
inventory.addProduct(product2);

inventory.deleteProduct('Tablet'); 
inventory.deleteProduct('Phone');

console.log(inventory);
