//SPA
//SSR
//SSG

import { useEffect } from "react"

export default function Home(props) {

  /* useEffect(()=>{ SPA Rendering
    fetch('http://localhost:3333/episodes')
    .then(response => response.json())
    .then(data => console.log(data))
  }, []) */
  return (
    <div>

      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
} 
