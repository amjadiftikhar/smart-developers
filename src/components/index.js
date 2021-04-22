// importing all routes in this index file
import Home from "./home.components/Home";
import About from "../pages/about.pages/About";
import Contact from "../pages/contact.pages/Contact";
import Layout from "./layout.components/Layout";
import NavigationBar from "./navigation.components/NavigationBar";
import Portfolio from "../pages/portfolio.pages/Portfolio";
import Services from "../pages/services.pages/ServicesPage";
import Footer from "./footer.components/Footer";
import Page404 from "../pages/pageNotFound/PageNotFound";
import PortfolioCatalog from "../pages/portfolioCatalog.pages/PortfolioCatalogPage"

// exporting all routes from this index file
export {Home, About, Contact, Layout, 
    NavigationBar, Portfolio, Services, Footer, Page404, PortfolioCatalog
};