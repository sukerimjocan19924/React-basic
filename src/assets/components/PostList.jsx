import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/postㄴ')
            .then((res) => {
                console.log(res.data)
                setPosts(res.data.slice(0, 10))
                setLoading(false)
            })
            .catch((err) => {
                console.error('게시글을 불러오지 못 했습니다.', err)
                setError('게시글을 불러오지 못 했습니다.')
                setLoading(false)
            })
    }, [])

    if (loading) return <p>로딩 중 ...</p>
    if (error) return <p>{error}</p>

  return (
    <div>
        <h2>타이틀 목록</h2>
        <ul>
            {posts.map((p) => (
                <li key={p.id}>{p.id} - {p.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default PostList