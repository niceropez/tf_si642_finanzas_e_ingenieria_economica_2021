import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const CalcFacturas = ({ state, handleChange, setState }) => {
  return (
    <div>
      <h3 className="mb-3">Calculador de Facturas</h3>
      {/*Dias Año */}
      <FormControl variant="outlined" className="d-block mb-3">
        <InputLabel htmlFor="outlined-age-native-simple">Dias Año</InputLabel>
        <Select
          native
          value={state.diasAnio}
          onChange={handleChange}
          label="Dias Año"
          inputProps={{
            name: "diasAnio",
            id: "diasAnio",
          }}
        >
          <option aria-label="None" value="" />
          <option value={360}>360 días</option>
          <option value={365}>365 días</option>
        </Select>
      </FormControl>

      {/* Plazo de Tasa */}
      <FormControl variant="outlined" className="d-block">
        <InputLabel htmlFor="outlined-age-native-simple">
          Plazo de Tasa
        </InputLabel>
        <Select
          native
          value={state.plazo}
          onChange={handleChange}
          label="Plazo de Tasa"
          inputProps={{
            name: "plazo",
            id: "plazo",
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>Diario</option>
          <option value={15}>Quincenal</option>
          <option value={30}>Mensual</option>
          <option value={60}>Bimestral</option>
          <option value={90}>Trimestral</option>
          <option value={120}>Cuatrimestral</option>
          <option value={180}>Semestral</option>
          <option value={360}>Anual</option>
        </Select>
      </FormControl>

      <div className="row mt-4">
        <div className="col">
          <FormControl component="fieldset">
            <FormLabel component="legend">Tipo Tasa</FormLabel>
            <RadioGroup
              aria-label="tipoTasa"
              name="tipoTasa"
              value={state.tipoTasa}
              onChange={handleChange}
            >
              <FormControlLabel
                value="efectiva"
                control={<Radio />}
                label="Efectiva"
              />
              <FormControlLabel
                value="nominal"
                control={<Radio />}
                label="Nominal"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="col">
          {/*Tasa Efectiva */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="tasa"
            label="Tasa"
            value={state.tasa}
            onChange={handleChange}
            name="tasa"
          />
        </div>
      </div>

      {/* Fecha de Descuento*/}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="mt-4">
          <FormLabel component="legend">Fecha de Descuento</FormLabel>
          <DatePicker
            autoOk
            value={state.fechaDescuento}
            views={["year", "month", "date"]}
            onChange={(e) => {
              setState({
                ...state,
                fechaDescuento: e,
              });
              console.log(e);
            }}
            format="dd/MM/yyyy"
            openTo="year"
          />
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default CalcFacturas;
