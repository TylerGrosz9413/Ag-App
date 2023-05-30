namespace Ag_app.DTO
{
    public class AddRecommendationDto
    {
        public Guid RetailerId { get; set; }
        public string Product { get; set; }
        public double Price { get; set; }
        public Guid RequestId { get; set; }
    }
}
