import logo from "./logo.svg";
import "./App.css";
import Card from "./card";

function App() {
  const dataset = [
    {
      title: "Madhav",
      description: "he is react Developer",
      date: "2-12-2019",
    },
    { title: "daulat", description: "he is  Teacher", date: "2-12-2024" },
    {
      title: "Bhupendra",
      description: "he is react students",
      date: "2-12-2021",
    },
    {
      title: "Rohit",
      description: "he is react students",
      date: "2-12-2021",
    },
  ];
  return (
    <div className="App">
      <div>
        {/* {dataset.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          description={data.description}
          date={data.date}
        />
      ))} */}

        {dataset.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            date={data.date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
