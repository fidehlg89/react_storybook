import "./FormValidation.css"

const SimpleFormValidation = (props) => {
  return (
    <form>
      <label for="choose">Would you prefer a banana or cherry?</label>
      <input id="choose" name="i-like" required />
      <button>Submit</button>
    </form>
  );
};

export default SimpleFormValidation
