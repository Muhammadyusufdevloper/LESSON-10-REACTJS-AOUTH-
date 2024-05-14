import React, { useEffect, useState } from 'react'
import "./Products.scss"
import axios from '../../api'
import starImg from "../../assets/images/product/Three Star.svg"
import { Link } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState(null);
    const [limit, setLimit] = useState(1)
    const [loadingLimit, setLoadingLimit] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoadingLimit(true)
        axios
            .get(`/products?limit=${4 + 4 * limit }`)
            .then(response => setData(response.data.products))
            // .then(response => console.log(response.data.products))
            .catch(error => console.error(error))
            .finally(()=> {
                setLoadingLimit(false)
                setLoading(false)
            })
    }, [limit]);

    const products = data?.map((product) => (
        <div className='product__card' key={product.id}>
            <Link to={`/single/${product.id}`}>
                <div className='product__img-part'>
                    <img src={product.images[0]} alt={product.title} />
                </div>
            </Link>
            <div className='product__info-box'>
                <h3 className='product__info__title'>{product.title}</h3>
                <div className='product__info__part'>
                    <p className='product__info__price'>${product.price}</p>
                    <img src={starImg} alt="star img" />
                    <p className='product__info__count'>{"(" + product.stock + ")"}</p>
                </div>
            </div>
        </div>
    ));
    let loadingCount = (
        <div>
          <div className="product__loading__img-part loading__anime"></div>
          <div className="product__loading__info-part">
            <div className="loading__anime product__loading__info-part-div"></div>
            <div className="loading__anime product__loading__info-part-div"></div>
          </div>
          </div>
      );
      let loadingData = (
        <div className="product__loading">
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
          {loadingCount}
        </div>
      );
  return (
    <>
        <section className='product'>
            <div className='container'>
                <div className='product__top-box'>
                    <div></div>
                    <p>Our Products</p>
                </div>
                <div className='product__cards'>
                    {products}
                </div>
                {
                    loading?loadingData : <button disabled={loadingLimit} onClick={()=> setLimit(prev => prev +1)} className='product__btn'>View All Products</button>
                }
            </div>
        </section>
    </>
  )
}

export default Products