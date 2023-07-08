import { useEffect, useState } from "react";

import Init from "./pages/Init";
import Home from "./pages/Home";

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handlePage = () => setIsLoading(false)

  useEffect(() => {
    setTimeout(handlePage, 1000)
  }, [])
  
  return (
    <>
      { isLoading && (
          <Init />
        ) 
      }
      
      { !isLoading && (
          <Home />
        ) 
      }
    </>
  )
}
