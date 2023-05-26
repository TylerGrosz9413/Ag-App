using Ag_app.Domain.Entities;

namespace Ag_app.Repositories
{
    public interface IRecommendationRepository
    {
        Task<List<Recommendation>> GetAllAsync();
        Task<Recommendation?> GetByIdAsync(Guid id);
        Task<Recommendation> CreateAsync(Recommendation entity);
        Task<Recommendation?> UpdateAsync(Guid id, Recommendation entity);
        Task<Recommendation?> DeleteAsync(Guid id);
    }
}
