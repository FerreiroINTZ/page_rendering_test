async function page() {
  
    async function getData(){
        const randNum = Math.ceil(Math.random() * 100)
        const resp = await fetch(`https://dummyjson.com/products/${randNum}`, {
            // por padrao a pagina sera SSG
            // isso obriga a ser SSR
            cache: "no-store"
        })
        const dados = await resp.json()
        return dados
    }
    const data = await getData()
    console.log(data.title)
  
    return (
    <h1>{data.title}</h1>
  )
}

export default page