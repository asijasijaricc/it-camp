import Card from "./card";
import Card2 from "./card2";

const Class20 = () => {
  const additionalData = [
    {
      brandTitle: "New Brand 1",
      description: "This is another great product!",
      tekstic:
        "Track, monitor, and conquer your fitness goals with our Smart Fitness Tracker. From step counts to heart rate monitoring, this sleek device keeps you in sync with your health journey, offering real-time data and personalized insights for a fitter you.",
      reviews: 4.0,
      reviewsCount: 75,
      socialNetworkLinks: {
        fb: "https://www.facebook.com/newbrand1",
        twitter: "https://twitter.com/newbrand1",
        instagram: "https://www.instagram.com/newbrand1",
      },
      imgs: {
        blue: "new-blue-product.jpg",
        white: "new-white-product.jpg",
        grey: "new-grey-product.jpg",
      },
      sizes: ["m", "l", "xl"],
      price: 59.99,
    },
    {
      brandTitle: "New Brand 2",
      description: "Introducing our latest product!",
      tekstic:
        "Stay ahead in fitness with our Smart Fitness Tracker. With sleep analysis, call notifications, and a durable, waterproof design, it's your all-in-one wellness companion, ensuring you're connected and on track, no matter where your day takes you.",
      reviews: 4.8,
      reviewsCount: 120,
      socialNetworkLinks: {
        fb: "https://www.facebook.com/newbrand2",
        twitter: "https://twitter.com/newbrand2",
        instagram: "https://www.instagram.com/newbrand2",
      },
      imgs: {
        blue: "https://img.freepik.com/premium-vector/cosmetics-product-ads-blue-podium-with-background-clear-sky-with-clouds_63945-257.jpg",
        white:
          "https://i0.wp.com/blog.folksy.com/wp-content/uploads/2014/03/white-on-white-grey.jpg",
        grey: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AxLRy4oK-jyxjn8ri-KTtGbJyXCRLpAwvg&usqp=CAU",
      },
      sizes: ["s", "m", "l", "xl"],
      price: 69.99,
    },
  ];
  return (
    <div>
      {additionalData.map((item, index) => {
        return <Card2 key={index} data={item} />;
      })}
    </div>
  );
};

export default Class20;
