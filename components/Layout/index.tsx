import Navbar from "../Navbar";

type PageProp={
  children: JSX.Element | JSX.Element[];
}

function Layout({children}:PageProp){
  return(
    <div>
    <Navbar />
    {children}
    </div>
  )
}

export default Layout;