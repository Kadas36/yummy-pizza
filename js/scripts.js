function Order(sauce, cheese, veg, base, size) {
    this.Sauce = sauce;
    this.Cheese = cheese;
    this.Veggy = veg;
    this.Base = base;
    this.Size = size;
}


$(document).ready(function() {
    

    $("#formSubmit").submit(function(event) {
      event.preventDefault();
  
      var inputtedSauce = $("[name='sauce']:checked").val();
      var inputtedCheese = $("[name='cheese']:checked").val();
      var inputtedVeggy = $("[name='veggy']:checked").val();
      var inputtedBase = $("[name='base']:checked").val();
      var inputtedSize = $("[name='grid']:checked").val();
  
      var newOrder = new Order(inputtedSauce, inputtedCheese, inputtedVeggy, inputtedBase, inputtedSize);
  
      $("ol#orders").append("<li><span class='orders'>" + newOrder.Sauce + "</span></li>");
  
    //   $("input#new-first-name").val("");
    //   $("input#new-last-name").val("");
    });

});