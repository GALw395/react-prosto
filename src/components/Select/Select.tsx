
import { useState } from 'react'
import styles from './Select.module.css'



type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    item: ItemType[]
}



export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementItem, setHoveredElementItem] = useState(props.value)
    const selectedItem = props.item.find(i => i.value === props.value)
    const hoveredItem = props.item.find(i => i.value === hoveredElementItem)
    const showItems = ()=>setActive(!active)
    const onItemClick = (value: any) => {props.onChange(value); showItems()}
    

    return (
        <div className={styles.select}>
            <span className={styles.main} onClick={showItems}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={styles.items}>
                    {props.item.map(i => 
                    <div  
                    onMouseEnter={()=>{setHoveredElementItem(i.value)}}
                    className={styles.item + " " + (hoveredItem === i ? styles.selected : '')}
                    key={i.value}
                    onClick={()=>onItemClick(i.value)}
                    >
                        {i.title}
                    </div>)}
                </div>}
        </div>
    )
} 