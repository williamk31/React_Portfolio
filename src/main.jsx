import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
// import Home from './pages/Home.jsx';
// import ContactForm from './pages/Contact.jsx';
// import Error from './pages/Error.jsx';
// import Portfolio from './pages/Portfolio.jsx';
// import Resume from './pages/Resume.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/portfolio',
//         element: <Portfolio />,
//       },
//       {
//         path: '/contact',
//         element: <ContactForm />,
//       },
//       {
//         path: '/resume',
//         element: <Resume />
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
