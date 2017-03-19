var price_total = {
// take item numbers from each of the eight boxes, multiply by prices, add all together, return total 
  items: [0, 0, 0, 0, 0, 0, 0, 0],
  prices: [150, 210, 260, 140, 400, 200, 250, 30],

  calculate: function() {
    var total1 = this.items[0] * this.prices[0];
    var total2 = this.items[1] * this.prices[1];
    var total3 = this.items[2] * this.prices[2];
    var total4 = this.items[3] * this.prices[3];
    var total5 = this.items[4] * this.prices[4];
    var total6 = this.items[5] * this.prices[5];
    var total7 = this.items[6] * this.prices[6];
    var total8 = this.items[7] * this.prices[7];
    var total_price = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
    $("#total").text("Your total is: $" + total_price);
  },

  addto: function(num) {

  },

  removefrom: function(num) {

  }
}

// function tied to buttons that raises quanity in js and on page
// quanity ++, paste "Quanity: 1"

var cart = {
  price: [50, 35, 95],
  quantity: [0, 0, 0],
  total: 0,

  addToCart: function(index, quan, total_price, id) {
    this.quantity[index]++;
    this.total = this.total + this.price[index];
    $("#" + quan).text('Quantity: ' + this.quantity[index]);
    $("#" + id).text(this.quantity[index]);
    $('#total_1').text('Total: $' + this.total);
    $('#total_2').text('Total: $' + this.total);
    $('#total_3').text('Total: $' + this.total);
    $('#total_4').text('Total: $' + this.total);
  },

  removeFromCart: function(index, quan, total_price, id) {
    if (this.quantity[index] > 0) {
      this.quantity[index]--;
      this.total = this.total - this.price[index];
    };
    $("#" + quan).text('Quantity: ' + this.quantity[index]);
    $("#" + id).text(this.quantity[index]);
    $('#total_1').text('Total: $' + this.total);
    $('#total_2').text('Total: $' + this.total);
    $('#total_3').text('Total: $' + this.total);
    $('#total_4').text('Total: $' + this.total);
  }
}
