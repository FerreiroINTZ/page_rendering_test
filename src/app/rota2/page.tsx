export const revalidate = 60 // revalida apos o ttempo
export const fetchCache = "force-cache" // forca ou nao a revalidacao dos fetches

function page() {
  return (
    <>
       <h1>{Math.ceil(Math.random() * 100)}</h1>
       <p>Routa 2</p>
    </>
  )
}

export default page