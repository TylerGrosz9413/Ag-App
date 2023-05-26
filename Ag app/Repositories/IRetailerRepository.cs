using Ag_app.Domain.Entities;

namespace Ag_app.Repositories
{
    public interface IRetailerRepository
    {
        Task<List<Retailer>> GetAllAsync();
        Task<Retailer?> GetByIdAsync(Guid id);
        Task<Retailer> CreateAsync(Retailer retailer);
        Task<Retailer?> UpdateAsync(Guid id, Retailer retailer);
        Task<Retailer?> DeleteAsync(Guid id);
    }
}
