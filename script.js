// Interactive Pet Buttons
function petMe(petName) {
  alert(`You gave ${petName} some love! 🐾 They are so happy and they are so happy to see you$`);
}

// This is a comment to practice pushing a change to the code
// Fun adopt button effect
document.getElementById("adoptBtn").addEventListener("click", () => {
  const pets = ["puppy 🐶", "kitten 🐱", "hamster 🐹", "parrot 🦜"];
  const randomPet = pets[Math.floor(Math.random() * pets.length)];
  alert(`Congrats! You’ve adopted a ${randomPet}! 🎉`);
});
