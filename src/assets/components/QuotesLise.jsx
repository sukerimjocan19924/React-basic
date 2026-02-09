import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios'

const QuotesLise = () => {
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        axios.get('https://dummyjson.com/quotes')
            .then((res) => {
                console.log(res.data)
                setQuotes(res.data.quotes)
                setLoading(false)
            })
            .catch((err) => {
                console.error('데이터를 가져오지 못 했습니다.', err)
                setError('데이터를 가져오지 못 했습니다.')
            })
    }, [])

    const filtered = useMemo(() => {
        return quotes.
            filter((a) => a.author.toLowerCase().includes(keyword.toLowerCase())).sort()
    }, [keyword, quotes])
  return (
    <div>
        <h2>명언 찾기</h2>
        <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='작가를 입력하세요' />
        <ul>
            {filtered.map((q) => (
                <li key={q.id}>
                    <div>
                    {q.quote}
                    </div>
                    <div>
                        {q.author}
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default QuotesLise