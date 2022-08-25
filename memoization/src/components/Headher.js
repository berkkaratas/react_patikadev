import React, {memo} from 'react'

function Headher({data}) {
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
export default memo(Headher);

