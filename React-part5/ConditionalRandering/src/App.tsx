import Card from "./components/Card"

const App = () => {
 
  const imgURI: string =
    "https://st1.bollywoodlife.com/wp-content/uploads/2021/06/Ray_Web_Series_Review_Netflix.jpg";
  
  const movieName = "Infected";
  const para = "This movie is clear Mind Set"
  return (
    <>
     <Card  img = {imgURI} movieName = {movieName} para = {para}  />
     <Card  img = {imgURI} movieName = {"JadoGar"} para = {"nice but sp said"}  />
     <Card  img = {imgURI} movieName = {"MR:Father"} para = {"lovely Father"}  />
    </>
  );
};


export default App;


//* Conditional Rendring 1st method
//? const canWatch:string = 'Watch Now';
//? if (age <= 18) return 'not Watch';
//-----------------------------------------
//* Conditional Rendring 2st method

{
  /* <button>{age >= 18 ? "Watch Now": "Not Watching"}</button> */
}
{
  /* <button>{canWatch}</button> */
}


  //* Conditional rendring 3rd method
  // const canWatch = (): String => {
  //   if (age >= 18) return "watch now";
  //   return "Not Watching";
  // };