// eslint-disable-next-line react/prop-types
export const Background = ({ children, style }) => (
  <div
    style={{
      backgroundColor: "#242424",
      minHeight: "100vh",
      width: "100vw",
      // display: "flex",
      // flexWrap: "wrap",
      ...style
    }}
  >
    {children}
  </div>
);
