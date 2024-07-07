using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Estructuracion_Espacio.Models
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
}
