namespace Ag_app.Domain.Entities
{
    public class Request
    {
        public Guid Id { get; set; }
        public Customer Customer { get; set; }
        public string Product { get; set; }
    }
}
