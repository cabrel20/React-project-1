import React, { useState } from "react";
import CardItem from "./Components/CardItem";
import Card from "./Components/Card/Card";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Persons = [
  {
    id: 1,
    name: "Susan pedro",
    profession: "Web Developper",
    description:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    id: 2,
    name: "Peter Jon",
    profession: "Intern",
    description:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 3,
    name: "Bill Anderson",
    profession: "The boss",
    description:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Anna Johnson",
    profession: "Web Designer",
    description:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  },
];

function App() {
  document.getElementById("body").classList = "w-full h-full bg-blue-100";
  let [people, setPeople] = useState(0);

  const ramdomPersonHandler = () => {
    setPeople((people = Math.floor(Math.random() * 4 + 0)));
  };

  const nextPeopleHandler = () => {
    setPeople(() => {
      if (people === Persons.length) {
        return (people = 0);
      } else {
        return people++;
      }
    });
  };

  const prevPeopleHandler = () => {
    if (people <= 0) {
      setPeople(Persons.length - 1);
    } else {
      setPeople((people = people - 1));
    }
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-5xl text-gray-600">Our Riview</h1>
        <div className="border-b-4 border-blue-400 w-28 mt-2"></div>
      </div>

      <Card className="bg-white mx-96 rounded-lg  shadow-lg my-8 p-8 flex flex-col items-center">
        <CardItem
          name={Persons[people].name}
          img={Persons[people].img}
          profession={Persons[people].profession}
          description={Persons[people].description}
        />
        <div className="flex flex-row w-20 justify-around  mb-1">
          <button onClick={prevPeopleHandler} className="p-2">
            <FcPrevious size={30} />
          </button>
          <button onClick={nextPeopleHandler} className="p-2">
            <FcNext size={30} />
          </button>
        </div>
        <button
          onClick={ramdomPersonHandler}
          className="bg-blue-400 text-white p-2 rounded-lg"
        >
          Surprise Me
        </button>
      </Card>
    </React.Fragment>
  );
}

export default App;
