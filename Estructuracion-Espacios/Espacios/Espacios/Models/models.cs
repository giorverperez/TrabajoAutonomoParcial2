using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NeonTechAspNetCore.Models
{

    public class Espacio
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public int numero_parquedero { get; set; }


        [Required]
        public Boolean disponible { get; set; }
    }



    public class Usuario
    {
        [Key]
        public int UsuarioId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Nombre { get; set; }

        [Required]
        [MaxLength(50)]
        public string Apellido { get; set; }

        [Required]
        [MaxLength(10)]
        public string Cedula { get; set; }

        [Required]
        [MaxLength(200)]
        [EmailAddress]

        public string CorreoElectronico { get; set; }

        [Required]
        [MaxLength(200)]
        public string Direccion { get; set; }

        [Required]
        public DateTime FechaRegistro { get; set; }
    }




    public class Vehiculo
    {
        [Key]
        public int IdVehiculo { get; set; }

        [Required]
        public int UsuarioId { get; set; }

        [Required]
        [MaxLength(10)]
        public string Placa { get; set; }

        [Required]
        [MaxLength(50)]
        public string Marca { get; set; }

        [Required]
        [MaxLength(50)]
        public string Modelo { get; set; }

        // Relación con el usuario
        public Usuario Usuario { get; set; }
    }

    public class Parqueadero
    {
        public int Id { get; set; }
     
    }


}