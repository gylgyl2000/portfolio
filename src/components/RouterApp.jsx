import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Accueil from './Accueil/Accueil';
import APropos from './APropos/APropos';
import Contact from './Contact/Contact';
import Competences from './Competences/Competences';
import Parcours from './Parcours/Parcours';
import Projets from './Projets/Projets';
import BuildATributePage from './Projets/MesProjets/BuildATributePage/BuildATributePage';
import BuildASurveyForm from './Projets/MesProjets/BuildASurveyForm/BuildASurveyForm';
import BuildAProductLandingPage from './Projets/MesProjets/BuildAProductLandingPage/BuildAProductLandingPage';
import BuildATechnicalDocumentationPage from './Projets/MesProjets/BuildATechnicalDocumentationPage/BuildATechnicalDocumentationPage';
import BuildAPersonalPortfolioWebpage from './Projets/MesProjets/BuildAPersonalPortfolioWebpage/BuildAPersonalPortfolioWebpage';
import WildCircus from './Projets/MesProjets/WildCircus/WildCircus';
import BuildARandomQuoteMachine from './Projets/MesProjets/BuildARandomQuoteMachine/BuildARandomQuoteMachine';
import BuildAMarkdownPreviewer from './Projets/MesProjets/BuildAMarkdownPreviewer/BuildAMarkdownPreviewer';
import BuildADrumMachine from './Projets/MesProjets/BuildADrumMachine/BuildADrumMachine';
import BuildAJavaScriptCalculator from './Projets/MesProjets/BuildAJavaScriptCalculator/BuildAJavaScriptCalculator';
import BuildA255Clock from './Projets/MesProjets/BuildA255Clock/BuildA255Clock';
import VisualizeDataWithABarChart from './Projets/MesProjets/VisualizeDataWithABarChart/VisualizeDataWithABarChart';
import VisualizeDataWithAScatterplotGraph from './Projets/MesProjets/VisualizeDataWithAScatterplotGraph/VisualizeDataWithAScatterplotGraph';
import VisualizeDataWithAHeatMap from './Projets/MesProjets/VisualizeDataWithAHeatMap/VisualizeDataWithAHeatMap';
import VisualizeDataWithAChoroplethMap from './Projets/MesProjets/VisualizeDataWithAChoroplethMap/VisualizeDataWithAChoroplethMap';
import VisualizeDataWithATreemapDiagram from './Projets/MesProjets/VisualizeDataWithATreemapDiagram/VisualizeDataWithATreemapDiagram';
import TimestampMicroservice from './Projets/MesProjets/TimestampMicroservice/TimestampMicroservice';
import RequestHeaderParserMicroservice from './Projets/MesProjets/RequestHeaderParserMicroservice/RequestHeaderParserMicroservice';
import URLShortenerMicroservice from './Projets/MesProjets/URLShortenerMicroservice/URLShortenerMicroservice';
import ExerciseTracker from './Projets/MesProjets/ExerciseTracker/ExerciseTracker';
import FileMetadataMicroservice from './Projets/MesProjets/FileMetadataMicroservice/FileMetadataMicroservice';
import TransformerUneMaquetteEnSite from './Projets/MesProjets/TransformerUneMaquetteEnSite/TransformerUneMaquetteEnSite';
import DynamiserUnePageWebAvecDesAnimationsCSS from './Projets/MesProjets/DynamiserUnePageWebAvecDesAnimationsCSS/DynamiserUnePageWebAvecDesAnimationsCSS';
import OptimiserUnSiteWebExistant from './Projets/MesProjets/OptimiserUnSiteWebExistant/OptimiserUnSiteWebExistant';
import ConstruireUnSiteECommerceEnJavaScript from './Projets/MesProjets/ConstruireUnSiteECommerceEnJavaScript/ConstruireUnSiteECommerceEnJavaScript';
import ConstruireUneAPISecuriseePourUneApplicationDAvisGastronomiques from './Projets/MesProjets/ConstruireUneAPISecuriseePourUneApplicationDAvisGastronomiques/ConstruireUneAPISecuriseePourUneApplicationDAvisGastronomiques';

export default function RouterApp() {
  
    return (
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projets/wild-circus" element={<WildCircus />} />
            <Route path="/projets/build-a-tribute-page" element={<BuildATributePage />} />
            <Route path="/projets/build-a-survey-form" element={<BuildASurveyForm />} />
            <Route path="/projets/build-a-product-landing-page" element={<BuildAProductLandingPage />} />
            <Route path="/projets/build-a-technical-documentation-page" element={<BuildATechnicalDocumentationPage />} />
            <Route path="/projets/build-a-personal-portfolio-webpage" element={<BuildAPersonalPortfolioWebpage />} />
            <Route path="/projets/build-a-random-quote-machine" element={<BuildARandomQuoteMachine />} />
            <Route path="/projets/build-a-markdown-previewer" element={<BuildAMarkdownPreviewer />} />
            <Route path="/projets/build-a-drum-machine" element={<BuildADrumMachine />} />
            <Route path="/projets/build-a-javascript-calculator" element={<BuildAJavaScriptCalculator />} />
            <Route path="/projets/build-a-25-5-clock" element={<BuildA255Clock />} />
            <Route path="/projets/visualize-data-with-a-bar-chart" element={<VisualizeDataWithABarChart />} />
            <Route path="/projets/visualize-data-with-a-scatterplot-graph" element={<VisualizeDataWithAScatterplotGraph />} />
            <Route path="/projets/visualize-data-with-a-heat-map" element={<VisualizeDataWithAHeatMap />} />
            <Route path="/projets/visualize-data-with-a-choropleth-map" element={<VisualizeDataWithAChoroplethMap />} />
            <Route path="/projets/visualize-data-with-a-treemap-diagram" element={<VisualizeDataWithATreemapDiagram />} />
            <Route path="/projets/timestamp-microservice" element={<TimestampMicroservice />} />
            <Route path="/projets/request-header-parser-microservice" element={<RequestHeaderParserMicroservice />} />
            <Route path="/projets/url-shortener-microservice" element={<URLShortenerMicroservice />} />
            <Route path="/projets/exercise-tracker" element={<ExerciseTracker />} />
            <Route path="/projets/file-metadata-microservice" element={<FileMetadataMicroservice />} />
            <Route path="/projets/transformer-une-maquette-en-site" element={<TransformerUneMaquetteEnSite />} />
            <Route path="/projets/dynamiser-une-page-web-avec-des-animations-CSS" element={<DynamiserUnePageWebAvecDesAnimationsCSS />} />
            <Route path="/projets/optimisez-un-site-web-existant" element={<OptimiserUnSiteWebExistant />} />
            <Route path="/projets/construire-un-site-e-commerce-en-javaScript" element={<ConstruireUnSiteECommerceEnJavaScript />} />
            <Route path="/projets/construire-une-API-securisee-pour-une-application-d-avis-gastronomiques" element={<ConstruireUneAPISecuriseePourUneApplicationDAvisGastronomiques />} />
          </Routes>
          </BrowserRouter>
      </AnimatePresence>
    );
  }