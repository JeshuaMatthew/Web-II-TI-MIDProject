import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Carts from "./pages/Carts";
import Post from "./pages/Post";
import Product from "./pages/Product";
import Recipes from "./pages/Recipes";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import AddProduct from "../src/pages/addProduct";
import EditProduct from "./pages/EditProduct";
import RecipesDetail from "./pages/RecipesDetails";
import EditRecipes from "./pages/EditRecipes";
import AddRecipes from "./pages/AddRecipes";
import PostAdd from "./pages/PostAdd";
import PostEdit from "./pages/PostEdit";

const queryClient = new QueryClient()

function App() {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home/>} />
			<Route path="product" element={<Product />} />
			<Route path="product/add" element={<AddProduct />} />
			<Route path="product/:id" element={<ProductDetail/>}/>
			<Route path="product/:id/edit" element={<EditProduct/>}/>
			<Route path="recipes/:id/edit" element={<EditRecipes/>}/>
			<Route path="recipes" element={<Recipes />} />
			<Route path="recipes/add" element={<AddRecipes />} />
			<Route path="product/add" element={<AddProduct />} />
			<Route path="recipes/:id" element={<RecipesDetail />} />
			<Route path="posts" element={<Post />} />
			<Route path="posts/add" element={<PostAdd />} />
			<Route path="posts/:id/edit" element={<PostEdit />} />
			<Route path="carts" element={<Carts />} />
		</Route>
	));
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	)
}

export default App