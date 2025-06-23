import { Suspense } from "react";
import MainPage from "./MainPage";
import MainPageSkeleton from "@/components/skeleton/widgets/MainPageSkeleton";

export default function Page() {
  return ( 
    <Suspense fallback={<MainPageSkeleton />}>
      <MainPage />
    </Suspense>
   );
}
