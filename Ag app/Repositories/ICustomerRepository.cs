using Ag_app.Domain.Entities;

namespace Ag_app.Repositories
{
    public interface ICustomerRepository
    {

        Task<List<Customer>> GetAllAsync();

        Task<Customer?> GetByIdAsync(Guid id);
        Task<Customer> CreateAsync(Customer customer);
        Task<Customer?> UpdateAsync(Guid id, Customer customer);
        Task<Customer?> DeleteAsync(Guid id);

    }
}
