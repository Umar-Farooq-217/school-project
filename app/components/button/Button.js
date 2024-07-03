import React from 'react'

export default function Button(props) {
  return (
    <div>
                  <button className="bg-[rgb(13,153,255)] rounded-sm hover:scale-105 py-2 px-9 text-white font-semibold ">{props.title}</button>

      
    </div>
  )
}
