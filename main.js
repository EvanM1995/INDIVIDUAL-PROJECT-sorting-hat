console.log("Gossip Girl");

const students = [

  {
    id: 1,
    name: "Harry Potter",
    imageUrl: "https://i2-prod.birminghammail.co.uk/incoming/article12678266.ece/ALTERNATES/s615b/ZCR_BEM_-020317bookday_12.jpg",
    house: "gryffindor",
  },

  {
    id: 2,
    name: "Blake Lively",
    imageUrl: "https://media.allure.com/photos/644bd97153e0085cb8e1fb63/16:9/pass/blake%20lively%20curly%20hair%20hero.jpg",
    house: "ravenclaw",
  },

  {
    id: 3,
    name: "Luke Skywalker",
    imageUrl: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1ymefwb_483d5487.jpeg?region=0%2C0%2C1200%2C675",
    house: "slytherin",
  },

  {
    id: 4,
    name: "Hermoine Granger",
    imageUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/3CDC/production/_94908551_minnieharrogatemildredhubble.jpg",
    house: "hufflepuff",
  },

  {
    id: 5,
    name: "Ginger Guy",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvpBMm3MALwvf85QZjCINUmT8qh4n2YZ7i8LpSnkLXC_CVpK1pmTetOPjYrE9sYzy3IQ&usqp=CAU",
    house: "slytherin",
  }

]; 



const app = document.querySelector("#app")

console.log(students)
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
  <img src=${student.imageUrl} class="card-img-top" alt=${student.name}>
  <div class="card-body">
    <p class="card-text">${student.name}</p>
    <p>House: ${student.house}</p>
  </div>
</div>`;
};

console.log("domString")
renderToDom("#app", domString);
};
cardsOnDom(students)

const filter = (array, studenthouse) => {
  const studentArray = [];
  for (const student of array) {
    if (student.house === studenthouse) {
      studentArray.push(student);
    };
  };

  return studentArray
};

const showAll = document.querySelector('#showall');
const gryfBtn = document.querySelector('#gryfbtn');
const huffBtn = document.querySelector('#huffbtn');
const ravBtn = document.querySelector('#ravbtn');
const slyBtn = document.querySelector('#slybtn');

showAll.addEventListener('click', () => {
  cardsOnDom(students);
});

gryfBtn.addEventListener('click', () => {
  const gryffindor = filter(students, 'gryffindor');
  cardsOnDom(gryffindor);
});

huffBtn.addEventListener('click', () => {
  const hufflepuff = filter(students, 'hufflepuff');
  cardsOnDom(hufflepuff);
});

ravBtn.addEventListener('click', () => {
  const ravenclaw = filter(students, 'ravenclaw');
  cardsOnDom(ravenclaw);
});

slyBtn.addEventListener('click', () => {
  const slytherin = filter(students, 'slytherin');
  cardsOnDom(slytherin);
});

const form = document.querySelector('form');

const createStudent = (e) => {
  e.preventDefault();

const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

const newStudentObj = {
  id: students.length + 1,
  name: document.querySelector("#name").value,
  house: houses[Math.floor(Math.random() * houses.length)],
  imageUrl: document.querySelector("#imageUrl").value,

}

students.push(newStudentObj);
cardsOnDom(students);
form.reset();

}

form.addEventListener('submit', createStudent);
