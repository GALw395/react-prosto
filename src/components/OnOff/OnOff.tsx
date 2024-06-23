import React from "react"


type onPropsType = {
    value: boolean
    onClick: (value: boolean)=>void
}


const OnOff1 = (props: onPropsType) => {

    


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "4px",
        backgroundColor: props.value ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "4px",
        backgroundColor: props.value ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        margin: "5px 15px 0px",
        padding: "4px",
        backgroundColor: props.value ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => props.onClick(true) }>on</div>
            <div style={offStyle} onClick={ () => props.onClick(false) }>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}

export const OnOff = React.memo(OnOff1)