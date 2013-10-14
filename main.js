$(function() {

var outPutString="";
var bigItems=[];
var plateItems=[];
var bebidaItems=[];
var dessertItems=[];
var tableOne=[];
var menuCard=[];


// The desired input follows each parameter in parentheses:
// 
var Customer = function	(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}

// customer(s) (composed of a string)
Customer.prototype.toString = function () {
	return ("This person requires a " + aCustomer.dietaryPreference + " selection of foods.");
}



// The desired input follows each parameter in parentheses:
// 

var Restaurant = function (name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
}




// restaurant(s) (composed of different Menu)
Restaurant.prototype.toString = function (){
	outPutString = "At " + this.name + " we offer a number of " + this.description + " dishes from our "
	var menuNames = "";
	var menuItems = "";
	for(var i = 0; i < this.menu.length; i++ ) {
	    menuNames += this.menu[i].name + " ";
	    for (var j = 0; j < this.menu[i].plates.length; j++ ){
		menuItems += ((this.menu[i].plates[j].name) + "<br>");		
	    }
	}
	console.log ("*"+menuItems, menuNames);
	outPutString += menuNames + "<br>These include:<br>" + menuItems;
	return outPutString;
}

Restaurant.prototype.create = function (){
	var restDesc = "";
	restDesc = "<div class='restaurant_name'>{name}\n</div>".supplant(this);
	restDesc += "<div class ='restaurant_subheading'> Serving: </div>";
	for (var i = 0; i < this.menu.length; i++){
		restDesc += "<div class = 'restaurant_subheading'>" + this.menu[i].name + ' </div>';	
	}
	return restDesc;

}


// The desired input follows each parameter in parentheses:
// plates ([PlateItem])

var Menu = function (name,plates){
	this.name = name;
	this.plates = plates;
}



// menu(s) (composed of PlateItems, DrinkItems, and FoodItems)
Menu.prototype.toString = function (){
	var d = "";
	for (var i=0; i<(this.plates.length-1); i++){
		d += (" " + this.plates[i].name + ",");
	}
	d += (" and " + this.plates[i].name + "(s).");
	return "We serve excellent quality and modest portions of" + d;
}

Menu.prototype.create = function (){
	var variety = ""
	for (var i = 0; i<(this.plates.length); i++){
		var addOutput = ("<div class='food_item' id='food_item-" + (this.name+i) + "'><p>" + this.plates[i].name + "</p></div>");
		variety += addOutput
	}
	// variety += "<div class = 'food_item'>{name}</div>".supplant(this.plates[i])
	// var divTag = document.createElement("div");
	// divTag = "{name}".supplant(this.plates[i]);
	// // divTag.class = "food_item";
	// divTag.id = "div" + i;
	// divTag.innerHTML = this.name + i;
	// document.body.appendChild(divTag)
	return variety;
}




// The desired input follows each parameter in parentheses:
// plates (PlateItem)

var OrderItem = function (plates){
	this.plates = plates;
}

// orders/tickets (composed of PlateItems and DrinkItems)
OrderItem.prototype.toString = function (){
	var c = "";
	var cost = 0;
	console.log(this.plates);
	for (i=0; i<(this.plates.length-1); i++){
		c += (" " + this.plates[i].name);
		cost += this.plates[i].price;
	}
	c += (" and " + this.plates[i].name + " ");
	cost += this.plates[i].price;
	return "Your order of" + c + " is " + cost + " dollars.";
}


OrderItem.prototype.create = function(){
	var compileOrder = "";
	for (var i=0; i<this.plates.length; i++){ 
		compileOrder += '<div class = "food item">{name}</div>'.supplant(this.plates[i]);
	}
	return compileOrder;
}


// The desired input follows each parameter in parentheses:
// name (string), description (string), price (number), items ([FoodItem])

var PlateItem = function (name, description, price, items){
	this.name = name;
	this.description = description;
	this.price = price;
	this.items = items;
}

// plates/dishes (composed of foodItems)
PlateItem.prototype.toString = function (){
	var b = ""
	for (var i=0; i<this.items.length; i++){
		b += (", " + this.items[i].name);
	}
	return outPutString = "Our " + this.name + " are made with the finest ingredients which include" + b + ".";
}

// the following three functions assign dietary types to PlateItem
PlateItem.prototype.isVegan = function (){
	dietType = "A yummy dish of veggies."
	for (var i=0; i<this.items.length; i++){
		if (!this.items[i].vegan){
			dietType = "An omnivores dream!"
		}
	}
	return dietType;
}

PlateItem.prototype.isGlutenFree = function (){
	dietType = "Won't weigh ya down."
	for (var i=0; i<this.items.length; i++){
		if (!this.items[i].glutenFree){
			dietType = "Goes directly to your muffin-tops!"
		}
	}
	return dietType;
}

PlateItem.prototype.isCitrusFree = function (){
	dietType = "Won't cause indigestion."
	for (var i=0; i<this.items.length; i++){
		if (!this.items[i].citrusFree){
			dietType = "A recipe for reflux!"
		}
	}
	return dietType;
}

PlateItem.prototype.create = function (){
	return $("<div class='food_item'>#{name}</div>".supplant(this));
}




// The desired input follows each parameter in parentheses:
// name (string), description (string), items ([FoodItem])

var DrinkItem = function (name, description, items, price){
	this.name = name;
	this.description = description;
	this.items = items;
	this.price = price;
}

// drink (composed of FoodItems)
DrinkItem.prototype.toString = function (){
	var a = ""
	for (i=0; i<this.items.length; i++){
		a += (" " + this.items[i].name);
	}
	return outPutString = "Your " + this.name + "(s), a delicious, " + this.description + " drink that contains" + a + ".";
}

DrinkItem.prototype.create = function (){
	return $("<div class='food_item'>@{name}</div>".supplant(this))
}

// The desired input follows each parameter in parentheses:
// 			name (string), calories (number),
// 				vegan (boolean), glutenFree (boolean), citrusFree (boolean)

var FoodItem = function (name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}

// food (ingredients)
FoodItem.prototype.toString = function (){
	return outPutString = "Any " + this.name + "(s) in your diet contain " + this.calories + " calories.\nThe rumors that " + this.name + " are vegan are definitely " + this.vegan + ".\nThe rumors that " + this.name + " are gluten-free are definitely " + this.glutenFree + ".\nThe rumors that " + this.name + " are citrus-free are definitely " + this.citrusFree + ".";
}

FoodItem.prototype.create = function (){
	return $("<div class='food_item'>!{name}</div>".supplant(this));
}

FoodItem.prototype.addItem = function (){
	return console.log("hi");

}


var getMenu = function(name){
	if (name === "dinner "){
		var num = 0
	}
		else{
			if (name === "lunch  "){
				var num = 1;
			}
			else{
				var num = 2;
			}
		}	
	// name === "dinner " ? var num = 1 : (name === "lunch  " ? var num =2 : var num =3);
	return num;
};

var getItem = function(menu,index){
	var menuNum = getMenu(menu);
	console.log(haroldAndMaudes.menu[menuNum].plates[index].name)

}



// The following sections are all creating "output" string for each designated "object"-prototype






// This section consists of instantation(s) for the constructors created above

tequila = new FoodItem("booze",200,true,true,true);
avacado = new FoodItem("guac",750,true,true,true);
tomatoSauce = new FoodItem("gravy",125,true,true,true);
rat = new FoodItem("not so much rat",600,false,true,true);
beets = new FoodItem ("beets",250,true,true,true);
beef = new FoodItem ("steak",1250,false,true,true);
cake = new FoodItem ("twinkies",800,true,false,true);
lime = new FoodItem ("lime",50,true,true,false);
margarita = new DrinkItem ("margarita","tart",bebidaItems, 12);
burritoPlate = new PlateItem("flour-less burrito","uniquely wrapped in a lime-peel", 25,[]);
guacPlate = new PlateItem("Guacamole!","creamy and delicious",10,[avacado, tomatoSauce])
cassarole = new PlateItem ("hodge-podge","eat-with-a-fork",50,[]);
tableNum = new OrderItem ([cassarole, margarita]);
dinnerMenu = new Menu ("dinner ",menuCard);
lunchMenu = new Menu ("lunch  ",[cassarole,burritoPlate]);
dessertMenu = new Menu ("dessert",dessertItems);
haroldAndMaudes = new Restaurant ("Harold's \& Maude's", "Standard American Fare", [dinnerMenu, lunchMenu, dessertMenu]);
aCustomer = new Customer ("dairy free");



// This section adds instantiation objects to input items for additional constructors



dessertItems.push(cake);
dessertItems.push(lime);
bebidaItems.push(lime, tequila);
burritoPlate.items.push(avacado, tomatoSauce, rat, beef, lime);
cassarole.items.push(beets);
cassarole.items.push(beef);
tableOne.push(cassarole, margarita);
menuCard.push(beets, beef, cake, cassarole);
menuCard.push(burritoPlate);
menuCard.push(guacPlate);


// rename create calls to htmlString
var plateItemRend = burritoPlate.create();
var drinkItemRend = margarita.create();
var foodItemRend = beef.create();
var orderRend = tableNum.create();
var dinnerMenuRend = dinnerMenu.create();
var lunchMenuRend = lunchMenu.create();
var dessertMenuRend = dessertMenu.create();
var restaurantNameRend = haroldAndMaudes.create();
// console.log(tableNum.toString());
// console.log(e);
// $("p").append(b, c, d, e, f, g);

$("#restaurantName").append(restaurantNameRend);
$("#menuItems").append(dinnerMenuRend, lunchMenuRend, dessertMenuRend);
$("#menuName").append();

$(".food_item").on("click",function(){
	var menuIndexWhole = this.id;
	var menuIndexMenu = menuIndexWhole.slice(10,17);
	var menuIndexNo = menuIndexWhole.slice(17,18);
	getItem(menuIndexMenu,menuIndexNo);
});


});
