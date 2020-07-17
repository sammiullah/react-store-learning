import React from 'react'
import styled from 'styled-components'

export default function Title({ name, title }) {
    return (
        <div className="row">
            <div className="col-md-10 mx-auto text-center py-2 text-capitalize">
                <h1>
                    {name} <strong className="text-blue">{title}</strong>
                </h1>

            </div>

        </div>
    )
}
