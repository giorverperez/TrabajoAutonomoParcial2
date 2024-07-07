using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Estructuracion_Espacio.Models;

namespace Estructuracion_Espacio.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Espacio> Espacio { get; set; }
      


    }
}
