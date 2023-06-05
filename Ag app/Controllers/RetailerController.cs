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
    [Authorize(Roles = "Retailer")]
    public class RetailerController : ControllerBase
    {
        private readonly AgDbContext dbContext;
        private readonly IRetailerRepository retailerRepository;
        private readonly IMapper mapper;

        public RetailerController(AgDbContext dbContext, IRetailerRepository retailerRepository, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.retailerRepository = retailerRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var retailerDomain = await retailerRepository.GetAllAsync();

            return Ok(mapper.Map<List<RetailerDto>>(retailerDomain));
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var retailerDomain = await retailerRepository.GetByIdAsync(id);

            if(retailerDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<RetailerDto>(retailerDomain));
        }

        [HttpPost]
        public async Task<IActionResult> Create(AddRetailerDto addRetailerDto)
        {
            var retailerDomain = mapper.Map<Retailer>(addRetailerDto);
            retailerDomain = await retailerRepository.CreateAsync(retailerDomain);
            var retailerDto = mapper.Map<RetailerDto>(retailerDomain);

            return CreatedAtAction(nameof(GetById), new {id = retailerDto.Id}, retailerDto);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateRetailerDto updateRetailerDto)
        {
            var retailerDomain = mapper.Map<Retailer>(updateRetailerDto);
            retailerDomain = await retailerRepository.UpdateAsync(id, retailerDomain);
            if (retailerDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<RetailerDto>(retailerDomain));
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var retailerDomain = await retailerRepository.DeleteAsync(id);
            if (retailerDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<RetailerDto>(retailerDomain));
        }

    }
}
