import Option from "../Option/Option";

const PriceOption = () => {
    const priceOptions = [
        {
            "id": 1,
            "optionName": "Basic Monthly",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker and shower access",
                "Free water refill station"
            ]
        },
        {
            "id": 2,
            "optionName": "Standard Monthly",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker and shower access",
                "Group fitness classes",
                "Sauna access"
            ]
        },
        {
            "id": 3,
            "optionName": "Premium Monthly",
            "price": 69.99,
            "features": [
                "All gym equipment access",
                "Locker and shower access",
                "Unlimited group classes",
                "Sauna and steam room access",
                "One personal training session"
            ]
        },
        {
            "id": 4,
            "optionName": "Basic Annual",
            "price": 299.99,
            "features": [
                "Access to gym equipment",
                "Locker and shower access",
                "Free water refill station"
            ]
        },
        {
            "id": 5,
            "optionName": "Standard Annual",
            "price": 499.99,
            "features": [
                "Access to gym equipment",
                "Locker and shower access",
                "Group fitness classes",
                "Sauna access",
                "Monthly guest pass"
            ]
        },
        {
            "id": 6,
            "optionName": "Premium Annual",
            "price": 699.99,
            "features": [
                "All gym equipment access",
                "Locker and shower access",
                "Unlimited group classes",
                "Sauna and steam room access",
                "Monthly personal training session",
                "Nutrition consultation",
                "Exclusive member events"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <Option key={option.id} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default PriceOption;