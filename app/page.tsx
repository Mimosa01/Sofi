import { Suspense } from "react";
import MainPage from "./MainPage";

export default function Page() {
  return ( 
    <Suspense>
      <MainPage />
    </Suspense>
   );
}
