import styled from 'styled-components'



export const WrapperFrom = styled.div `
  padding: 4em 0;
  font-family: Montserrat;
  
 
 
  .form_input:focus {
    outline: none;
  }
  .form_title {
    margin-bottom: 1.5em;
    font-size: calc(.028 * 100vw);
    font-weight: 600;
    line-height: 1;
  }
  
  .wrapper_btn {
  margin-top: 2em;
  text-align: center;
  }
  .form_submit_btn {
  font-size: 20px;
  padding: 10px 50px;
  color: white;
  background: orange;
  border: none;
  border-radius: 1em;
  cursor: pointer;
  transition-duration: .8s;
  }
  .form_submit_btn:hover{
   background: #ff6f00;
  }
  .form_submit_btn:focus {
  outline: none;
  }
  @media(max-width: 992px) {
    .input_textarea {
      padding-bottom: 2em !important;
    }
  }
  @media(max-width: 768px) {
    .form_title {
      font-size: 22px;
    }
    .input_textarea {
      
    }
    .input_first-name {
        width: 100% !important;
    }
  }
  @media(max-width: 375px) {
    .form_title {
      font-size: 20px !important;
    }
    .input_textarea {
      padding-bottom: 1em !important;
    }
    .upload_span {
      font-size: 12px !important;
    }
  }
`;