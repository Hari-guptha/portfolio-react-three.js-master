import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import '../assets/css/central.css'
import '../assets/css/contact.css'
import { Stack } from "@mui/material";
import Tilt from 'react-tilt';
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Titan",
                    from_email: form.email,
                    to_email: "harihariguptha@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div id="Contact">
        <Tilt options={{ max: 10, speed: 400, perspective: 1000,scale: 0.9 }}>
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            id="formcard"  className='glow-on-hover'
        >
            <h1>Contact me</h1>
            <Stack direction={"column"}>
            
                <span >Your Name</span>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                />

                <span >Your email</span>
                <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your web address?"

                />
                <span >Your Message</span>
                <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='What you want to say?'

                />

            <button
                type='submit'
            >
                {loading ? "Sending..." : "Send"}
            </button>
            </Stack>
        </form>
        </Tilt>
        </div>
    )
}

export default Contact