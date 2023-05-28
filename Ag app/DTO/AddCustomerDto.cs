using System.ComponentModel.DataAnnotations;

namespace Ag_app.DTO
{
    public class AddCustomerDto
    {
        
        public string Name { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }

    }
}
