import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import logo from '/spiner.png?url';

export default function Ppmarket() {
    return (
        <>
            <Header />
            <Navigation />
            <Footer />
        </>
    );
}