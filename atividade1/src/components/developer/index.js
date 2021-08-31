import "./style.css";
const Developer = ({ name, age, country }) => {
  return (
    <div className="user">
      <h3>Dev: {name}</h3>
      <p>Idade: {age}</p>
      <p>País: {country}</p>
    </div>
  );
};

export default Developer;
