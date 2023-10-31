import "./FormValidation.css";

const FormValidation = (props) => {
  return (
    <form onSubmit={e=>e.preventDefault()}>
      <div>
        <label for="choose">Would you prefer a banana or a cherry?</label>
        <input
          type="text"
          id="choose"
          name="i-like"
          required
          minlength="6"
          maxlength="6"
        />
      </div>
      <div>
        <label for="number">How many would you like?</label>
        <input
          type="number"
          id="number"
          name="amount"
          defaultValue="1"
          min="1"
          max="10"
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormValidation;
