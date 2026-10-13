const PageContainer = ({ children, className = "", grid = false, gap = "gap-6" }) => (
  <div
    className={`w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8 lg:px-20
                ${grid ? `grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 ${gap}` : ""}
                ${className}`}
  >
    {children}
  </div>
);

export default PageContainer;
