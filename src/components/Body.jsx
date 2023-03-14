import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>ROOOOOOOTTAAAAA
                    <Link to="bleep">Link 1</Link>
                </div>
    },
    {
        path: "/bleep",
        element: <div>bleep bleep tête de bleep</div>
    }
])

function Body(){
    return(
        <RouterProvider router={router}> 
            <div>
                
                <br />
                this is the app body
                 
            </div>
        </RouterProvider>
    )
}

export default Body;