import React from 'react'

import '../CSS/CSS.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from 'react-router-dom';
export default function Contact() {
    const form = useRef();
    const nav = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fh1617f', 'template_gzodfg1', form.current, '6097PIGs_6WuEMrQW')
            .then((result) => {
                alert("Message Sent Successfully :)")
            }, (error) => {
                console.log(error.text);
            });
        nav('/')
    };
    return (

        <div className='form' >
            <Link to={"/"} style={{ margin: '1rem', textDecoration: 'none', color: "#573685" }}><i class="fa-solid fa-backward"></i> Back</Link>
            <h1>Connect with me ..</h1>
            <div className="formBox " id="wpcf7-f156-p143-o1  ">
                <form ref={form} onSubmit={sendEmail} method="post" className="wpcf7-form" novalidate="novalidate">
                    <p>
                        <span className="contacts wpcf7-form-control-wrap Name">
                            <input type="text" name="from_name" size="40" className="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name"
                            />
                        </span>
                        <span className="wpcf7-form-control-wrap Email">
                            <input type="email" name="from_email" size="40" className="emailinput wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" />
                        </span>

                        <span className="wpcf7-form-control-wrap Message">
                            <textarea name="message" cols="40" rows="10" aria-invalid="false" placeholder="Message"></textarea>
                        </span>
                        <button type="submit" value="Send" className="connectBtn wpcf7-form-control wpcf7-submit ">Send</button>
                    </p>
                </form>
            </div>

        </div>

    )
}
