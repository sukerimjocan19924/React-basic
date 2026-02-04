import React from 'react'

const Main = ({content='기본 컨텐츠', bgcolor}) => {
  return (
    <div style={{
        backgroundColor:bgcolor,
        padding: '20px',
        marginBottom: '20px'
    }}>
        {content}
    </div>
  )
}

export default Main