import React, {memo} from 'react'

function Headher() {
     console.log('Headher component rendered');
  return (
    <div>Headher</div>
  )
}
export default memo(Headher);

