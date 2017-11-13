import React from 'react'
import {render} from 'react-dom'

class APP extends React.Component {
    render(){
        return(
            <div>
                react
            </div>
        )
    }
}

render(
    <APP/>,document.getElementById('root')
)
