import React, { useReducer } from "react"

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

type ActionType = {
    type: string
}

type StateType = {
    collapsed: boolean
}

const reduser =  (state: StateType, action: ActionType): StateType => {

    if (action.type === "TOGGLE-COLLAPSED") {
        // const stateCopy = {...state, collapsed: !state.collapsed}
        return {...state, collapsed: !state.collapsed}
    }

    return state
}





 const AccordionReducer1 = (props: AccordionPropsType) => {

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reduser, { collapsed: false})
    
        return (
            <div>
                {/* <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/> */}
                <AccordionTitle title={props.title} onClick={() => dispatch( { type: "TOGGLE-COLLAPSED" } )}/>
                { state.collapsed ? 'collapsed' : <AccordionBody item={props.item} onClick={props.onClick}/> }
            </div>
        )
}

export const AccordionReducer = React.memo(AccordionReducer1)



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