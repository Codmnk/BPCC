import React from 'react'
import './CardUI.css'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

const CardUI = props => {
  return (
    <div className="rcoCard mb-3">
      <Card className="homeCards">
        <CardBody>
          <div className="sNt">
            <div className="travelerCrd">
              <CardImg
                className="img-icone mb-3"
                top
                src="https://s3.amazonaws.com/uifaces/faces/twitter/ruzinav/128.jpg"
                alt="Profile image of Shopper"
              />
              <div className="earnNSave">Earned $46</div>

              <CardTitle className="mb-4 stt">Treveler</CardTitle>

              <div className="rcoUN">Sarah</div>
              <div className="rcoUA">NY, USA</div>
            </div>

            <div className="oi oi-infinity cntrIconeCrd">Icone image</div>

            <div className="shopperCrd">
              <CardImg
                className="img-icone mb-3"
                top
                src="https://s3.amazonaws.com/uifaces/faces/twitter/ruzinav/128.jpg"
                alt="Profile image of Shopper"
              />
              <span className="earnNSave">Saved $74</span>
              <CardTitle className="mb-4 stt">Shopper</CardTitle>
              <div className="rcoUN">John</div>
              <div className="rcoUA">Sydney, AU</div>
            </div>
          </div>
        </CardBody>
        <div className="card-prod-image">
          <CardImg
            top
            width="320px"
            height="320px"
            src="https://cnet2.cbsistatic.com/img/iRNRl3TETWX-qVe0nc9kpReEMwQ=/2017/06/21/39c814c4-4909-43e8-aa0d-89eff3aced37/apple-macbook-12-inch-2017-01.jpg"
            alt="Card image cap"
          />
        </div>
      </Card>
    </div>
  )
}

export default CardUI
