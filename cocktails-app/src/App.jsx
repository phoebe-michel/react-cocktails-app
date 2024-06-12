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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/cocktails/:cocktailName"
          element={<SearchResultsPage />}
          loader={searchResultsLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
