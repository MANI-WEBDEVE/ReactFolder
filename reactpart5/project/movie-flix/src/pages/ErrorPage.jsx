import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ErrorPage() {

    const navigate = useNavigate()
useEffect(() => {
    navigate(-1)

}, [])

  return (
    <div className='w-full h-screen flex items-center justify-center '>
        <h1 className='text-4xl font-extrabold '>404</h1>
        <p className='text-2xl font-bold'>Error Some Want Wrong</p>
    </div>
  )
}
