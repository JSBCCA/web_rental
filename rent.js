var price_total = {
// take item numbers from each of the eight boxes, multiply by prices, add all together, return total 
  items: [0, 0, 0, 0, 0, 0, 0, 0],
  prices: [150, 210, 260, 140, 400, 200, 250, 30],
  total: 0,

  calculate: function() {
    $("#total").text("Your total is: $" + this.total);
  },

  addto: function(num) {
    this.items[num - 1]++;
    this.total += this.prices[num - 1];
    $("#num" + num).text('Quantity: ' + this.items[num - 1]);
  },

  removefrom: function(num) {
    if (this.items[num - 1] > 0) {
      this.items[num - 1]--;
      this.total -= this.prices[num - 1];
    }
    $("#num" + num).text('Quantity: ' + this.items[num - 1]);
  }
}