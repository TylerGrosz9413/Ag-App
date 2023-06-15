using Ag_app.Data;
using Ag_app.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Ag_app.Repositories
{
    public class SQLRequestRepository : IRequestRepository
    {
        private readonly AgDbContext dbContext;

        public SQLRequestRepository(AgDbContext dbContext)
        {
             this.dbContext = dbContext;
        }
        public async Task<Request> CreateAsync(Request request)
        {
            await dbContext.Requests.AddAsync(request);
            await dbContext.SaveChangesAsync();
            return request;
        }

        public async Task<Request?> DeleteAsync(Guid id)
        {
            var existingRequest = await dbContext.Requests.FirstOrDefaultAsync(r => r.Id == id);
            if (existingRequest == null)
            {
                return null;
            }

            dbContext.Requests.Remove(existingRequest);
            await dbContext.SaveChangesAsync();
            return existingRequest;
        }

        public async Task<List<Request>> GetAllAsync()
        {
            return await dbContext.Requests.ToListAsync();
        }

        public async Task<Request?> GetByIdAsync(Guid id)
        {
            return await dbContext.Requests
                .FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task<Request?> UpdateAsync(Guid id, Request request)
        {
            var existingRequest = await dbContext.Requests.FirstOrDefaultAsync(r => r.Id == id);
            if ( existingRequest == null)
            {
                return null;
            }

            existingRequest.Product = request.Product;
            await dbContext.SaveChangesAsync();
            return existingRequest;
        }
        public async Task<List<Request>> GetByCustomerIdAsync(Guid id)
        {
            return await dbContext.Requests.Where(r => r.CustomerId == id).ToListAsync();
            
        }
    }
}
