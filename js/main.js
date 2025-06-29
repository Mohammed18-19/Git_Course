// Define a user object
const user = {
  name: "Mohamed Aintomar",
  age: 20,
  location: "Morocco",
  skills: ["Python", "Git", "PostgreSQL", "Pandas"],
  interests: ["Programming", "Fitness", "Travel", "Business"],
  education: {
    currentStatus: "Student",
    goal: "Work at Google or Microsoft"
  }
};

// Function to greet the user
function greetUser(user) {
  console.log(`Hello, ${user.name}!`);
  console.log(`You are ${user.age} years old and live in ${user.location}.`);
  console.log(`Your top skill is: ${user.skills[0]}. Keep it up!`);
  console.log(`Goal: ${user.education.goal}`);
}

// Call the function
greetUser(user);
