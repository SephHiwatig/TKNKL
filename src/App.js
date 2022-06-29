import Nav from "./components/Navigation/Nav";
import Bio from "./components/Home/Bio";
import TattooPortfolio from "./components/TattooPortfolio/TattooPortfolio";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function App() {
  const imgs = importAll(
    require.context("./assets/tattoos", false, /\.(png|jpe?g|svg)$/)
  );

  const images = [];

  for (let i = 1; i <= Object.keys(imgs).length; i++) {
    if (imgs[`tat${i}.jpg`]) {
      images.push({
        src: imgs[`tat${i}.jpg`],
        thumbnail: imgs[`tat${i}.jpg`],
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        // tags: [
        //   { value: "Ocean", title: "Ocean" },
        //   { value: "People", title: "People" },
        // ],
        // caption: "Boats (Jeshu John - designerspics.com)",
      });
    }
  }

  const artImgs = importAll(
    require.context("./assets/arts", false, /\.(png|jpe?g|svg)$/)
  );

  const arts = [];

  for (let i = 1; i <= Object.keys(artImgs).length; i++) {
    if (artImgs[`art${i}.jpg`]) {
      arts.push({
        src: artImgs[`art${i}.jpg`],
        thumbnail: artImgs[`art${i}.jpg`],
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        // tags: [
        //   { value: "Ocean", title: "Ocean" },
        //   { value: "People", title: "People" },
        // ],
        // caption: "Boats (Jeshu John - designerspics.com)",
      });
    }
  }

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact render={(props) => <Footer home={true}/>}></Route>
        <Route
          path="/TattooPortfolio"
          render={(props) => (
            <TattooPortfolio imgs={images} title={"Tattoos"} />
          )}
        ></Route>
        <Route
          path="/Arts"
          render={(props) => <TattooPortfolio imgs={arts} title={"Artworks"} />}
        ></Route>
        <Route path="/Booking" exact render={(props) => <Booking />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
