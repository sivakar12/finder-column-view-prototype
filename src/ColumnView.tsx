import React, { useContext } from 'react'
import StateContext from './StateContext'
import State from './State'
import _ from 'lodash'
import Column from './Column';


const ColumnView: React.FC = () => {

    const state: State  = useContext(StateContext)
    
    return (
        <div className="columns">
            {JSON.stringify(state)}
            {state.getColumnDetailsForLastThreeColumns().map((columnDetails, index) => 
                <Column {...columnDetails} key={index}/>
            )}
        </div>
    )
}

export default ColumnView