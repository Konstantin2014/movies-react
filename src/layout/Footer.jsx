function Footer() {
  return (
    <footer className="page-footer red lighten-1">
      <div className="container">
        © {new Date().getFullYear()} Copyright
        <a className="grey-text text-lighten-4 right" href="#!">
          Repo
        </a>
      </div>
    </footer>
  );
}

export default Footer;
