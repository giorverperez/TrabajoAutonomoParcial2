import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gql } from '@apollo/client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const GET_ESPACIOS = gql`
  query GetEspacios {
    espacios {
      id
      numero_parquedero
      disponible
    }
  }
`;

const CREATE_ESPACIO = gql`
  mutation CreateEspacio($input: EspacioInput!) {
    createEspacio(input: $input) {
      id
      numero_parquedero
      disponible
    }
  }
`;

const DELETE_ESPACIO = gql`
  mutation DeleteEspacio($id: ID!) {
    deleteEspacio(id: $id)
  }
`;

const Espacios = () => {
  const { loading, error, data, refetch } = useQuery(GET_ESPACIOS);
  const [createEspacio] = useMutation(CREATE_ESPACIO);
  const [deleteEspacio] = useMutation(DELETE_ESPACIO);
  const listRef = useRef();

  const handleAddEspacio = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Agregar Espacio',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Número de Parquedero">' +
        '<div>' +
        '<label><input type="radio" name="disponible" value="true" checked> Sí</label>' +
        '<label><input type="radio" name="disponible" value="false"> No</label>' +
        '</div>',
      focusConfirm: false,
      preConfirm: () => {
        const numero_parquedero = parseInt(document.getElementById('swal-input1').value, 10);
        const disponible = document.querySelector('input[name="disponible"]:checked').value === 'true';
        return { numero_parquedero, disponible };
      }
    });

    if (formValues) {
      try {
        await createEspacio({ variables: { input: formValues } });
        refetch(); // Refetch the query to update the list
        Swal.fire('¡Éxito!', 'Espacio agregado correctamente.', 'success');
      } catch (error) {
        Swal.fire('¡Error!', 'Hubo un problema al agregar el espacio.', 'error');
      }
    }
  };

  const handleDeleteEspacio = async (id) => {
    try {
      await deleteEspacio({ variables: { id } });
      refetch(); // Refetch the query to update the list
      Swal.fire('¡Éxito!', 'Espacio eliminado correctamente.', 'success');
    } catch (error) {
      Swal.fire('¡Error!', 'Hubo un problema al eliminar el espacio.', 'error');
    }
  };

  const generatePDF = () => {
    const input = listRef.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text('Espacios', 10, 10);
      pdf.addImage(imgData, 'PNG', 10, 20);
      pdf.save('espacios.pdf');
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="mb-4">Espacios</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddEspacio}>
        Agregar Espacio
      </button>
      <button className="btn btn-secondary mb-3 ml-2" onClick={generatePDF}>
        Generar PDF
      </button>
      <div ref={listRef}>
        <ul className="list-group">
          {data.espacios.map(espacio => (
            <li key={espacio.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>Número de Parquedero: {espacio.numero_parquedero}</h5>
                <p>Disponible: {espacio.disponible ? 'Sí' : 'No'}</p>
              </div>
              <button className="btn btn-danger" onClick={() => handleDeleteEspacio(espacio.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Espacios;