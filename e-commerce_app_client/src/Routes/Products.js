import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
// css for react-slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import BsFillArrowRightSquareFill from 'react-icons/bs'
// import BsFillArrowLeftSquareFill from 'react-icons/bs'



import cover3 from '../Static Files/cover3.jpg'
// import cover2 from '../Static Files/cover2.webp'
// import cover5 from '../Static Files/cover5.jpg'
// import cover6 from '../Static Files/cover6.jpg'
// import cover7 from '../Static Files/cover7.jpg'
// import cover8 from '../Static Files/cover8.jpg'







// query to fetch all products.
const FETCH_ALL_PRODUCTS = gql `
    query {
        FetchAllProducts {
            productID
            name
            manufacturer
            yearReleased
            coverPhotoUrl
            price

        }

    }

`





const Products = () => {
    const { loading, data, error } = useQuery( FETCH_ALL_PRODUCTS )

    // useRef
    const sneakerCollectionDiv = useRef( null )

    const scrollToSneakerCollectionDiv = ( reference ) => {
        window.scrollTo({
            top: reference.current.offsetTop,
            behavior: 'smooth'
        })
    }

    // react-slick settings.
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,                
        slidesToScroll: 1,
        rows: 1,
        useCSS: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                initialSlide: 0,
                arrows: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }


    return (
      <div>

            { loading && <div className='fetching-products-div '> <h3> fetching products... </h3> </div> }

            { error && <div className='error-div'> <h3> sorry, failed to fetch products due to error </h3> </div> }

            { data && 
            
                <div> 
                <div className='mt-2'>
                    <img src={ cover3 } className='cover-img' alt='cover' />
                    <h3 className='cover-img-text-header'>In living colour</h3>
                    <h4 className='cover-img-text-sub' >discover our top quality products</h4>
                    <Button variant='primary' className='cover-img-btn' onClick={ () => scrollToSneakerCollectionDiv( sneakerCollectionDiv ) }>Shop Now</Button>
                

                </div>

                <div className='products-fetched-div' ref={ sneakerCollectionDiv } > 
                    <h3 className='mb-3'>Our Sneaker Collections</h3>
                    {/* <Row xs={ 1 } md={ 3 } >
                        {
                            data.FetchAllProducts.map( ( product, index ) => (
                                <Col>
                                    <Card className='card-style mb-5'>
                                        <Card.Img src={ product.coverPhotoUrl } variant='top' className='product-image'  />
                                        <Card.Body>
                                            <Card.Title> { product.name } </Card.Title>
                                            <Card.Body> Price: { product.price } </Card.Body>
                                            <Button variant='primary me-4' className=''> Buy now </Button>
                                            <Button variant='outline-primary'> Add to cart </Button>
                                        </Card.Body>
                                    </Card>
                                
                                </Col>
                            ))
                        }

                    </Row> */}


                    <Slider {...settings}>
                        {
                            data.FetchAllProducts.map( ( product, index ) => (
                                <Col key={ product.productID }>
                                <Link to={`product-details/${product.name}/${product.productID}`} className='product-details-link'>
                                <Card className='card-style mb-5' onClick={ () => console.log(product.name)} >
                                    <Card.Img src={ product.coverPhotoUrl } variant='top' className='product-image'  />
                                        <Card.Body>
                                            <Card.Title> { product.name } </Card.Title>
                                            <Card.Text> Price: { product.price } </Card.Text>
                                            <Button variant='primary me-4' className=''> Buy now </Button>
                                            <Button variant='outline-primary'> Add to cart </Button>
                                        </Card.Body>
                                </Card>
                                </Link>
                                </Col>
                            ))
                        }

                    </Slider>

                </div>

                </div>
             
            }

      </div>

    )




}




export default Products
