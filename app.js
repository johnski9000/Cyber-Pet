const nameButton = document.getElementById("namebutton");
const petName = document.getElementById("petname");
const input = document.getElementById("nameinput");
const petMood = document.getElementById("mood");
const petHunger = document.getElementById("hunger");
const petThirst = document.getElementById("thirst");
const petHealth = document.getElementById("health");
const play = document.getElementById("play");
const pet = document.getElementById("pet");
const feed = document.getElementById("feed");
const water = document.getElementById("water");
const petimg1 = document.getElementById("petimg")
const petimg2 = document.getElementById("petimgg")


play.addEventListener("click", () =>{
    play.style.visibility = "hidden";
    petStats = setInterval(() => {
    petThirst.value -= 2;
    petHunger.value -= 2;
    petMood.value -= 2.5;
    if (petThirst.value == 0 && petHunger.value == 0){
        petHealth.value -= 3
    }
    if (petHealth.value == 0){
        clearInterval(petStats);
        alert("GameOver, you let your pet die :(");
        window.location.reload();
    }
}, 200 );
})

feed.addEventListener("click", () => {
    petHunger.value += 6;
})
water.addEventListener("click", () => {
    petThirst.value += 6;
})
pet.addEventListener("click", () => {
    petMood.value += 6;
})

nameButton.addEventListener("click", () => {
    petName.textContent = input.value;
    input.value = "";
})

