import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    products: [],
    mensProducts:[],
    searchTerm:"" ,
    filteredData:[]
}
const productSlice  = createSlice({
    name:"products",
    initialState,
    reducers : {
        setProducts(state , action) {
            state.products = action.payload
            
        },
        MensCollection(state,action){
            state.mensProducts = action.payload
            console.log(state.mensProducts)
        },
        setSearchTerm(state,action){
             state.searchTerm   = action.payload;
             state.filteredData = state.products.filter(product => 
                product.name.toLowerCase().includes(state.searchTerm.toLocaleLowerCase())
             )
        }
    },
})


export const {setProducts ,MensCollection , setSearchTerm} = productSlice.actions;
export default productSlice.reducer;
