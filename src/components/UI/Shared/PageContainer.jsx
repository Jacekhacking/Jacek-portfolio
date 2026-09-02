const PageContainer = ({ children, className = "" }) => (
  <div className={`w-full max-w-5xl mx-auto px-8 lg:px-20 ${className}`}>
    {children}
  </div>
);

export default PageContainer;
