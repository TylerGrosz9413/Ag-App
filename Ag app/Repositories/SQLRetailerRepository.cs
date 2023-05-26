using Ag_app.Data;
using Ag_app.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Ag_app.Repositories
{
    public class SQLRetailerRepository : IRetailerRepository
    {
        private readonly AgDbContext dbContext;

        public SQLRetailerRepository(AgDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public  async Task<Retailer> CreateAsync(Retailer retailer)
        {
            await dbContext.AddAsync(retailer);
            await dbContext.SaveChangesAsync();
            return retailer;
        }

        public async Task<Retailer?> DeleteAsync(Guid id)
        {
            var existingRetailer = await dbContext.Retailers.FirstOrDefaultAsync(x => x.Id == id); //find retailer w/ ID of id
            if (existingRetailer == null)
            {
                return null;
            }

            dbContext.Retailers.Remove(existingRetailer);
            await dbContext.SaveChangesAsync();
            return existingRetailer;
        }

        public async Task<List<Retailer>> GetAllAsync()
        {
            return await dbContext.Retailers.ToListAsync();
        }

        public async Task<Retailer?> GetByIdAsync(Guid id)
        {
            return await dbContext.Retailers.FirstOrDefaultAsync(x => x.Id == id);

        }

        public async Task<Retailer?> UpdateAsync(Guid id, Retailer retailer)
        {
            var existingRetailer = await dbContext.Retailers.FirstOrDefaultAsync(x => x.Id == id);
            if ( existingRetailer == null)
            {
                return null;
            }

            existingRetailer.Name = retailer.Name;
            existingRetailer.Address = retailer.Address;
            existingRetailer.PhoneNumber = retailer.PhoneNumber;
            existingRetailer.Email = retailer.Email;
            
            await dbContext.SaveChangesAsync();
            return existingRetailer;
        }
    }
}
