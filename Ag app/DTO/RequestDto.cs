﻿using Ag_app.Domain.Entities;

namespace Ag_app.DTO
{
    public class RequestDto
    {
        public Guid Id { get; set; }
        public Guid CustomerId { get; set; }
        public string Product { get; set; }
        

    }
}
