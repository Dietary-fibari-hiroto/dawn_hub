class Mind {
  constructor(state) {
    this.state = state || "undefined";
    this.energy = Math.random();
    this.ideas = [];
  }

  generateIdea() {
    if (this.energy > 0.5) {
      this.ideas.push("💡 New idea!");
      console.log("Idea generated:", this.ideas[this.ideas.length - 1]);
    } else {
      console.warn("Not enough energy to generate ideas...");
      this.recharge();
    }
  }

  recharge() {
    console.log("Recharging with ☕️...");
    this.energy += 0.3;
    drink("coffee");
  }

  relax() {
    console.log("Activating lofi mode...");
    play("lofi chill beats");
    this.energy += 0.2;
  }

  rest() {
    console.log("Zzz... taking a short nap 💤");
    this.energy = 1.0;
  }
  
  tired() {
    console.log("It's okay you're doing well...");
    play("lofi chill beats");
    this.energy += 0.2;
  }

  process() {
    switch (this.state) {
      case "empty":
        this.recharge();
        break;
      case "tired":
        this.rest();
        break;
      case "stressed":
        this.relax();
        break;
      case "motivated":
        this.generateIdea();
        break;
      default:
        console.log("Floating in undefined state of mind...");
        this.relax();
        break;
    }
  }
}

function drink(beverage) {
  console.log(`Drinking ${beverage}...`);
}

function play(track) {
  console.log(`Now playing: ${track}`);
}

// ----- Usage -----
const currentMood = new Mind("empty");
setInterval(() => {
  currentMood.process();
}, 3000);
