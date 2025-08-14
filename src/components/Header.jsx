import { memo } from "react";

const Header = ({ title = "" }) => {
    console.log("Header render");
    return (<>
        <h2>Hook: {title}</h2>
        <hr/>
    </>);
};

export default memo(Header);