import Card from "./Card"
const SeriesCard = () => {

    const apiData = [
        {
            name: "Breaking Bad",
            key:3,
            description: "this one is cool movie other SCI-Fi movie",
            image : "https://imgs.search.brave.com/lPrF4QgsaU306Wyrcnf70VpM0hdMr-weBKjMbVN7wEY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk56QTVaRE5s/WldNdE0yTmhOUzAw/TkRKakxUazROREl0/WVRSbVkyRXdNV1ps/TVRZM1hrRXlYa0Zx/Y0dkZVFYVnlOemt3/TWpRNU56TUAuanBn",
            watch : "Watch Now"
        },
        {
            name: "Breaking Bad",
            key:2,
            description: "this one is cool movie other SCI-Fi movie",
            image : "https://imgs.search.brave.com/lPrF4QgsaU306Wyrcnf70VpM0hdMr-weBKjMbVN7wEY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk56QTVaRE5s/WldNdE0yTmhOUzAw/TkRKakxUazROREl0/WVRSbVkyRXdNV1ps/TVRZM1hrRXlYa0Zx/Y0dkZVFYVnlOemt3/TWpRNU56TUAuanBn",
            watch : "Watch Now"
        }
    ]


  return (
    <>
        <div>
            <ul>
                {
                    apiData.map((item)=>{
                        return(
                            <li key={item.key}><Card data={item} /></li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default SeriesCard
