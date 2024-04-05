import { BrowserRouter } from "react-router-dom";
import { Admin } from "./CommonAdmin";

export default function BrowserAdmin() {
  return (
    <BrowserRouter>
      <Admin />
    </BrowserRouter>
  );
}
