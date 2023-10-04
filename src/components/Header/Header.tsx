import "./Header.css";

interface Header {
  headerText: string;
}

function CustomHeader({ headerText: customHeader }: Header) {
  return <h1 className="header">{customHeader}</h1>;
}

export default CustomHeader;
