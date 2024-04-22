using Microsoft.EntityFrameworkCore;

namespace CRUDTarefaAPI.Models
{
    public class AppDBContext : DbContext
    {
        public DbSet<Tarefa> Terefas { get; set; }

        public AppDBContext(DbContextOptions<AppDBContext> options) : base (options)
        {
            
        }
    }
}
