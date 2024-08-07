import css from "./Camper.module.css";

const Camper = (camper) => {
  return (
    <div className={css.wrapper}>
      <div className="gallery">
        {camper.gallery.map((img, index) => (
          <img key={index} src={img} alt={`Camper ${index + 1}`} />
        ))}
      </div>
      
      <div></div>
    </div>
  );
};

export default Camper;
