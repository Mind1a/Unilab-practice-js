// Popup Toggle

const userProfile = document.querySelector(".user_profile");
const popupToggle = document.querySelector(".user_popup");

userProfile.addEventListener("click", () => {
  popupToggle.classList.toggle("showPopup");
});

// for remove popup

document.addEventListener("click", (event) => {
  const insidePopup = popupToggle.contains(event.target);
  const insideUserProfile = userProfile.contains(event.target);

  if (!insidePopup && !insideUserProfile) {
    popupToggle.classList.remove("showPopup");
  }
});
