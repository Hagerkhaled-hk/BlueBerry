import { createRoot } from 'react-dom/client'
import PoductsContext from "./context/PoductsContext/PoductsContext.jsx"
import CartContextProvider from "./context/CartContext/CartContext"
import CategoryContextProvider from "./context/CategoryContext/CategoryContext"
import ComapreContextProvider from "./context/ComapreContext/ComapreContext"
import WishContextProvider from "./context/WishContext/WishContext"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<PoductsContext>
<CartContextProvider>
    
    <CategoryContextProvider>

        <ComapreContextProvider>
            <WishContextProvider>     
                   <App />
                   </WishContextProvider>

    </ComapreContextProvider>

    </CategoryContextProvider>

    </CartContextProvider>
</PoductsContext>

)
