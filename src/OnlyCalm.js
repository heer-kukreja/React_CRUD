import React from 'react'
import { Link } from 'react-router-dom'

function OnlyCalm() {
    return (
        <div>
            <div className="not-found">
                <h2>Oops..Sorry!</h2>
                <p>The Page cannot be found</p>
                <Link to='/'>Wanna Go Back...?</Link>
            </div>
        </div>
    )
}

export default OnlyCalm
