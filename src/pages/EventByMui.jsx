import React from 'react'
import styles from './EventByMui.module.css'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import { ArrowBackIosNew, FileUploadOutlined } from '@mui/icons-material'

import EventMainSection from '../components/EventMainSection'
import MuiProductList from '../components/MuiProductList';

const EventByMui = () => {
    return (
        <article className='layout'>
            <div>
                <div className={styles.page__style}>
                    <Stack
                        justifyContent='space-between'
                        alignItems="center"
                        align='center'
                        className={styles.header}
                        direction="row"
                    >
                        <button className={styles.header__btn}>
                            <ArrowBackIosNew style={{ color: '#383838' }} />
                        </button>
                        <h1 className={styles.header__title}>크리스마스 특별할인</h1>
                        <button className={styles.header__btn}>
                            <FileUploadOutlined style={{ color: '#383838' }} />
                        </button>
                    </Stack>

                    <EventMainSection />
                    <section>
                        <div>
                            <ul className={styles.filter__list}>
                                <li
                                    className={styles.filter__btn}
                                >
                                    남성의류
                                </li>
                                <li
                                    className={styles.filter__btn}
                                >
                                    여성의류
                                </li>
                                <li
                                    className={styles.filter__btn}
                                >
                                    가전제품
                                </li>
                            </ul>
                            <div className={styles.top__sales}>
                                <h2>실시간 인기 TOP5</h2>
                            </div>
                            < MuiProductList />
                            <Button type='primary' block className={styles.show__all__btn}>
                                전체 상품 보기
                            </Button>
                        </div>
                    </section>

                    <section className={styles.coupon__section}>
                        <h2>
                            어디서든 사용 가능한
                            <br />
                            15% 쿠폰을 드려요!
                        </h2>
                        <p>쿠폰 지급 기간 : ~12월 31일까지</p>
                    </section>
                </div>

            </div>
        </article>
    )
}

export default EventByMui;