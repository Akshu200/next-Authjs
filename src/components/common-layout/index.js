import { Suspense } from "react";
import ReduxProvider from "../../provider";
import { auth } from "@/auth";
import Loading from "@/app/loading";
async function CommonLayout({ children }) {
  const getSession = await auth();
  return (
    <ReduxProvider getSession={getSession}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ReduxProvider>
  );
}
export default CommonLayout;
