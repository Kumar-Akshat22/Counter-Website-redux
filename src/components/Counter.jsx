import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {

    const count = useSelector(state => state.counter.value);
  return (
    <div>
        <button>
            -
        </button>

        <div>
            {count}
        </div>

        <button>
            +
        </button>
    </div>
  )
}

export default Counter