import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import the toast function
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar/Navbar";
import Notfound from "./Components/Notfound/Notfound";
import Loader from "./Components/utils/Loader/Loader";
import Footer from "./Components/Footer/Footer";
import Converters from "./Pages/Converters/Converters";

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
const ImageConverter = lazy(() =>
  import("./Pages/Images/ImageConvert/ImageConverter")
);

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

const DummyTextGenerator = lazy(() =>
  import("./Pages/RandomData/DummyTextGenerator/DummyTextGenerator")
);
const FakeDetails = lazy(() =>
  import("./Pages/RandomData/FakeDetails/FakeDetails")
);
const ImageToBase64Converter = lazy(() =>
  import("./Pages/Converters/ImageToBase64Converter/ImageToBase64Converter")
);

const TimestampConverter = lazy(() =>
  import("./Pages/Converters/TimestampConverter/TimestampConverter")
);

const About = lazy(() => import("./Pages/About/About"));
const Privacy = lazy(() => import("./Pages/About/PrivacyPolicy"));
const Terms = lazy(() => import("./Pages/About/Terms"));
const FormatCode = lazy(() => import("./Pages/FormatCode/FormatCode"));
const VariousTools = lazy(() => import("./Pages/VariousTools/VariousTools"));
const ShortUrl = lazy(() => import("./Pages/VariousTools/ShortUrl/ShortUrl"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <ToastContainer
          position="top-center"
          theme="dark"
          autoClose={2000}
          hideProgressBar
        />
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
          <Route path="/image/image-convert" element={<ImageConverter />} />

          {/* Here are the routes for Colors */}
          <Route path="/colors" element={<Colors />} />
          <Route path="/colors/color-picker" element={<ColorPicker />} />
          <Route path="/colors/random-color" element={<RandomColor />} />
          <Route path="/colors/favorite-color" element={<FavoriteColor />} />

          {/* Here are the routes for Converters */}
          <Route path="/converters" element={<Converters />} />
          <Route
            path="/converters/ImageToBase64Converter"
            element={<ImageToBase64Converter />}
          />
          <Route
            path="/converters/timestamp-converter"
            element={<TimestampConverter />}
          />

          {/* Here are the routes for Random Data */}
          <Route path="/random-data" element={<RandomData />} />
          <Route
            path="/random-data/password-generator"
            element={<PasswordGenerator />}
          />
          <Route
            path="/random-data/dummy-text-generator"
            element={<DummyTextGenerator />}
          />
          <Route path="/random-data/fake-details" element={<FakeDetails />} />

          {/* Here are the routes for Format Code */}
          <Route path="/format-code" element={<FormatCode />} />

          {/* Here are the routes for Various Tools */}
          <Route path="/various-tools" element={<VariousTools />} />
          <Route path="/various-tools/short-url" element={<ShortUrl />} />

          {/* Here are the routes for About, Privacy Policy, and Terms */}
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
