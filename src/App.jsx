
import { Navbar } from "./components/navbar/navbar"
import Shop from "./components/shop/shop"

function App() {


  return (
    <div className="App">
      {/* <ShopContextProvider> */}
        <Navbar />
        <Shop />
      {/* </ShopContextProvider> */}
     
    </div>
  )
}

export default App
