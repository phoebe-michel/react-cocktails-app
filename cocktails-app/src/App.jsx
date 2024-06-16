import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFoundPage from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import RecipePage, { recipeLoader } from "./pages/RecipePage";
import SearchResultsPage, {
  searchResultsLoader,
} from "./pages/SearchResultsPage";
import CategoriesPage from "./pages/CategoriesPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/cocktails/searchbyname/:cocktail_name"
          element={<SearchResultsPage />}
          loader={searchResultsLoader}
        />
        <Route
          path="/cocktails/:id"
          element={<RecipePage />}
          loader={recipeLoader}
        />
        <Route path="/filterbycategory" element={<CategoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
