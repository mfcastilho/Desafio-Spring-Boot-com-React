import "./styles.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";

const Registro = () => {
  //dados selecionado na tela anterior
  const { automatico } = useParams();
  const { planta } = useParams();
  const { correia } = useParams();
  const { tipo_afericao } = useParams();

  const navigate = useNavigate();

  type FormData = {
    kgmMin: string;
    kgmMax: string;
    thMin: string;
    thMax: string;
  };

  const [formData, setFormData] = useState<FormData>({
    kgmMin: "null",
    kgmMax: "null",
    thMin: "null",
    thMax: "null",
  });

  const handleCHange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = () =>
    navigate("/password"

    );

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container-title">REGISTRO SEM PESO</div>

        <div className="input-container">
          <div className="input-number-container">
            <h4>KGM/H MIN</h4>

            <input
              {...register("kgmMin", {
                required: "Campo Obrigatório",
              })}
              onChange={handleCHange}
              type="number"
              pattern="[0-9]+([,][0-9]+)?"
              step="any"
              id="input1"
              name="kgmMin"
              className="form-control"
              aria-describedby="passwordHelpInline"
            ></input>
            <small
              id="passwordHelpInline"
              className={
                errors.kgmMin?.message === undefined
                  ? `text-muted`
                  : `invalid-feedback d-block`
              }
            >
              {errors.kgmMin?.message === undefined
                ? "Valor maximo"
                : errors.kgmMin?.message}
            </small>
          </div>

          <div className="input-number-container">
            <h4>KGM/H MAX</h4>

            <input
              {...register("kgmMax", {
                required: "Campo Obrigatório",
              })}
              onChange={handleCHange}
              type="number"
              pattern="[0-9]+([,][0-9]+)?"
              step="any"
              id="input1"
              name="kgmMax"
              className="form-control"
              aria-describedby="passwordHelpInline"
            ></input>
            <small
              id="passwordHelpInline"
              className={
                errors.kgmMax?.message === undefined
                  ? `text-muted`
                  : `invalid-feedback d-block`
              }
            >
              {errors.kgmMax?.message === undefined
                ? "Valor maximo"
                : errors.kgmMax?.message}
            </small>
          </div>

          <div className="input-number-container">
            <h4>T/H MIN</h4>

            <input
              {...register("thMin", {
                required: "Campo Obrigatório",
              })}
              onChange={handleCHange}
              type="number"
              pattern="[0-9]+([,][0-9]+)?"
              step="any"
              id="input1"
              name="thMin"
              className="form-control"
              aria-describedby="passwordHelpInline"
            ></input>
            <small
              id="passwordHelpInline"
              className={
                errors.thMin?.message === undefined
                  ? `text-muted`
                  : `invalid-feedback d-block`
              }
            >
              {errors.thMin?.message === undefined
                ? "Valor maximo"
                : errors.thMin?.message}
            </small>
          </div>

          <div className="input-number-container">
            <h4>T/H MIN</h4>

            <input
              {...register("thMax", {
                required: "Campo Obrigatório",
              })}
              onChange={handleCHange}
              type="number"
              pattern="[0-9]+([,][0-9]+)?"
              step="any"
              id="input1"
              name="thMax"
              className="form-control"
              aria-describedby="passwordHelpInline"
            ></input>
            <small
              id="passwordHelpInline"
              className={
                errors.thMax?.message === undefined
                  ? `text-muted`
                  : `invalid-feedback d-block`
              }
            >
              {errors.thMax?.message === undefined
                ? "Valor maximo"
                : errors.thMax?.message}
            </small>
          </div>
        </div>

        <div className="home-actions-calib">
          <button type="submit" className="home-btn">
            PROXIMO
          </button>
          <div className="home-btn-icon">
            <ArrowIcon />
          </div>
        </div>
      </form>
    </>
  );
};

export default Registro;