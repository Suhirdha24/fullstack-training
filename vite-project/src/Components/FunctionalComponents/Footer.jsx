import "../../assets/css/footer.css";  // Ensure the correct relative path

function Footer() {
    function submit(){
        window.alert("Form submitted successfully");
    }

    return (
        <div className="Foot">
            <footer>
                <form>
                    <h1>Further Details</h1>
                    <label>Name : </label>
                    <input type="text" placeholder="Enter name"></input><br/>
                    <label>Email : </label>
                    <input type="email" placeholder="Enter mailid"></input><br/>
                </form>
                <button onClick={submit}>SUBMIT</button>
            </footer>
        </div>
    );
}

export default Footer;
