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
  
      let inputtedSauce = $("[name='sauce']:checked").val();
      let inputtedCheese = $("[name='cheese']:checked").val();
      let inputtedVeggy = $("[name='veggy']:checked").val();
      let inputtedBase = $("[name='base']:checked").val();
      let inputtedSize = $("[name='grid']:checked").val();
  
      let newOrder = new Order(inputtedSauce, inputtedCheese, inputtedVeggy, inputtedBase, inputtedSize);
  
      $("ol#orders").append("<li><span class='orders'>" + newOrder.Sauce + "</span></li>");
  
    //   $("input#new-first-name").val("");
    //   $("input#new-last-name").val("");
    });

});