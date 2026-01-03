class Robot {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }
}

const r0 = new Robot("some robot");
r0.move();

class Weapon {
  constructor(description) {
    this.description = description;
  }

  fire() {
    console.log(`${this.description} is firing`);
  }
}

const w0 = new Weapon("laser");
w0.fire();

class CombatRobot extends Robot {
  constructor(name) {
    super(name);
    this.weapons = [];
  }

  addWeapons(w) {
    this.weapons.push(w);
  }

  fire() {
    console.log("firing all weapons");
    this.weapons.forEach((element) => {
      element.fire();
    });
  }
}

const r1 = new CombatRobot("some combat robot");
r1.addWeapons(w0);
r1.move();
r1.fire();

Robot.prototype.fly = function () {
  console.log(`${this.name} is flying`);
};

r1.fly();

//  implementați următoarea structură de tipuri. Software este un tip care are metoda 'run'. Browser moștenește Software și poate adăuga și instala Plugin. Un Browser poate avea multiple Plugin.

class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running`);
  }
}

class Plugin {
  constructor(name) {
    this.name = name;
  }

  // metoda pe care o va apela browserul cand ruleaza
  load() {
    console.log(`plugin ${this.name} is loaded`);
  }
}

class Browser extends Software {
  constructor(name) {
    // apelez constructorul parinte
    super(name);
    // initializez o lista goala pentru plugin-uri
    this.plugins = [];
  }

  installPlugin(plugin) {
    this.plugins.push(plugin);
  }

  // suprascriu metoda run pentru a incarca si plugin-urile
  run() {
    // execut logica de baza din clasa parinte
    super.run();

    console.log("loading plugins...");
    this.plugins.forEach((plugin) => {
      plugin.load();
    });
  }
}

// Testare
// creez cateva plugin-uri
const adBlock = new Plugin("AdBlock");
const reactDevTools = new Plugin("React DevTools");

// creez un browser
const chrome = new Browser("Chrome");

// instalez plugin-urile
chrome.installPlugin(adBlock);
chrome.installPlugin(reactDevTools);

// rulez browserul
chrome.run();
