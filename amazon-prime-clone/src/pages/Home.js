import React from "react";
import VideoCard from "../components/VideoCard";
import "./Home.css";

const Home = () => {
  const videos = [
    {
      title: "Godzilla: King of the Monsters",
      image:
        "https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      description:
        "A legendary monster named King Ghidorah awakens Rodan, as well as other titans, to destroy the world. To defeat them, the crypto-zoological organisation Monarch must rely on the almighty Godzilla.",
    },
    {
      title: "Fight Club",
      image:
        "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      description:
        "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
    },
    {
      title: "Game of Thrones",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      description:
        "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.",
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
      description:
        "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.",
    },
    {
      title: "The Originals",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDllZjc2NjEtOGMwZS00ZmNkLTg2NDgtZjJkYjg0YjMxM2FmXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg",
      description:
        "The Original family of vampires settle down in the city of New Orleans that they helped to construct several decades ago. They encounter old buddies and confront new foes.",
    },
    {
      title: "Shutter Island",
      image:
        "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    },
    {
      title: "The Boys",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_.jpg",
      description:
        "When it's the powerless against the super powerful, the Boys head out on a heroic quest to expose the truth about the Seven and Vought, the multibillion-dollar conglomerate that manages the superheroes and covers up their dirty secrets. Based on the comic book series of the same name.",
    },
    {
      title: "Death's Game",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/36/Death%27s_Game_poster.jpg",
      description:
        "Faced with a series of failures, a man contemplates suicide. However, he must experience death several times in other lives to have another chance to survive.",
    },
  ];

  return (
    <div className="home">
      <div className="hero-section">
        {/* <div className="hero-content">
          <h1>Welcome to Amazon Prime</h1>
          <p>Enjoy unlimited streaming of movies and TV shows.</p>
        </div> */}
        <video autoPlay loop muted className="background-video">
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-section">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Home;
