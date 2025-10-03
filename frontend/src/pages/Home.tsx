import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Notice from "../components/Notice";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <About />
      <Notice />
      <Footer />
    </div>
  )
}
