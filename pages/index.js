import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import fetching from "../utils/requests";

export default function Home( { results} ) {
  return (
    <div>
      <Head>
        <title>Hulu exercice</title>
        <meta name="description" content="This is an web development exercice with React, NextJS & Tailwind." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
      
    </div>
  )
}

export async function getServerSideProps(context){
   const genre = context.query.genre;

   const request = await fetch(`https://api.themoviedb.org/3/${fetching[genre]?.url || fetching.fetchTrending.url}`).then(res => res.json());

   return {
     props: {
       results: request.results
     }
   }
}