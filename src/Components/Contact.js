import React from 'react'
import '../CSS/CSS.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
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

        <>
            <h1>Contact Form</h1>
            <div className="wpcf7" id="wpcf7-f156-p143-o1 formwrap">
                <form ref={form} onSubmit={sendEmail} method="post" className="wpcf7-form" novalidate="novalidate">
                    <p>
                        <span className="wpcf7-form-control-wrap Name">
                            <input type="text" name="from_name" size="40" className="nameinput wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name" />
                        </span>
                        <span className="wpcf7-form-control-wrap Email">
                            <input type="email" name="from_email" size="40" className="emailinput wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" />
                        </span>

                        <span className="wpcf7-form-control-wrap Message">
                            <textarea name="message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message"></textarea>
                        </span>
                        <input type="submit" value="Send" className="wpcf7-form-control wpcf7-submit bttn" />
                    </p>
                    <div className="wpcf7-response-output wpcf7-display-none">
                    </div>
                </form>
            </div>

        </>

    )
}
