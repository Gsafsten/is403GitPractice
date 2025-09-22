// Interactive Pet Buttons
function petMe(petName) {
  alert(`You gave ${petName} some love! 🐾 They are so happy!`);
}

// Fun adopt button effect
document.getElementById("adoptBtn").addEventListener("click", () => {
  const pets = ["puppy 🐶", "kitten 🐱", "hamster 🐹", "parrot 🦜"];
  const randomPet = pets[Math.floor(Math.random() * pets.length)];
  alert(`Congrats! You’ve adopted a ${randomPet}! 🎉`);
});

