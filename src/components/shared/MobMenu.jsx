import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStack, setMenuStack] = useState([]); // stack for nested menus
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setMenuStack([]);
  };

  useEffect(() => {
    setIsOpen(false);
    setMenuStack([]);
  }, [location.pathname]);

  const currentMenu =
    menuStack.length === 0 ? Menus : menuStack[menuStack.length - 1].subMenu;
  const currentTitle =
    menuStack.length === 0 ? null : menuStack[menuStack.length - 1].title;

  const openSubMenu = (subMenu, title) => {
    setMenuStack([...menuStack, { title, subMenu }]);
  };

  const goBack = () => {
    setMenuStack((prev) => prev.slice(0, -1));
  };

  return (
    <div>
      {!isOpen && (
        <button
          className="lg:hidden z-[999] relative text-black"
          onClick={toggleDrawer}
        >
          <Menu />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[998]"
          onClick={toggleDrawer}
        />
      )}

      <motion.div
        className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-[999] lg:hidden overflow-y-auto p-6 pt-16 shadow-lg font-primary font-bold"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={toggleDrawer}
        >
          <X />
        </button>

        {/* Back Button */}
        {menuStack.length > 0 && (
          <div className="flex items-center mb-5 -mt-12 gap-[90px]">
            <button
              onClick={goBack}
              className="mr-2 text-gray-600"
              aria-label="Back"
            >
              <ArrowLeft />
            </button>
            <h2 className="text-[15px] font-primary tracking-tight font-semibold">
              {currentTitle}
            </h2>
          </div>
        )}

        <ul>
          {currentMenu.map(({ name, path, subMenu }) => {
            const hasSubMenu = subMenu?.length > 0;

            return (
              <li
                key={name}
                className="border-t border-black/10 last:border-b-0"
              >
                <div
                  onClick={() => {
                    if (hasSubMenu) {
                      openSubMenu(subMenu, name);
                    } else {
                      setIsOpen(false);
                      setMenuStack([]);
                    }
                  }}
                  className="flex items-center justify-between py-2.5 rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  <Link
                    to={path || "#"}
                    onClick={(e) => {
                      if (hasSubMenu) e.preventDefault();
                    }}
                    className="flex-grow text-[15px] text-primary font-primary"
                  >
                    {name}
                  </Link>
                  {hasSubMenu && <ChevronRight size={20} />}
                </div>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobMenu;
