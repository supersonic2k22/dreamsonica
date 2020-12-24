import styled from 'styled-components'

export const WrapperFrom = styled.div `
  padding: 10em 0 0;
  height: 100%;
  position: relative;
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
  
  .wrapper_checkbox {
    display: flex;
    justify-content: space-between;
  }
  
  @media(max-width: 576px) {
    .wrapper_checkbox {
      flex-direction: column;
    }
    .form_checkbox {
      margin-bottom: 20px;
    }
  }
  
  .wrapper_btn {
  text-align: center;
  }
  .form_submit_btn {
  font-size: 20px;
  padding: 12px 90px;
  font-weight: 600;
  color: white;
  background: orange;
  border: 2px solid orange;
  border-radius: 2em;
  cursor: pointer;
  transition-duration: .4s;
  }
  .form_submit_btn:hover{
   background: transparent;
    color: #ff8d00;
  }
  .form_submit_btn:focus {
  outline: none;
  }
  @media(max-width: 991px) {
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
    padding-top: 2em;
    
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