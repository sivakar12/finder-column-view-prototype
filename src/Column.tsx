import React, { useContext, FunctionComponent } from 'react'
import _ from 'lodash'

import StateContext from './StateContext'

type ColumnDetails = {
    path: string[]
    content: string[]
    level: number
}

const Column: FunctionComponent<ColumnDetails> = (props) => {
    const state = useContext(StateContext)
    function handleClickItem(item: string) {
        state.changePath(_.concat(props.path, [item]))
    }
    let selectedItem: string = ''
    if (state.path.length > props.level + 1)
        selectedItem = state.path[props.level + 1]
    return (
        <div className="column">
            <div className="column-title">{_.last(props.path)}</div>
            <div className="items">
                {props.content.map((item, index) => 
                    <div className={item == selectedItem? "item-selected" : "item"} onClick={() => { handleClickItem(item) }}>{item}</div>
                )}
            </div>
        </div>
    )
}

export default Column