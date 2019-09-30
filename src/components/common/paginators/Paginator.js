import React, {useEffect, useState} from 'react'
import styles from './Paginator.module.css'

const Paginator = ({totalCount, totalPageSize, currentPage, onPageChanged, displayedRange}) => {
    let  [rangeNumber, setRangeNumber] = useState(0);
    useEffect(() => {
       setRangeNumber(0)
    }, [totalCount]);


    let pageCount = Math.ceil(totalCount / totalPageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let rangesCount = Math.ceil(pageCount / displayedRange);
    let ranges = [];
    for (let i = 0; i < Math.ceil(rangesCount); i++){
        ranges[i] = pages.slice((i * displayedRange), (i * displayedRange) + displayedRange)
    }

    return (
        <div className={styles.pages}>
            {
                rangeNumber > 0 &&
                <div>
                    <button onClick={() => {setRangeNumber(0)}} className={styles.pag_btn}>first</button>
                    <button onClick={()=>{setRangeNumber(rangeNumber - 1)}} className={styles.pag_btn}>prev</button>
                </div>
            }
            <div className="range">
                {ranges[rangeNumber] && ranges[rangeNumber].map(el => {
                    return <span key={el}
                                 onClick={() => {onPageChanged(el);}}
                                 className={`${styles.page} ${currentPage === el ? styles.selectedPage : undefined}`}>{el}</span>
                })}
            </div>
            {
                rangeNumber < rangesCount - 1 &&
                    <div>
                        <button className={styles.pag_btn} onClick={()=>{setRangeNumber(rangeNumber + 1)}}>next</button>
                        <button onClick={()=>{setRangeNumber(rangesCount - 1)}} className={styles.pag_btn}>last</button>
                    </div>
            }
        </div>
    )
};

export default Paginator