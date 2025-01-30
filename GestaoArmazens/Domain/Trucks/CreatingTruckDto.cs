using DDDSample1.Domain.Trucks;

namespace DDDSample1.Domain.Trucks
{
    public class CreatingTruckDto
    {
        public string color { get;  set; }

        public float length { get;   set; }


        public CreatingTruckDto(string color, float length)
        {
            this.color = color;
            this.length = length;
        }
    }
}