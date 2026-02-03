import React from 'react'
import "./Article.css"

const Article = () => {
    const user = {
        name: 'Alice',
        isLogin: false
    }
  return (
    <div>
        {user.isLogin ? 
            (<div className='login'>로그인</div>) :
            (<div className='logout'>로그아웃</div>)
        }
    </div>
  )
}

export default Article