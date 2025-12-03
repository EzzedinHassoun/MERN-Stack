class Card{
    constructor(name, cost){
    this.name=name;
    this.cost=cost;
    } 
}

class Unit extends Card{

        constructor(name, cost,power,resilience){
        super(name,cost);
        this.power=power;
        this.resilience=resilience;
    }
    attack(target){
        if(target instanceof Unit){
            target.resilience=target.resilience-this.power;
        }else{
            throw new Error("Target must be unit!")
        }
    }
}

class Effect extends Card{
    
        constructor(name, cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
        play(target){
        if(target instanceof Unit){
            if(this.stat== "resilience"){
               target.resilience = target.resilience + this.magnitude;
            }else{
               target.power= target.power+this.magnitude;
            }
        }else{
            throw new Error("Target must be unit!")
        }
    }
}

const RedBeltNinja= new Unit("RedBeltNinja", 3 , 3 , 4);
const blackBeltNinja= new Unit("blackBeltNinja", 4 , 5 , 4);



// For assignment {It's Time to Duel}
const HardAlgorithm= new Effect("HardAlgorithm", 2 , "increase targets resilience by 3" , "resilience",3);
const UnhandledPromiseRejection= new Effect("UnhandledPromiseRejection", 1 , "reduce targets resilience by 2" , "resilience",-2);
const PairProgramming= new Effect("PairProgramming", 3 , "increase targets power by 2" , "power",2);


console.log(RedBeltNinja);
HardAlgorithm.play(RedBeltNinja);
UnhandledPromiseRejection.play(RedBeltNinja);
console.log(RedBeltNinja);
console.log(blackBeltNinja);
RedBeltNinja.attack(blackBeltNinja);
PairProgramming.play(blackBeltNinja);
console.log(blackBeltNinja);