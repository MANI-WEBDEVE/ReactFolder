import React, { useEffect } from 'react'

const TodoDate = ({onStateSetTime, onStateTime}) => {
    useEffect(() => {
        const interval = setInterval(() => {
          const date = new Date();
          let formatedDate = date.toLocaleDateString();
          let formatedTime = date.toLocaleTimeString();
          onStateSetTime(formatedTime + " " + formatedDate);
        }, 400);
    
        return () => clearInterval(interval);
      }, []);
    


  return (
    <>
        <h1 className="text-2xl mt-4 font-medium text-center text-black  ">
          {onStateTime}
        </h1>
    </>
  )
}

export default TodoDate
