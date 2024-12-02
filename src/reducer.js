/*export const initialState = {count: 0};

export function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return {count: 0}
        default:
            throw new Error();
    }
}*/
import { SET_LOADING, 
        SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH } from "./actions/listening";

export function reducer(data,action){
    switch(action.type){
        case SET_LOADING:
            return {...state,isLoading: true}
        case SET_STORIES:
            return {
                ...state,
                isLoading:false,
                hits:action.payload.data.hits,
                nbPages: action.payload.nbPages
            }
        case REMOVE_STORY:
            return{
                ...state,
                hits: state.hits.filter((story)=>story.objectID !== action.payload)
            }
        case HANDLE_SEARCH:
            return{
                ...state, query: action.payload, page:0
            }
        case HANDLE_PAGE:     
                if(action.payload === 'inc'){
                    let nextPage = state.page + 1;
                    if(nextPage > state.page + 1){
                        nextPage = 0;
                    }
                    return {...state, page: nextPage}
                }
                if(action.payload === 'dec'){
                    let prevPage = state.page + 1;
                    if(nextPage < 0){
                        prevPage = state.nbPages -1;
                    }
                    return {...state, page: prevPage}
                }
            default: 
                throw new Error(`no matching ${action.type} actopm type`)
    }
}

