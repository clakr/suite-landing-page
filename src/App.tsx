import Header from "./components/Header";
import Hero from "./components/Hero";
import CMO from "./components/CMO";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <h1 className="sr-only">Suite Landing Page</h1>
      <Header />
      <Hero />
      <CMO />
      <Footer />
    </>
  );
}
