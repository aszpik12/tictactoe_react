import Elem from "./Elem";
import "./Jatekter.css";

export default function Jatekter(props) {
    function Kattintas(index){
        props.Kattintas(index)
    }
  return (
    <div className="jatekter">
      {props.lista.map((elem, index) => {
        return <Elem ertek={elem} index={index} key={index} Kattintas={Kattintas} />;
      })}
    </div>
  );
}
