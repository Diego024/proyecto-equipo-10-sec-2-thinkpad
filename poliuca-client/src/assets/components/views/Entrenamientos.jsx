import { useEffect,useState } from "react";
import "./../../css/entrenamientos.scss";
import Header from "../layout/Header.jsx";
import Logo from "../icons/Logo.jsx";
import Dialog from "../layout/Dialog.jsx";
import Input from "../layout/Input.jsx";
import{getAllRutinas,createdRutina} from "../../../services/rutina.service.js"
import { useNavigate } from "react-router-dom";

function Entrenamientos() {
  const navigate = useNavigate();

  const initialFormData={
    name:"",
    discipline:"",
    tipo:"",
    exercise:[],
  }

  const [dialogOpen, setDialogOpen] = useState(false);
  const [rutinas, setRutina] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();

    const errorsValidation = /*validateForm(formData) */ [];

    setErrorMessages([]);

    if (errorsValidation.length > 0) {
      setErrorMessages(errorsValidation);
      return;
    }

    try {
      await createdRutina(formData);
      setFormData(initialFormData);
    } catch (error) {
      alert("ERROR al guardar rutina: " + error);
    }
  };

  const fetchData = async () => {
    const rutinas = await getAllRutinas();
    setRutina(rutinas);
  };

  const handleChange = (e)=>{
    console.log(e.target.value);
    formData.tipo=e.target.value;
  }
  return (
    <>
         <Header />
      <section className="cards body-div">
        <h1 className="page-title">Gestion de Entrenamientos</h1>
        <div className="container-opciones">
          <div className="deportistas" onClick={() => navigate("/ejercicios")}>Ejercicios</div>
          <div className="equipos select">Entrenamientos</div>
        </div>
        {/* <a className="btn-agregar-deportista">Agregar nuevo equipo</a> */}
        <a className="exercise" onClick={handleOpenDialog}>
          Agregar nueva rutina{" "}
        </a>

        {rutinas.map((rutina)=>(

        <article className="card bkb" onClick={handleOpenDialog}>
          <div className="ball-container bkb">
            <img
              src="../../src/assets/img/basket-ball 1.png"
              alt="volleyball"
            />
          </div>

          <div className="deporte-container">
            <div className="seleccion basket">
              <p>{rutina.name}</p>
            </div>
            <div className="fecha-creacion">
              <p>Tipo: </p>
              <p className="bkb">{rutina.tipo}</p>
            </div>
            <div className="numero-jugadores">
              <p>Disciplina:</p>

              <div className="basketball">
                <p>{rutina.discipline}</p>
              </div>
            </div>
          </div>
          <br />
          <div>
            <button>Actualizar</button>
            <button>Eliminar</button>
          </div>
        </article>
         ))};
      
        <figure className="add-container">
          <img
            className="add-btn"
            src="../../src/assets/img/Add.png"
            alt="add"
          />
        </figure>
      </section>
      <Dialog
        title={"Registro de entrenamientos"}
        open={dialogOpen}
        onClose={handleCloseDialog}
        handleSubmit={handleSubmit}
      >
        <Input
          label={"Nombre del entrenamiento"}
          placeholder={"Ingresa el nombre del entrenamiento"}
          type={"text"}
          name={"name"}
        />

        <Input
          label={"Disciplina"}
          type={"select"}
          name={"sport"}
          placeholder={"Seleccione la disciplina"}
        >
          <option value="Volleyball">Volleyball</option>
          <option value="Soccer">Futbol</option>
          <option value="Basketball">Baloncesto</option>
          <option value="run">Atletismo</option>
        </Input>

        <Input
          label={"Fecha del entreno"}
          placeholder={"Ingrese la fecha del entreno"}
          type={"date"}
          name={"date"}
        />

        <Input label={"Tipo"} type={"checkbox"} >
          <label>
            <input type="radio" name="tipo" value="Individual" onChange={handleChange} />
            Individual
          </label>
          <label>
            <input type="radio" name="tipo" value="Grupal" onChange={handleChange} />
            Grupal
          </label>
        </Input>

        <Input
          label={"Ejercicios a realizar"}
          placeholder={"Seleccione los ejercicios"}
          type={"select"}
          name={"exercises"}
        >
          <option value="press">Press</option>
          <option value="remo">Remo</option>
          <option value="squat">Squat</option>
          <option value="curl">Curl</option>
          <option value="cardio">Cardio</option>
        </Input>
      </Dialog>

    </>
  );
}

export default Entrenamientos;
