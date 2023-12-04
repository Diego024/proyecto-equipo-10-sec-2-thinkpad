import { useEffect,useState } from "react";
import "./../../css/ejercicios.scss";
import Header from "../layout/Header.jsx";
import Dialog from "../layout/Dialog.jsx";
import Input from "../layout/Input.jsx";
import { useNavigate } from "react-router";
import{getAllEjercicios,createdEjercicio} from "../../../services/ejercicio.service.js"

function Ejercicios() {
  const navigate =useNavigate();

  const initialFormData={
   name:"",
   grupo_muscular:"",
   imagen:"",
   equipo:"",
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [ejercicios, setEjercicio] = useState([]);
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
      await createdEjercicio(formData);
      console.log(formData);
      setFormData(initialFormData);
    } catch (error) {
      alert("ERROR al guardar el ejercicio: " + error);
    }
  };

  const fetchData = async () => {
    const ejercicios = await getAllEjercicios();
   console.log(ejercicios)
    setEjercicio(ejercicios);
  };

  return (
    <>
      <Header />

      <section className="cards body-div">
        <h1 className="page-title">Gestion de entrenamientos</h1>
        <div className="container-opciones2">
          <div className="ejercicios select">Ejercicios</div>
          <div className="rutinas" onClick={()=>navigate("/entrenamientos")}>Entrenamientos</div>
        </div>
        <a className="btn-nuevo-ejercicio" onClick={handleOpenDialog}>
          Agregar nuevo ejercicio
        </a>
         
         {ejercicios.map((ejercicio)=>(
        
        <article className="card abdomen">
          <div className="parteCuerpo-container">
            <img src="../../src/assets/img/abs.png" alt="abs" />
          </div>

          <div className="rectangle-container">
            <img
              className="rectangle"
              src="../../src/assets/img/rectangle.png"
              alt="rectanguloQueSepara"
            />
          </div>
          <div className="ejercicio-container">
            <div className="ejercicio-item">
              <p className="name-ejercicio">{ejercicio.name}</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/target.png" alt="" />
              <p className="body-focus">{ejercicio.grupo_muscular}</p>
            </div>

            <div className="ejercicio-item">
              <img src="../../src/assets/img/pilates.png" alt="staff" />
              <p className="material">{ejercicio.equipo}</p>
            </div>
          </div>
        </article> 
         ))} ;
      </section>

      <Dialog
        title={"Registro de entrenamientos"}
        open={dialogOpen}
        onClose={handleCloseDialog}
        handleSubmit={handleSubmit}
      >
        <Input
          label={"Nombre del ejercicio"}
          placeholder={"Ingresa el nombre del ejercicio"}
          type={"text"}
          name={"name"}
          formData={formData}
          setFormData={setFormData}
        />

        <Input
          label={"Musculo que se enfoca"}
          type={"select"}
          name={"grupo_muscular"}
          placeholder={"Musculo que se enfoca"}
          formData={formData}
          setFormData={setFormData}
        >
          <option value="pecho">Pecho</option>
          <option value="espalda">Espalda</option>
          <option value="pierna">Pierna</option>
          <option value="brazos">Brazos</option>
        </Input>

        <Input
          label={"Equipo a utilizar"}
          placeholder={"Ingrese el equipo a utilizar"}
          type={"text"}
          name={"equipo"}
          formData={formData}
          setFormData={setFormData}
        />
      </Dialog>
    </>
  );
}

export default Ejercicios;
