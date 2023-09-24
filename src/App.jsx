import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Notfound from "./Components/Notfound/Notfound";
import Loader from "./Components/utils/Loader/Loader";

// Lazy-loaded route components
const Home = lazy(() => import("./Pages/Home/Home"));
const Texts = lazy(() => import("./Pages/Texts/Texts"));
const TextCounter = lazy(() => import("./Pages/Texts/TextCounter"));
const TextComparator = lazy(() => import("./Pages/Texts/TextComparator"));
const Images = lazy(() => import("./Pages/Images/Images"));
const ImageCircleCrop = lazy(() =>
  import("./Pages/Images/ImageCrop/ImageCircleCrop")
);
const ImageSquareCrop = lazy(() =>
  import("./Pages/Images/ImageCrop/ImageSquareCrop")
);
const ImageCrop = lazy(() => import("./Pages/Images/ImageCrop/ImageCrop"));
const Colors = lazy(() => import("./Pages/Colors/Colors"));
const ColorPicker = lazy(() =>
  import("./Pages/Colors/ColorsTools/ColorPicker")
);
const RandomColor = lazy(() =>
  import("./Pages/Colors/ColorsTools/RandomColor")
);
const FavoriteColor = lazy(() =>
  import("./Pages/Colors/ColorsTools/FavoriteColor")
);
const RandomData = lazy(() => import("./Pages/RandomData/RandomData"));
const PasswordGenerator = lazy(() =>
  import("./Pages/RandomData/PasswordGenerator/PasswordGenerator")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
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
          <Route path="/images/square-crop" element={<ImageSquareCrop />} />
          <Route path="/images/images-crop" element={<ImageCrop />} />

          {/* Here are the routes for Colors */}
          <Route path="/colors" element={<Colors />} />
          <Route path="/colors/color-picker" element={<ColorPicker />} />
          <Route path="/colors/random-color" element={<RandomColor />} />
          <Route path="/colors/favorite-color" element={<FavoriteColor />} />

          {/* RandomData Routes  */}
          <Route path="/random-data" element={<RandomData />} />
          <Route
            path="/random-data/password-generator"
            element={<PasswordGenerator />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
