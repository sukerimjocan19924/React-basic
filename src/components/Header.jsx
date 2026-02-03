import React from 'react'
import './Header.css'

const Header = () => {
    const navList = [
        { title: '홈', desc: '홈 으로 바로가기' },
        { title: '공지사항', desc: '공지 바로가기' },
        { title: '이벤트', desc: '이벤트 확인하기' },
        { title: '커뮤니티', desc: '커뮤니티 바로가기' }
    ]
  return (
    <header>
        <h1>title</h1>
        <ul className='nav-list'>
            {navList.map((nav, i)=> (
                <li key={i}>
                    <span className='tit'>
                        {nav.title}
                    </span>
                    -
                    <span className='dsc'>
                        {nav.desc}
                    </span>
                </li>
            ))}
        </ul>
    </header>
  )
}

export default Header