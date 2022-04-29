import React from "react";
import { Routes, Route} from "react-router-dom";

import { Container } from '@material-ui/core';

import { HomePage } from "./components/HomePage";
import { EditPost } from "./components/EditPost";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditPost/>} />
      </Routes>
    </Container>
  );
}

export default App;
