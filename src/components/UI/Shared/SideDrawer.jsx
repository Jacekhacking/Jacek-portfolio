const SideDrawer = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="fixed right-0 top-0 h-screen w-4/5 max-w-sm bg-bg-surface border-l border-border
               flex items-center justify-center z-50 lg:hidden shadow-2xl"
  >
    {children}
  </div>
);

export default SideDrawer;
