import ToggleButton from "@mui/material/ToggleButton";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { t } from "@lingui/macro";

function ThemeSwitcher({ theme, toggleTheme }: any) {
  return (
    <ToggleButton
      className="toggle-button"
      type="button"
      title={t`Change Theme`}
      value="check"
      onClick={e => toggleTheme(e)}
    >
      {theme === "dark" ? (
        <SvgIcon component={MoonIcon} color="primary" />
      ) : (
        <SvgIcon component={SunIcon} color="primary" />
      )}
    </ToggleButton>
  );
}

export default ThemeSwitcher;
