using Ag_app.Domain.Entities;
using Ag_app.DTO;
using AutoMapper;

namespace Ag_app.Mappings
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() 
        {
            CreateMap<Customer, CustomerDto>().ReverseMap();
            
        }

    }
}
