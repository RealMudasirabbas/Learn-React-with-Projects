import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import "./App.scss"

function App() {
    return(
	<>
		<Routes >
			<Route path="/" element={<Layout />} />
		</Routes>
	</>
)}

export default App
