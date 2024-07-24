import Home from "../pages/home";
import Layout from "../components/layout";
import MyPokemon from "../pages/pokemon";
import PokemonDetail from "../components/pokemon-detail";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pokemon/:name",
        element: <PokemonDetail />,
      },
      {
        path: "/pokemon",
        element: <MyPokemon />,
      },
    ],
  },
]);
