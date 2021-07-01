import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import { firestore } from "../../utils/firebase";

const CrearGastos = ({
  carteraID,
  type,
  state,
  helper,
  setHelper,
  carteraCalculated,
}) => {
  const handleSubmit = () => {
    firestore
      .collection("carteras")
      .doc(carteraID)
      .collection("gastos")
      .add({
        tipo: type,
        motivoTipo:
          type === "inicial" ? state.motivoInicialTipo : state.motivoFinalTipo,
        motivoMonto:
          type === "inicial"
            ? state.motivoInicialMonto
            : state.motivoFinalMonto,
        motivoValor:
          type === "inicial"
            ? state.motivoInicialValor
            : state.motivoFinalValor,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setHelper(!helper);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert(error);
      });
  };
  return (
    <div>
      {!carteraCalculated && (
        <Button
          variant="contained"
          color="default"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleSubmit}
        >
          Añadir
        </Button>
      )}
    </div>
  );
};

export default CrearGastos;
