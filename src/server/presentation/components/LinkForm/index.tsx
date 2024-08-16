import React from "react";
import { createLink } from "./actions";

const LinkForm = () => {
  return (
    <form id="linkForm" action={createLink}>
      <label>
        Link
        <input required type="text" name="uri" />
      </label>
      <br />
      {/* <label>
        Id
        <input required type="number" name="id" />
      </label>
      <br />
      <label>
        Description
        <input required type="text" name="description" />
      </label>
      <br />
      <label>
        Domain
        <select required name="domain">
          <option value={"multiqr.co"}>MultiQr.Co</option>
        </select>
      </label>
      <br />
      <label>
        Tipo de Link
        <select required name="accessType">
          <option value={"Permanente"}>Permanente</option>
          <option value={"Temporario"}>Temporario</option>
        </select>
      </label>
      <br />
      <label>
        Compartilhamento
        <select required name="redirectType">
          <option value={"Publico"}>Público</option>
          <option value={"Proprio"}>Próprio</option>
          <option value={"Compartilhado"}>Compartilhado</option>
        </select>
      </label> */}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LinkForm;
