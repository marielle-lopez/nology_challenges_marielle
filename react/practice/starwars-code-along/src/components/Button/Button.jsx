import styles from "./Button.module.scss";

const Button = ({ children, handleClick, type }) => {
  const classes = [];

  if (type === "primary") {
    classes.push(styles.button_primary);
  }

  if (type === "secondary") {
    classes.push(styles.button_secondary);
  }

  return (
    <button className={classes.join(" ")} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
