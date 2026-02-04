import React from 'react'

const Section = ({data}) => {
    console.log(data.content)

    const {content, bgColor} = data
  return (
    <div>
        {content} - {bgColor}
    </div>
  )
}

export default Section