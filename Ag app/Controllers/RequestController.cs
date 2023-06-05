using Ag_app.Data;
using Ag_app.Domain.Entities;
using Ag_app.DTO;
using Ag_app.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace Ag_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Customer")]
    public class RequestController : ControllerBase
    {
        private readonly AgDbContext dbContext;
        private readonly IRequestRepository requestRepository;
        private readonly IMapper mapper;

        public RequestController(AgDbContext dbContext, IRequestRepository requestRepository, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.requestRepository = requestRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var requestDomain = await requestRepository.GetAllAsync();

            return Ok(mapper.Map<List<RequestDto>>(requestDomain));
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var requestDomain = await requestRepository.GetByIdAsync(id);
            
            if (requestDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<RequestDto>(requestDomain));
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddRequestDto addRequestDto)
        {

            var requestDomain = mapper.Map<Request>(addRequestDto);
            requestDomain = await requestRepository.CreateAsync(requestDomain);

            var requestDto = mapper.Map<RequestDto>(requestDomain);

            return CreatedAtAction(nameof(GetById), new { id = requestDto.Id }, requestDto);
            
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateRequestDto updateRequestDto)
        {
            var requestDomain = mapper.Map<Request>(updateRequestDto);
            requestDomain = await requestRepository.UpdateAsync(id, requestDomain);
            if (requestDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<RequestDto>(requestDomain));
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var requestDomain = await requestRepository.DeleteAsync(id);
            if (requestDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<RequestDto>(requestDomain));
        }

    }
}
