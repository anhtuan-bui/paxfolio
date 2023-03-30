import "./App.scss";
// import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
// import Personal from "./pages/Personal/Personal";
import FAQ from "./pages/FAQ/FAQ";
// import Resources from "./pages/Resources/Resources";
import NotFound from "./pages/NotFound/NotFound";
import { lazy, Suspense, useEffect } from "react";
import { ApolloProvider } from "@apollo/client/react";
import client from "./configurations/apollo";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Legal from "./pages/Legal/Legal";
import LegalDetail from "./pages/LegalDetail/LegalDetail";
import ContactUs from "./pages/ContactUs/ContactUs";
import Company from "./pages/Company/Company";
// import Pricing from "./pages/Pricing/Pricing";
import getToken from "./lib/clientToken";
import GQ from "./pages/GQ/GQ";
// import BlogDetails from "./blogs/blogs.jsx";

const Resources = lazy(() => import("./pages/Resources/Resources"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails/BlogDetails"));
const Home = lazy(() => import("./pages/Home/Home"));
// const Home = lazy(() => import("./pages/Home/Home"));
const Personal = lazy(() => import("./pages/Personal/Personal"));
const Business = lazy(() => import("./pages/Business/Business"));
const UseCases = lazy(() => import("./pages/UseCases/UseCases"));
const ResourceDetails = lazy(() => import("./pages/ResourceDetails/ResourceDetails"))

function App() {
	const MINUTE_MS = 250000;

	getToken();
	useEffect(() => {
		const interval = setInterval(() => {
			localStorage.removeItem("clientToken");
			getToken();
		}, MINUTE_MS);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Suspense>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="personal" element={<Personal />} />
							<Route path="business" element={<Business />} />
							<Route path="pricing" element={<Pricing />} />
							<Route path="faq" element={<FAQ />} />
							<Route path="resources" element={<Resources />} />
							<Route path="blogs" element={<Blogs />} />
							<Route path="blogs/:slug" element={<BlogDetails />} />
							<Route path="blog-details" element={<BlogDetails />} />
							<Route path="privacy-policy" element={<PrivacyPolicy />} />{" "}
							<Route path="legal" element={<Legal />} />
							<Route path="legal-detail" element={<LegalDetail />} />
							<Route path="not-found" element={<NotFound />} />
							<Route path="use-cases" element={<UseCases />} />
							<Route path="contact-us" element={<ContactUs />} />
							<Route path="company" element={<Company />} />
							<Route path="gq" element={<GQ />} />

							{/* <Route path="*" element={<NotFound />} /> */}
							<Route path="resource-details" element={<ResourceDetails />} /> 
						</Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
