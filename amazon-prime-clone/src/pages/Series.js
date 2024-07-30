import React from "react";
import VideoCard from "../components/VideoCard";
import "./Series.css";

const Series = () => {
  const series = [
    {
      title: "Marry My Husband",
      image:
        "https://m.media-amazon.com/images/M/MV5BYWMxZTBlODQtMzAzNS00MGEwLThiM2EtZTdlN2NkMzQzMWNhXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_FMjpg_UX1000_.jpg",
      description:
        "When a woman witnesses the affair between her best friend and her husband, and is murdered by them, she goes back in time to change her future and seek revenge.",
    },
    {
      title: "Wildfire",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmRjZTUzMzEtM2I0Mi00MWM3LWJmN2UtNDNhOGQ5MTFjNjFkXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
      description:
        "A young woman, who serves time in a detention centre, gets the chance to start her life again at a horse ranch where she meets new people who change her perspective.",
    },
    {
      title: "My Man is Cupid",
      image: "https://i.mydramalist.com/0w0rz7_4f.jpg",
      description:
        "A love fairy inadvertently falls in love with a woman whose romantic partners always have a near-death experience.",
    },
    {
      title: "Flames",
      image:
        "https://m.media-amazon.com/images/M/MV5BYzBhY2M0MTEtYjI5Mi00MjZmLTg1NDgtMzRhOTAxNTM3YmZiXkEyXkFqcGdeQXVyMTExMTIzMTA5._V1_.jpg",
      description:
        "Rajat, the class topper, falls for Ishita, the new student in the tuition classes. Meanwhile, his best friends, Pandey and Anusha, begin to fall for each other transforming their friendship into love.",
    },
  ];

  const series1 = [
    {
      title: "Fallout",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjQ0YjAyNWQtMjRjMC00NzMxLTlkNjEtYWQzNmQwNGRlMGJkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      description:
        "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
    },
    {
      title: "The Boys",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_.jpg",
      description:
        "When it's the powerless against the super powerful, the Boys head out on a heroic quest to expose the truth about the Seven and Vought, the multibillion-dollar conglomerate that manages the superheroes and covers up their dirty secrets. Based on the comic book series of the same name.",
    },
    {
      title: "The Flash",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWE2ZWE5MDQtMTJlZi00MTVjLTkxOTgtNmNiYjg2NDIxN2NhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      description:
        "Barry Allen, a forensic investigator in Central City, gains the power of superhuman speed from a freak accident. He decides to use it to fight crime as the Flash, a costumed superhero.",
    },
    {
      title: "Prison Break",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_FMjpg_UX1000_.jpg",
      description:
        "Michael Scofield finds himself in the Ogygia Prison in Sana'a, Yemen, seven years after his apparent death. His friends, brother and fellow escapee do everything it takes to bring him home.",
    },
  ];

  const series2 = [
    {
      title: "The Vampire Diaries",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_.jpg",
      description:
        "On her first day at high school, Elena meets Stefan and immediately feels a connection with him. However, what she does not know is that Stefan and his brother, Damon, are in fact vampires.",
    },
    {
      title: "Alice in Borderland",
      image:
        "https://m.media-amazon.com/images/M/MV5BODI0OGIxM2MtZTQ0YS00ZjhhLWE3YzYtYzE2N2JkNThmY2RkXkEyXkFqcGdeQXVyODkzMzE0Nzc@._V1_FMjpg_UX1000_.jpg",
      description:
        "Obsessed gamer Arisu suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.",
    },
    {
      title: "The Wheel of Time",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjcyOTk2YmQtMTI3NS00MTM3LWIyZDgtZGJkMDk1YmE2ZDEwXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
      description:
        "Moiraine, a member of a magical organization, takes five young people on a journey, believing that one of them might be the reincarnation of the Dragon, a powerful individual prophesied to save the world or destroy it.",
    },
    {
      title: "My Lady Jane",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjk1OWJjOGEtZjgwOC00N2I2LThkNWYtNzk5N2Q1OGNiODUwXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
      description:
        "Lady Jane Grey and her husband Guildford live during the reign of Edward, son of Henry VIII. She unexpectedly finds herself crowned queen overnight and becomes the target of criminals who want her throne and her head.",
    },
  ];

  return (
    <div className="series-sec">
      <div className="side">
        <p className="genre">Romance</p>
        <div className="series">
          {series.map((movie, index) => (
            <VideoCard key={index} {...movie} />
          ))}
        </div>
      </div>

      <div className="side">
        <p className="genre">Action</p>
        <div className="series1">
          {series1.map((movie, index) => (
            <VideoCard key={index} {...movie} />
          ))}
        </div>
      </div>

      <div className="side">
        <p className="genre">Fantasy</p>
        <div className="series2">
          {series2.map((movie, index) => (
            <VideoCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
