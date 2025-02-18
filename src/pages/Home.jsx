import About_Me from "./sections/About_Me";
import Education_Certificates from "./sections/Education_Certificates";
import Experience from "./sections/Experience";
import Introduction from "./sections/Introduction";
import Knowledge from "./sections/knowledge";
import Languages from "./sections/Languages";
import Projects from "./sections/Projects";

function Home() {
  return (
    <main className="container">
      <Introduction />
      <Projects/>
      <Experience/>
      <Knowledge/>
      <Languages/>
      <Education_Certificates/>
      <About_Me/>
    </main>
  );
}

export default Home;
