class Robbo {
    //Properties: these are values of the classes
    ver;
    width = 19;
    height = 199;
    #wt = 29; //for private properties, you should start with # like here #wt

    //constructor
    constructor(version){
        this.ver = version;
    }

    //Behaviour/methods
    //these are functions of classes, like wht they do....
    area(){
        console.log(this.width*this.height); //to access properties of class inside the class, you should make it object with this. 
    }
    #walk(){
        console.log("he is walking with ", this.#wt);
    }
    //getter
    get walk() {
        this.#walk();
    }

    //setter
    set thevalue(wtt) {
        this.#wt = wtt;
    }
    //!! you can remove get and set, they still wrks same but for readability purpose they are recommended to be there
}

let robot1 = new Robbo("13.3.8"); //here, we make an object with class
robot1.area();//object robot1 have access to all public properties and methods of class Robbo
console.log("The version of the Robot1 is ", robot1.ver );
// console.log(robot1.#wt);
// robot1.#walk();
//these above two can't be implemented as #walk() is private method and #walk is private property of class Robbo

//calling getter and setter
robot1.walk; //getting the private walk function through getter and calling it here
robot1.thevalue = 50; //changing the value of private property through setter
robot1.walk; //the change reflect in the private property through setter
