import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import MoleculeCardItem from "../molecules/MoleculeCardItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>ROOOOOOOTTAAAAA
                    <Link to="bleep">Link 1</Link>
                </div>
    },
    {
        path: "/bleep",
        element: <div>bleep bleep tête de bleep
                    <MoleculeCardItem imageSource="fruit4.png"></MoleculeCardItem>
                    <MoleculeCardItem imageSource="fruit4.png" textButton="+"></MoleculeCardItem>
                    <MoleculeCardItem imageSource="fruit4.png" textButton="+" buttonWidth="50px"></MoleculeCardItem>
                </div>
    }
])

function Body(){
    return(
        <RouterProvider router={router}> 
            <div></div>
        </RouterProvider>
    )
}

export default Body;