// import logo from "./logo.svg";
import "./App.css";
// import mobileimg from "./mobile1.png";
import t_image_1 from "./t-image1.png";
import t_image_2 from "./t-image-2.png";
import t_image_3 from "./t-image-3.png";
import t_image_4 from "./t-image-4.png";
import t_image_5 from "./t-image-5.png";
import Mobile from "./components/mobile";
import WebView from "./components/web";

function App() {
  const movie = {
    title: "The Ledge",
    season: 1,
    rating: 3,
    runtime: "86mins",
    genres: "Action",
    pg: "18+",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, mattis purus sed venenatis. Molestie non et lobortis in integer. Habitasse at ornare sit quam. Rhoncus, ac fermentum id et vulputate.",
    posterSource: "https://fzmovies.net/imdb_images/The.Ledge.2022.jpg",
  };
  const trendingMovies = [
    { title: "The Flash", imageSource: t_image_1 },
    { title: "Bob The Builder", imageSource: t_image_2 },
    { title: "Archer", imageSource: t_image_3 },
    { title: "Blade", imageSource: t_image_4 },
    { title: "Lion King", imageSource: t_image_5 },
  ];
  return (
    <div className="">
      {/* mobile */}
      <Mobile movie={movie} />
      {/* web */}
      <WebView trendingNow={trendingMovies} movie={movie} />
    </div>
  );
}

export default App;
