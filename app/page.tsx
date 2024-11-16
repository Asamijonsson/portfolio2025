import About from "./about/page";
import Link from "next/link";
// import { Header } from "./components/Header";
// import { Home } from "./components/Home";
// import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Link href="about">about</Link>
      {/* <Header /> */}
      {/* <Nav />
      <Home /> */}

      <About />
    </>
  );
}

export default App;
