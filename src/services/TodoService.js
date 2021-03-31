
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

    //     const fetchTodos = async () => {
    //        const url = "https://jsonplaceholder.typicode.com/todos";
    //        const response = await fetch(url);
    //        const data = await response.json();
    //        setTodos(data);
    //        for (let i = 0; i < data.length; i++) {
    //            console.log(data[i].title);
    //        }
    //} 