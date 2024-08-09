
function Card({data}) {
    const { name, description, image, watch } = data
   return (
    <>
      <div>
        <h1>{name}</h1>
        <img src={image} alt="" />
        <p>{description}</p>
        <button>{watch}</button>
      </div>
    </>
  )
}

export default Card
