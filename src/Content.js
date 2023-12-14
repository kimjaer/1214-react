import React from "react";
import { Route, Routes } from "react-router-dom";

function Content() {
  return (
    <Routes>
      <Route path='/' element={<>첫 페이지</>}></Route>
      <Route path='/com' element={<>회사소개</>}></Route>
      <Route path='/board' element={<>고객센터</>}></Route>
    </Routes>
  )
}

export default Content