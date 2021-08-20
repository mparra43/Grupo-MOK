import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-modal';
import {uiCloseModal} from '../../actions/ui';
import {rentFilms} from "../../actions/films";
import {Link} from "react-router-dom";
import './styles/modal.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');


export const RentModal = () => {
    const {rentMovies} = useSelector(state => state.films);
    const {modalOpen} = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0)
    const [title, setTitle] = useState([])

    const addTotal = (value) => {
        console.log(value)
        setPrice(price + value.price);
        setTitle([...title, value.movies])
    }

    const closeModal = () => {
        // TODO: cerrar el modal
        dispatch(uiCloseModal());
    }


    const handleSubmitRent = () => {
        dispatch(rentFilms({
            total: price,
            movies: title
        }))
        closeModal();
    }


    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <div className="list-rent">
                <h3>Resumen de la compra </h3>
                <hr/>
                <table className="table-rent">
                    <tr>
                        <th>Selecionar</th>
                        <th>Película</th>
                        <th>Precio</th>
                    </tr>
                    {rentMovies.map((e) => (
                        <tr key={rentMovies.indexOf(e)}>
                            <td><input type="checkbox" onClick={() => {
                                addTotal(e)
                            }}/></td>
                            <td>{e.title}</td>
                            <td>{e.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>Total:</td>
                        <td> </td>
                        <td>${price}</td>
                    </tr>
                </table>
                <Link className="btn-m" to={`/login`}>
                    <button onClick={handleSubmitRent}>Pagar</button>
                </Link>
            </div>

        </Modal>
    )
}
