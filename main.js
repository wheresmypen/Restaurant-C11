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
};



// The desired input follows each parameter in parentheses:
// 

var Restaurant = function (name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
};


// The desired input follows each parameter in parentheses:
// plates ([PlateItem])

var Menu = function (name,plates){
	this.name = name;
	this.plates = plates;
};


// The desired input follows each parameter in parentheses:
// plates (PlateItem)

var OrderItem = function (plates){
	this.plates = plates;
};


// The desired input follows each parameter in parentheses:
// name (string), description (string), price (number), items ([FoodItem])

var PlateItem = function (name, description, price, items){
	this.name = name;
	this.description = description;
	this.price = price;
	this.items = items;
};


// The desired input follows each parameter in parentheses:
// name (string), description (string), items ([FoodItem])

var DrinkItem = function (name, description, items){
	this.name = name;
	this.description = description;
	this.items = items;
};


// The desired input follows each parameter in parentheses:
// 			name (string), calories (number),
// 				vegan (boolean), glutenFree (boolean), citrusFree (boolean)

var FoodItem = function (name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};



// The following sections are all creating "output" string for each designated "object"-prototype


// food (ingredients)
FoodItem.prototype.toString = function (){
	outPutString = "Any " + this.name + "(s) in your diet contain " + this.calories + " calories.\nThe rumors that " + this.name + " are vegan are definitely " + this.vegan + ".\nThe rumors that " + this.name + " are gluten-free are definitely " + this.glutenFree + ".\nThe rumors that " + this.name + " are citrus-free are definitely " + this.citrusFree + ".";
	return (outPutString);
};

// drink (composed of FoodItems)
DrinkItem.prototype.toString = function (){
	var a = ""
	for (i=0; i<this.items.length; i++){
		a += (" " + this.items[i].objName);
	}
	outPutString = "Your " + this.name + "(s), a delicious, " + this.description + " drink that contains" + a + ".";
	return (outPutString);
};

// plates/dishes (composed of foodItems)
PlateItem.prototype.toString = function (){
	var b = ""
	for (i=0; i<this.items.length; i++){
		b += (" " + this.items[i].objName);
	}
	outPutString = "Our " + this.name + " are made with the finest ingredients, including" + b + ".";
	return (outPutString);
}

// orders/tickets (composed of PlateItems and DrinkItems)
OrderItem.prototype.toString = function (){
	var c = "";
	var cost = 0;
	for (i=0; i<(this.plates.length-1); i++){
		c += (" " + this.plates[i].name);
		cost += this.plates[i].price;
		console.log(cost)
	}
	c += (" and " + this.plates[i].name + " ");
	outPutString = "Your order of" + c + " is " + cost + " dollars.";
	return (outPutString);
};

// menu(s) (composed of PlateItems, DrinkItems, and FoodItems)
Menu.prototype.toString = function (){
	var d = "";
	for (i=0; i<(this.plates.length-1); i++){
		d += (" " + this.plates[i].name + ",");
	}
	d += (" and " + this.plates[i].name + "(s).");
	outPutString = "We serve excellent quality and modest portions of" + d;
	return (outPutString);
};

// restaurant(s) (composed of different Menu)
Restaurant.prototype.toString = function (){
	return ("We have a wide selection of items from our " + haroldAndMaudes.menu[0] + ", " + haroldAndMaudes.menu[1] + ", and " + haroldAndMaudes.menu[2] + " menus.")
};


// This section consists of instantation(s) for the constructors created above

beets = new FoodItem ("beets",250,true,true,true);
beef = new FoodItem ("steak",1250,false,true,true);
cake = new FoodItem ("twinkies",800,false,false,true);
lime = new FoodItem ("lime",50,true,false,false);
daquari = new DrinkItem ("daquari","fruity",bebidaItems);
cassarole = new PlateItem ("hodge-podge","eat-with-a-fork",50,[]);
cornerTable = new OrderItem (tableOne);
dinnerMenu = new Menu ("dinner",menuCard);
lunchMenu = new Menu ("lunch",[cassarole,beef]);
dessertMenu = new Menu ("dessert",dessertItems);
haroldAndMaudes = new Restaurant ("Harold's \& Maude's", "Standard American Fare", [dinnerMenu.name, lunchMenu.name, dessertMenu.name]);



// This section adds instantiation objects to input items for additional constructors


dessertItems.push(cake);
dessertItems.push(lime);
bebidaItems.push(lime);
bebidaItems.push(cake);
cassarole.items.push(beets);
cassarole.items.push(beef);
tableOne.push(cassarole);
tableOne.push(daquari);
menuCard.push(beets);
menuCard.push(beef);
menuCard.push(cake);
menuCard.push(daquari);
menuCard.push(cassarole);

console.log(haroldAndMaudes.toString());

});
