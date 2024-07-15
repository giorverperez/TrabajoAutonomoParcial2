import { gql } from '@apollo/client';
import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const GET_VEHICULOS = gql`
  query GetVehiculos {
    vehiculos {
      id
      placa
      modelo
      color
    }
  }
`;

export const GET_USUARIOS = gql`
  query GetUsuarios {
    usuarios {
      id
      nombre
    }
  }
`;

export const CREATE_VEHICULO = gql`
  mutation CreateVehiculo($input: VehiculoInput!) {
    createVehiculo(input: $input) {
      id
      placa
      modelo
      color
      usuario {
        id
        nombre
      }
    }
  }
`;

const Vehiculos = () => {
  const { loading: loadingVehiculos, error: errorVehiculos, data: dataVehiculos, refetch: refetchVehiculos } = useQuery(GET_VEHICULOS);
  const { loading: loadingUsuarios, error: errorUsuarios, data: dataUsuarios } = useQuery(GET_USUARIOS);
  const [createVehiculo] = useMutation(CREATE_VEHICULO);
  const listRef = useRef();

  const handleAddVehiculo = async () => {
    if (!dataUsuarios) {
      Swal.fire('¡Error!', 'No se pudieron cargar los usuarios.', 'error');
      return;
    }

    const { value: formValues } = await Swal.fire({
      title: 'Agregar Vehículo',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Placa">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Modelo">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Color">' +
        '<select id="swal-input4" class="swal2-input">' +
        dataUsuarios.usuarios
          .filter(usuario => usuario.id) // Filtra usuarios con id no nulo
          .map(usuario => `<option value="${usuario.id}">${usuario.nombre}</option>`)
          .join('') +
        '</select>',
      focusConfirm: false,
      preConfirm: () => {
        const placa = document.getElementById('swal-input1').value;
        const modelo = document.getElementById('swal-input2').value;
        const color = document.getElementById('swal-input3').value;
        const usuario = document.getElementById('swal-input4').value;
        return { placa, modelo, color, usuario };
      }
    });

    if (formValues) {
      try {
        await createVehiculo({ variables: { input: formValues } });
        refetchVehiculos(); // Refetch the query to update the list
        Swal.fire('¡Éxito!', 'Vehículo agregado correctamente.', 'success');
      } catch (error) {
        Swal.fire('¡Error!', 'Hubo un problema al agregar el vehículo.', 'error');
      }
    }
  };

  const generatePDF = () => {
    const input = listRef.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text('Vehículos', 10, 10);
      pdf.addImage(imgData, 'PNG', 10, 20);
      pdf.save('vehiculos.pdf');
    });
  };

  if (loadingVehiculos || loadingUsuarios) return <p>Loading...</p>;
  if (errorVehiculos) return <p>Error: {errorVehiculos.message}</p>;
  if (errorUsuarios) return <p>Error: {errorUsuarios.message}</p>;

  return (
    <div>
      <h1 className="mb-4">Vehículos</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddVehiculo}>
        Agregar Vehículo
      </button>
      <button className="btn btn-secondary mb-3 ml-2" onClick={generatePDF}>
        Generar PDF
      </button>
      <div ref={listRef}>
        <ul className="list-group">
          {dataVehiculos.vehiculos.map(vehiculo => (
            <li key={vehiculo.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>Placa: {vehiculo.placa}</h5>
                <p>Modelo: {vehiculo.modelo}</p>
                <p>Color: {vehiculo.color}</p>
                <p>Usuario: {vehiculo.usuario ? vehiculo.usuario.nombre : 'Usuario Test'}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Vehiculos;