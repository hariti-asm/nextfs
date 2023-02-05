export default async function Home() {
  const data = await fetch(`
https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  return (
    <main>
      <h1 className="py-8 px-10 font-bold">Hello Next13</h1>
    </main>
  );
}
