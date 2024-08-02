import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, reset as resetBlog } from "../../features/blogsSlice";
import { fetchCategories, reset as resetCategory } from "../../features/categoriesSlice";

import "../../App.css";

import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import BlogGrid from "../../components/BlogGrid";
import Footer from "../../components/Footer";
import Subheading from "../../components/Subheading";
import CategoriesList from "../../components/CategoriesList";
import SuccessToast from "../../components/SuccessToast";
import ErrorToast from "../../components/ErrorToast";
import Loader from "../../components/Loader";
import categoryService from "../../services/CategoryService";

export default function HomePage() {
  const dispatch = useDispatch();

  const blogsState = useSelector((state) => state.blogs) || {};
  const categoriesState = useSelector((state) => state.categories) || {};

  const {
    isError: isBlogsError,
    isSuccess: isBlogsSuccess,
    isLoading: isLoadingBlogs,
    message: blogsMessage,
  } = blogsState;

  const {
    isError: isCategoriesError,
    isSuccess: isCategoriesSuccess,
    isLoading: isLoadingCategories,
    message: categoriesMessage,
  } = categoriesState;

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBlogs());
    return () => {
      dispatch(resetBlog());
      dispatch(resetCategory());
    };
  }, [dispatch]);

  if (isLoadingCategories || isLoadingBlogs) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <Subheading subHeading={"Recent Blog Posts"} />
        <BlogGrid />
        <Subheading subHeading={"Categories"} />
        <CategoriesList />
        <Footer />
      </div>
      <SuccessToast
        show={isBlogsSuccess || isCategoriesSuccess}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
      <ErrorToast
        show={isBlogsError || isCategoriesError}
        message={blogsMessage || categoriesMessage}
        onClose={() => {
          dispatch(resetBlog());
          dispatch(resetCategory());
        }}
      />
    </>
  );
}