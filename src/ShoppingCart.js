class ShoppingCart {
  constructor() {
    this.items = []
  }

  addItem(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    })
  }

  getItems() {
    return this.items
  }

  clear() {
    this.items = []
  }
}

module.exports = ShoppingCart