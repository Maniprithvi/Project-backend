const Razorpay = require('razorpay');

apiKey=process.env.API_KEY
apiSecret=process.env.API_SECRET

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;