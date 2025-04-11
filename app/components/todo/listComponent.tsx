import {useQuery} from "@tanstack/react-query";


function TodoListComponent () {

    // Queries
    const query = useQuery({
        queryKey: ['todos'],
        queryFn: async() => {

            //2초 딜레이
            await new Promise(resolve => setTimeout(resolve, 2000));

            return {msg: "Hello World"}
        }
    })

    const {isFetching, data, error } = query

    return (
        <div>
            <div className={'text-4xl'}>Todo List Component </div>
            <div className={'text-3xl bg-amber-600'}> {isFetching && <h1>Loading.........</h1>}</div>
        </div>
    )
}

export default TodoListComponent