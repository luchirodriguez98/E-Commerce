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
        <form id="address-form" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="street">Calle:</label>
                <input type="text" id="street" name="street" required value={context.directionValue.inputStreet} onChange={handleFormChange} className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <label htmlFor="number">Numero:</label>
                <input type="number" id="number" name="number" required value={context.directionValue.inputNumber} onChange={handleFormChange} className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <label htmlFor="aditional">Planta - Puerta:</label>
                <input type="text" id="aditional" name="aditional" value={context.directionValue.inputFloor} onChange={handleFormChange} className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <label htmlFor="city">Ciudad:</label>
                <input type="text" id="city" name="city" required value={context.directionValue.inputCity} onChange={handleFormChange}className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <label htmlFor="zipcode">Código Postal:</label>
                <input type="number" id="zipcode" name="zipcode" required value={context.directionValue.inputZipCode} onChange={handleFormChange} className='w-full h-10 p-1 border border-gray-300 rounded-md'/>
            <Link to="/orders/last">
                <button onClick={()=>context.saveMyOrder()} className="w-40 h-10 p-1 mt-5 text-base bg-red-200 rounded-2xl">Guardar</button>
            </Link>
        </form>
    )
}

export {FormDirection}