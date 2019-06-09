import React, { FunctionComponent } from 'react'

type ColumnProps = {
    title: string
    content: string[]
}

const Column: FunctionComponent<ColumnProps> = (props) => {
    return (
        <div>{JSON.stringify(props)}</div>
    )
}

export default Column