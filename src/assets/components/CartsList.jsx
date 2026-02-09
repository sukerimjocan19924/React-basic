import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CartsList = () => {
    const [carts, setCarts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://dummyjson.com/carts')
            .then((res) => {
                console.log(res.data.carts)
                setCarts(res.data.carts)
                setLoading(false)
            })
            .catch((err) => {
                console.error('데이터를 가져오지 못 했습니다.', err)
                setError('데이터를 가져오지 못 했습니다.')
            })
    }, [])
  return (
    <div>
        <h2>이미지 나타내기</h2>
        <ul>
            {carts.map((c) => {
                    const first = c.products?.[0]; // 첫 상품
                    return (
                        <li key={c.id}>
                            {c.total}원
                            {first && (
                                <img
                                    src={first.thumbnail}
                                    alt={first.title}
                                    width={80}
                                />
                            )}
                        </li>
                    );
                })
            }
        </ul>
    </div>
  )
}

export default CartsList