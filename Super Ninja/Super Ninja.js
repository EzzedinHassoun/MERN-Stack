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
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, strength: ${this.strength}`);

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


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed =10;
        this.strength =10;
        this.wisdom=10;
    }

    speakWisdom(){
        this.drinkSake(); 
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

}
const sensei = new Sensei("Master Splinter");
sensei.speakWisdom();
sensei.showStats();