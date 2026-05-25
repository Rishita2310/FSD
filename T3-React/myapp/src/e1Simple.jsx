export default function Any1() {

    function handleChange(e) {
        document.getElementById("text").innerText =
        e.target.value;
    }

    function handleSubmit(e) {
        e.preventDefault();

        alert(e.target.txt.value);
    }

    function singleClick() {
        document.getElementById("msg").innerHTML =
        "<h3>You clicked once</h3>";
    }

    function doubleClick() {
        document.getElementById("msg").innerHTML =
        "<h2>You clicked twice</h2>";
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="txt"
                    onChange={handleChange}
                    style={{
                        padding: "10px",
                        margin: "10px"
                    }}
                />

                <br />

                <p id="text"></p>

                <button
                    type="submit"
                    style={{
                        padding: "10px",
                        backgroundColor: "green",
                        color: "white"
                    }}
                >
                    Submit
                </button>

            </form>

            <br />

            <button
                onClick={singleClick}
                onDoubleClick={doubleClick}
                style={{
                    padding: "10px",
                    backgroundColor: "blue",
                    color: "white"
                }}
            >
                Click Here
            </button>

            <div id="msg"></div>

        </div>
    )
}