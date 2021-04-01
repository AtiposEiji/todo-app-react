
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

// export const fetchTodos = async () => {
//        const url = "https://jsonplaceholder.typicode.com/todos";
//        const response = await fetch(url);
//        const data = await response.json();
//        setTodos(data);
//        for (let i = 0; i < data.length; i++) {
//            console.log(data[i].title);
//        }
//} 

export const PostToDoList = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: "1",
            id: "201",
            title: "delectus aut autem",
            completed: "false"
        })
    })
        .then(function (result) {
            return result.json();
        },
            (error) => {
                console.log(error);
            }
        )
}