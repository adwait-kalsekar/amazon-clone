import React from 'react'

// CSS imports
import './Home.css'

// User imports 
import prime_logo from './utils/prime_logo_copy.jpeg';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img className='home__image' src={prime_logo} alt="" />
            <div className='home__row'>
                <Product
                    id={1}
                    title="Apple iPad Air M1"
                    price={69990}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY436_QL65_.jpg"
                />
                <Product
                    id={2}
                    title="Apple iPhone 11"
                    price={49990}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/31PpUfTCiFL._AC_UY436_QL65_.jpg"
                />
            </div>
            <div className='home__row'>
                <Product
                    id={3}
                    title="Tupperware Bottle [Set of 4]"
                    price={799}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/719o0MnWDML._AC_UL640_QL65_.jpg"
                />
                <Product
                    id={4}
                    title="G-Shock Limited Edition Watch"
                    price={19799}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81qdD9+GQ4L._AC_UL640_QL65_.jpg"
                />
                <Product
                    id={5}
                    title="Mickey Mouse T-Shirt"
                    price={1299}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/31dsuuxfmpL._AC_UF226,226_FMjpg_.jpg"
                />
            </div>
            <div className='home__row'>
                <Product
                    id={6}
                    title="The Lean Startup"
                    price={299}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL640_QL65_.jpg"
                />
                <Product
                    id={7}
                    title="Zero To One"
                    price={499}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71RQ0N83RGL._AC_UY436_QL65_.jpg"
                />
            </div>
        </div>
    )
}

export default Home