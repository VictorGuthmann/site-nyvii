import Header from "@/app/components/Header";
import { Banner } from "./components/Banner";
import { getFeaturedMovie, getMoviesByGenre } from "./service/MovieService";
import { ContactForm } from "./components/contact-form";
import { Toaster } from "./components/toaster";

export default async function Home() {
  const featuredMovie = await getFeaturedMovie(String(105));

  return (
    <>
      <div className="relative bg-gradient-to-b pb-8">
        <Header />
        <main className="relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16">
          <Banner movie={featuredMovie} />
        </main>
      </div>
      <Toaster />
      <ContactForm />
    </>
  );
}
