using Ag_app.Domain.Entities;

namespace Ag_app.Repositories
{
    public interface IRequestRepository
    {
        Task<List<Request>> GetAllAsync();
        Task<Request?> GetByIdAsync(Guid id);
        Task<Request> CreateAsync(Request request);
        Task<Request?> UpdateAsync(Guid id, Request request);
        Task<Request?> DeleteAsync(Guid id);
    }
}

