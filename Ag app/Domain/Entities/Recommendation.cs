﻿namespace Ag_app.Domain.Entities
{
    public class Recommendation
    {
        public Guid Id { get; set; }
        public Guid RetailerId { get; set; }
        public string Product { get; set; }
        public double Price { get; set; }
        public Guid RequestId { get; set; }

    }
}
