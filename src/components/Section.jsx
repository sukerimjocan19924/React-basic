import React from 'react'

const Section = () => {
    const user = {
        name: 'Tom',
        isLogin: true
    }

    if (user.isLogin) {
        return (
          <div>톰 로그인</div>
        )
    } else {
        return (
          <div>톰 로그아웃</div>
        )
    }
}

export default Section