import styles from "./Button.module.css";

function ButtonComponent({ title, onClick, disabled, id, info, setInfo }) {
  const sort = ()=>{
    [...info]?.sort((function (a,b){
      return (a.poulation-b.population)
    }))
    console.log("hi")
    setInfo(info)

  }


  return (
    <button id={id} data-testid="button-component" className={styles.button} onClick={sort}>
      {title}
    </button>
  );
}

export default ButtonComponent;
