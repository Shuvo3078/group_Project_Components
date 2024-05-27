import React from 'react';
import Spoon from '../Spoon';
import Container from '../Container';
import Images from '../rotetSpons';
import egg from '../../assets/egg.jpg';
import image2 from '../../assets/image2.png';
import Image1 from '../../assets/image1.png';
import ImageWithBorder from '../ImageWithBorder';
import PictureWithComma from '../PictureWithComma';
import Two from '../Two';
import One from '../One';
import Five from '../Five';
import About_Us from '../About_Us';
import Three from '../Three';

const Home = () => {
  return (
    <div>
    <Container>
    <Spoon/>
    <Images/>
    <About_Us/>
    <ImageWithBorder src={image2} alt={image2}/>
    <PictureWithComma src={Image1} />
    <One/>
    <Two/>
    <Three/>
    <Five/>
    </Container>
    </div>
  );
}

export default Home;
