import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const imgArray = [
    "https://wallpapers.com/images/hd/jerry-garcia-performing-live-znlorlzmrru3n51f.jpg",
    "https://deadimages.com/files/styles/x-large/public/photos/deadimages_com-bob_weir_-_june_27_1987_-_east_troy__0.jpg?itok=O4iy4fv3",
    "https://deadimages.com/files/styles/x-large/public/photos/deadimages_com-phil_lesh_-_august_15_1987_-_telluride_co_0.jpg?itok=dvoOuZ5F",
    "https://www.rollingstone.com/wp-content/uploads/2022/01/Bill-Kreutzmann.jpg",
    "https://media.gettyimages.com/id/74287788/photo/the-grateful-dead-in-san-francisco.jpg?s=612x612&w=gi&k=20&c=RK_OK43lw5CVLIPzUhK2R69eyDostUxhH9vBLBvFU_k=",
  ];

  const subtitle = [
    "Lead Guitar & Vocals",
    "Rhythm Guitar & Vocals",
    "Bass Guitar & Vocals",
    "Drums & Percussion",
    "Drums & Percussion",
  ];

  const description = [
    "Jerry Garcia, the iconic frontman, known for his improvisational guitar solos and distinctive voice.",
    "Bob Weir, rhythm guitarist and vocalist, contributing complex chords and vocal harmonies.",
    "Phil Lesh, bassist and vocalist, famous for melodic basslines and adventurous improvisations.",
    "Bill Kreutzmann, drummer, providing the foundation with innovative percussion patterns.",
    "Mickey Hart, drummer and percussionist, bringing global rhythms and experimental sounds to the band.",
  ];

  const entries = [
    "Jerry Garcia",
    "Bob Weir",
    "Phil Lesh",
    "Bill Kreutzmann",
    "Mickey Hart",
  ];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        The Grateful Dead
      </h1>
      <div className="flex card-section">
        {entries.map((entry, index) => (
          <Card
            key={index}
            image={imgArray[index]}
            title={entry}
            subtitle={subtitle[index]}
            description={description[index]}
          />
        ))}
      </div>
    </>
  );
}

export default App;
