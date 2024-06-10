import { useState } from "react"

type AccordionPropsType = {
    title: string
    item: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

type AccordionBodyPropsType = {
    item: ItemType[]
    onClick: (value: any) => void
}

type ItemType = {
    title: string
    value: any
}


export const Accordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false)
    
        return (
            <div>
                <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
                { collapsed ? 'collapsed' : <AccordionBody item={props.item} onClick={props.onClick}/> }
            </div>
        )
}



const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.item.map((el, index)=><li onClick={ () => {props.onClick(el.value)} } key={index}>{el.title}</li>)}
        </ul>
    )
}