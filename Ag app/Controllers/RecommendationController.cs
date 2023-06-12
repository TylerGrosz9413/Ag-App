using Ag_app.Data;
using Ag_app.Domain.Entities;
using Ag_app.DTO;
using Ag_app.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Formats.Asn1;

namespace Ag_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecommendationController : ControllerBase
    {
        private readonly AgDbContext dbContext;
        private readonly IRecommendationRepository recommendationRepository;
        private readonly IMapper mapper;

        public RecommendationController(AgDbContext dbContext, IRecommendationRepository recommendationRepository, IMapper mapper)
        {
            this.dbContext = dbContext;
            this.recommendationRepository = recommendationRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        [Authorize(Roles = "Retailer, Customer")]
        public async Task<IActionResult> GetAll()
        {
            var recommendationDomain = await recommendationRepository.GetAllAsync();
            return Ok(mapper.Map<List<RecommendationDto>>(recommendationDomain));
        }

        [HttpGet]
        [Route("{id:Guid}")]
        [Authorize(Roles = "Retailer, Customer")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var recommendationDomain = await recommendationRepository.GetByIdAsync(id);
            if (recommendationDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<RecommendationDto>(recommendationDomain));
        }

        [HttpPost]
        [Authorize(Roles = "Retailer")]
        public async Task<IActionResult> Create([FromBody] AddRecommendationDto addRecommendationDto)
        {
            var recommendationDomain = mapper.Map<Recommendation>(addRecommendationDto);
            recommendationDomain = await recommendationRepository.CreateAsync(recommendationDomain);

            var recommendationDto = mapper.Map<RecommendationDto>(recommendationDomain);

            return CreatedAtAction(nameof(GetById), new {id = recommendationDto.Id}, recommendationDto);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        [Authorize(Roles = "Retailer")]
        public async Task<IActionResult> Update([FromRoute] Guid id, [FromBody] UpdateRecommendationDto updateRecommendationDto)
        {
            var recommendationDomain = mapper.Map<Recommendation>(updateRecommendationDto);
            recommendationDomain = await recommendationRepository.UpdateAsync(id, recommendationDomain);
            if (recommendationDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<RecommendationDto>(recommendationDomain));
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        [Authorize(Roles = "Retailer")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var recommendationDomain = await recommendationRepository.DeleteAsync(id);
            if (recommendationDomain == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<RecommendationDto>(recommendationDomain));
        }

    }
}
