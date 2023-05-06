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
    name: "Hermoine Granger",
    imageUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/3CDC/production/_94908551_minnieharrogatemildredhubble.jpg",
    house: "hufflepuff",
  },

  {
    id: 4,
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
    domString += `<div class="card" id="${student.name}" style="width: 18rem;">
    <img src=${student.imageUrl} class="card-img-top" alt=${student.name}>
    <div class="card-body">
    <p class="card-text">${student.name}</p>
    <p>House: ${student.house}</p>
    <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
    </div>
    </div>`;
  };
  
  console.log("domString")
  renderToDom("#firstyear", domString);
};
cardsOnDom(students)

// create function
// listens for click event
// on click remove student.name element and append to container 2
// const expelBtn = document.querySelector('#expel');
// const firstYear = document.querySelector('#firstyear');
// expelBtn.addEventListener('click', (e) => {
//   console.log('>>> e.target.id >>> ', e.target.id);
//   const element = document.getElementById("#students");
//   element.remove();
// })






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


app.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = students.findIndex(e => e.id === Number(id));
    students.splice(index, 1);
    cardsOnDom(students);
  }
});

const startApp = () => {
  cardsOnDom(students);
}
