import {useQuery} from "@tanstack/react-query";
import {testTodoList} from "~/api/todoAPI";
import {useSearchParams} from "react-router";


function TodoListComponent () {

    const [searchParams] = useSearchParams();

    const pageStr = searchParams.get("page") || "1"
    const sizeStr = searchParams.get("size") || "10"

    console.log("pageStr: ", pageStr," sizeStr: ", sizeStr)

    // Queries
    const query = useQuery({
        queryKey: ['todos'],
        queryFn: () => testTodoList(pageStr, sizeStr)
    })

    const {isFetching, data, error } = query

    return (
        <div>
            <div className={'text-4xl'}>Todo List Component </div>
            <div className={'text-3xl bg-amber-600'}> {isFetching && <h1>Loading.........</h1>}</div>

            {data &&  <div className={'text-2xl'}>List 출력</div>}

        </div>
    )
}

export default TodoListComponent