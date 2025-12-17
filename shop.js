const user = JSON.parse(localStorage.getItem("qbits_user"));
coins.textContent = "Coins: " + user.coins;

function buy() {
  if (user.coins < 10) {
    alert("Not enough coins!");
    return;
  }
  user.coins -= 10;
  localStorage.setItem("qbits_user", JSON.stringify(user));
  coins.textContent = "Coins: " + user.coins;
  alert("Purchased!");
}
