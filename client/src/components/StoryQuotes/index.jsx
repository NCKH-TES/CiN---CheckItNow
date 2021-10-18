import React, { useState, useEffect } from 'react';
import { unsplashApi } from '../../services/request';
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';
import quotes from '../../constants/quotes';
import * as S from './styles';

const StoryQuotes = () => {
  const [images, setImages] = useState([]);
  const [curQuotes, setCurQuotes] = useState(quotes[0]);

  const handleChangeCurQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurQuotes(randomQuote);
  };

  useEffect(() => {
    const getImages = async (query) => {
      let {
        data: { results },
      } = await unsplashApi.get(`/?query=${query}`);

      let urls = results.map((image) => image.urls.regular);
      setImages(urls);
    };
    getImages('sunset');
  }, []);

  return (
    <S.StoryWrapper>
      <S.HeaderQuotes>Make your day better</S.HeaderQuotes>
      <S.Carousel
        autoplay
        effect="fade"
        autoplaySpeed={7000}
        arrows
        dots={false}
        nextArrow={<ChevronRight />}
        prevArrow={<ChevronLeft />}
        beforeChange={handleChangeCurQuote}
      >
        {images.map((image) => (
          <S.Image src={image} key={image} alt="" />
        ))}
      </S.Carousel>
      <S.QuoteContent>{`"${curQuotes?.quote}"`}</S.QuoteContent>
      {/* <S.QuoteAuthor> {`- ${quotes?.author}`}</S.QuoteAuthor> */}
    </S.StoryWrapper>
  );
};

export default StoryQuotes;
