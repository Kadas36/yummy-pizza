function Order(sauce, cheese, veg, base, size) {
    this.Sauce = sauce;
    this.Cheese = cheese;
    this.Veggy = veg;
    this.Base = base;
    this.Size = size;
}

Order.prototype.specs = function() {
    return this.Size + " sized pizza with " + this.Sauce + " sauce, " + this.Cheese + " cheese, " + this.Veggy + " veggies, and a " + this.Base + " crust.";
}

function resetForm() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-county").val("");
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

        let pizzaPrice = 500
        if(inputtedSize === "large"){
            pizzaPrice = pizzaPrice + 800
        }  
        else if(inputtedSize === "medium"){
            pizzaPrice = pizzaPrice + 400
        }
        else {
            pizzaPrice = pizzaPrice
        };
        
        if(inputtedBase === "Glutten-free"){
            pizzaPrice = pizzaPrice + 300
        }
        else {
            pizzaPrice = pizzaPrice
        }

        $("ol#orders").append("<li><span class='orders'>" + newOrder.specs() + "<b> Cost is " + pizzaPrice + " </b>" + "</span></li>");
        
        console.log(pizzaPrice)


      
  
        $(".thumbnail").click(function(event) {
            event.preventDefault();
            let pizza = $(this).text();
        });
    
    
    }); 

});