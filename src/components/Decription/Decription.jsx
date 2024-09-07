import css from "./Decription.module.css";

const Decription = () => {
  return (
    <div className={css.decription}>
      <h1 className={css.title}>
        <span className={css.highlighted}>Sip</span> Happens Café
      </h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Decription;
