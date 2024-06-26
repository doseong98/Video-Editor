import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../pages/EventByBootstrap.module.css'

import product1 from '../assets/images/event/products/product1.png'
import product2 from '../assets/images/event/products/product2.png'


const productList = [
    { img: product1, type: '셔츠/블라우스', productName: '데일리 베이직 셔츠 (7color)', percent: 50, price: 50000 },
    { img: product2, type: '셔츠/블라우스', productName: '스탠다드 블루종 스웨이드 자켓', percent: 50, price: 100000 },
    { img: product1, type: '셔츠/블라우스', productName: '데일리 베이직 셔츠 (7color)', percent: 50, price: 50000 },
    { img: product2, type: '셔츠/블라우스', productName: '스탠다드 블루종 스웨이드 자켓', percent: 50, price: 100000 },
]


const ProdcutList = () => {
    return (
        <div className={styles.top__sales_list}>
            {productList.map((e, i) => (
                <Card style={{ minWidth: 240, borderRadius: 16 }}>
                    <Card.Img src={e.img} className={styles.product__image} />
                    <Card.Body style={{ padding: 0 }}>
                        <div className={styles.product}>
                            <div className={styles.content}>
                                <div>
                                    <p>{e.type}</p>
                                    <h3>{e.productName}</h3>
                                </div>
                                <div className={styles.price__layout}>
                                    <p className={styles.percent}>{e.percent}%</p>
                                    <p className={styles.price}>{e.price.toLocaleString()}원</p>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default ProdcutList;