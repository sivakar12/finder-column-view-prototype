import React, { useContext } from 'react'
import StateContext from './StateContext'
import State from './State'
import _ from 'lodash'
import Column from './Column';


const ColumnView: React.FC = () => {

    const state: State  = useContext(StateContext)
    const titles = _.takeRight(state.path, 3)
    const contents = _.takeRight(state.getFileListUptoLevel(state.path.length), 3)
    const contentsAndTitles = _.zip(titles, contents)
    return (
        <div className="columns">

            {contentsAndTitles.map(([title, content], index) => 
                <Column title={title || 'dummy title'} content={content || []} key={index}/>
            )}
        </div>
    )
}

export default ColumnView