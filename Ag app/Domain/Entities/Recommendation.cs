namespace Ag_app.Domain.Entities
{
    public class Recommendation
    {
        public Guid Id { get; set; }
        public Retailer Retailer { get; set; }
        public string Product { get; set; }
        public double Price { get; set; }
        public Request Request { get; set; }

    }
}
