
export const GetToDoList = () => {

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function (result) {
            return result.json();
        },
            (error) => {
                console.log(error);
            }
        )
}
