namespace Ag_app.Domain.Entities
{
    public class Retailer
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public List<Recommendation> Recommendations { get; set;}


    }
}
