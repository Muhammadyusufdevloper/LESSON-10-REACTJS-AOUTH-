import React, { useEffect, useState } from "react";
import "./Single.scss";
import { useParams } from "react-router-dom";
import axios from "../../api";
import starImg from "../../assets/images/product/Three Star.svg";

const Single = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`/products/${params.id}`)
      .then((respons) => setData(respons.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  let loadingCount = (
    <div className="single__wrapper">
      <div className="single__loading__img-part loading__anime"></div>
      <div className="single__loading__info-part">
        <div className="loading__anime single__loading__info-part-div"></div>
        <div className="loading__anime single__loading__info-part-div"></div>
        <div className="loading__anime single__loading__info-part-div"></div>
        <div className="loading__anime single__loading__info-part-div"></div>
      </div>
    </div>
  );
  const singleCard = (
    <div className="single__cards">
      <div className="single__img-part">
        <img src={data?.thumbnail} alt="" />
      </div>
      <div className="single__info-part">
        <h3 className="single__info-part__title">{data?.title}</h3>
        <p className="single__info-part__desc">{data?.brand}</p>
        <p className="single__info-part__desc">{data?.description}</p>
        <div className="product__info__part">
          <p className="product__info__price">${data?.price}</p>
          <img src={starImg} alt="star img" />
          <p className="product__info__count">{"(" + data?.stock + ")"}</p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <section className="single">
        <div className="container">
          {loading ? loadingCount : singleCard}
        </div>
      </section>
    </>
  );
};

export default Single;
