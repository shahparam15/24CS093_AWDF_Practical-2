function Header({
  name = "Param Shah",
  themeColor = "#1e3a5f",
  subtitle = "Advanced Web Development Frameworks (ITUE301) — Practical 2",
}) {
  return (
    <header
      className="portfolio-header"
      style={{ backgroundColor: themeColor }}
    >
      <div className="header-container">
        <h1 className="header-title">Student Portfolio</h1>
        <p className="header-name">{name}</p>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}

export default Header;
