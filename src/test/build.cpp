#include <iostream>
#include <string>
#include <thread>
#include <chrono>
#include <vector>
#include <random>

class Brain {
private:
	std::string state;
	float energy;
	std::vector<std::string> ideas;

	void drinkCoffee() {
		std::cout << "Drinking coffee ☕️..." << std::endl;
		energy += 0.3f;
	}

	void rest() {
		std::cout << "Taking a short nap 💤..." << std::endl;
		energy = 1.0f;
	}

	void playLofi() {
		std::cout << "Listening to lofi 🎶..." << std::endl;
		energy += 0.2f;
	}

	void generateIdea() {
		if (energy > 0.5f) {
			ideas.push_back("💡 New idea from void.");
			std::cout << "Generated: " << ideas.back() << std::endl;
		} else {
			std::cerr << "Insufficient energy to generate idea..." << std::endl;
			drinkCoffee();
		}
	}

public:
	Brain(std::string initState = "undefined") : state(initState), energy(0.5f) {}

	void setState(const std::string& newState) {
		state = newState;
	}

	void think() {
		if (state == "empty") {
			drinkCoffee();
		} else if (state == "tired") {
			rest();
		} else if (state == "stressed") {
			playLofi();
		} else if (state == "motivated") {
			generateIdea();
		} else {
			std::cout << "[???] Undefined mental state. Defaulting to lofi." << std::endl;
			playLofi();
		}
	}
};

int main() {
	Brain brain("empty");

	for (int i = 0; i < 5; ++i) {
		brain.think();
		std::this_thread::sleep_for(std::chrono::seconds(2));
	}

	return 0;
}
