import React, { useState, useEffect } from 'react';
import { unsplashApi, quotesApi } from '../../services/request';
import * as S from './styles';

const StoryQuotes = () => {
  const [images, setImages] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      const { data } = await quotesApi.get('/qod?language=en');
      setQuote(data.contents.quotes[0]);
    };
    getQuote();
  }, []);

  useEffect(() => {
    const getImages = async (query) => {
      let {
        data: { results },
      } = await unsplashApi.get(`/?query=${query}`);

      let urls = results.map((image) => image.urls.regular);
      setImages(urls);
    };
    if (quote) {
      getImages(quote.category);
    }
  }, [quote]);

  return (
    <S.StoryWrapper>
      <S.HeaderQuotes>Make your day better</S.HeaderQuotes>
      <S.Carousel autoplay effect="fade" autoplaySpeed={7000}>
        {images.map((image) => (
          <S.Image src={image} key={image} alt="" />
        ))}
      </S.Carousel>
      <S.QuoteContent>{`"${quote?.quote}"`}</S.QuoteContent>
      <S.QuoteAuthor> {`- ${quote?.author}`}</S.QuoteAuthor>
    </S.StoryWrapper>
  );
};

export default StoryQuotes;
