using Ag_app.Data;
using Ag_app.Domain.Entities;
using Ag_app.DTO;
using Ag_app.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ag_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Customer")]
    public class CustomerController : ControllerBase
    {
        private readonly AgDbContext dbContext;
        private readonly ICustomerRepository customerRepository;
        private readonly IMapper mapper;

        public CustomerController(AgDbContext dbContext, ICustomerRepository customerRepository, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.customerRepository = customerRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() 
        {
            // Get data from database
            var customerDomain = await customerRepository.GetAllAsync();

            // return DTOs
            return Ok(mapper.Map<List<CustomerDto>>(customerDomain));
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var customerDomain = await customerRepository.GetByIdAsync(id);
            if (customerDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<CustomerDto>(customerDomain));
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddCustomerDto addCustomerDto)
        {
            // map or convert from dto to domain model
            var customerDomain = mapper.Map<Customer>(addCustomerDto);
            // add to database
            customerDomain = await customerRepository.CreateAsync(customerDomain);

            var customerDto = mapper.Map<CustomerDto>(customerDomain);
            return CreatedAtAction(nameof(GetById), new { id = customerDto.Id }, customerDto);
            
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateCustomerDto updateCustomerDto)
        {
            var customerDomain = mapper.Map<Customer>(updateCustomerDto);
            customerDomain = await customerRepository.UpdateAsync(id, customerDomain);

            if (customerDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<CustomerDto>(customerDomain));
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute]Guid id)
        {
            var customerDomain = await customerRepository.DeleteAsync(id);
            if (customerDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<CustomerDto>(customerDomain));
        }

    }
}
