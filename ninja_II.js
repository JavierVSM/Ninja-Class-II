function ninja(name, health) {
    this.name = name;
    this.health = health;
    var speed=3;
    var strength=3;
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
    }
    this.showStats = function(){
        console.log("Name: "+ this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }
    this.drinkSake = function(){
      this.health = health+10;
    }
    this.punch = function(x){
        if (x instanceof ninja){
          x.health = x.health-5; 
          console.log (x.name+ " was punched by " +this.name+" and lost 5 Health!");
        }
        else{
          console.log ("Instances of Ninja ONLY")
        }      
    }
    this.kick = function(x){
      if (x instanceof ninja){
        let kick = strength*15;  
        x.health = x.health-kick; 
        console.log (x.name+ " was kicked by "+this.name + " Goemon and lost " +kick+" Health!");
      }
      else{
        console.log ("Instances of Ninja ONLY")
      }     
    }
    
}


//TEST

let memo="data";

var blueNinja = new ninja("Goemon",100);
var redNinja = new ninja("Bill Gates",100);

blueNinja.showStats();
redNinja.punch(blueNinja);
blueNinja.showStats();

redNinja.showStats();
blueNinja.kick(redNinja);
redNinja.showStats();

blueNinja.kick(memo);