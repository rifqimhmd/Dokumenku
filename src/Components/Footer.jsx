function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <div className="text-center md:p-5 p-3 border md:font-bold absolute bottom-0 left-0 right-0 ">
        <p>©{getYear()} DokumenKerjaku. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
