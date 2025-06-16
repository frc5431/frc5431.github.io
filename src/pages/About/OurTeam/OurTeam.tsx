import React from 'react'

import hatConstruction from '../../../assets/img/universal/hat construction.jpg' 
import universal5431NumberSign from '../../../assets/img/universal/5431 number sign.jpg'
import frcEvent from '../../../assets/img/universal/frc event.jpg'
import hyperionShooting from '../../../assets/img/about/2020/Hyperion shooting.jpg'
import Carousel from '../../../components/Carosuel/Carousel'

import "./OurTeam.css";
import { CarouselItem } from '../../Homepage/Home'

const OurTeam = () => {

  const carouselItems : CarouselItem[] = [
    { id: 1, imagePath: universal5431NumberSign, alt: "team holding sign" },
    { id: 2, imagePath: frcEvent, alt: "sfs" },
    { id: 3, imagePath: hyperionShooting, alt: "fs" },
    { id: 4, imagePath: hatConstruction, alt: "" },
  ];

  return (
    <div className="main">
      <Carousel data={carouselItems} />
    </div>
  )
}

export default OurTeam