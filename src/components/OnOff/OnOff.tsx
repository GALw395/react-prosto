import { useState } from "react"

type onPropsType = {
    // on: boolean
}


export const OnOff = (props: onPropsType) => {

    let [on, setOn] = useState(false)


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "4px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "4px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        margin: "5px 15px 0px",
        padding: "4px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={ () => setOn(true) }>on</div>
            <div style={offStyle} onClick={ () => setOn(false) }>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}