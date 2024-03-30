import Sedands from "./components/Sedands"
import SUVs from "./components/SUVs"
import Luxuosos from "./components/Luxuosos"

export default function App() {
  return (
    <main className=" min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center">
      <section className="lg:flex  max-w[920px]">
        <Sedands/>
        <SUVs/>
        <Luxuosos/>
      </section>
    </main>
  )
}