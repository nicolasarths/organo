import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    props.onSubmit({
      name,
      role,
      image,
      team
    })
    
    const functions = [setName, setRole, setImage, setTeam]
    functions.forEach(f => f(''))
  }
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField   
          label="Nome"
          name="nome"
          value={name}
          onAlter={value => { setName(value) }}
          placeholder="Digite o seu nome"
          required
        />
        <TextField
          label="Cargo"
          name="cargo"
          value={role}
          onAlter={value => { setRole(value) }}
          placeholder="Digite o seu cargo"
          required
        />
        <TextField
          label="Imagem"
          name="imagem"
          value={image}
          onAlter={value => { setImage(value) }}
          placeholder="URL da imagem"
        />
        <Dropdown 
          placeholder="Selecione o time"
          label="Time"
          name="time"
          value={team}
          onAlter={value => { setTeam(value) }}
          items={props.teams} 
          required
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
