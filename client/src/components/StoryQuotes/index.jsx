import React, { useState, useEffect } from 'react';
import { unsplashApi, quotesApi } from '../../services/request';
import * as S from './styles';

const StoryQuotes = () => {
  const [images, setImages] = useState([]);
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    const getQuotes = async () => {
      const { data } = await quotesApi.get('/');
      setQuotes(data?.results[0]);
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
    if (quotes) {
      getImages(quotes?.tags[0]);
    }
  }, [quotes]);

  return (
    <S.StoryWrapper>
      <S.HeaderQuotes>Make your day better</S.HeaderQuotes>
      <S.Carousel autoplay effect="fade" autoplaySpeed={7000}>
        {images.map((image) => (
          <S.Image src={image} key={image} alt="" />
        ))}
      </S.Carousel>
      <S.QuoteContent>{`"${quotes?.quote}"`}</S.QuoteContent>
      <S.QuoteAuthor> {`- ${quotes?.author}`}</S.QuoteAuthor>
    </S.StoryWrapper>
  );
};

export default StoryQuotes;
