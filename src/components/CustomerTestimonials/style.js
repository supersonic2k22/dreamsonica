import styled from 'styled-components'

export const WrapperCustomerTestimonials = styled.div `
    padding: 10em 0;
    background: #eaeaea;
`;

export const WrapperCustomerCarousel = styled.div `


.customer_carousel--title {
  margin: 0;
  margin-bottom: 1em;
  font-size: calc(.0333 * 100vw);
  font-weight: 700;
  line-height: 1;
}
.customer_carousel_label {
  width: 100%;
  background: #6b77c4;
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
}
.customer_carousel_label img{
  width: 100%;
  max-height: 400px;
  height: 100%;
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
}

.customer_carousel_testimonial {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  max-height: 540px;
  padding: 0 3em;
  background: white;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
}
   .carousel_testimonial_info_commit {
     margin-bottom: 2em;
   }
   .testimonial_info_commit--title {
      font-size: calc(.015 * 100vw);
      font-weight: 600;
      line-height: 1;
   }
   .testimonial_info_commit--text{
      font-size: 1.5em;
      line-height: 1.2;
   }
   .testimonial_author_fio {
      font-size: 1.3em;
      line-height: 1.3;
   }
   @media(max-width: 1199px) {
       .testimonial_info_commit--title {
        font-size: 24px;
      }
   }
   @media(max-width: 991px) {
      .customer_carousel--title {
          font-size: 28px;
      }
      .customer_carousel_label {
        border-top-right-radius: 2em;
      }
      .customer_carousel_label img{
          max-height: 300px;
          border-top-left-radius: 2em;
          border-top-right-radius: 2em;
          border-bottom-left-radius: 0;
      }
      .customer_carousel_testimonial {
          padding: 0 0 0 2em;
          padding-top: 2em;
          padding-bottom: 2em;
          border-radius: 0;
      }
   }
   @media(max-width: 320px) {
      .customer_carousel--title {
        font-size: 26px;
      }
   }
   
`;