export const signup = async ({ user }) => {

    const { fname, lname, email, mobile, password } = user;

    const response = await fetch(`${URL}/user/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname,
            lname,
            email,
            mobile,
            password
        })
    });
    const result = await response.json();
    console.log("user registred " + result);

    return result;
}