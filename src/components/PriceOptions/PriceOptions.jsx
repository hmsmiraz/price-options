// import PropTypes from 'prop-types'
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free weights area access"
            ],
            "price": 29.99
          },
          {
            "id": 2,
            "name": "Silver Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free weights area access",
              "Access to fitness classes"
            ],
            "price": 49.99
          },
          {
            "id": 3,
            "name": "Gold Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free weights area access",
              "Access to fitness classes",
              "Personal trainer sessions (2/month)"
            ],
            "price": 69.99
          },
          {
            "id": 4,
            "name": "Platinum Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free weights area access",
              "Access to fitness classes",
              "Personal trainer sessions (4/month)",
              "Sauna and steam room access",
              "Towel service"
            ],
            "price": 89.99
          },
          {
            "id": 5,
            "name": "Student Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free weights area access"
            ],
            "price": 19.99
          },
          {
            "id": 6,
            "name": "Senior Membership",
            "features": [
              "Access to gym facilities",
              "Unlimited use of cardio equipment",
              "Locker room access",
              "Free weights area access",
              "Access to fitness classes",
              "Silver Sneakers program"
            ],
            "price": 24.99
          }
        ];  

  return (
    <div className='my-12 mx-2'>
        <h2 className='text-5xl'>Best Price In The Town</h2>
        <div className='grid md:grid-cols-3 gap-6'>
        {
            priceOptions.map(option => <PriceOption key={option.id}
            option={option}
            ></PriceOption>)
        }
        </div>
    </div>
  )
}

PriceOptions.propTypes = {

}

export default PriceOptions