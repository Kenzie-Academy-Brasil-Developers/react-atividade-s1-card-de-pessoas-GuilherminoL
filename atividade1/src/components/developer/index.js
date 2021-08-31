import "./style.css";
const Developer = ({ name, age, country }) => {
  return (
    <div class="user">
      <h3>Dev: {name}</h3>
      <p>Idade: {age}</p>
      <p>País: {country}</p>
    </div>
  );
};

export default Developer;
