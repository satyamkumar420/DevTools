import { NavLink } from "react-router-dom";
import { Links } from "../utils/Link/Links";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  // TODO: while use random color then not use same color fix that
  let previousIndex;
  const getRandomColor = () => {
    const colors = [
      "#f5d939",
      "#ff0099",
      "#00ff91",
      "#00FFFF",
      "#00ff1e",
      "#2469fe",
      "#b023fc",
      "#ee1d2f",
      "#f96c26",
    ];

    // Generate a random index different from the previous one
    let randomIndex = Math.floor(Math.random() * colors.length);
    while (randomIndex === previousIndex) {
      randomIndex = Math.floor(Math.random() * colors.length);
    }
    // Store the current index for the next call
    previousIndex = randomIndex;
    return colors[randomIndex];
  };

  return (
    <aside
      className="fixed h-screen top-0  left-0 bg-[#1a1c2e] p-4 shadow-2xl  border-r-2 border-r-cyan-500 z-50 "
      aria-label="Sidebar"
    >
      <div className="mt-20">
        <ul>
          {Links.map((item, index) => (
            <li key={index} className="mb-4 whitespace-nowrap ">
              <NavLink
                to={item.link}
                className="transition-all ease-in-out shadow-2xl border-2 border-cyan-500 text-blue-50  flex items-center gap-2 rounded hover:bg-gray-900 hover:text-cyan-400"
                onClick={handleNavLinkClick}
              >
                <span
                  className="text-cyan-500 py-2 pl-2"
                  style={{ color: getRandomColor() }}
                >
                  {" "}
                  {item.icon}
                </span>
                <span className="py-2 pr-2 "> {item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
