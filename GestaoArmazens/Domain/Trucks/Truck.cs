using System;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Trucks
{
    public class Truck : Entity<TruckId>, IAggregateRoot
    {
        public string color { get; private set; }
        public float length { get; private set; }



        private Truck()
        {

        }
        public Truck(string color, float length)
        {
            this.Id = new TruckId(Guid.NewGuid());
            this.color = color;
            this.length = length;
        }

        public void ChangeColor(string color)
        {
            this.color = color;
        }

        public void ChangeLength(float length)
        {
            this.length = length;
        }
    }
}