import React from 'react';
import { Provider } from "react-redux";

import configureStore from "./store";

// Import components
import Header from "./Components/Header/Header";
import ImageGrid from "./Components/ImageGrid/ImageGrid";

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div> 
        <Header />
        <ImageGrid />
      </div>
    </Provider>
  );
}

export default App;
