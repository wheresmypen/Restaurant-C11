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
	return outPutString = "Any " + this.name + "(s) in your diet contain " + this.calories + " calories.\nThe rumors that " + this.name + " are vegan are definitely " + this.vegan + ".\nThe rumors that " + this.name + " are gluten-free are definitely " + this.glutenFree + ".\nThe rumors that " + this.name + " are citrus-free are definitely " + this.citrusFree + ".";
};

// drink (composed of FoodItems)
DrinkItem.prototype.toString = function (){
	var a = ""
	for (i=0; i<this.items.length; i++){
		a += (" " + this.items[i].name);
	};
	return outPutString = "Your " + this.name + "(s), a delicious, " + this.description + " drink that contains" + a + ".";
};

// plates/dishes (composed of foodItems)
PlateItem.prototype.toString = function (){
	var b = ""
	for (i=0; i<this.items.length; i++){
		b += (", " + this.items[i].name);
	};
	return outPutString = "Our " + this.name + " are made with the finest ingredients which include" + b + ".";
};

// the following three functions assign dietary types to PlateItem
PlateItem.prototype.isVegan = function (){
	dietType = "A yummy dish of veggies."
	for (i=0; i<this.items.length; i++){
		if (!this.items[i].vegan){
			dietType = "An omnivores dream!"
		};
	};
	return dietType;
};

PlateItem.prototype.isGlutenFree = function (){
	dietType = "Won't weigh ya down."
	for (i=0; i<this.items.length; i++){
		if (!this.items[i].glutenFree){
			dietType = "Goes directly to your muffin-tops!"
		};
	};
	return dietType;
};

PlateItem.prototype.isCitrusFree = function (){
	dietType = "Won't cause indigestion."
	for (i=0; i<this.items.length; i++){
		if (!this.items[i].citrusFree){
			dietType = "A recipe for reflux!"
		};
	};
	return dietType;
};

// orders/tickets (composed of PlateItems and DrinkItems)
OrderItem.prototype.toString = function (){
	var c = "";
	var cost = 0;
	for (i=0; i<(this.plates.length-1); i++){
		c += (" " + this.plates[i].name);
		cost += this.plates[i].price;
		console.log(cost)
	};
	c += (" and " + this.plates[i].name + " ");
	return "Your order of" + c + " is " + cost + " dollars.";
};

// menu(s) (composed of PlateItems, DrinkItems, and FoodItems)
Menu.prototype.toString = function (){
	var d = "";
	for (i=0; i<(this.plates.length-1); i++){
		d += (" " + this.plates[i].name + ",");
	};
	d += (" and " + this.plates[i].name + "(s).");
	return "We serve excellent quality and modest portions of" + d;
};

// restaurant(s) (composed of different Menu)
Restaurant.prototype.toString = function (){
	outPutString = ("At " + haroldAndMaudes.name + " we offer a number of " + haroldAndMaudes.description + " dishes from our " + haroldAndMaudes.menu[0].name + ", " + haroldAndMaudes.menu[1].name + ", and " + haroldAndMaudes.menu[2].name + " menus.\n")
	outPutString += ("These include:\n");
	for (i=0; i<3; i++) {
		for (j=0; j<haroldAndMaudes.menu[i].plates.length; j++){
			outPutString += ((haroldAndMaudes.menu[i].plates[j].name) + "\n");
		};
	};
	return outPutString;
};

// customer(s) (composed of a string)
Customer.prototype.toString = function () {
	return ("This person requires a " + aCustomer.dietaryPreference + " selection of foods.");
};


// This section consists of instantation(s) for the constructors created above

tequila = new FoodItem("booze",200,true,true,true);
avacado = new FoodItem("guac",750,true,true,true);
tomatoSauce = new FoodItem("gravy",125,true,true,true);
rat = new FoodItem("not so much rat",600,false,true,true);
beets = new FoodItem ("beets",250,true,true,true);
beef = new FoodItem ("steak",1250,false,true,true);
cake = new FoodItem ("twinkies",800,true,false,true);
lime = new FoodItem ("lime",50,true,true,false);
margarita = new DrinkItem ("margarita","tart",bebidaItems);
burritoPlate = new PlateItem("flour-less burrito","uniquely wrapped in a lime-peel", 25,[]);
guacPlate = new PlateItem("Guacamole!","creamy and delicious",10,[avacado, tomatoSauce])
cassarole = new PlateItem ("hodge-podge","eat-with-a-fork",50,[]);
cornerTable = new OrderItem (tableOne);
dinnerMenu = new Menu ("dinner",menuCard);
lunchMenu = new Menu ("lunch",[cassarole,burritoPlate]);
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
tableOne.push(cassarole);
tableOne.push(margarita);
menuCard.push(beets, beef, cake, cassarole);
menuCard.push(burritoPlate);
menuCard.push(guacPlate);

console.log(haroldAndMaudes.toString());

});
