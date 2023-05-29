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
            CreateMap<AddCustomerDto, Customer>().ReverseMap();
            CreateMap<UpdateCustomerDto, Customer>().ReverseMap();
            CreateMap<Retailer, RetailerDto>().ReverseMap();
            CreateMap<Request, RequestDto>().ReverseMap();
            CreateMap<AddRequestDto, Request>().ReverseMap();
            CreateMap<UpdateRequestDto, Request>().ReverseMap();
            CreateMap<Recommendation, RecommendationDto>().ReverseMap();
        }

    }
}
