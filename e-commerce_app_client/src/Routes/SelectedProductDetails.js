import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Card, Row, Col, Button } from 'react-bootstrap'
import Slider from 'react-slick'
import Stack from 'react-bootstrap/Stack'






// the graphql query to fetch selected product details.
const GET_SELECTED_PRODUCT_DETAILS = gql `
    query GETSELECTEDPRODUCTDETAILS($productName: String!) {
      GetSelectedProductDetails(productName: $productName) {
        name
        manufacturer
        price
        yearReleased
        coverPhotoUrl
        extraPhotoUrl1
        extraPhotoUrl2
        extraPhotoUrl3
        extraPhotoUrl4
        dateAdded
        gender

      }
    }

`







const SelectedProductDetails = () => {
  
  const params = useParams(null)

  const { loading, error, data } = useQuery(GET_SELECTED_PRODUCT_DETAILS, {
    variables: {
      productName: params.productName
    }
  })


  // slider settings.
  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    arrows: true,
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
    <div className='mt-5 ms-5 me-5'>

      { loading && <h3>loading product details.......</h3> }

      { error && <h3>failed to fetch product details due to error.....</h3> }

      { data && 
              <Row>
              <Col sm={ 8 }>
              <Slider {...settings}>
                  <Card className='card-style mb-5'>
                      <Card.Img variant='top' src={ data.GetSelectedProductDetails.extraPhotoUrl1 } className='product-image'  />
                      <Card.Body>
                          <Card.Title>{ data.GetSelectedProductDetails.name }</Card.Title>
                          <Card.Text>vfdbzvbbzxbhvaeibhes</Card.Text>
                      </Card.Body>
                  </Card>          

                  <Card className='card-style mb-5'>
                  <Card.Img variant='top' src={ data.GetSelectedProductDetails.extraPhotoUrl2 } className='product-image'  />
                      <Card.Body>
                          <Card.Title>{ data.GetSelectedProductDetails.name }</Card.Title>
                          <Card.Text>vfdbzvbbzxbhvaeibhes</Card.Text>
                      </Card.Body>
                  </Card>   

                  <Card className='card-style mb-5'>
                  <Card.Img variant='top' src={ data.GetSelectedProductDetails.extraPhotoUrl3 } className='product-image'  />
                      <Card.Body>
                          <Card.Title>{ data.GetSelectedProductDetails.name }</Card.Title>
                          <Card.Text>vfdbzvbbzxbhvaeibhes</Card.Text>
                      </Card.Body>
                  </Card>  

                  <Card className='card-style mb-5'>
                  <Card.Img variant='top' src={ data.GetSelectedProductDetails.extraPhotoUrl4 } className='product-image'  />
                      <Card.Body>
                          <Card.Title>{ data.GetSelectedProductDetails.name }</Card.Title>
                          <Card.Text>vfdbzvbbzxbhvaeibhes</Card.Text>
                      </Card.Body>
                  </Card>    
                    

              </Slider>
              </Col>

              <Col sm={ 4 } className='selected-product-details-col'>
                <div>
                <h2> { data.GetSelectedProductDetails.name } </h2>
                <h5> { data.GetSelectedProductDetails.price } </h5>
                <hr />
                <h4>Choose Your { data.GetSelectedProductDetails.name } Colour: </h4>
                <hr />
                <h4>Select Size: </h4>
                <hr />
                <h4>Select Quantity: </h4>
                <hr />
                <h6 className='mb-5 '>Reviews:</h6>

                <Button variant='primary' className='add-to-cart-btn' style={{ width: 100 + '%'}}> Add To Cart </Button>






                </div>


              </Col>
              </Row>

      
      }

    </div>
  )

}



export default SelectedProductDetails