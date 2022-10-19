import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lend } from "../components/Lend/Lend";
import { Payment } from "../components/Pyment/Payment";
import Login from "../components/Login/Login";
import { Statements } from "../components/Statemets/Statements";
import { StateTable } from "../components/Statemets/Table";

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/lend" element={<Lend />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/statements" element={<Statements />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
