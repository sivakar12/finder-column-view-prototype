import React, { useContext } from 'react'
import StateContext from './StateContext'
import State from './State'
import _ from 'lodash'
import Column from './Column';


const ColumnView: React.FC = () => {

    const state  = useContext(StateContext)
    
    return (
        <div className="columns">
            {state.getColumnDetails().map((columnDetails, index) => 
                <Column {...columnDetails} key={index}/>
            )}
        </div>
    )
}

export default ColumnView