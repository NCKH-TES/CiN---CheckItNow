import styled from 'styled-components';
import { Carousel as AntCarousel } from 'antd';

export const StoryWrapper = styled.div`
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderQuotes = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #556a9e;
  margin-bottom: 21px;
`;

export const Carousel = styled(AntCarousel)`
  width: 314px;
  padding: 18px;
  background: #fff;
`;

export const Image = styled.img`
  max-height: 145px;
  object-fit: cover;
`;

export const QuoteContent = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-top: 28px;
  margin-bottom: 8px;
`;

export const QuoteAuthor = styled.p`
  font-style: italic;
`;
