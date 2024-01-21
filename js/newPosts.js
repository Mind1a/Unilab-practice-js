// Adding new posts

// some Users Data

const UserData = {
  userImg: "./assets/user-searchbar.svg",
  name: "Alan Patterson",
  time: () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours} hr and ${minutes} min`;
  },

  img: "./assets/upload3.jpeg",

  likeIcon: `<svg
      class="likeIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M17.3667 3.84172C16.941 3.41589 16.4357 3.0781 15.8795 2.84763C15.3232 2.61716 14.7271 2.49854 14.125 2.49854C13.5229 2.49854 12.9268 2.61716 12.3705 2.84763C11.8143 3.0781 11.309 3.41589 10.8833 3.84172L10 4.72506L9.11667 3.84172C8.25692 2.98198 7.09086 2.49898 5.875 2.49898C4.65914 2.49898 3.49308 2.98198 2.63333 3.84172C1.77359 4.70147 1.29059 5.86753 1.29059 7.08339C1.29059 8.29925 1.77359 9.46531 2.63333 10.3251L3.51667 11.2084L10 17.6917L16.4833 11.2084L17.3667 10.3251C17.7925 9.89943 18.1303 9.39407 18.3608 8.83785C18.5912 8.28164 18.7099 7.68546 18.7099 7.08339C18.7099 6.48132 18.5912 5.88514 18.3608 5.32893C18.1303 4.77271 17.7925 4.26735 17.3667 3.84172V3.84172Z"
        stroke="#303030"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`,
  commentIcon: ` <svg
      class="commentIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M17.5 9.58336C17.5029 10.6832 17.2459 11.7683 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6696 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7683 3.33047 10.6832 3.33333 9.58336C3.33384 8.26815 3.70051 6.97907 4.39227 5.86048C5.08402 4.7419 6.07355 3.838 7.25 3.25002C8.23176 2.75413 9.31678 2.49716 10.4167 2.50002H10.8333C12.5703 2.59585 14.2109 3.32899 15.441 4.55907C16.671 5.78915 17.4042 7.42973 17.5 9.16669V9.58336Z"
        stroke="#303030"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`,
  shareIcon: `<svg
      class="shareIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M15 6.66663C16.3807 6.66663 17.5 5.54734 17.5 4.16663C17.5 2.78591 16.3807 1.66663 15 1.66663C13.6193 1.66663 12.5 2.78591 12.5 4.16663C12.5 5.54734 13.6193 6.66663 15 6.66663Z"
        stroke="#303030"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
        stroke="#303030"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 18.3334C16.3807 18.3334 17.5 17.2141 17.5 15.8334C17.5 14.4527 16.3807 13.3334 15 13.3334C13.6193 13.3334 12.5 14.4527 12.5 15.8334C12.5 17.2141 13.6193 18.3334 15 18.3334Z"
        stroke="#303030"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.15833 11.2583L12.85 14.575"
        stroke="#303030"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.8417 5.42505L7.15833 8.74172"
        stroke="#303030"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`,

  link: "See more...",
};

// Get the Main container
const postForm = document.getElementById("postForm");

// Create Form Submit
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewPost();
});

// Add new post function
const addNewPost = () => {
  const userInput = document.getElementById("post_input").value;

  if (userInput === "") return;

  const newPostHTML = `
    <div class="user-post">
      <div class="user-info">
        <img src="${UserData.userImg}" alt="user" />
        <div>
          <h3 class="name">${UserData.name}</h3>
          <h4 class="time author">${UserData.time()}</h4>
        </div>
      </div>
      <div class="user-content">
        <p class="text">${userInput}</p>
        <img src=${UserData.img} alt="something">
      </div>
      <div class="additionals">
        <div class="icons">
          <span>${UserData.likeIcon}</span>
          <span>${UserData.commentIcon}</span>
          <span>${UserData.shareIcon}</span>
        </div>
        <a class="see-more" href="#">${UserData.link}</a>
      </div>
    </div>
  `;

  const postContainer = document.getElementById("postContainer");
  postContainer.insertAdjacentHTML("afterbegin", newPostHTML);

  document.getElementById("post_input").value = "";
};
