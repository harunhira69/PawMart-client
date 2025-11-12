import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ theme, setTheme, size = 24 }) => {
  const handleChange = (checked) => setTheme(checked ? "dark" : "light");

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={(e) => handleChange(e.target.checked)}
        className="hidden"
      />
      <div className="swap-on text-yellow-500">
        <FiSun size={size} />
      </div>
      <div className="swap-off text-gray-700">
        <FiMoon size={size} />
      </div>
    </label>
  );
};

export default ThemeToggle;
