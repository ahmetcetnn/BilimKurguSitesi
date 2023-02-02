import "../App.css"
import SliderData  from './SliderData'
import '@splidejs/react-splide/css'
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';


function Data() {


  return <div>


<Wrapper>


    <Splide options={{
      perPage:4,
      arrows:false,
      pagination:false,
      drag:'free',
      gap:'5rem',
    }}>
    {SliderData.map((slide,index) => {
      return(
        <SplideSlide>
            <Card>
      <h1>{slide.title}</h1>
      <h2>{slide.genres}</h2>
      <h3>{slide.actors}</h3>
      <h5>{slide.plot}</h5>
      
      </Card>
      <div className="resim">
      <img src={slide.posterUrl} alt="poster"/>
      </div>
      </SplideSlide>
      )
    })}
   
    </Splide>
    </Wrapper>
    </div>
}
const Wrapper =styled.div`
margin:3px 16px;
padding:6rem`;

const Card =styled.div`
min-height:25rem;
border-radius:2rem;
overflow:hidden;
position:relative
padding: 0%;;
  `





export default Data
