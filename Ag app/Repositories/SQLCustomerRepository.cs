using Ag_app.Data;
using Ag_app.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Ag_app.Repositories
{
    public class SQLCustomerRepository : ICustomerRepository
    {
        private readonly AgDbContext dbContext;

        public SQLCustomerRepository(AgDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<List<Customer>> CreateAsync(Customer customer)
        {
            await dbContext.Customers.AddAsync(customer);
            await dbContext.SaveChangesAsync();
            return new List<Customer> { customer };
        }

        public async Task<Customer?> DeleteAsync(Guid id)
        {
            var existingCustomer = await dbContext.Customers.FirstOrDefaultAsync(x => x.Id == id); //find customer with Id == id
            if (existingCustomer == null)
            {
                return null;
            }
            dbContext.Customers.Remove(existingCustomer);
            await dbContext.SaveChangesAsync();
            return existingCustomer;
        }

        public async Task<List<Customer>> GetAllAsync()
        {
            return await dbContext.Customers.ToListAsync();
        }

        public async Task<Customer?> GetByIdAsync(Guid id)
        {
            return await dbContext.Customers.FirstOrDefaultAsync();
        }

        public async Task<Customer?> UpdateAsync(Guid id, Customer customer)
        {
            var existingCustomer = dbContext.Customers.FirstOrDefault(x => x.Id == id);
            if (existingCustomer == null)
            {
                return null;
            }
            existingCustomer.Name = customer.Name;
            existingCustomer.Address = customer.Address;
            existingCustomer.PhoneNumber = customer.PhoneNumber;
            existingCustomer.Email = customer.Email;

            await dbContext.SaveChangesAsync();
            return existingCustomer;
        }
    }
}
