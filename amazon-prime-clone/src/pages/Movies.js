import React from "react";
import VideoCard from "../components/VideoCard";
import "./Movies.css";

const Movies = () => {
  const movies = [
    {
      title: "American Psycho",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "Patrick Bateman, a wealthy investment banker, hides his psychopathic ego from his friends. Later, his illogical fantasies escalate and he submits to an uncontrollable bloodlust.",
    },
    {
      title: "Shutter Island",
      image:
        "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    },
    {
      title: "John Wick",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",
      description:
        "John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife.",
    },
    {
      title: "V",
      image:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/v-telugu-et00116384-04-11-2019-06-20-26.jpg",
      description:
        "A celebrated police officer's run of success is shockingly interrupted by V, a mysterious killer, who specifically challenges him to end his killing spree.",
    },
    {
      title: "Oppenheimer",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
      description:
        "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
    },
  ];
  const movies1 = [
    {
      title: "The Fall Guy",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA5ZjA3ZjMtMzg2ZC00ZDc4LTk3MTctYTE1ZTUzZDIzMjQyXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_FMjpg_UX1000_.jpg",
      description:
        "After leaving the business one year earlier, battle-scarred stuntman Colt Seavers springs back into action when the star of a big studio movie suddenly disappears. As the mystery surrounding the missing actor deepens, Colt soon finds himself ensnared in a sinister plot that pushes him to the edge of a fall more dangerous than any stunt.",
    },
    {
      title: "Godzilla x Kong: The New Empire",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWI2ZmE0MmYtM2ZmZS00OWY1LTg1YzctODczZGIzNDQwZDM2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      description:
        "Godzilla and the almighty Kong face a colossal threat hidden deep within the planet, challenging their very existence and the survival of the human race.",
    },
    {
      title: "Interstellar",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    {
      title: "Logan",
      image:
        "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
      description:
        "Logan comes out of retirement to escort a young mutant named Laura to a safe place. He meets with other mutants, who run from an evil corporation that has been experimenting with them, along the way.",
    },
    {
      title: "The Meg",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTAxMGRmODYtM2NkYS00ZGRlLWE1MWItYjI1MzIwNjQwN2RiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "When the members of an underwater research facility are under threat owing to a 75-foot prehistoric shark, Jonas Taylor, a deep-sea diver, is hired to save them.",
    },
  ];
  const movies2 = [
    {
      title: "La La Land",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
      description:
        "When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.",
    },
    {
      title: "The Curious Case of Benjamin Button",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzI4M2I1MTItYjdiYi00YTZhLTg0NDgtZWIzOGU5ZmM3NWZlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      description:
        "Benjamin Button, born in 1918 with the physical state of an elderly man, ages in reverse. He experiences love and break-ups, ecstasy and sorrow, and timelessness by the time he dies in 2003 as a baby.",
    },
    {
      title: "Titanic",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      description:
        "Rose, who is being forced to marry a wealthy man, falls in love with Jack, a talented artist, aboard the unsinkable Titanic. Unfortunately, the ship hits an iceberg, endangering their lives.",
    },
    {
      title: "The Fault in Our Stars",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      description:
        "Teenager Hazel Grace's life changes when she meets Augustus Waters at a cancer support group. The two then embark on a life-changing journey which brings them even closer.",
    },
    {
      title: "Edward Scissorhands",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/ad416bdc5aacc5c055cff3afc1e5fcd17df5e22cf8908bc49cc843bad65853a6.jpg",
      description:
        "Edward, a synthetic man with scissor hands, is taken in by Peg, a kindly Avon lady, after the passing of his inventor. Things take a turn for the worse when he is blamed for a crime he did not commit.",
    },
  ];

  const movies3 = [
    {
      title: "Charlie and the Chocolate Factory",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_FMjpg_UX1000_.jpg",
      description:
        "Charlie, a young boy from an impoverished family, and four other kids win a tour of an amazing chocolate factory run by an imaginative chocolatier, Willy Wonka, and his staff of Oompa-Loompas.",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
      description:
        "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.",
    },
    {
      title: "Fantasy Island",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWE2ODZhYWYtNTFiYy00MjdmLWIzZGEtNTkyOTc1NDIwMjk4XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
      description:
        "A mysterious man invites a group of lucky guests to his secretive resort to fulfil their darkest fantasies. However, when people start arriving, things take an unexpected turn.",
    },
    {
      title: "Beauty and the Beast",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_.jpg",
      description:
        "Belle embarks on a journey to save her father from a creature that has locked him in his dungeon. Eventually, she learns that the beast is an enchanted prince who has been cursed.",
    },
    {
      title: "Barbie",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      description:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    },
  ];

  return (
    <div className="movies-sec">
      <div className="side">
        <p className="genre">Thriller</p>
        <div className="movies">
          {movies.map((movie, index) => (
            <VideoCard key={index} {...movie} />
          ))}
        </div>
      </div>

      <div className="side">
        <p className="genre">Action</p>
        <div className="movies1">
          {movies1.map((movie, index) => (
            <VideoCard key={index} {...movie} />
          ))}
        </div>
      </div>

      <div className="side">
        <p className="genre">Romance</p>
        <div className="movies2">
          {movies2.map((movie, index) => (
            <VideoCard key={index} {...movie} />
          ))}
        </div>
      </div>

      <div className="side">
        <p className="genre">Fantasy</p>
        <div className="movies3">
          {movies3.map((movie, index) => (
            <VideoCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
