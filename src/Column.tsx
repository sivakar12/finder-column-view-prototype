import React, { FunctionComponent } from 'react'

type ColumnProps = {
    title: string
    content: string[]
}

const Column: FunctionComponent<ColumnProps> = (props) => {
    return (
        <div className="column">
            <div className="column-title">{props.title}</div>
            <div className="items">
                {props.content.map((item, index) => 
                    <div className="item">{item}</div>
                )}
            </div>
        </div>
    )
}

export default Column