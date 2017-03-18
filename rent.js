var price_total = {
// take item numbers from each of the eight boxes, multiply by prices, add all together, return total 
  item1: [0, 150],
  item2: [0, 210],
  item3: [0, 260],
  item4: [0, 140],
  item5: [0, 400],
  item6: [0, 200],
  item7: [0, 250],
  item8: [0, 30],

  calculate: function() {
    var total1 = price_total.item1[0] * price_total.item1[1];
    var total2 = price_total.item2[0] * price_total.item2[1];
    var total3 = price_total.item3[0] * price_total.item3[1];
    var total4 = price_total.item4[0] * price_total.item4[1];
    var total5 = price_total.item5[0] * price_total.item5[1];
    var total6 = price_total.item6[0] * price_total.item6[1];
    var total7 = price_total.item7[0] * price_total.item7[1];
    var total8 = price_total.item8[0] * price_total.item8[1];
    var total_price = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8;
    $("#total").text("Your total is: $" + total_price);
  },

}


// function tied to buttons that raises quanity in js and on page
// quanity ++, paste "Quanity: 1"

var cart = {
  name: ['Item A', 'Item B', 'Item C'],
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
