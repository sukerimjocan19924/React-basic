import React, {useState, useMemo} from 'react'

const PeopleList = () => {
    const [keyword, setKeyword] = useState('')
    const [people] = useState([
        { name: "David", age: 28 },
        { name: "Alice", age: 22 },
        { name: "Charlie", age: 35 },
        { name: "Bob", age: 30 },
        { name: "Eve", age: 28 },
        { name: "Frank", age: 40 },
        { name: "Grace", age: 25 },
        { name: "Helen", age: 22 },
        { name: "Ian", age: 33 },
        { name: "Jack", age: 30 },
        { name: "Karen", age: 27 },
        { name: "Leo", age: 35 },
        { name: "Mona", age: 24 },
        { name: "Nina", age: 29 },
        { name: "Oscar", age: 31 },
    ]);
    const filtered = useMemo(() => {
        console.log('객체 필터링 중 ...')
        return people
        .filter((p) => p.name.toLowerCase().includes(keyword.toLowerCase())
        ).sort((a, b)=>b.age - a.age)
    }, [keyword, people])

  return (
    <div>
        <h2>useMemo 객체 리스트</h2>
        <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='이름과 나이를 입력하세요'/>
        <ul>
            {filtered.map((p, i) => (
                <li key={i}>{p.name}, {p.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default PeopleList