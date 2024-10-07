import React from "react";
import '../../style/phytobloom/form.css';
import { enviarEmail } from "../../controllers/sendEmail";
export default function SectionForm() {
  const [formData, setFormData] = React.useState({
    nome: "",
    sobrenome: "",
    email: "",
    mensagem: "",
    plataforma: "phytobloom"
  });
  const [message, setMessage] = React.useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendMail = async (e) => {
    e.preventDefault();
    const { nome, sobrenome, email, mensagem } = formData;

    console.log("Nome: ", nome);
    console.log("Sobrenome: ", sobrenome);
    console.log("Email: ", email);
    console.log("Mensagem: ", mensagem);

    if (nome === "" || sobrenome === "" || email === "" || mensagem === "") {

      alert("Preencha todos os campos!");
      return;
    } else {
      const response = await enviarEmail(email, nome, sobrenome, mensagem, "phytobloom");
      if (response.data && response.data.message) {
        setMessage(response.data.message);
        setInterval(() => {
          setMessage("");

        }, 3000);
      }
    };
  }
  return (
    <div className="contact-container">
      <div id="textoform">
        <h1 id="h1Phytobloom">Entre em contato conosco!</h1>
      </div>
      <div className="form-content">
        <form id="formPhytobloom" onSubmit={sendMail}>
          <div className="input-group">
            <div className="input-item">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                placeholder="Sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-item">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Mensagem"
              value={formData.mensagem}
              onChange={handleChange}
            />
          </div>
          <button id="botaoPhytobloom" type="submit" onClick={sendMail}>Enviar</button>
        </form>
      </div>
      {message && (
        <div className="message-box">
          {message}
        </div>
      )}
    </div>
  );
}
