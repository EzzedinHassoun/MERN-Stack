class Ninja{

    constructor (name, health){
        this.name = name;
        this.health = health;
        this.speed =3;
        this.strength =3;
    }

    sayName(){
        console.log(`Hello, I'am ${this.name}!`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);

    }
    drinkSake(){
        this.health +=10;
    }
}

const ninja = new Ninja("Ezzedin", 100);

ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();
