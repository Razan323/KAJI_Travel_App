
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import TopHeaderSec from "./TopHeaderSec";
function Layout() {
  return (
    <div className={classes.styleImg}>
      <MainNavigation />
      <TopHeaderSec />
    </div>
  );
}

export default Layout;
