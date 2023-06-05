using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Ag_app.Data
{
    public class AgAuthDbContext: IdentityDbContext
    {
        public AgAuthDbContext(DbContextOptions<AgAuthDbContext> options) : base(options)
        {
                
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var customerRoleId = "e2c97106-2ace-4f41-80a8-5e3d13630e33";
            var retailerRoleId = "d43cc4ca-3fa7-4bb7-92ff-4b27aeb1425b";

            var roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Id = customerRoleId,
                    ConcurrencyStamp = customerRoleId,
                    Name = "Customer",
                    NormalizedName = "Customer".ToUpper()
                },
                new IdentityRole
                {
                    Id = retailerRoleId,
                    ConcurrencyStamp = retailerRoleId,
                    Name = "Retailer",
                    NormalizedName = "Retailer".ToUpper()
                }
            };

            builder.Entity<IdentityRole>().HasData(roles);

        }

    }
}
