function Order(sauce, cheese, veg, base, size) {
    this.Sauce = sauce;
    this.Cheese = cheese;
    this.Veggy = veg;
    this.Base = base;
    this.Size = size;
}

Order.prototype.specs = function() {
    return this.Size + " sized " + this.Cheese + " pizza with " + this.Sauce + " sauce," + this.Veggy + " veggies, and a " + this.Base + " crust.";
}


$(document).ready(function() {
    
        
    $("#formSubmit").submit(function(event) {
        event.preventDefault();
        
        let inputtedSauce = $("[name='sauce']:checked").val();
        let inputtedVeggy = $("[name='veggy']:checked").val();
        let inputtedBase = $("[name='base']:checked").val();
        let inputtedSize = $("[name='grid']:checked").val();
        let inputtedRawMeat = $("[name='cheese']:checked").val().split(" ");
        let inputtedCheese = inputtedRawMeat[0];
        let pizzaPrice = parseInt(inputtedRawMeat[1]);
        
        let newOrder = new Order(inputtedSauce, inputtedCheese, inputtedVeggy, inputtedBase, inputtedSize);

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

        $("ol#orders").append("<li><span class='orders'>" + newOrder.specs() + "<b> Cost is " + " <span class='prices'>" + pizzaPrice + ",</span> " + " </b>" + "</span></li>");
        
        let priceArray1 = $("#orders .prices").text().split(",");
        console.log(priceArray1)
        let total = 0;
        for(let i = 0; i <= priceArray1.length-2; i = i+1){
            total = total + parseInt(priceArray1[i]);
            console.log(total)
        }

        $("#total h5").text("The total is: " + total);
    }); 

       


});