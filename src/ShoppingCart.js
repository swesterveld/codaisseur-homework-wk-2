class ShoppingCart {
  constructor() {
    this.items = []
  }

  // Add an item to the cart
  addItem(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    })
  }

  // Get a list of items currently in the cart
  getItems() {
    return this.items
  }

  // Empty the cart
  clear() {
    this.items = []
  }

  // Total up the value of all items currently in the cart
  total() {
    return this.getItems()
      .map(item => item.quantity*item.pricePerUnit)
      .reduce((acc,cur) => acc+cur, 0)
  }
}

module.exports = ShoppingCart