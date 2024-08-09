import React from 'react'

function EventPropagation() {

    const handleGrandeFather = () => {
        console.log('GrandFather clicked')
    }

    const handleParent = (event) => {
        console.log('Parent clicked')
        // event.stopPropagation()

    }

    const handleChild = (event) => {
        console.log('Child clicked')
        //* event.stopPropagation()
    }







  return (
    <>
      <section>
        <div className='grandFatherDiv' onClickCapture={handleGrandeFather}>
            <div className='ParentDiv' onClickCapture={handleParent}>
                <button className='childDiv' onClickCapture={handleChild}>
                    Child div
                </button>
            </div>
        </div>
      </section>
    </>
  )
}

export default EventPropagation
