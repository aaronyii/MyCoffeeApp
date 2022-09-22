import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        }}
        className="h-full py-20 bg-cover "
      >
        <main className="mt-10 px-4 md:mt-16 mx-auto max-w-7xl lg:mt-20 lg:px-8 xl:mt-28">
          {props.children}
        </main>
        <div className="mt-40">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
