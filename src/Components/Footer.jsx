function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <div className="text-center md:p-5 p-3 border md:font-bold ">
        <p>©{getYear()} DokumenKerjaku. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
