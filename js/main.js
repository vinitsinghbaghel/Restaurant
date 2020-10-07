// Local Reviews
const reviews = [
    {
      id: 1,
      name: "Sanjeev Kapoor",
      job: "CEO, Khana Khajana",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
      "Visited as a guest in the Echo restaurant for lunch just today.We were entertaining friends from California, and enjoyed our ocean side table.We chose to stay indoors - to enjoy the air conditioning.",
    },
    {
      id: 2,
      name: "Emma Watson",
      job: "CTO, XYZ Company",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "We had lunch here a few times while on the island visiting family and friends. The servers here are just wonderful and have great memories it seems.",
    },
    {
      id: 3,
      name: "Felicity Smoke",
      job: "Intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "The beach views, calm ocean and ability to watch the sunset on our patio were highlights of the trip! The hotel restaurant was exceptional, not only because every meal we enjoyed had a variety of options and was flavorful but also because the prices were so reasonable",
    },
    {
      id: 4,
      name: "Oliver Queen",
      job: "Owner, ABC Company",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "I had lunch with some of my colleagues at Echo on Day 1. I had the wedge salad - it was delicious. On Night 2, I enjoyed a drink at the bar. I had a Margarita. The service was excellent. ",
    },
  ];

//   Selecting items
const image = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const comment = document.getElementById("comment");

const prevBtn = document.querySelector(".prev-btn");
const nxtBtn = document.querySelector(".next-btn");

// Starting item
let currentItem = 0;

// After selecting item, next items
window.addEventListener("DOMContentLoaded", function(){
    const item = reviews[currentItem];
    image.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    comment.textContent = item.text;
});

// Show People based on item
function showPeople(people){
    const item = reviews[people];
    image.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    comment.textContent = item.text;
}

// Show next person
nxtBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPeople(currentItem);
});

// Previous Person
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPeople(currentItem);
});