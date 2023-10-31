import "./FormValidation.css";

const FormValidation = (props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
      <label for="t1">
        What's your favorite fruit?<span aria-label="required">*</span>
      </label>
      <input
        type="text"
        id="t1"
        name="fruit"
        list="l1"
        required
        pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range"
      />
      <datalist id="l1">
        <option>Banana</option>
        <option>Cherry</option>
        <option>Apple</option>
        <option>Strawberry</option>
        <option>Lemon</option>
        <option>Orange</option>
      </datalist>
      <p>
        <label for="t2">What's your email address?</label>
        <input type="email" id="t2" name="email" />
      </p>
      <p>
        <label for="t3">Leave a short message</label>
        <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
      </p>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default FormValidation;
