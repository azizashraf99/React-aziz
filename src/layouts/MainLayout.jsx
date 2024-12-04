import MainNavbar from "../components/MainNavbar";
import MainFooter from "../components/MainFooter";

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <MainFooter />
    </>
  );
}
