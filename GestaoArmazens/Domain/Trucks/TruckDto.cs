using System;

namespace DDDSample1.Domain.Trucks
{
    public class TruckDto
    {
        public Guid Id { get; set; }
        public string color { get;  set; }

        public float length { get;  set; }

        public TruckDto(Guid Id, string color, float length)
        {
            this.Id = Id;
            this.color = color;
            this.length = length;
        }
    }
}