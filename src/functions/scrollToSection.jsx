import React from 'react'
import { useRef } from 'react'

const services = useRef(null);
const blog = useRef(null);
const contact = useRef(null);

export const scrollToSection = () => {
    window.scrollTo({
        top: services.current.offsetTop,
        behavior: 'smooth'
    });
}
