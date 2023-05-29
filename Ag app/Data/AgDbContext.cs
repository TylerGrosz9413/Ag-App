

using Ag_app.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Ag_app.Data
{
    public class AgDbContext : DbContext
    {
        public AgDbContext(DbContextOptions dbContextOptions): base(dbContextOptions)
        {

        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Retailer> Retailers { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<Recommendation> Recommendations { get; set;}

        



    }
}
