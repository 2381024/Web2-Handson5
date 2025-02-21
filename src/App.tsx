import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Product from "./pages/Product"
import Home from "./pages/Home"
import About from "./pages/About"
import Jobs from "./pages/Jobs"
import ContactInfo from "./layouts/ContactInfo"
import ContactForm from "./layouts/ContactForm"
import ContactLayout from "./layouts/ContactLayout"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="contact" element={<ContactLayout/>}>
        <Route path="info" element={<ContactInfo/>}/>
        <Route path="form" element={<ContactForm/>}/>
      </Route>
      <Route path="jobs" element={<Jobs/>}/>
    </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
