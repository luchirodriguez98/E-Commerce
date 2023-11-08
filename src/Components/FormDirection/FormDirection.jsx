import { useContext } from 'react';
import { ContextShoppingCart } from '../../Context/Context';
import { Link } from 'react-router-dom';

function FormDirection() {
  
    const context = useContext(ContextShoppingCart)

    const handleFormChange = (event) =>{
        let inputName = event.target.name;
        let inputValue = event.target.value;

        context.setDirectionValue((prevDirection)=>({...prevDirection, [inputName] : inputValue}))
    }

    return(
        <form id="address-form">
            <label htmlFor="street">Calle:</label>
                <input required type="text" id="street" name="street" value={context.directionValue.street} onChange={handleFormChange} className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <label htmlFor="number">Numero:</label>
                <input required type="number" id="number" name="number" value={context.directionValue.number} onChange={handleFormChange} className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <label htmlFor="aditional">Planta - Puerta:</label>
                <input type="text" id="aditional" name="aditional" value={context.directionValue.aditional} onChange={handleFormChange} className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <label htmlFor="city">Ciudad:</label>
                <input required type="text" id="city" name="city" value={context.directionValue.city} onChange={handleFormChange}className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <label htmlFor="zipcode">Código Postal:</label>
                <input required type="number" id="zipcode" name="zipcode" value={context.directionValue.zipcode} onChange={handleFormChange} className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <Link to="/orders/last">
                <button onClick={()=>context.saveMyOrder()} className="w-40 h-10 p-1 mt-5 text-base bg-red-200 rounded-2xl">Guardar</button>
            </Link>
        </form>
    )
}

export {FormDirection}