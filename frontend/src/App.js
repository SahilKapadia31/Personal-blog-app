import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./components/CreateBlog";
import ViewBlog from "./components/ViewBlog";
import EditBlogs from "./components/EditBlogs";
import NotFound from "./pages/NotFound";
import { BlogProvider } from "./context/BlogContext";

function App() {
  return (
    <>
      <BlogProvider>
        <Router>
          <div>
            <Header />
            <div className="mt-32">
              <Routes>
                <Route path="/" element={<BlogList />} />
                <Route path="/createblog" element={<CreateBlog />} />
                <Route path="/posts/:id" element={<ViewBlog />} />
                <Route path="/edit/:id" element={<EditBlogs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </BlogProvider>
    </>
  );
}

export default App;
