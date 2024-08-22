import React, { memo, useRef } from 'react'

function Countmemo() {
    const renderCount = useRef(0)
    console.log(renderCount)
  return (
    <div>
      <h1 >I am Child component and i not rereber {renderCount.current++} time</h1>
    </div>
  )
}

export default memo(Countmemo)
