import React from 'react'

export default function Card({component}) {
  return (
    <div class="card">
        <div class="card-body">
            {component}
        </div>
    </div>
  )
}
