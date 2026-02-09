import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserList = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data)
                setUser(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.error('데이터를 가져오지 못 했습니다.', err)
                setError('데이터를 가져오지 못 했습니다.')
                setLoading(false)
            })
    }, [])


    if (loading) return <p>로딩 중 ...</p>
    if (error) return <p>{error}</p>
  return (
    <div>
        <h2>사용자 목록</h2>
        <ul>
            {user.map((u) => (
                <li key={u.id}>{u.name}, {u.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default UserList