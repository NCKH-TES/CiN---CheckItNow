import React, { useState, useEffect } from 'react';
import { unsplashApi, quotesApi } from '../../services/request';
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';
import * as S from './styles';

const StoryQuotes = () => {
  const [images, setImages] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [curQuotes, setCurQuotes] = useState(null);

  const handleChangeCurQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurQuotes(randomQuote);
  };

  useEffect(() => {
    const getQuotes = async () => {
      const { data } = await quotesApi.get('/');
      setQuotes(data?.results);
      setCurQuotes(data?.results[0]);
    };
    getQuotes();
  }, []);

  useEffect(() => {
    const getImages = async (query) => {
      let {
        data: { results },
      } = await unsplashApi.get(`/?query=${query}`);

      let urls = results.map((image) => image.urls.regular);
      setImages(urls);
    };
    if (curQuotes) {
      getImages(curQuotes?.tags[0]);
    }
  }, [curQuotes]);

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
        afterChange={handleChangeCurQuote}
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
