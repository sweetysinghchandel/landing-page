import "./form.css";
function Form() {
  return (
    <div class="form-container marginY-50">
      <form action="/action_page.php">
        {/* <label for="fname">First Name</label> */}
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Enter Your Email"
        ></input>
        <input  type="submit" value="Contact Me"></input>
      </form>
    </div>
  );
}
export default Form;
