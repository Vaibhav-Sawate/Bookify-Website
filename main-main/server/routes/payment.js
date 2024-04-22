require("dotenv/config")
const Payment = require("../models/payment");
const User = require("../models/user");

const Razorpay = require('razorpay');
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
});

const router = require("express").Router();
const clientURL = process.env.BASE_URL;

router.post('/checkout', async (req, res) => {
    if (!req.body.amount) {
        return res.status(500).send({ message: "Invalid Amount" });
    }
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };

    try {
        const order = await instance.orders.create(options);
        // res.status(200).send({ order });
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        res.status(400).send({ success: false, msg: error });
    }
})

router.post('/paymentVerification/:_id', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, } =
    req.body;
    const user=req.params
    const Payment_Info =await instance.orders.fetchPayments(razorpay_order_id)
    const amount = (Payment_Info.items[0].amount)/100;

    let expDate=new Date();

    if(amount===200){
        expDate.setDate(expDate.getDate() + 30)
    }else if(amount===600){
        expDate.setDate(expDate.getDate() + 90)
    }else if(amount===1200){
        expDate.setDate(expDate.getDate() + 180)
    }else if(amount===2400){
        expDate.setDate(expDate.getDate() + 365)
    }

    const options = {
        upsert: true,
        new: true,
      };

    await User.findOneAndUpdate(user,{expiryDate:expDate},options);

    await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
    });

    res.redirect(
        `${clientURL}paymentsuccess?reference=${razorpay_payment_id}`
    );

    // const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    //     req.body;

    // const body = razorpay_order_id + "|" + razorpay_payment_id;

    // const expectedSignature = crypto
    //     .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    //     .update(body.toString())
    //     .digest("hex");

    // const isAuthentic = expectedSignature === razorpay_signature;

    // if (isAuthentic) {
    //     // Database comes here

    //     await Payment.create({
    //         razorpay_order_id,
    //         razorpay_payment_id,
    //         razorpay_signature,
    //     });

    //     res.redirect(
    //         `${clientURL}paymentsuccess?reference=${razorpay_payment_id}`
    //     );
    // } else {
    //     res.status(400).json({
    //         success: false,
    //     });
    // }

});

module.exports = router;