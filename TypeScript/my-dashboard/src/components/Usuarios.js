import { gql } from '@apollo/client';
import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const GET_USUARIOS = gql`
  query GetUsuarios {
    usuarios {
      id
      nombre
      email
    }
  }
`;

export const CREATE_USUARIO = gql`
  mutation CreateUsuario($input: UsuarioInput!) {
    createUsuario(input: $input) {
      id
      nombre
      email
      contra
    }
  }
`;

export const DELETE_USUARIO = gql`
  mutation DeleteUsuario($id: ID!) {
    deleteUsuario(id: $id)
  }
`;

const Usuarios = () => {
  const { loading, error, data, refetch } = useQuery(GET_USUARIOS);
  const [createUsuario] = useMutation(CREATE_USUARIO);
  const [deleteUsuario] = useMutation(DELETE_USUARIO);
  const listRef = useRef();

  const handleAddUsuario = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Agregar Usuario',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Email">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Contraseña" type="password">',
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById('swal-input1').value;
        const email = document.getElementById('swal-input2').value;
        const contra = document.getElementById('swal-input3').value;
        return { nombre, email, contra };
      }
    });

    if (formValues) {
      try {
        await createUsuario({ variables: { input: formValues } });
        refetch(); // Refetch the query to update the list
        Swal.fire('¡Éxito!', 'Usuario agregado correctamente.', 'success');
      } catch (error) {
        Swal.fire('¡Error!', 'Hubo un problema al agregar el usuario.', 'error');
      }
    }
  };

  const handleDeleteUsuario = async (id) => {
    try {
      await deleteUsuario({ variables: { id } });
      refetch(); // Refetch the query to update the list
      Swal.fire('¡Éxito!', 'Usuario eliminado correctamente.', 'success');
    } catch (error) {
      Swal.fire('¡Error!', 'Hubo un problema al eliminar el usuario.', 'error');
    }
  };

  const generatePDF = () => {
    const input = listRef.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text('Usuarios', 10, 10);
      pdf.addImage(imgData, 'PNG', 10, 20);
      pdf.save('usuarios.pdf');
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="mb-4">Usuarios</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddUsuario}>
        Agregar Usuario
      </button>
      <button className="btn btn-secondary mb-3 ml-2" onClick={generatePDF}>
        Generar PDF
      </button>
      <div ref={listRef}>
        <ul className="list-group">
          {data.usuarios.map(usuario => (
            <li key={usuario.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>Nombre: {usuario.nombre}</h5>
                <p>Email: {usuario.email}</p>
              </div>
              <button className="btn btn-danger" onClick={() => handleDeleteUsuario(usuario.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Usuarios;