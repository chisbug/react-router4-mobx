import React from 'react'

import css from './infoDetail.less'

const InfoDetail = (props) => (
  <p className="info-detail-p">
    This is infoDetail route<br />
    param id: <span>{props.match.params.id}</span>
  </p>
)


export default InfoDetail