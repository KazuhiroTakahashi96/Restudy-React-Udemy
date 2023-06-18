const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <div>We're open from 12:00 to 22:00. Come visit us or order online.</div>
  );
};

export default Footer;
