function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="text-center md:p-5 p-3 border-t md:font-bold bg-white">
      <p>©{getYear()} DokumenKerjaku. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
