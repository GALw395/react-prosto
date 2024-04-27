import { useState } from "react"

type AccordionPropsType = {
    title: string
    // collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false)
    
        return (
            <div>
                <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
                {/* <button onClick={ () => setCollapsed(!collapsed) }>TOGGLE</button> */}
                { collapsed ? 'collapsed' : <AccordionBody /> }
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}