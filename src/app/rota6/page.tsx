async function page() {

  const randNum = Math.ceil(Math.random() * 100)
  const req = await fetch(`https://dummyjson.com/products/${randNum}`, {
    next: {tags: ["product"]}
  })
  const data = await req.json()

  return (
    <>
      <h1>{data.title}</h1>
      <a href="../api/revalidate">Revalidar</a>
      <p>Routa 6</p>
    </>
  )
}

export default page