import PriceOption from "./PriceOption/PriceOption";

export default function PriceOptions() {
  const options = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 free personal training session per month",
        "Access during off-peak hours",
        "Weekly progress tracking",
        "Mobile app access for workout logs",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Locker room and shower access",
        "3 free personal training sessions per month",
        "Access to group classes",
        "Access to gym during peak and off-peak hours",
        "Discount on merchandise",
        "Nutritional guide and meal plan access",
        "Priority booking for classes",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 79.99,
      features: [
        "All Standard Plan features",
        "Unlimited personal training sessions",
        "One-on-one nutrition consultation",
        "Access to spa and sauna",
        "Access to private locker room",
        "Free guest passes (2 per month)",
        "Priority access to new equipment",
        "Monthly body composition analysis",
        "Customized workout plans",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-5xl text-center">The Best Price Of The Town</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {options.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
}
