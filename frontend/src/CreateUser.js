function CreateUser() {

    return (
        <div>
            <h1>This is the Create User Page</h1>
            <button onClick={postData}></button>

        </div>
    );

    async function postData(e){
        console.log(e);
        try {


        } catch (e) {

        console.log("This is a test" + e)
        }
    }
} export default  CreateUser;



