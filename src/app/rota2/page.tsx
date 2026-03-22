const revalidate = 60

function page() {
  return (
    <>
       <h1>{Math.ceil(Math.random() * 100)}</h1>
    </>
  )
}

export default page