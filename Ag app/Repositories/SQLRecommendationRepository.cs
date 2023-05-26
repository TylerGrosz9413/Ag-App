using Ag_app.Data;
using Ag_app.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Ag_app.Repositories
{
    public class SQLRecommendationRepository : IRecommendationRepository
    {
        private readonly AgDbContext dbContext;

        public SQLRecommendationRepository(AgDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<Recommendation> CreateAsync(Recommendation entity)
        {
            await dbContext.Recommendations.AddAsync(entity);
            await dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task<Recommendation?> DeleteAsync(Guid id)
        {
            var existingRecommendation = await dbContext.Recommendations.FirstOrDefaultAsync(x => x.Id == id);
            if (existingRecommendation == null)
            {
                return null;
            }

            dbContext.Recommendations.Remove(existingRecommendation);
            await dbContext.SaveChangesAsync();
            return existingRecommendation;

        }

        public async Task<List<Recommendation>> GetAllAsync()
        {
            return await dbContext.Recommendations.ToListAsync();
        }

        public async Task<Recommendation?> GetByIdAsync(Guid id)
        {
            return await dbContext.Recommendations.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Recommendation?> UpdateAsync(Guid id, Recommendation entity)
        {
            var existingRecommendation = await dbContext.Recommendations.FirstOrDefaultAsync(x => x.Id==id);
            if (existingRecommendation == null)
            {
                return null;
            }

            existingRecommendation.Product = entity.Product;
            existingRecommendation.Price = entity.Price;
            await dbContext.SaveChangesAsync();
            return existingRecommendation;
        }
    }
}
