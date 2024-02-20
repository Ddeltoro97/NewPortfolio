import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import i18next from 'i18next'
import {I18nextProvider} from 'react-i18next'
import './index.css'

import NavBar_en from "./translations/en/NavBar.json"
import NavBar_es from "./translations/es/NavBar.json"

import HeroSection_en from "./translations/en/HeroSection.json"
import HeroSection_es from './translations/es/HeroSection.json'

import Skills_en from "./translations/en/Skills.json"
import Skills_es from "./translations/es/Skills.json"

import Projects_en from "./translations/en/Projects.json";
import Projects_es from "./translations/es/Projects.json";

i18next.init({
  interpolation: {escapeValue: true},
  lng: "en",
  resources: {
    en:{
      NavBar: NavBar_en,
      HeroSection: HeroSection_en,
      Skills: Skills_en,
      Projects: Projects_en
      
    },
    es:{
      NavBar: NavBar_es,
      HeroSection: HeroSection_es,
      Skills: Skills_es,
      Projects: Projects_es

    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(

    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>,
)
