import React, { useState, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, eatSushi}) => {

  const [page, setPage] = useState(0)

  const renderSushis = () => {
    return sushis.slice(page * 4, page * 4 + 4).map(sushi => <Sushi key={sushi.id} eatSushi={eatSushi} sushi={sushi} />)
  }

  const moreSushis = () => {
    if ((page - 1) * 4 >= sushis.length) {
      setPage(0)
    } else {
      setPage(page + 1)
    }
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
        <MoreButton moreSushis={moreSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
