import React from "react";
import Hero from "../components/Hero";
// import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';


import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const SERVICE_ID = "service_m24rprv";
const TEMPLATE_ID = "template_kpqdtk5";
const USER_ID = "3-dI1IsG3III0NgRB";

// npm i @emailjs/browser

const Contact = () => {
    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm( SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    };

  return (
    <div className="page">
      <Hero>
        {/* <Banner> */}
        <div className="contactform">
        <Form onSubmit={handleOnSubmit}>
          <>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
      
        />
        </><>
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
         
        /></>
        <>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
          
        /></>
      
        <Button type='submit' className="btn-primary">
            send
          </Button>
         {"     "}
          <Link to="/" className="btn-primary">
            return home
          </Link>
      </Form>
      </div>

        {/* </Banner> */}
      </Hero>
      <Footer />
    </div>
  );
};

export default Contact