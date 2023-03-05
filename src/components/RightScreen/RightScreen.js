import React from 'react'
import Card from '../Card/Card'
import CSVDrop from '../Card/CSVDrop/CSVDrop'

export default function RightScreen() {
  return (
    <div class="drawer">
      <div className="container">
        <h1>Panel</h1>
        <hr></hr>
        <Card component={<CSVDrop></CSVDrop>}></Card>
      </div>
    </div>
  )
}
