import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Texts from "./Pages/Texts/Texts";
import Colors from "./Pages/Colors/Colors";
import TextCounter from "./Pages/Texts/TextCounter";
import TextComparator from "./Pages/Texts/TextComparator";
import Notfound from "./Components/Notfound/Notfound";
import Images from "./Pages/Images/Images";
import ImageCircleCrop from "./Pages/Images/ImageCrop/ImageCircleCrop";
import ImageSquareCrop from "./Pages/Images/ImageCrop/ImageSquareCrop";
import ColorPicker from "./Pages/Colors/ColorsTools/ColorPicker";
import RandomColor from "./Pages/Colors/ColorsTools/RandomColor";
import FavoriteColor from "./Pages/Colors/ColorsTools/FavoriteColor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Home />} />

          {/* Here are the routes for Texts */}
          <Route path="/texts" element={<Texts />} />
          <Route path="/texts/text-counter" element={<TextCounter />} />
          <Route path="/texts/text-comparator" element={<TextComparator />} />

          {/* Here are the routes for Images */}
          <Route path="/image-tools" element={<Images />} />
          <Route path="/image/circle-crop" element={<ImageCircleCrop />} />
          <Route path="/images/images-crop" element={<ImageSquareCrop />} />

          {/* Here are the routes for Colors */}
          <Route path="/colors" element={<Colors />} />
          <Route path="/colors/color-picker" element={<ColorPicker />} />
          <Route path="/colors/random-color" element={<RandomColor />} />
          <Route path="/colors/favorite-color" element={<FavoriteColor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
