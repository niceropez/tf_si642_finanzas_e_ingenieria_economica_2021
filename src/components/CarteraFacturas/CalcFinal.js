import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CrearGastos from "./CrearGastos";
import ListaCostes from "./ListaCostes";

const CalcFinal = ({
  state,
  handleChange,
  setState,
  carteraID,
  cFinales,
  setCFinales,
  carteraCalculated,
}) => {
  const [helper, setHelper] = useState(false);

  return (
    <div className="mt-4">
      <h3 className="mb-3">Costes / Gastos Finales</h3>
      {/* Motivo */}
      <FormControl variant="outlined" className="d-block mb-3">
        <InputLabel htmlFor="outlined-age-native-simple">
          Motivo Final Tipo
        </InputLabel>
        <Select
          disabled={carteraCalculated}
          native
          value={state.MotivoFinalTipo}
          onChange={handleChange}
          label="Motivo Final Tipo"
          inputProps={{
            name: "motivoFinalTipo",
            id: "motivoFinalTipo",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"portes"}>Portes</option>
          <option value={"gastosAdm"}>Gastos de Administracion</option>
          <option value={"otros"}>Otros Gastos</option>
        </Select>
      </FormControl>

      <div className="row">
        <div className="col mt-3">
          {/* Motivo Final Valor */}
          <FormControl variant="outlined" className="d-block">
            <InputLabel htmlFor="outlined-age-native-simple">
              Motivo Final Valor
            </InputLabel>
            <Select
              disabled={carteraCalculated}
              native
              value={state.motivoFinalValor}
              onChange={handleChange}
              label="Motivo Final Valor"
              inputProps={{
                name: "motivoFinalValor",
                id: "motivoFinalValor",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"efectivo"}>En Efectivo</option>
              <option value={"porcentaje"}>En Porcentaje</option>
            </Select>
          </FormControl>
        </div>
        <div className="col">
          {/* Motivo Moneda */}
          <TextField
            disabled={carteraCalculated}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="motivoFinalMonto"
            label="Motivo Final Monto"
            value={state.motivoFinalMonto}
            onChange={handleChange}
            name="motivoFinalMonto"
          />
        </div>
      </div>
      <CrearGastos
        type="final"
        state={state}
        helper={helper}
        setHelper={setHelper}
        carteraID={carteraID}
        carteraCalculated={carteraCalculated}
      />
      <ListaCostes
        carteraID={carteraID}
        type="final"
        helper={helper}
        setHelper={setHelper}
        cCostos={cFinales}
        setCCostos={setCFinales}
        carteraCalculated={carteraCalculated}
      />
    </div>
  );
};

export default CalcFinal;
