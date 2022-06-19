import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react';
import SuggestionArticle from '../components/SuggestionArticle'
import { Suggestion } from '../models/Suggestion.type';
import { randomSuggestions } from '../services/SuggestionService';

const handleEngage = ({ externalLink }: Suggestion) => {
  if (!externalLink) return

  window.location.href = externalLink;
}

const Home: NextPage = () => {
  const suggestions = useMemo(() => randomSuggestions(), [])
  const [isSSR, setIsSSr] = useState(false);

  useEffect(() => setIsSSr(true), []);
  if (!isSSR) return null;

  return (
    <>
      <Head>
        <title>Unbored</title>
        <meta name="description" content="7 suggestions agains boredom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='fixed top-0 w-full h-10 z-30 text-right p-3'>
      </header>

      <main className='snap-y'>
        {suggestions.map((suggestion, index) => <SuggestionArticle index={index} key={suggestion.id} onEngage={handleEngage} suggestion={suggestion}></SuggestionArticle>)}
      </main>

      <footer>
      </footer>
    </>
  )
}

export default Home
