export default function Elem(props) {

    
    function Kattintas(){
        props.Kattintas(props.index)
    }

  return (
    <div className="elem" onClick={Kattintas}>
      <p>{props.ertek}</p>
    </div>
  );
}
