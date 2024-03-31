import styles from "../css/Item.module.css";
export let Item = ({ item }) => {
  return (
    <>
      <li className={`list-group-item ${styles.liItem}`}> {item}</li>
    </>
  );
};
