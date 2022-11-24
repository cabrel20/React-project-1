import React from "react";
import CardItem from "./Components/CardItem";
import Card from "./Components/Card/Card";

const textTable = [
  {
    id: 1,
    title: "Do I have to allow the use of cookes?",
    text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "What is BankID?",
    text: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Whose birth number can I use?",
    text: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
];

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Card className="bg-white  text-gray-700 rounded-sm  mx-lg-1 p-4 mt-8  ">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <h1 className="text-2xl my-lg-5">
                Questions And Answers About Login
              </h1>
            </div>
            <div className="col-lg-8 col-12 col-md-8 px-lg-3">
              {textTable.map((text) => (
                <CardItem title={text.title} text={text.text} />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default App;
