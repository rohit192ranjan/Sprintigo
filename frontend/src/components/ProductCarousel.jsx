import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import carousel1 from '../assets/carousel1.png'; // Import your carousel images here.
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';

const carouselData = [
  {
    id: 1,
    image: carousel1,
    productId: '64b84f6f492aca46cb52401e', // Replace with the actual product ID or identifier for the first product.
  },
  {
    id: 2,
    image: carousel2,
    productId: '64b84f6f492aca46cb52401f', // Replace with the actual product ID or identifier for the second product.
  },
  {
    id: 3,
    image: carousel3,
    productId: '64b84f6f492aca46cb524020', // Replace with the actual product ID or identifier for the third product.
  },
];

const ProductCarousel = () => {
  return (
    <Carousel pause='hover' className='bg-primary mb-4'>
      {carouselData.map((carouselItem) => (
        <Carousel.Item key={carouselItem.id}>
          <Link to={`/product/${carouselItem.productId}`}>
            <Image
              style={{
                resizeMode: 'cover',
                height: '10%',
              }}
              className='carouselImg'
              src={carouselItem.image}
              alt={`Product ${carouselItem.id}`}
              fluid
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
